const express = require('express');
const userRouter = express.Router();
const { checkAuth } = require('../middlewares/auth');
const userController = require('../controllers/userController');

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/logout', checkAuth, userController.logout);
userRouter.get('/me', checkAuth(), userController.getOwnInfo);
userRouter.patch('/me', checkAuth, userController.updateOwnInfo);
userRouter.patch('/password', checkAuth, userController.updateOwnPassword);
userRouter.patch('/announcement', checkAuth, userController.updateAnnouncement);
userRouter.get('/', checkAuth, userController.getAllUsers);
userRouter.get('/:id', checkAuth, userController.getUserInfo);
userRouter.patch('/:id', checkAuth, userController.updateUserInfo);
userRouter.post('/apply', checkAuth, userController.applyForSeller);
userRouter.delete('/delete', checkAuth, userController.deleteUser);
userRouter.patch('/restore', checkAuth, userController.restoreUser);

module.exports = userRouter;