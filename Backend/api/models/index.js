const User = require("./users")
const Customer = require("./customers")
const Seller = require("./sellers")
const Admin = require("./admin")
const OrderDetail = require("./orderDetails")
const Order = require("./orders")
const Payment = require("./payments")
const Product = require("./products")

// Relaciones entre las tablas

User.hasOne(Customer, { foreignKey: 'user_id' });
Customer.belongsTo(User, { foreignKey: 'user_id' });

User.hasOne(Seller, { foreignKey: 'user_id' });
Seller.belongsTo(User, { foreignKey: 'user_id' });

User.hasOne(Admin, { foreignKey: 'user_id' });
Admin.belongsTo(User, { foreignKey: 'user_id' });

Seller.hasMany(Product, { foreignKey: 'seller_id' });
Product.belongsTo(Seller, { foreignKey: 'seller_id' });

Customer.hasMany(Order, { foreignKey: 'client_id' });
Order.belongsTo(Customer, { foreignKey: 'client_id' });

Order.hasMany(OrderDetail, { foreignKey: 'order_id' });
OrderDetail.belongsTo(Order, { foreignKey: 'order_id' });

OrderDetail.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(OrderDetail, { foreignKey: 'product_id' });

Order.hasOne(Payment, { foreignKey: 'order_id' });
Payment.belongsTo(Order, { foreignKey: 'order_id' });


module.exports ={ User, Customer, Seller, Admin,OrderDetail,Order, Payment, Product};
