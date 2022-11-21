'use strict';
const {
  Model
} = require('sequelize');
const items = require('./items');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Film.belongsTo(models.items, {
        foreignKey: {
          name: 'item_id',
          allowNull: false
        }
      }
        );
    }
  }
  Film.init({
    id_film: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
      
    },
    genre: DataTypes.STRING,
    // item_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // }
  },
    {
      sequelize,
      modelName: 'films',
      timestamps: false
    });
  return Film;
};