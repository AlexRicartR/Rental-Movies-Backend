'use strict';
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db')

class Loans extends Model { }

Loans.init({
  id_item: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  loan_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  return_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  serie_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  film_id:{
    type: DataTypes.INTEGER,
    allowNull:true
  }


}, {
  sequelize,
  modelName: 'loans',
  freezeTableName: true,
  timestamps: false
});

module.exports = Loans;