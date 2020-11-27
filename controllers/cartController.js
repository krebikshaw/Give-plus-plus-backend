const db = require('../models');
const { User, Cart_items, Product } = db;

const getError = (res, err) => res.status(400).json({ ok: 0, message: err });
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
        return;
      })
      .catch(() => getError('update is not success'));
  }
}

function getCartItems(cartItems) {
  const originalCartItems = cartItems.map((cartItem) => {
    return {
      cartItemId: cartItem.id,
      sellerId: cartItem.User.id,
      productId: cartItem.Product.id,
      productName: cartItem.Product.name,
      pictureUrl: cartItem.Product.picture_url,
      price: cartItem.Product.price,
      quantity: cartItem.product_quantity,
    };
  });
  const sortedCartItems = originalCartItems.reduce((acc, item) => {
    const sellerId = 'seller' + item.sellerId;
    if (!acc[sellerId]) acc[sellerId] = [];
    acc[sellerId].push(item);
    return acc;
  }, {});
  const cartItemsData = { ok: 1, data: sortedCartItems };
  return cartItemsData;
}

const cartController = {
  // get all my cart items.
  getCart: async (req, res) => {
    await Cart_items.findAll({
      where: { CartId: req.user.id },
      include: [Product],
    })

      // if product is not enough, let status become empty.
      .then((items) => updateCartItems(items))
      .catch((err) => getError(res, err));

    // only find cart item whose is_empty is false.
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
      .then((updatedItems) => res.status(200).json(getCartItems(updatedItems)))
      .catch((err) => getError(res, err));
  },

  addItem: async (req, res) => {
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
      Cart_items.create({
        ProductId: productId,
        CartId: userId,
        UserId: productSellerId,
        is_empty: 0,
        product_quantity: quantity,
      })
        .then(() => res.status(200).json(successMessage))
        .catch((err) => getError(res, err));
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
        .then(() => res.status(200).json(successMessage))
        .catch((err) => getError(res, err));
    }
  },

  editItem: async (req, res) => {
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

    const cartItemQuantity =
      parseInt(existedCartItem.product_quantity) + parseInt(quantity);

    // if the count result is more than product quantity, return 400 response.
    if (cartItemQuantity > productQuantity)
      return res.status(400).json(notEnoughMessage);

    // else, update the existed cart item quantity.
    existedCartItem
      .update({ product_quantity: quantity })
      .then(() => res.status(200).json(successMessage))
      .catch((err) => getError(res, err));
  },

  deleteItem: async (req, res) => {
    const existedCartItem = await Cart_items.findOne({
      where: {
        id: req.params.id,
        CartId: req.user.id,
      },
    }).then((cartItem) => cartItem);

    if (!existedCartItem) return res.status(400).json(noDataMessage);

    existedCartItem
      .destroy()
      .then(() => res.status(200).json(successMessage))
      .catch((err) => getError(res, err));
  },

  deleteItemBySeller: async (req, res) => {
    const existedCartItems = await Cart_items.findAll({
      where: {
        UserId: req.params.id,
        CartId: req.user.id,
      },
    }).then((cartItem) => cartItem);

    if (!existedCartItems) return res.status(400).json(noDataMessage);

    existedCartItems.map(
      async (cartItem) => await cartItem.destroy().catch((err) => getError(err))
    );

    return res.status(200).json(successMessage);
  },
};

module.exports = cartController;
