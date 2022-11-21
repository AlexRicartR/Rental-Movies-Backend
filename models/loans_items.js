'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Loans_Items extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) { 
            Loans_Items.belongsTo(models.items)
        }
    }
    Loans_Items.init({
        loan_id_item: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true

        },
        loan_id: {
            type: DataTypes.INTEGER
        },
        itemIdItem: {
            type: DataTypes.INTEGER
        }
    },
        {
            sequelize,
            modelName: 'loans_items',
            timestamps: false
        });
    return Loans_Items;
};