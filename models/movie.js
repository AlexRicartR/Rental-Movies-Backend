const { DataTypes, Model } = require('sequelize');
const sequelize = require ('../db/db');

class Movies extends Model {



};

Movies.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            len: [5,50]
        }
    }, 



});