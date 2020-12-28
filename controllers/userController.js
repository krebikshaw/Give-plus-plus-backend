const bcrypt = require('bcrypt');
const db = require('../models');
const { Op } = require('sequelize');
const { setToken } = require('../middlewares/auth');
const { User, Mail } = db;
const saltRounds = 10;

const successMessage = { ok: 1, message: 'success' };
const userExistsMessage = { ok: 0,message: "User exists, please login or change username"};
const loginFailedMessage = { ok: 0,message: "username or password is invalid"};
const userNotFoundMessage = {ok: 0,message: "User not found"};

const userController = {
  // handle register
  register: (req, res) => {
    console.log('==========開始執行註冊=========='); 
    const { username, password, email } = req.body;
    console.log('username:',username);
    console.log('password:',password);
    console.log('email:',email);

    if (!username || !username.trim() || !password || !password.trim())
      return res.status(400).json({ok: 0, message:"username, password are required"});
    User.findOne({
      where: {
        username
      }
    })
      .then(user => {
        if (user) return res.status(500).json(userExistsMessage);
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) return res.status(500).json({ok: 0,message: err});
          User.create({
            username,
            password: hash,
            email
          }).then(() => {
            // create token and return to front end
            const token = setToken(username);
            console.log('==========註冊成功==========')
            res.status(200).json({ok: 1, token: token});
          }).catch(err => {
            console.log('發生錯誤，回傳 err：', err);
            return res.status(500).json({ok: 0,message: err});
          });
        });
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  },

  // handle login
  login: (req, res) => {
    console.log('==========開始執行登入==========')
    const { username, password } = req.body;
    console.log('username:',username)
    console.log('password:',password)
    if (!username || !username.trim() || !password || !password.trim())
      return res.status(400).json(loginFailedMessage);
    User.findOne({
      where: {
        username
      }
    })
      .then(user => {
        if (!user) return res.status(400).json(loginFailedMessage);
        bcrypt.compare(password, user.password, (err, isSuccess) => {
          if (err || !isSuccess) return res.status(400).json(loginFailedMessage);
          const token = setToken(username);
          console.log('==========登入成功==========')
          res.status(200).json({ok: 1, token: token});
        });
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  },

  // handle logout
  logout: (req, res) => {
    res.status(200).json({ok: 1, message: "Sometimes you must close your eyes to see"});
  },

  // use token to get personal information
  getOwnInfo: (req, res) => {
    console.log('==========開始執行取得自己的使用者資料==========')
    console.log('id:',req.user.id)
    User.findByPk(req.user.id)
      .then(user => {
        const result = {
          userId: user.id,
          username: user.username,
          password: user.password,
          nickname: user.nickname,
          email: user.email,
          address: user.address,
          is_admin: user.is_admin,
          is_vendor: user.is_vendor,
          announcement: user.announcement,
          account: user.account,
          socialmedia_id: user.socialmedia_id,
          birthday: user.birthday,
          id_card_no: user.id_card_no,
          avatar_url: user.avatar_url,
          banner_url: user.banner_url,
          status: user.status
        };
        console.log('==========成功取得使用者資料==========')
        return res.status(200).json({ok: 1,data: result});
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  },

  // let user update their personal information
  updateOwnInfo: (req, res) => {
    console.log('==========開始執行更改使用者資料==========')
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
    // simple verify format
    console.log('前端傳來的使用者資料內容：',req.body)
    const idCardNoReg=/^[a-z](1|2)\d{8}$/i; 
    if (id_card_no && id_card_no.search(idCardNoReg)==-1) { 
      return res.status(400).json({ok: 0,message: "incorrect id_cart_no format"});
    }
    const emailReg = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
    if (email && email.search(emailReg)==-1) { 
      return res.status(400).json({ok: 0,message: "incorrect email format"});
    }
    const birthdayReg = /^([0-9]){4}(\/|-){1}([0-9]){2}(\/|-)([0-9]){2}$/;
    if (birthday && birthday.search(birthdayReg)==-1) { 
      return res.status(400).json({ok: 0,message: "incorrect birthday format"});
    }
    console.log('通過使用者資料驗證')

    User.findByPk(req.user.id)
      .then(user => {
        if (!user) return res.status(500).json(userNotFoundMessage);
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
            console.log('==========成功更改使用者資料==========')
            return res.status(200).json(successMessage);
          })
          .catch(err => {
            console.log('發生錯誤，回傳 err：', err);
            return res.status(500).json({ok: 0,message: err});
          });
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  },

  updateOwnPassword: (req, res) => {
    console.log('==========開始執行更改密碼==========')
    const { oldPassword, newPassword, confirmPassword } = req.body;
    console.log('前端傳來的資料：',req.body)
    if (!oldPassword || !oldPassword.trim() || !newPassword ||!newPassword.trim() || !confirmPassword ||!confirmPassword.trim())
      return res.status(400).json({ok: 0,message: "fields are all required"});

    User.findByPk(req.user.id)
      .then(user => {
        if (!user) return res.status(400).json(userNotFoundMessage);
        bcrypt.compare(oldPassword, user.password, (err, isSuccess) => {
          if (err || !isSuccess) return res.status(400).json({ok: 0,message: "Invalid oldPassword"});
          if (oldPassword === newPassword ) return res.status(400).json({ok: 0,message: "oldPassword and newPassword cannot be the same"});
          if (newPassword !== confirmPassword) return res.status(400).json({ok: 0,message: "newPassword is not equal to confirmPassword"});
          return bcrypt.hash(newPassword, saltRounds, (err, hash) => {
            if (err) return res.status(500).json({ok: 0,message: err});
            return user.update({
              password: hash
            })
              .then(() => {
                console.log('==========更改密碼成功==========')
                return res.status(200).json(successMessage);
              })
              .catch(err => {
                console.log('發生錯誤，回傳 err：', err);
                return res.status(500).json({ok: 0,message: err});
              });
          });
        });
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  },

  updateAnnouncement: (req, res) => {
    console.log('==========開始更新賣家公告==========')
    console.log('前端傳來的資料：',req.body)
    User.findByPk(req.user.id)
      .then(user => {
        if (!user) return res.status(400).json(userNotFoundMessage);
        return user.update({
          announcement: req.body.announcement
        })
          .then(() => {
            console.log('==========成功更改賣家公告==========')
            return res.status(200).json(successMessage);
          })
          .catch(err => {
            console.log('發生錯誤，回傳 err：', err);
            return res.status(500).json({ok: 0,message: err});
          });
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  },

  // only admin
  getAllUsers: (req, res) => {
    console.log('==========開始取得所有使用者資料==========')
    let {_page, _limit, _sort, _status, _order} = req.query;
    console.log('前端傳來的撈取條件：',req.query)
    let _offset = 0;
    if (_page) {
      _offset = (_page - 1) * (_limit ? parseInt(_limit): 10);
    }
    User.findAndCountAll({
      where: {
        status: _status || [0, 1]
      },
      offset: _offset? parseInt(_offset): 0,
      limit: _limit? parseInt(_limit): 10,
      order: [
        [ _sort || 'createdAt', _order || 'ASC'],
      ],
    })
      .then( user => {
        if (!user) return res.status(500).json(userNotFoundMessage);
        console.log('==========成功取得所有使用者資料==========')
        return res.status(200).json({ok: 1,data: {
          count: user.count,
          users: user.rows,
        }});
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  },

  // only admin
  searchUsers: (req, res) => {
    console.log('==========開始執行搜尋使用者==========')
    let { _page, _limit, _sort, _status, _order, _keyword } = req.query;
    console.log('前端傳來的搜尋條件：',req.query)
    let _offset = 0;
    if (_page) {
      _offset = (_page - 1) * (_limit ? parseInt(_limit): 10);
    }
    if (!_keyword)
      return res.status(400).json({ ok: 0, message: 'keyword is required' });

    let status = _status || [0, 1];

    User.findAndCountAll({
      where: {
        [Op.or]: [
          { 
            nickname: {
              [Op.like]: `%${_keyword}%`,
            } 
          },
          {
            username: {
              [Op.like]: `%${_keyword}%`,
            }
          }
        ],
        status,
      },
      offset: _offset? parseInt(_offset): 0,
      limit: _limit? parseInt(_limit): 10,
      order: [
        [ _sort || 'createdAt', _order || 'ASC'],
      ],
    })
      .then( user => {
        if (!user) return res.status(500).json(userNotFoundMessage);
        console.log('==========成功搜尋到使用者==========')
        return res.status(200).json({ok: 1,data:{
          count: user.count,
          users: user.rows,
        }});
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  },

  getUserInfo: (req, res) => {
    console.log('==========開始取得單一使用者資料==========')
    console.log('要取得的使用者 Id',req.params.id)
    const userId = req.params.id;
    User.findOne({
      where: {
        id: userId
      }
    })
      .then(user => {
        if (!user) return res.status(500).json(userNotFoundMessage);
        const result = {
          userId: user.id,
          username: user.username,
          nickname: user.nickname,
          email: user.email,
          address: user.address,
          is_admin: user.is_admin,
          is_vendor: user.is_vendor,
          announcement: user.announcement,
          account: user.account,
          socialmedia_id: user.socialmedia_id,
          birthday: user.birthday,
          id_card_no: user.id_card_no,
          avatar_url: user.avatar_url,
          banner_url: user.banner_url,
          status: user.status
        };
        console.log('==========成功取得使用者資料==========')
        return res.status(200).json({ok: 1,data: result});
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  },

  // only admin
  updateUserInfo: (req, res) => {
    console.log('==========開始執行更新使用者資料==========')
    console.log('前端傳來的資料：',req.body)
    const userId = req.params.id;
    const {
      nickname,
      email,
      address,
      is_admin,
      is_vendor,
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
      return res.status(400).json({ok: 0,message: "incorrect id_cart_no format"});
    }
    const emailReg = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
    if (email && email.search(emailReg)==-1) { 
      return res.status(400).json({ok: 0,message: "incorrect email format"});
    }
    const birthdayReg = /^([0-9]){4}(\/|-){1}([0-9]){2}(\/|-)([0-9]){2}$/;
    if (birthday && birthday.search(birthdayReg)==-1) { 
      return res.status(400).json({ok: 0,message: "incorrect birthday format"});
    }

    User.findByPk(userId)
      .then(user => {
        if (!user) return res.status(500).json(userNotFoundMessage);
        return user.update({
          nickname,
          email,
          address,
          is_admin,
          is_vendor,
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
            console.log('==========成功變更使用者資料==========')
            return res.status(200).json(successMessage);
          })
          .catch(err => {
            console.log('發生錯誤，回傳 err：', err);
            return res.status(500).json({ok: 0,message: err});
          });
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  },

  // let client apply for seller
  applyForSeller: (req, res) => {
    console.log('==========開始執行申請成為賣家==========')
    console.log('要申請賣家的使用者 Id',req.user.id)
    User.findByPk(req.user.id)
      .then(user => {
        if (!user) return res.status(400).json(userNotFoundMessage);
        return user.update({
          is_vendor: true
        })
          .then(() => {
            console.log('==========成功申請成為賣家==========')
            return res.status(200).json(successMessage);
          })
          .catch(err => {
            console.log('發生錯誤，回傳 err：', err);
            return res.status(500).json({ok: 0,message: err});
          });
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  },

  // let passerby post opinion mail
  postMail: (req, res) => {
    console.log('==========開始執行送出站內信==========')
    const { name, email, phone, content } = req.body;
    if (!name|| !email|| !content  || !name.trim()  || !email.trim() || !content.trim())
      return res.status(400).json({ok: 0,message: "fields are all required"})
    
    const emailReg = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
    if (email.search(emailReg)==-1) { 
      return res.status(400).json({ok: 0,message: "incorrect email format"});
    }

    Mail.create({
      name,
      email,
      phone,
      content
    })
      .then(() => {
        console.log('==========成功送出站內信==========')
        return res.status(200).json(successMessage);
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  },

  deleteUser: (req, res) => {
    User.destroy({
      where: {
        id: req.query.userId,
      },
    })
      .then(() => {
        return res.status(200).json(successMessage);
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  },

  restoreUser: (req, res) => {
    User.restore({
      where: {
        id: req.query.userId,
      },
    })
      .then(() => {
        return res.status(200).json(successMessage);
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  },

  getVendorInfo: (req, res) => {
    console.log('==========開始執行取得賣家資料==========')
    User.findByPk(req.params.id)
      .then(user => {
        if (!user) return res.status(500).json(userNotFoundMessage);
        if (!user.is_vendor) return res.status(400).json({ok: 0,message: 'user is not vendor'});
        const result = {
          userId: user.id,
          username: user.username,
          nickname: user.nickname,
          email: user.email,
          address: user.address,
          announcement: user.announcement,
          account: user.account,
          socialmedia_id: user.socialmedia_id,
          avatar_url: user.avatar_url,
          banner_url: user.banner_url,
        };
        console.log('==========成功取得賣家資料==========')
        return res.status(200).json({ok: 1,data: result});
      })
      .catch(err => {
        console.log('發生錯誤，回傳 err：', err);
        return res.status(500).json({ok: 0,message: err});
      });
  }
}

module.exports = userController;
