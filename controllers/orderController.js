const db = require("../models");
const Order = db.Order;
const { Op } = require("sequelize");
const { Product, User, Order_items, Cart_items } = db;
const { sequelize } = require("../models");

const noOrderMessage = { ok: 0, message: "there is no order" };
const failDeleteOrderItems = { ok: 0, message: "fail to delete OrderItems" };
const failToCancelOrder = { ok: 0, message: "fail to cancel Order" };
const failToCompleteOrder = { ok: 0, message: "fail to complete Order" };
const failToSendOrder = { ok: 0, message: "fail to send Order" };
const failToPaidOrder = { ok: 0, message: "fail to paid Order" };
const failToCreateNewOrder = { ok: 0, message: "fail to create new Order" };
const successMessage = { ok: 1, message: "success" };

// 計算訂單總金額
function countTotalAmount(productsData) {
  let total = 0;
  productsData.forEach(
    (productData) =>
      (total += productData.product_price * productData.product_quantity)
  );
  return total;
}

// 計算訂單編號
function generateOrderNumber() {
  const date = new Date();
  const orderNumber =
    date.getFullYear().toString() +
    (date.getMonth() + 1).toString() +
    ((date.getDate() < 10 ? "0" : "") + date.getDate()).toString() +
    Math.round(Math.random() * 10000).toString();
  return orderNumber;
}

const orderController = {
  // 取得全部訂單列表
  getAllOrders: (req, res) => {
    Order.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    })
      .then((orders) => {
        if (!orders || orders.length == 0) {
          return res.status(400).json(noOrderMessage);
        }
        return res.status(200).json({ ok: 1, data: orders });
      })
      .catch((res, err) => res.status(400).json(noOrderMessage));
  },
  // 取得單一訂單明細
  getOneOrder: (req, res) => {
    Order.findByPk(req.params.id).then((order) => {
      if (!order) return res.status(400).json(noOrderMessage);
      Order_items.findAll({
        where: {
          OrderId: order.id,
        },
        include: [
          {
            model: Order,
            right: true, // right join
          },
        ],
        attributes: {
          exclude: ["updatedAt", "product_category_id"],
        },
      })
        .then((product) => {
          if (!product) return res.status(400).json(noOrderMessage);
          return res.status(200).json({ ok: 1, data: product });
        })
        .catch((res, err) => res.status(400).json(noOrderMessage));
    });
  },
  // 刪除訂單資料 限制是已完成的狀態才可以刪除
  deleteOrder: (req, res) => {
    Order.destroy({
      where: {
        id: req.params.id,
        is_canceled: 1,
      },
    }).then((order) => {
      Order_items.destroy({
        where: {
          OrderId: req.params.id,
        },
      })
        .then(() => {
          if (!order) return res.status(400).json(noOrderMessage);
          return res.status(200).json(successMessage);
        })
        .catch((err) => res.status(400).json(failDeleteOrderItems));
    });
  },
  // 訂單取消
  cancelOrder: (req, res) => {
    let id = req.user.id;
    const {
      cancelReason, // 備註
    } = req.body;
    Order.findByPk(req.params.id)
      .then((order) => {
        if (!order) return res.status(400).json(noOrderMessage);
        if (id === order.client_id || id === order.seller_id) {
          return order
            .update({
              is_canceled: 1,
              cancelReason,
            })
            .then(() => {
              res.status(200).json({ ok: 1, message: "success" });
            });
        } else {
          return res.status(400).json(failToCancelOrder);
        }
      })
      .catch((err) => res.status(400).json(failToCancelOrder));
  },
  // 訂單完成
  orderComplete: (req, res) => {
    let id = req.user.id;
    Order.findByPk(req.params.id)
      .then((order) => {
        if (id === order.client_id || id === order.seller_id) {
          return order.update({ is_completed: 1 }).then(() => {
            res.status(200).json(successMessage);
          });
        } else {
          return res.status(400).json(failToCompleteOrder);
        }
      })
      .catch((err) => res.status(400).json(failToCompleteOrder));
  },
  // 訂單出貨
  sendOrder: (req, res) => {
    let id = req.user.id;
    Order.findByPk(req.params.id)
      .then((order) => {
        if (id === order.seller_id) {
          return order.update({ is_sent: 1 }).then(() => {
            res.status(200).json({ ok: 1, message: "success" });
          });
        } else {
          return res.status(400).json(failToSendOrder);
        }
      })
      .catch((err) => res.status(400).json(failToSendOrder));
  },
  // 訂單付款
  payOrder: (req, res) => {
    let id = req.user.id;
    Order.findByPk(req.params.id)
      .then((order) => {
        if (id === order.client_id) {
          return order.update({ is_paid: 1 }).then(() => {
            res.status(200).json(successMessage);
          });
        } else {
          return res.status(400).json(failToPaidOrder);
        }
      })
      .catch((err) => res.status(400).json(failToPaidOrder));
  },
  // 取得自己賣的訂單列表
  sellOrder: (req, res) => {
    let id = req.user.id;
    Order.findAll({
      where: {
        seller_id: id,
      },
    })
      .then((orders) => {
        res.status(200).json({ ok: 1, data: orders });
      })
      .catch((err) => res.status(400).json(noOrderMessage));
  },
  // 取得自己買的訂單列表
  buyOrder: (req, res) => {
    let id = req.user.id;
    Order.findAll({
      where: {
        client_id: id,
      },
    })
      .then((orders) => {
        if (!orders) return res.status(400).json(noOrderMessage);
        res.status(200).json({ ok: 1, data: orders });
      })
      .catch((err) => res.status(400).json(noOrderMessage));
  },

  // 成立訂單
  newOrder: async (req, res) => {
    // 把 request.body 按 product_id 排序
    const sortedCartItems = req.body.sort((a, b) => a.ProductId - b.ProductId);
    // 拿到準備下單的商品 id 的陣列
    const productIdList = sortedCartItems.map((item) => item.ProductId);
    // 整理成之後要用來新增至 order items 的陣列
    const productsData = await Product.findAll({
      where: { id: { [Op.in]: productIdList } },
      include: User,
    }).then((products) =>
      products.map((product) => {
        let currentItem = sortedCartItems.find(
          (item) => item.ProductId === product.id
        );
        return {
          ProductId: product.id,
          product_name: product.name,
          product_category_id: product.ProductCategoryId,
          product_picture_url: product.picture_url,
          product_info: product.info,
          productOriginQuantity: product.quantity, // 商品數量
          product_quantity: currentItem.product_quantity, // 要買的數量
          product_price: product.price,
          product_delivery: product.delivery,
          seller_name: product.User.username,
          seller_email: product.User.email,
          seller_address: product.User.address,
        };
      })
    );

    // 如果沒有商品資料就回傳錯誤訊息
    if (!productsData) {
      return res.status(400).json({ ok: 0, message: "no product" });
    }

    // 進入成立訂單 transaction
    try {
      const orderNumber = generateOrderNumber();
      await sequelize.transaction(async (t) => {
        // 新增訂單
        const orderId = await Order.create(
          {
            UserId: req.user.id,
            client_id: req.user.id,
            client_name: req.user.username,
            client_email: req.user.email,
            client_address: req.user.address,
            seller_id: sortedCartItems[0].UserId,
            seller_name: productsData[0].seller_name,
            seller_email: productsData[0].seller_email,
            seller_address: productsData[0].seller_address,
            order_number: orderNumber,
            total_amount: countTotalAmount(productsData),
          },
          { transaction: t }
        ).then((order) => order.id);

        // 如果建立訂單失敗沒拿到 orderId，就回傳錯誤訊息
        if (!orderId) {
          return res.status(400).json(failToCreateNewOrder);
        }

        // 對準備要下單的商品，逐一檢查與更新賣家商品庫存
        await Promise.all(
          productsData.map((productData) => {
            let stockQuantity = productData.productOriginQuantity; // 賣家的庫存數量
            let cartQuantity = productData.product_quantity; // 準備要買的數量
            // 數量不夠賣，就回傳錯誤跳出 transaction
            if (stockQuantity - cartQuantity < 0) throw new Error();
            // 把要買的商品數量從賣家商品的數量中減去
            Product.update(
              { quantity: stockQuantity - cartQuantity },
              { where: { id: productData.ProductId } },
              { transaction: t }
            );
          })
        );

        // 數量足夠就批量新增訂單商品
        await Order_items.bulkCreate(
          productsData,
          {
            returning: true,
            updateOnDuplicate: ["OrderId"],
          },
          { transaction: t }
        ).then(async (orderItems) => {
          const orderItemsIdList = orderItems.map((item) => item.id);
          // 把先前成立訂單的訂單 id 寫進 order items 的 OrderId 欄位裡
          await Order_items.update(
            { OrderId: orderId },
            { where: { id: { [Op.in]: orderItemsIdList } } },
            { transaction: t }
          );
        });

        // 刪除買家購物車商品
        await Cart_items.destroy(
          {
            where: {
              CartId: req.user.id,
              ProductId: { [Op.in]: productIdList },
            },
          },
          { transaction: t }
        );
      });
      return res.status(200).json({ ok: 1, orderNumber });
    } catch (err) {
      return res.status(200).json(failToCreateNewOrder);
    }
  },
};

module.exports = orderController;
