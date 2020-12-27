'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Product_categories', [
      {
        id: 1,
        name: '生活',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: '3C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: '休閒',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: '服飾',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: '美妝',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: '票劵',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: '書籍',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: '寵物',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: '烹飪',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: '運動',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        name: '遊戲',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
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
