'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Rule.init({
    Rule: DataTypes.TEXT,
    content: DataTypes.TEXT,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Rule',
  });
  return Rule;
};