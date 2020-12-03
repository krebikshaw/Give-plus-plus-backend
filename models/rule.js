'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rule extends Model {
    static associate(models) {}
  }
  Rule.init(
    {
      rule: DataTypes.TEXT,
      content: DataTypes.TEXT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Rule',
      paranoid: true,
    }
  );
  return Rule;
};
