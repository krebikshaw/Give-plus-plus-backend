const db = require('../models');
const User = db.User;

const userController = {
  me: (req, res) => {
    User.findOne({
      where: {
        id: req.query.userId
      }
    }).then(user => {
      const result = {
        nickname: user.nickname,
        username: user.username,
      };
      return res.status(200).json(result);
    }).catch(err => console.log(err));
  },
  testDelete: (req, res) => {
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
  testRestore: (req, res) => {
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