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
        avatar_url: 'https://i.pinimg.com/originals/94/80/43/9480433552674e1e3e21c673ba68e15b.png',
        banner_url: 'https://i.pinimg.com/originals/00/7c/c5/007cc53f768f4b3bda306697648758e3.png',
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
        avatar_url: 'https://i.pinimg.com/originals/dd/d6/0f/ddd60f48aa66526626621ccba1305c64.jpg',
        banner_url: 'https://i.pinimg.com/originals/f6/f2/60/f6f260e3e8871f8960a21b9acdb79555.jpg',
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
        avatar_url: 'https://i.pinimg.com/originals/aa/36/e3/aa36e31e8f310864fd90a7ec43a12bf4.jpg',
        banner_url: 'https://i.pinimg.com/originals/6f/cc/58/6fcc58f245505c1405ace466544cb398.jpg',
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
        avatar_url: 'https://i.pinimg.com/originals/d9/dd/3e/d9dd3e6173549165f227d67e9b5774f3.jpg',
        banner_url: 'https://i.pinimg.com/originals/dc/b8/5f/dcb85f36678753d9687bc20d75d967be.png',
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
        avatar_url: 'https://i.pinimg.com/originals/66/46/4e/66464eaeccd56c5facdab50fe9c88167.png',
        banner_url: 'https://i.pinimg.com/originals/d0/41/57/d04157e6da8531502c022fd403db3780.png',
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
        avatar_url: 'https://i.pinimg.com/originals/ef/8a/f6/ef8af60e608e363b9e57259468078ad4.jpg',
        banner_url: 'https://i.pinimg.com/originals/56/67/c5/5667c5f16a1539f2183c9232a18f0135.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
