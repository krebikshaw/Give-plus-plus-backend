/*此身份驗證功能為暫時的，未來會改成用 JSON Web Token 來實作身份驗證*/
const checkAuth = (req, res, next) => {
  if (!req.query.userId) {
    return res.json({ "ok": 0, "data": "您沒有權限操作此動作，請確認是否登入" });
  }; 
  next();
}

module.exports = checkAuth;

