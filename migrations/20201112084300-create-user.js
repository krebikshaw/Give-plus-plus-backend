'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nickname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING
      },
      is_admin: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      is_vender: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      announcment: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      account: {
        allowNull: true,
        type: Sequelize.STRING
      },
      socialmedia_id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      birthday: {
        allowNull: true,
        type: Sequelize.DATE
      },
      id_card_no: {
        allowNull: true,
        type: Sequelize.STRING
      },
      avatar_url: {
        allowNull: true,
        type: Sequelize.STRING
      },
      banner_url: {
        allowNull: true,
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Users');
  }
};