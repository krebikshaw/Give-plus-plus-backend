'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rules', [
      {
        rule: '使用者條款',
        content: '請當個有禮貌的使用者。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rule: '賣家條款',
        content: '請不要賣不合法的商品。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        rule: '網站聲明',
        content: '本網站僅為交易平台，個別賣家之行為不代表本網站法律責任。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rules', null, {});
  },
};
