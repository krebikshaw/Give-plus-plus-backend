'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mails', [
      {
        name: '小明',
        email: 'littlemin@test.com',
        phone: '0912-345-678',
        content: '請問這個平台是免手續費的嗎？',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '小花',
        email: 'flower@test.com',
        phone: '0912-345-678',
        content: '我忘記密碼了，該怎麼辦？',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: '小葉',
        email: 'small-leaf@test.com',
        phone: '0912-345-678',
        content: '這麼棒的平台，有考慮接收投資入股嗎？',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mails', null, {});
  },
};
