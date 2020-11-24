const jwt = require('jsonwebtoken');
const userController = require('../controllers/userController');
const jwtSecretKey = process.env.JWT_KEY || 'test_key'
const db = require('../models');
const User = db.User;

const setToken = (username) => {
  const payload = {
    username
  };
  return jwt.sign(
    { 
      payload, 
      exp: Math.floor(Date.now() / 1000) + (1880 * 60 * 30) 
    },
    jwtSecretKey
  );
}

const checkToken = (req) => {
  if (!req.header('Authorization')) return;
  const token = req.header('Authorization').replace('Bearer ', '');
  return jwt.verify(token, jwtSecretKey, (err, decoded) => {
    if (err) return;
    return decoded.payload.username;
  });
}

const checkAuth = (identity) => {
  return (req, res, next) => {
    const username = checkToken(req) || '';
    if (!username) return res.status(400).json({"ok":0,"message":"missing token"});
    User.findOne({
      where: {
        username
      }
    })
      .then(user => {
        if (!user) return res.status(400).json({"ok":0,"message":"User not found"});
        req.user = user.dataValues;
        switch (identity) {
          case 'isAdmin':
            if (!req.user.is_admin) return res.status(400).json({"ok":0,"message":"permission denied"});
            next();
            break;
          case 'isVendor':
            if (!req.user.is_vendor) return res.status(400).json({"ok":0,"message":"permission denied"});
            next();
            break;
          default:
            next();
        }
      })
      .catch(err => res.status(500).json({"ok":0,"data":err}));
  }
}

module.exports = {
  checkAuth,
  setToken
};
