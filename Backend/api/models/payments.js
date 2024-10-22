const Sequelize = require("sequelize");
const { DataTypes} = require('sequelize');
const db = require("../config/dbConfig")
const Order = require("./orders.js");


class Payment extends Sequelize.Model {}

Payment.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_id: {
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: Order,
      key: 'id',
    },
  },
  payment_method: {
    type: DataTypes.TEXT,
  },
  payment_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  payment_amount: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize:db,
  modelName: 'Payment',
  tableName: 'payments',
});

module.exports = Payment;
