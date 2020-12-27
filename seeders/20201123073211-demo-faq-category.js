'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Faq_categories', [
      {
        id: 1,
        name: '常見問題',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: '訂單相關',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: '交易相關',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: '帳號相關',
        createdAt: new Date(),
        updatedAt: new Date(),
      },         
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Faq_categories', null, {});
  },
};
