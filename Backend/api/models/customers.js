const Sequelize = require("sequelize");
const { DataTypes} = require('sequelize');
const db = require("../config/dbConfig")
const User = require("./users.js");


class Customer extends Sequelize.Model {}

Customer.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: User,
      key: 'id',
    },
  },
  is_enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true
  },
  payment_preference: {
    type: DataTypes.TEXT,
    allowNull: true
  },
}, {
  sequelize: db,
  modelName: 'Customer',
  tableName: 'customers',
});

module.exports = Customer;



