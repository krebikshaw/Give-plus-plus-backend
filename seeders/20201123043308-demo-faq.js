'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Faqs', [
      {
        faqCategoryId: '1',
        question: '請問 Give++ 平台是完全免費的嗎？',
        answer: '是的，我們是完全免費的平台，歡迎大家一起加入。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        faqCategoryId: '1',
        question: '請問如何在平台上販售商品？',
        answer:
          '只要在個人頁面點選成為賣家，填寫出貨相關資料，就可以開通賣家功能了哦！',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        faqCategoryId: '1',
        question: '請問如何查詢商品寄送狀態？',
        answer: '在訂單詳細頁面就可以查詢物品的寄送狀態哦。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        faqCategoryId: '2',
        question: '請問如何取消我的訂單？',
        answer:
          '在訂單詳細頁面上點選取消訂單，就可以完成取消了，但是取消要記得在賣家把商品寄出前哦。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        faqCategoryId: '2',
        question: '下錯訂單了該怎麼處理？',
        answer:
          '可以在商品詳細頁面點選取消訂單，或是等到收到商品後再進行退貨。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        faqCategoryId: '2',
        question: '下訂之後，多久可以收到物品？',
        answer:
          '我們平台的賣家一般會在一週內將商品寄出，實際出貨時間依賣家而有所不同哦。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        faqCategoryId: '3',
        question: '請問可以使用哪些方式付款？',
        answer:
          '目前我們只開放面交和轉帳，之後會陸續開發超商取貨付款和信用卡付款，敬請期待~',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        faqCategoryId: '3',
        question: '收到的貨品跟賣家商品頁面描述上的不同，該怎麼處理？',
        answer: '可以先聯繫賣家詢問，如果有交易糾紛則可向平台反應。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        faqCategoryId: '3',
        question: '請問可以使用分期付款嗎？',
        answer:
          '我們平台目前還沒開發分期付款的功能，未來會再評估，若有開放會第一時間讓所有用戶知道的~',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        faqCategoryId: '4',
        question: '我忘記帳號密碼了該怎麼辦？',
        answer: '不用擔心哦，請來信或來電與我們聯繫，將由專人為您處理。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        faqCategoryId: '4',
        question: '請問一個 Email 電子信箱可以註冊幾個帳號？',
        answer: '目前沒有特別限制，可以盡情註冊。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        faqCategoryId: '4',
        question: '我的帳號為什麼被停權了，該怎麼處理或申述？',
        answer:
          '通常被停權是因為違反了本站的使用者條款，如果您認為判定上有爭議，可以直接來信和我們聯絡哦。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Faqs', null, {});
  },
};
