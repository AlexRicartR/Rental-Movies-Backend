

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    static associate(models) {
      this.hasMany(models.movie,{
        foreignKey:'categoryId'
      })
      this.hasMany(models.serie,{
        foreignKey:'categoryId'
      });
    }
  };
  category.init({
    type: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};