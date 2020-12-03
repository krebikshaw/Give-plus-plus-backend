const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
const { checkAuth } = require('../middlewares/auth');

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/logout', checkAuth(), userController.logout);
userRouter.get('/me', checkAuth(), userController.getOwnInfo);
userRouter.patch('/me', checkAuth(), userController.updateOwnInfo);
userRouter.patch('/password', checkAuth(), userController.updateOwnPassword);
userRouter.patch('/announcement', checkAuth(), userController.updateAnnouncement);
userRouter.get('/', checkAuth('isAdmin'), userController.getAllUsers);
userRouter.get('/:id', checkAuth('isAdmin'), userController.getUserInfo);
userRouter.patch('/:id', checkAuth('isAdmin'), userController.updateUserInfo);
userRouter.post('/apply', checkAuth(), userController.applyForSeller);
userRouter.delete('/delete', checkAuth('isAdmin'), userController.deleteUser);
userRouter.patch('/restore', checkAuth('isAdmin'), userController.restoreUser);

module.exports = userRouter;