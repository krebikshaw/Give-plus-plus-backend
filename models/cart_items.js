'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart_items.belongsTo(models.Cart);
      Cart_items.belongsTo(models.User);
      Cart_items.belongsTo(models.Product);
    }
  };
  Cart_items.init({
    is_empty: DataTypes.BOOLEAN,
    product_name: DataTypes.STRING,
    product_quantity: DataTypes.INTEGER,
    product_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart_items',
  });
  return Cart_items;
};