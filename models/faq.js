'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faq extends Model {
    static associate(models) {
      Faq.belongsTo(models.Faq_categories);
      
    }
  }
  Faq.init(
    {
      question: DataTypes.TEXT,
      answer: DataTypes.TEXT,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Faq',
      paranoid: true,
    }
  );
  return Faq;
};
