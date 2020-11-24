const bcrypt = require('bcrypt');
const db = require('../models');
const { setToken, checkToken } = require('../middlewares/auth');
const User = db.User;
const saltRounds = 10;

const userController = {
  register: (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password) return res.status(400).json({"ok":0, "data":"帳號或密碼未填寫"});
    User.findAll({
      where: {
        username
      }
    })
      .then(user => {
        if (user.length !== 0) return res.status(200).json({"ok":0,"data":"帳號已註冊，請改用其他帳號"});
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) return res.status(500).json({"ok":0,"data":err});
          User.create({
            username,
            password: hash,
            email
          }).then(user => {
            const token = setToken(username);
            res.status(200).json({"ok":1, "token":token});
          }).catch(err => {
            return res.status(500).json({"ok":0,"data":err});
          });
        });
      })
      .catch(err => res.status(500).json({"ok":0,"data":err}));
  },
  login: (req, res) => {

  },
  logout: (req, res) => {

  },
  getOwnInfo: (req, res) => {
    //const username = checkToken(req) || '';
    //if (!username) return res.status(400).json({"ok":0,"data":"missing token"});
    username = req.user.username
    User.findOne({
      where: {
        username
      }
    })
      .then(user => {
        const result = {
          username: user.username,
          password: user.password,
          nickname: user.nickname,
          email: user.email,
          address: user.address,
          is_admin: user.is_admin,
          is_vender: user.is_vender,
          announcement: user.announcment,
          account: user.account,
          socialmedia_id: user.socialmedia_id,
          birthday: user.birthday,
          id_card_no: user.id_card_no,
          avatar_url: user.avatar_url,
          banner_url: user.banner_url,
          status: user.status
        };
        return res.status(200).json(result);
      })
      .catch(err => res.status(500).json({"ok":0,"data":err}));
  },
  updateOwnInfo: (req, res) => {

  },
  updateOwnPassword: (req, res) => {

  },
  updateAnnouncement: (req, res) => {

  },
  getAllUsers: (req, res) => {

  },
  getUserInfo: (req, res) => {

  },
  updateUserInfo: (req, res) => {

  },
  applyForSeller: (req, res) => {

  },
  deleteUser: (req, res) => {
    User.destroy({
      where: {
        id: req.query.userId,
      },
    })
      .then(() => {
        return res.status(200).json('destroy success');
      })
      .catch((err) => console.log(err));
  },
  restoreUser: (req, res) => {
    User.restore({
      where: {
        id: req.query.userId,
      },
    })
      .then(() => {
        return res.status(200).json('restore success');
      })
      .catch((err) => console.log(err));
  },
}

module.exports = userController;