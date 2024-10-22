const Sequelize = require("sequelize");
const { DataTypes} = require('sequelize');
const db = require("../config/dbConfig")
const User = require("./users.js");

class Admin extends Sequelize.Model {}

Admin.init({
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
}, {
  sequelize:db,
  modelName: 'Admin',
  tableName: 'admins',
});

module.exports = Admin;
