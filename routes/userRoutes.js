const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController');

userRouter.get('/', (req, res) => res.send('hellow')); // 測試用
userRouter.get('/me', userController.me);

module.exports = userRouter;