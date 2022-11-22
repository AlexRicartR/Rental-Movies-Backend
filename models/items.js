'use strict';
const {
  Model
} = require('sequelize');
const films = require('./films');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsToMany(models.loans, {
        through : 'loans_items',
        foreingKey:{
          name: "item_id"
        }
      })
  
    }
  }
  Item.init({
    item_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    rating: DataTypes.DECIMAL(10,1),
    release_date: DataTypes.DATEONLY,
    type: DataTypes.ENUM('Film', 'Serie')
  },
    {
      sequelize,
      modelName: 'items',
      timestamps: false
    });
  return Item;
};