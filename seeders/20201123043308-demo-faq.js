'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Faqs', [
      {
        faqCategoryId: '1',
        question: '請問可以刷信用卡嗎？',
        answer: '可以哦，歡迎刷卡。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        faqCategoryId: '1',
        question: '我忘記密碼怎麼辦？',
        answer: '可以來信聯絡我們哦。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        faqCategoryId: '1',
        question: '請問該怎麼成未賣家？',
        answer: '可以在個人頁面點選成為賣家來申請哦！',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Faqs', null, {});
  },
};
