'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Loan.belongsToMany(models.items, {
        through: 'loans_items',
        foreignKey: 'loan_id'
      })
      Loan.belongsTo(models.users, {
        foreignKey: {
          name: "user_id",
          allowNull: false
        }
      })
    }
  }
  Loan.init({
    loan_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
    {
      sequelize,
      modelName: 'loans',
    });
  return Loan;
};
