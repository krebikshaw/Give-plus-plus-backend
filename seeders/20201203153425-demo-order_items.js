"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Order_items", [
      {
        ProductId: "1",
        OrderId: "1",
        product_name: "棒棒糖-待審查",
        product_category_id: "1",
        product_picture_url: "https://i.imgur.com/05CXT8U.jpg",
        product_info: "棒棒棒",
        product_quantity: 1,
        product_price: 20000,
        product_delivery: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Order_items", null, {});
  },
};
