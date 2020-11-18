const jwt = require('jsonwebtoken')
const jwtSecretKey = process.env.JWT_KEY || 'test_key'

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

/*此身份驗證功能為暫時的，未來會改成用 JSON Web Token 來實作身份驗證*/
const checkAuth = (req, res, next) => {
  if (!req.query.userId) {
    return res.json({ "ok": 0, "data": "您沒有權限操作此動作，請確認是否登入" });
  }; 
  next();
}

module.exports = {
  checkAuth,
  setToken,
  checkToken
};
