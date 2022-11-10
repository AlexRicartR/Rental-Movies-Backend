const config = require('../config/config.json')
const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USERNAME,
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        dialect: 'mysql',
        operatorsAliases: false,
        // pool: {} // Consider including a pool to set up max and min connections.
    }
)

module.exports = sequelize.authenticate()
.then((db) => {
    console.log('Database connected');
    return db;
});