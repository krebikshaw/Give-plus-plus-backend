'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Client01',
        password: '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: '',
        is_admin: 0,
        is_vender: 0,
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Seller01',
        password: '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Seller01',
        email: 'seller01@gmail.com',
        address: '台北市二手區交易路平台巷1號',
        is_admin: 0,
        is_vender: 1,
        announcement: '便宜賣噢',
        account: '1234-5678-9012',
        socialmedia_id: '123456789',
        birthday: '2020/12/32',
        id_card_no: 'A121212121',
        avatar_url: 'https://gg.png',
        banner_url: 'https://bb.png',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Admin01',
        password: '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Admin01',
        is_admin: 1,
        is_vender: 0,
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
