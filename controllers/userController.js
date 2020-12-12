const bcrypt = require('bcrypt');
const db = require('../models');
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
    const { username, password, email } = req.body;
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
            res.status(200).json({ok: 1, token: token});
          }).catch(err => {
            return res.status(500).json({ok: 0,message: err});
          });
        });
      })
      .catch(err => res.status(500).json({ok: 0,message: err}));
  },

  // handle login
  login: (req, res) => {
    const { username, password } = req.body;
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
          res.status(200).json({ok: 1, token: token});
        });
      })
      .catch(err => res.status(500).json({ok: 0,message: err}));
  },

  // handle logout
  logout: (req, res) => {
    res.status(200).json({ok: 1, message: "Sometimes you must close your eyes to see"});
  },

  // use token to get personal information
  getOwnInfo: (req, res) => {
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
        return res.status(200).json({ok: 1,data: result});
      })
      .catch(err => res.status(500).json({ok: 0,message: err}));
  },

  // let user update their personal information
  updateOwnInfo: (req, res) => {
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
            return res.status(200).json(successMessage);
          })
          .catch(err => res.status(500).json({ok: 0,message: err}));
      })
      .catch(err => res.status(500).json({ok: 0,message: err}));
  },

  updateOwnPassword: (req, res) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;
    if (!oldPassword || !oldPassword.trim() || !newPassword ||!newPassword.trim() || !confirmPassword ||!confirmPassword.trim())
      return res.status(400).json({ok: 0,message: "fields are all required"});
    if (newPassword !== confirmPassword) return res.status(400).json({ok: 0,message: "newPassword is not equal to confirmPassword"});
    if ( oldPassword === newPassword ) return res.status(400).json({ok: 0,message: "oldPassword and newPassword cannot be the same"});

    User.findByPk(req.user.id)
      .then(user => {
        if (!user) return res.status(400).json(userNotFoundMessage);
        bcrypt.compare(oldPassword, user.password, (err, isSuccess) => {
          if (err || !isSuccess) return res.status(400).json({ok: 0,message: "Invalid oldPassword"});
          return bcrypt.hash(newPassword, saltRounds, (err, hash) => {
            if (err) return res.status(500).json({ok: 0,message: err});
            return user.update({
              password: hash
            })
              .then(() => {
                return res.status(200).json(successMessage);
              })
              .catch(err => res.status(500).json({ok: 0,message: err}));
          });
        });
      })
      .catch(err => res.status(500).json({ok: 0,message: err}));
  },

  updateAnnouncement: (req, res) => {
    User.findByPk(req.user.id)
      .then(user => {
        if (!user) return res.status(400).json(userNotFoundMessage);
        return user.update({
          announcement: req.body.announcement
        })
          .then(() => {
            return res.status(200).json(successMessage);
          })
          .catch(err => res.status(500).json({ok: 0,message: err}));
      })
      .catch(err => res.status(500).json({ok: 0,message: err}));
  },

  // only admin
  getAllUsers: (req, res) => {
    let {_offset, _limit, _sort, _status, _order} = req.query;
    User.findAll({
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
        return res.status(200).json({ok: 1,data: user});
      })
      .catch(err => res.status(500).json({ok: 0,message: err}));
  },

  // only admin
  getUserInfo: (req, res) => {
    const userId = req.params.id;
    User.findOne({
      where: {
        id: userId
      }
    })
      .then(user => {
        if (!user) return res.status(500).json(userNotFoundMessage);
        return res.status(200).json({ok: 1,data: user});
      })
      .catch(err => res.status(500).json({ok: 0,message: err}));
  },

  // only admin
  updateUserInfo: (req, res) => {
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
            return res.status(200).json(successMessage);
          })
          .catch(err => res.status(500).json({ok: 0,message: err}));
      })
      .catch(err => res.status(500).json({ok: 0,message: err}));
  },

  // let client apply for seller
  applyForSeller: (req, res) => {
    User.findByPk(req.user.id)
      .then(user => {
        if (!user) return res.status(400).json(userNotFoundMessage);
        return user.update({
          is_vendor: true
        })
          .then(() => {
            return res.status(200).json(successMessage);
          })
          .catch(err => res.status(500).json({ok: 0,message: err}));
      })
      .catch(err => res.status(500).json({ok: 0,message: err}));
  },

  // let passerby post opinion mail
  postMail: (req, res) => {
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
        return res.status(200).json(successMessage);
      })
      .catch(err => res.status(500).json({ok: 0,message: err}));
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
      .catch((err) => console.log(err));
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
      .catch((err) => console.log(err));
  },

  getVendorInfo: (req, res) => {
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
        return res.status(200).json({ok: 1,data: result});
      })
      .catch(err => res.status(500).json({ok: 0,message: err}));
  }
}

module.exports = userController;
