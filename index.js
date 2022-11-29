const express = require('express');
const app = express();
const db = require('./db/db')
const router = require('./router')
const colors = require('colors');
require('./models/associations')

const PORT = 3000;

app.use(express.json());
app.use(router)

app.listen(PORT, () => {

    console.log(`Server running through port ${PORT}`.bgYellow.black);

    db.authenticate()
        .then(() => {
            console.log('Successfully connected to the database');
        })
        .catch(() => { console.log('Unable to connect to the database') })
});

