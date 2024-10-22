const Sequelize = require("sequelize");
const { DataTypes} = require('sequelize');
const db = require("../config/dbConfig")
const Customer = require("./customers.js");

class Order extends Sequelize.Model {}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  client_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: 'id',
    },
  },
  order_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  state: {
    type: DataTypes.ENUM({
      values: ["pendiente", "pagada", "enviada", "entregada", "cancelada"]
    },
    ),
    defaultValue: "pendiente",
  },
  total: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize:db,
  modelName: 'Order',
  tableName: 'orders',
});

module.exports = Order;
