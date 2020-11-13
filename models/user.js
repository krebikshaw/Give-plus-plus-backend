'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order);
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    role: DataTypes.INTEGER,
    is_vender: DataTypes.INTEGER,
    announcment: DataTypes.STRING,
    account: DataTypes.STRING,
    socialmedia_id: DataTypes.STRING,
    birthday: DataTypes.DATE,
    id_card_no: DataTypes.STRING,
    avatar_url: DataTypes.STRING,
    banner_url: DataTypes.STRING,
    status: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};