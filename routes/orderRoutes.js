const express = require('express');
const orderRouter = express.Router();

const orderController = require('../controllers/orderController');

orderRouter.get('/', (req, res) => res.send('hellow')); // 測試用

module.exports = orderRouter;