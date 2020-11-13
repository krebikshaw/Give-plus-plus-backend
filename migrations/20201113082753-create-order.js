'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_number: {
        type: Sequelize.INTEGER
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      client_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total_quantity: {
        type: Sequelize.INTEGER
      },
      shipping: {
        type: Sequelize.INTEGER
      },
      total_amount: {
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      client_address: {
        type: Sequelize.STRING
      },
      client_email: {
        type: Sequelize.STRING
      },
      is_paid: {
        type: Sequelize.INTEGER
      },
      is_sent: {
        type: Sequelize.BOOLEAN
      },
      is_completed: {
        type: Sequelize.INTEGER
      },
      is_refunded: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('orders');
  }
};