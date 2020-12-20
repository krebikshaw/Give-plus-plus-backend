"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Orders", [
      {
        order_number: "202012031234",
        seller_id: 3,
        seller_name: "Seller01",
        seller_email: "seller01@gmail.com",
        seller_phone: "0912121212",
        seller_address: "台北市二手區交易路平台巷1號",
        client_id: 1,
        client_name: "Client02",
        client_email: "www@gmail.com",
        client_phone: "0912121212",
        client_address: "台北市二手區交易路平台巷2號",
        total_quantity: 1,
        shipping: "面交",
        total_amount: 20000,
        cancelReason: "面交時付款",
        is_paid: 0,
        is_sent: 0,
        is_canceled: 0,
        is_completed: 0,
        is_refunded: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        deletedAt: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Orders", null, {});
  },
};
