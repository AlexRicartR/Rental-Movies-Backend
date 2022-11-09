const express = require ('express');
const colors = require('colors');
const morgan = require ('morgan');
const logger = require('./config/winston')
const db = require('./db/db')  //// Check if the extension does not affect project performance.
const router = require('./router')


const app = express();
const router = require ('./router');
const PORT = 3000;  // Consider including process.env.PORT || for the interest of functionality

app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());

app.get('/', (req, res) => {res.send('This is working')})
app.use(router);

db.then(() => {
    app.listen(PORT, () => {
    console.log(`Server running through port ${PORT}`);
})
});

