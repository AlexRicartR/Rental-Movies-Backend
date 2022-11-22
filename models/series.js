'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Serie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Serie.belongsTo(models.items, {
        foreignKey: {
          name: 'item_id',
          allowNull: false
        }
      })
    }
  }
  Serie.init({
    id_serie: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    next_episode: DataTypes.DATEONLY,
    permission: DataTypes.BOOLEAN,
    // item_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // }
  }, 
  {
    sequelize,
    modelName: 'series',
    timestamps: false
  });
  return Serie;
};