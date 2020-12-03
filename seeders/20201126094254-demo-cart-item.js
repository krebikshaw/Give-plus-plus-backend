'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cart_items', [
      {
        ProductId: 1,
        UserId: 3,
        CartId: 1,
        product_quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductId: 5,
        UserId: 4,
        CartId: 1,
        product_quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductId: 8,
        UserId: 5,
        CartId: 1,
        product_quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cart_items', null, {});
  },
};
