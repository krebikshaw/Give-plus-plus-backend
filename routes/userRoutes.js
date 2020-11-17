const express = require('express');
const userRouter = express.Router();
const checkAuth = require('../middlewares/auth');
const userController = require('../controllers/userController');

userRouter.get('/', (req, res) => res.send('hellow')); // 測試用
userRouter.get('/me', checkAuth, userController.me);
userRouter.delete('/', checkAuth, userController.testDelete);
userRouter.patch('/', checkAuth, userController.testRestore);

module.exports = userRouter;