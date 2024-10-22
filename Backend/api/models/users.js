const Sequelize = require("sequelize");
const { DataTypes} = require('sequelize');
const db = require("../config/dbConfig")
const bcrypt = require("bcrypt")

class User  extends Sequelize.Model{
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  async validatePassword(password) {
    if (this.salt && this.password) {
      const hash = await this.hash(password, this.salt);
      return hash === this.password;
    }
    return;
  }

}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  token: {
    type: DataTypes.STRING(1024),
    allowNull: true,
  },
  type_user: {
    type: DataTypes.ENUM({
      values: ["client", "seller", "admin"],
    }),
    allowNull:false,
  },
  confirmed_account: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  registration_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize : db ,
  modelName: 'User',
  tableName: 'users',
});

User.beforeCreate(async (user) => {
  try {
    const salt = await bcrypt.genSalt(10);
    user.salt = salt;
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  } catch (error) {
    throw new Error("Hashing error");
  }
});

const hashPasswordHook = async (user) => {
  try {
    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await User.findByPk(user.id);
    if (existingUser) {
      // Si el usuario existe, aplicar el hash a la contraseña
      const salt = await bcrypt.genSalt(10);
      user.salt = salt;
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
    }
  } catch (error) {
    throw new Error("error en el hashing");
  }
};

User.addHook("beforeSave", "hashPasswordBeforeSave", hashPasswordHook);

module.exports = User;

