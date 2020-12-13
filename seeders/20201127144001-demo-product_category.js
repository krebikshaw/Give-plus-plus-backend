'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Product_categories', [
      {
        name: '生活',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '3C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '休閒',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '服飾',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '美妝',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '票劵',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '書籍',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '寵物',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '烹飪',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '運動',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '綜合',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '其他',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product_categories', null, {});
  },
};
