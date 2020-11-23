"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Product_category);
      Product.hasMany(models.Order_items);
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      picture_url: DataTypes.STRING,
      info: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      delivery: DataTypes.INTEGER,
      delivery_location: DataTypes.VARCHAR,
      delivery_time: DataTypes.DATE,
      payment_method: DataTypes.INTEGER,
      remark: DataTypes.TEXT,
      status: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Product",
      paranoid: true,
    }
  );
  return Product;
};
