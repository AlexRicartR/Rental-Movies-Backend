'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      loan.belongsTo(models.user)
      loan.belongsTo(models.article)
    }
  }
  loan.init({
    id_loan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    UserIdUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id_user'
      },
    ArticleIdArticle: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'article',
        key: "id_article"
      }
    }
  }}, 
  {
    sequelize,
    modelName: 'loan',
    timestamps: false
  });
  return loan;
};