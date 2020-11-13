const db = require('../models');
const User = db.User;

const userController = {
  me: (req, res) => {
    return res.json("取得用戶資料");
  }
}

module.exports = userController;