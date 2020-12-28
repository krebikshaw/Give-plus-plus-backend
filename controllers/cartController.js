const db = require('../models');
const { User, Cart_items, Product } = db;

const successMessage = { ok: 1, message: 'success' };
const emptyErrorMessage = { ok: 0, message: 'input cannot be empty' };
const noDataMessage = { ok: 0, message: 'No Data.' };
const notEnoughMessage = { ok: 0, message: 'quantity is too much' };

async function updateCartItems(cartItems) {
  for (cartItem of cartItems) {
    await cartItem
      .update({
        is_empty: cartItem.product_quantity > cartItem.Product.quantity ? 1 : 0,
      })
      .then(() => {
        console.log('更新購物車商品狀態成功');
        return;
      })
      .catch((err) => {
        console.log('更新購物車商品狀態錯誤：', err);
        return res.status(400).json({ ok: 0, message: err });
      });
  }
}

function getCartItems(cartItems) {
  const originalCartItems = cartItems.map((cartItem) => {
    return {
      cartItemId: cartItem.id,
      sellerId: cartItem.User.id,
      sellerName: cartItem.User.nickname,
      productId: cartItem.Product.id,
      productName: cartItem.Product.name,
      pictureUrl: cartItem.Product.picture_url,
      price: cartItem.Product.price,
      cartQuantity: cartItem.product_quantity,
      productQuantity: cartItem.Product.quantity,
    };
  });
  const groupData = (originalCartItems) => {
    const groupBySellerName = originalCartItems.reduce((acc, cartItem) => {
      if (!acc[cartItem.sellerName]) {
        acc[cartItem.sellerName] = [];
      }
      acc[cartItem.sellerName].push(cartItem);
      return acc;
    }, {});
    const carts = Object.entries(groupBySellerName);
    const data = carts.reduce((acc, cart) => {
      const item = {
        sellerName: cart[0],
        cartDetail: cart[1],
      };
      acc.push(item);
      return acc;
    }, []);
    return data;
  };
  return groupData(originalCartItems);
}

function isValidNumber(quantity) {
  const re = /^[0-9]*[1-9][0-9]*$/;
  return re.test(quantity);
}

const cartController = {
  // get all my cart items.
  getCart: async (req, res) => {
    console.log('開始撈取購物車');
    await Cart_items.findAll({
      where: { CartId: req.user.id },
      include: [Product],
    })

      // if product is not enough, let status become empty.
      .then((items) => {
        console.log('更新購物車商品狀態');
        updateCartItems(items);
      })
      .catch((err) => {
        console.log('撈取購物車錯誤：', err);
        return res.status(400).json({ ok: 0, message: err });
      });

    // only find cart item whose is_empty is false.
    console.log('開始撈取更新後的購物車商品');
    Cart_items.findAll({
      where: {
        CartId: req.user.id,
        is_empty: 0,
      },
      include: [User, Product],
      order: [
        ['UserId', 'ASC'],
        ['id', 'ASC'],
      ],
    })
      // send updated data response to front end.
      .then((updatedItems) => {
        console.log('撈取更新過後的購物車商品成功');
        return res
          .status(200)
          .json({ ok: 1, data: getCartItems(updatedItems) });
      })
      .catch((err) => {
        console.log('撈取更新過後的購物車商品錯誤：', err);
        return res.status(400).json({ ok: 0, message: err });
      });
  },

  addItem: async (req, res) => {
    if (!isValidNumber(req.body.quantity))
      return res.status(400).json({ ok: 0, message: 'Not valid' });

    // get product id and quantity.
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    // checking necessary field.
    if (!productId || quantity <= 0)
      return res.status(400).json(emptyErrorMessage);

    // find product info by product id.
    const productInfo = await Product.findOne({
      where: { id: productId },
    }).then((product) => product);

    // if product info cannot be found, return no data message.
    if (!productInfo) return res.status(400).json(noDataMessage);

    // get product quantity and sellerId
    const productQuantity = productInfo.quantity;
    const productSellerId = productInfo.UserId;

    // check if the quantity put in cart is more than the product quantity.
    if (quantity > productQuantity)
      return res.status(400).json(notEnoughMessage);

    // check if the product is already in user's cart.
    const existedCartItem = await Cart_items.findOne({
      where: {
        CartId: userId,
        ProductId: productId,
      },
    }).then((cartItem) => cartItem);

    // if it's not in user's cart, create a new cart_items data.
    if (!existedCartItem) {
      console.log('開始新增購物車商品');
      Cart_items.create({
        ProductId: productId,
        CartId: userId,
        UserId: productSellerId,
        is_empty: 0,
        product_quantity: quantity,
      })
        .then(() => {
          console.log('新增購物車商品成功');
          return res.status(200).json(successMessage);
        })
        .catch((err) => {
          console.log('新增購物車商品錯誤：', err);
          return res.status(400).json({ ok: 0, message: err });
        });
    } else {
      // count the existed cart item quantity + the quantity user wants to add.
      const cartItemQuantity =
        parseInt(existedCartItem.product_quantity) + parseInt(quantity);

      // if the count result is more than product quantity, return 400 response.
      if (cartItemQuantity > productQuantity)
        return res.status(400).json(notEnoughMessage);

      // else, update the existed cart item quantity.
      existedCartItem
        .update({ product_quantity: cartItemQuantity })
        .then(() => {
          console.log('新增購物車商品成功');
          return res.status(200).json(successMessage);
        })
        .catch((err) => {
          console.log('新增購物車商品錯誤：', err);
          return res.status(400).json({ ok: 0, message: err });
        });
    }
  },

  editItem: async (req, res) => {
    if (!isValidNumber(req.body.quantity))
      return res.status(400).json({ ok: 0, message: 'Not valid.' });

    const { quantity } = req.body;
    const existedCartItem = await Cart_items.findOne({
      where: {
        id: req.params.id,
        CartId: req.user.id,
      },
    }).then((cartItem) => cartItem);

    if (!existedCartItem) return res.status(400).json(noDataMessage);

    // find product quantity
    const productQuantity = await Product.findOne({
      where: { id: existedCartItem.ProductId },
    }).then((product) => product.quantity);

    const cartItemQuantity = parseInt(quantity);

    // if the count result is more than product quantity, return 400 response.
    if (cartItemQuantity > productQuantity)
      return res.status(400).json(notEnoughMessage);

    console.log('開始編輯購物車數量');
    // else, update the existed cart item quantity.
    existedCartItem
      .update({ product_quantity: quantity })
      .then(() => {
        console.log('編輯購物車數量成功');
        res.status(200).json(successMessage);
      })
      .catch((err) => {
        console.log('編輯購物車商品錯誤：', err);
        return res.status(400).json({ ok: 0, message: err });
      });
  },

  deleteItem: async (req, res) => {
    console.log('開始刪除購物車商品');
    const existedCartItem = await Cart_items.findOne({
      where: {
        id: req.params.id,
        CartId: req.user.id,
      },
    }).then((cartItem) => cartItem);

    if (!existedCartItem) return res.status(400).json(noDataMessage);

    existedCartItem
      .destroy()
      .then(() => {
        console.log('刪除購物車商品成功');
        return res.status(200).json(successMessage);
      })
      .catch((err) => {
        console.log('刪除購物車商品錯誤：', err);
        return res.status(400).json({ ok: 0, message: err });
      });
  },

  deleteItemBySeller: async (req, res) => {
    console.log('開始刪除同賣家的購物車商品');
    const existedCartItems = await Cart_items.findAll({
      where: {
        UserId: req.params.id,
        CartId: req.user.id,
      },
    }).then((cartItem) => cartItem);

    if (!existedCartItems) return res.status(400).json(noDataMessage);

    existedCartItems.map(
      async (cartItem) =>
        await cartItem.destroy().catch((err) => {
          console.log('刪除同賣家購物車商品錯誤：', err);
          return res.status(400).json({ ok: 0, message: err });
        })
    );
    console.log('刪除同賣家的購物車商品成功');
    return res.status(200).json(successMessage);
  },
};

module.exports = cartController;
