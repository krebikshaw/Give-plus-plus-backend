'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Client01',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: '',
        is_admin: 0,
        is_vendor: 0,
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Client02',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: '',
        is_admin: 0,
        is_vendor: 0,
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Seller01',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Seller01',
        email: 'seller01@gmail.com',
        address: '台北市二手區交易路平台巷1號',
        is_admin: 0,
        is_vendor: 1,
        announcement: '便宜賣噢',
        account: '1234-5678-9012',
        socialmedia_id: '123456789',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url: 'https://gg.png',
        banner_url: 'https://bb.png',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Seller02',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Seller02',
        email: 'seller02@gmail.com',
        address: '台北市二手區交易路平台巷2號',
        is_admin: 0,
        is_vendor: 1,
        announcement: '笑了',
        account: '1234-5678-9012',
        socialmedia_id: '123456789',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url: 'https://gg.png',
        banner_url: 'https://bb.png',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Seller03',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Seller02停權',
        email: 'seller02@gmail.com',
        address: '台北市二手區交易路平台巷2號',
        is_admin: 0,
        is_vendor: 1,
        announcement: '我被停權了',
        account: '1234-5678-9012',
        socialmedia_id: '123456789',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url: 'https://gg.png',
        banner_url: 'https://bb.png',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Admin01',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Admin01',
        is_admin: 1,
        is_vendor: 0,
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
