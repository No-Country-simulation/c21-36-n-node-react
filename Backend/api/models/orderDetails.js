const Sequelize = require("sequelize");
const { DataTypes} = require('sequelize');
const db = require("../config/dbConfig")
const Order = require("./orders.js");
const Product = require("./products.js");

class OrderDetail extends Sequelize.Model {}

OrderDetail.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: 'id',
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id',
    },
  },
  description: {
    type: DataTypes.TEXT,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize:db,
  modelName: 'OrderDetail',
  tableName: 'order_details',
});

module.exports = OrderDetail;
