const db = require("../models");
const Order = db.Order;
const { Op, Sequelize, bulkCreate } = require("sequelize");
const { Product, User, Cart, Order_items, Cart_items } = db;
const { checkToken } = require("../middlewares/auth");

const noOrderMessage = { ok: 0, message: "there is no order" };
const noOrderItemsMessage = { ok: 0, message: "there is no orderItems data" };
const failDeleteOrderItems = { ok: 0, message: "fail to delete OrderItems" };
const failToCancelOrder = { ok: 0, message: "fail to cancel Order" };
const failToCompleteOrder = { ok: 0, message: "fail to complete Order" };
const failToSendOrder = { ok: 0, message: "fail to send Order" };
const failToPaidOrder = { ok: 0, message: "fail to paid Order" };
const failToCreateNewOrder = { ok: 0, message: "fail to create new Order" };
const successMessage = { ok: 1, message: "success" };
// 計算訂單總金額
function countTotalAmount(cartItemData, requestData) {
  const totalAmount = cartItemData.map((data) => {
    let rightIndex = null;
    requestData.map((product, index) => {
      if (product.ProductId === data.ProductId) {
        rightIndex = index;
      }
    
    })
    return requestData[rightIndex].product_quantity * Object.values(data)[6];
  });
  const totalAmountData = totalAmount.reduce((accumulator, totalAmount) => {
    return accumulator + totalAmount;
  });
  return totalAmountData;
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
          console.log(product);
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
    Order.findByPk(req.params.id)
      .then((order) => {
        if (!order) return res.status(400).json(noOrderMessage);
        if (id === order.client_id || id === order.seller_id) {
          return order.update({ is_canceled: 1 }).then(() => {
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
    // 先從req.body拿productId,cart_quantity,sellerId
    const { product_quantity, ProductId, UserId } = req.body;
    const request_data = req.body;
    const cartQuantityList = req.body.map((data) => Object.values(data)[0]);
    const ProductIdList = req.body.map((data) => Object.values(data)[1]);
    const sellerId = req.body.map((data) => Object.values(data)[2])[0];
    console.log(cartQuantityList);
    // 用productId findALL 拿到商品的金額,商品名稱等商品詳細資訊,再用關聯賣家sellerId 拿到賣家的賣家的姓名,email跟地址
    const productsData = await Product.findAll({
      where: {
        id: { [Op.in]: ProductIdList },
      },
      include: {
        model: User,
        right: true, // right join
      },
    }).then((products) => {
      return products.map((product) => {
        return {
          ProductId: product.id,
          product_name: product.name,
          product_category_id: product.ProductCategoryId,
          product_picture_url: product.picture_url,
          product_info: product.info,
          product_quantity: product.quantity,
          product_price: product.price,
          product_delivery: product.delivery,
          seller_name: product.User.username,
          seller_email: product.User.email,
          seller_address: product.User.address,
        };
      });
    });
    const productQuantityList = productsData.map(
      (data) => Object.values(data)[5]
    );
    console.log(productQuantityList);
    if (!productsData) {
      return res.status(400).json({ ok: 0, message: "no product" });
    }
    const orderNumber = generateOrderNumber();

    // 新增到order
    const IsOrderSuccess = await Order.create({
      UserId: req.user.id,
      client_id: req.user.id,
      client_name: req.user.username,
      client_email: req.user.email,
      client_address: req.user.address,
      seller_id: sellerId,
      seller_name: productsData[0].seller_name,
      seller_email: productsData[0].seller_email,
      seller_address: productsData[0].seller_address,
      order_number: orderNumber,
      total_amount: countTotalAmount(productsData, request_data),

    });

    // 新增到order item
    const isOrderItemSuccess = await Order_items.bulkCreate(productsData, {
      returning: true,
      updateOnDuplicate: ["OrderId"],
    }).then(async (order) => {
      let OrderId = order[0].id;

      await Order_items.update(
        { 
          OrderId: OrderId,
        },
        { where: { ProductId: { [Op.in]: ProductIdList } } }
      );
    });

    const IsOrderMade = await Promise.all([
      IsOrderSuccess,
      isOrderItemSuccess,
    ]).then(() => true);

    // 更新賣家商品數量
    if (!IsOrderMade) {
      return res.status(400).json({ ok: 0, message: "fail to create order" });
    }

    const productUpdate = async (id) => {
      let oldProductIndex = null;
      let cartProductIndex = null;
      request_data.map((product, index) => {
        if (product.ProductId === id) {
          cartProductIndex = index;
        }
      });
      productsData.map((product, index) => {
        if (product.ProductId === id) {
          oldProductIndex = index;
        }
      });

      await Product.update(
        {
          quantity:
            productsData[oldProductIndex].product_quantity -
            request_data[cartProductIndex].product_quantity,
        },
        {
          where: {
            id: id,
          },
        }
      );
    };

    let IsProductsUpdate = await Promise.all(
      Array.from(Array(request_data.length).keys()).map((i) => {
        return productUpdate(request_data[i].ProductId);
      })
    ).then(() => {
      return true;
    });

    if (!IsProductsUpdate) {
      return res.status(400).json({ ok: 0, message: "fail to create order" });
    }

    // 把購物車商品刪掉
    const deleteCartItem = async (id) => {
      await Cart_items.destroy({
        where: {
          ProductId: id,
        },
      });
    };

    let IsCartItemsDestroy = await Promise.all(
      Array.from(Array(request_data.length).keys()).map((i) => {
        return deleteCartItem(request_data[i].ProductId);
      })
    ).then(() => {
      return true;
    });

     if (!IsCartItemsDestroy) {
       return res.status(400).json({ ok: 0, message: "fail to create order" });
     }

    res.status(200).json({ ok: 1, orderNumber: orderNumber });
  }
 
};

module.exports = orderController;
