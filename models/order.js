'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User);
      Order.hasMany(models.Order_items);
    }
  };
  Order.init({
    Order_number: DataTypes.INTEGER,
    total_quantity: DataTypes.INTEGER,
    shipping: DataTypes.INTEGER,
    total_amount: DataTypes.INTEGER,
    content: DataTypes.STRING,
    client_address: DataTypes.STRING,
    client_email: DataTypes.STRING,
    is_paid: DataTypes.INTEGER,
    is_sent: DataTypes.BOOLEAN,
    is_completed: DataTypes.INTEGER,
    is_refunded: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};