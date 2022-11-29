////////  Redefining user-related models

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db')
class Users extends Model { }

Users.init({
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true,
    validate: {
      len: [1, 50]
    }
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 255]
    }

  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 25]
    }
  },
  surname_user: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 25]
    }
  },
  admin_status: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  }
}, {
  sequelize,
  modelName: 'users',
  freezeTableName: true,
  timestamps: false
});

module.exports = Users;