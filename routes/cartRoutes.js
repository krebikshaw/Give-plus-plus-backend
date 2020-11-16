const express = require('express');
const cartRouter = express.Router();
const checkAuth = require('../middlewares/auth');
const cartController = require('../controllers/cartController');

cartRouter.get('/', (req, res) => res.send('hellow')); // 測試用

module.exports = cartRouter;