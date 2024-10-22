const Sequelize = require("sequelize");
const { DataTypes} = require('sequelize');
const db = require("../config/dbConfig")
const Seller = require("./sellers.js");

class Product extends Sequelize.Model {}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  offer_price: {
    type: DataTypes.INTEGER,
    allowNull:true
  },
  on_offer: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seller_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Seller,
      key: 'id',
    },
  },
  approval_status: {
    type: DataTypes.ENUM({
      values: ["pendiente", "aprobado", "rechazado"],
    }),
    defaultValue: "pendiente",
  },
  category: {
    type: DataTypes.ENUM({
      values: ["pendiente", "aprobado", "rechazado"],
    }),
    allowNull:false,
  },
  image_url: {
    type: DataTypes.TEXT,
  },
  creation_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize:db,
  modelName: 'Product',
  tableName: 'products',
});

module.exports = Product;
