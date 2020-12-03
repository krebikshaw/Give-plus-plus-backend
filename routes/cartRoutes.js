const express = require('express');
const cartRouter = express.Router();
const { checkAuth } = require('../middlewares/auth');
const cartController = require('../controllers/cartController');

cartRouter.use(checkAuth());

cartRouter.get('/', cartController.getCart);
cartRouter.post('/cart-items/new', cartController.addItem);
cartRouter.patch('/cart-items/:id', cartController.editItem);
cartRouter.delete('/cart-items/:id', cartController.deleteItem);
cartRouter.delete('/seller/:id', cartController.deleteItemBySeller);

module.exports = cartRouter;
