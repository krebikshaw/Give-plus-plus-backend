'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cart_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      cartId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      is_empty: {
        type: Sequelize.BOOLEAN
      },
      product_name: {
        type: Sequelize.STRING
      },
      product_quantity: {
        type: Sequelize.INTEGER
      },
      product_price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cart_items');
  }
};