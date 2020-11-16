const express = require('express');
const manageRouter = express.Router();
const checkAuth = require('../middlewares/auth');
const manageController = require('../controllers/manageController');

manageRouter.get('/', (req, res) => res.send('hellow')); // 測試用

module.exports = manageRouter;