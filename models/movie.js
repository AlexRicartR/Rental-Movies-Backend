

'use strict';
const {Model} = require('sequelize');
const category = require('./category');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    static associate(models) {
      // Setting forth the association that will govern this model
      movie.belongsTo(models.category, {
        foreignKey: 'categoryId'
      });
    }
  };
  movie.init({
    title: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};