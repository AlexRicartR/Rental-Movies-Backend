'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserType.hasMany(models.users, {
        foreignKey: {
          name: "id_usertype",
          allowNull: false
        }
      })
    }
  }
  UserType.init({
    id_rol: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userTypeName: DataTypes.STRING
  },
    {
      sequelize,
      modelName: 'usertypes',
      timestamps: false
    });
  return UserType;
};