const bcrypt = require('bcrypt');
const db = require('../models');
const { setToken, checkToken } = require('../middlewares/auth');
const User = db.User;
const Mail = db.Mails;
const saltRounds = 10;

const userController = {
  register: (req, res) => {
    const { username, password, email } = req.body;
    if (!username.trim() || !password.trim()) return res.status(400).json({"ok":0, "data":"帳號或密碼未填寫"});
    User.findOne({
      where: {
        username
      }
    })
      .then(user => {
        if (user) return res.status(200).json({"ok":0,"data":"帳號已註冊，請改用其他帳號"});
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
    const { username, password } = req.body;
    if (!username.trim() || !password.trim()) return res.status(400).json({"ok":0,"data":"帳號或密碼錯誤"});
    User.findOne({
      where: {
        username
      }
    })
      .then(user => {
        if (!user) return res.status(400).json({"ok":0,"data":"帳號或密碼錯誤"});
        bcrypt.compare(password, user.password, (err, isSuccess) => {
          if (err || !isSuccess) return res.status(400).json({"ok":0,"data":"帳號或密碼錯誤"});
          const token = setToken(username);
          res.status(200).json({"ok":1, "token":token});
        });
      })
      .catch(err => res.status(500).json({"ok":0,"data":err}));
  },
  logout: (req, res) => {
    res.status(400).json({"ok":0,"data":"登出不用發 api，後端不用作處理，謝謝！"});
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
          userId: user.id,
          username: user.username,
          password: user.password,
          nickname: user.nickname,
          email: user.email,
          address: user.address,
          is_admin: user.is_admin,
          is_vender: user.is_vender,
          announcement: user.announcement,
          account: user.account,
          socialmedia_id: user.socialmedia_id,
          birthday: user.birthday,
          id_card_no: user.id_card_no,
          avatar_url: user.avatar_url,
          banner_url: user.banner_url,
          status: user.status
        };
        return res.status(200).json({"ok":1,"data":result});
      })
      .catch(err => res.status(500).json({"ok":0,"data":err}));
  },
  updateOwnInfo: (req, res) => {
    username = req.user.username
    const { 
      nickname,
      email,
      address,
      account,
      socialmedia_id,
      birthday,
      id_card_no,
      avatar_url,
      banner_url 
    } = req.body;

    const idCardNoReg=/^[a-z](1|2)\d{8}$/i; 
    if (id_card_no && id_card_no.search(idCardNoReg)==-1) { 
      return res.status(400).json({"ok":0,"data":"身分證字號格式錯誤"});
    }
    const emailReg = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
    if (email && email.search(emailReg)==-1) { 
      return res.status(400).json({"ok":0,"data":"email 格式錯誤"});
    }
    const birthdayReg = /^([0-9]){4}(\/|-){1}([0-9]){2}(\/|-)([0-9]){2}$/;
    if (birthday && birthday.search(birthdayReg)==-1) { 
      return res.status(400).json({"ok":0,"data":"生日格式錯誤"});
    }

    User.findOne({
      where: {
        username
      }
    })
      .then(user => {
        if (!user) return res.status(500).json({"ok":0,"data":"查無此用戶"});
        return user.update({
          nickname,
          email,
          address,
          account,
          socialmedia_id,
          birthday,
          id_card_no,
          avatar_url,
          banner_url
        })
          .then(() => {
            return res.status(200).json({"ok":1,"data":"success"});
          })
          .catch(err => res.status(500).json({"ok":0,"data":err}));
      })
      .catch(err => res.status(500).json({"ok":0,"data":err}));
  },
  updateOwnPassword: (req, res) => {
    username = req.user.username
    const { oldPassword, newPassword, confirmPassword } = req.body;
    if (!oldPassword.trim() || !newPassword.trim() || !confirmPassword.trim()) return res.status(400).json({"ok":0,"data":"缺少必要欄位"});
    if ( oldPassword === newPassword ) return res.status(400).json({"ok":0,"data":"新舊密碼一樣，那你幹嘛重設？"});

    User.findOne({
      where: {
        username
      }
    })
      .then(user => {
        if (!user) return res.status(400).json({"ok":0,"data":"查無用戶"});
        bcrypt.compare(oldPassword, user.password, (err, isSuccess) => {
          if (err || !isSuccess) return res.status(400).json({"ok":0,"data":"原密碼錯誤"});
          if (newPassword !== confirmPassword) return res.status(400).json({"ok":0,"data":"新密碼與重新輸入密碼不符"});
          return bcrypt.hash(newPassword, saltRounds, (err, hash) => {
            if (err) return res.status(500).json({"ok":0,"data":err});
            return user.update({
              password: hash
            })
              .then(() => {
                return res.status(200).json({"ok":1,"data":"success"});
              })
              .catch(err => res.status(500).json({"ok":0,"data":err}));
          });
        });
      })
      .catch(err => res.status(500).json({"ok":0,"data":err}));
  },
  updateAnnouncement: (req, res) => {
    username = req.user.username
    User.findOne({
      where: {
        username
      }
    })
      .then(user => {
        if (!user) return res.status(400).json({"ok":0,"data":"查無用戶"});
        return user.update({
          announcement: req.body.announcement
        })
          .then(() => {
            return res.status(200).json({"ok":1,"data":"success"});
          })
          .catch(err => res.status(500).json({"ok":0,"data":err}));
      })
      .catch(err => res.status(500).json({"ok":0,"data":err}));
  },
  getAllUsers: (req, res) => {
    /* 這邊要怎麼傳要設計一下 
    const { limit, offset, where, order } = req.query;
    User.findAll({
      
    })
    */
  },
  getUserInfo: (req, res) => {
    const userId = req.params.id;
    User.findOne({
      where: {
        id: userId
      }
    })
      .then(user => {
        if (!user) return res.status(500).json({"ok":0,"data":"查無此用戶"});
        const result = {
          userId: user.id,
          username: user.username,
          password: user.password,
          nickname: user.nickname,
          email: user.email,
          address: user.address,
          is_admin: user.is_admin,
          is_vender: user.is_vender,
          announcement: user.announcement,
          account: user.account,
          socialmedia_id: user.socialmedia_id,
          birthday: user.birthday,
          id_card_no: user.id_card_no,
          avatar_url: user.avatar_url,
          banner_url: user.banner_url,
          status: user.status
        };
        return res.status(200).json({"ok":1,"data":result});
      })
      .catch(err => res.status(500).json({"ok":0,"data":err}));
  },
  updateUserInfo: (req, res) => {
    const userId = req.params.id;
    const {
      nickname,
      email,
      address,
      is_admin,
      is_vender,
      announcement,
      account,
      socialmedia_id,
      birthday,
      id_card_no,
      avatar_url,
      banner_url,
      status
    } = req.body;

    const regExpID=/^[a-z](1|2)\d{8}$/i; 
    if (id_card_no && id_card_no.search(regExpID)==-1) { 
      return res.status(400).json({"ok":0,"data":"身分證字號格式錯誤"});
    }
    const emailReg = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
    if (email && email.search(emailReg)==-1) { 
      return res.status(400).json({"ok":0,"data":"email 格式錯誤"});
    }
    const birthdayReg = /^([0-9]){4}(\/|-){1}([0-9]){2}(\/|-)([0-9]){2}$/;
    if (birthday && birthday.search(birthdayReg)==-1) { 
      return res.status(400).json({"ok":0,"data":"生日格式錯誤"});
    }

    User.findOne({
      where: {
        id: userId
      }
    })
      .then(user => {
        if (!user) return res.status(500).json({"ok":0,"data":"查無此用戶"});
        return user.update({
          nickname,
          email,
          address,
          is_admin,
          is_vender,
          announcement,
          account,
          socialmedia_id,
          birthday,
          id_card_no,
          avatar_url,
          banner_url,
          status
        })
          .then(() => {
            return res.status(200).json({"ok":1,"data":"success"});
          })
          .catch(err => res.status(500).json({"ok":0,"data":err}));
      })
      .catch(err => res.status(500).json({"ok":0,"data":err}));
  },
  applyForSeller: (req, res) => {
    username = req.user.username
    User.findOne({
      where: {
        username
      }
    })
      .then(user => {
        if (!user) return res.status(400).json({"ok":0,"data":"查無用戶"});
        return user.update({
          is_vender: true
        })
          .then(() => {
            return res.status(200).json({"ok":1,"data":"success"});
          })
          .catch(err => res.status(500).json({"ok":0,"data":err}));
      })
      .catch(err => res.status(500).json({"ok":0,"data":err}));
  },
  postMail: (req, res) => {
    const { name, email, phone, content } = req.body;
    if (!name.trim() || !email.trim() || !phone.trim() || !content.trim()) return res.status(400).json({"ok":0,"data":"缺少必要欄位"})
    
    const emailReg = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
    if (email.search(emailReg)==-1) { 
      return res.status(400).json({"ok":0,"data":"email 格式錯誤"});
    }

    Mail.create({
      name,
      email,
      phone,
      content
    })
      .then(() => {
        return res.status(200).json({"ok":1,"data":"success"});
      })
      .catch(err => res.status(500).json({"ok":0,"data":err}));
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