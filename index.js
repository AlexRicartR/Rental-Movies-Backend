const express = require('express');
const app = express();
const db = require('./db/db');
const router = require('./router');
const morgan = require('morgan');
const colors = require('colors');
const { sequelize } = require('./models/index')
const PORT = 3000;
require('dotenv').config({path:'.env'})

app.use(express.json());
app.use(router);
app.use(morgan('dev'));

app.listen(PORT, () => {
    console.log(`Server running through port ${PORT}`.bgYellow.black);
    db.authenticate().then(() => {
        console.log("Successfully connected to the database")
    }).catch(error => {
        console.log('Error: ' + error)
    })
});