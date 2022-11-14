/// Internal comment: Add comments regarding each const and which functionality has. 


const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const router = require('./router.js');
const cors = require("cors"); 
const logger = require('./config/winston');
const db = require('./db.js');


const app = express();
const PORT = process.env.PORT || 3000; 

var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(cors(corsOptions)); 


app.get('/', (req, res) => {res.send('Express is working');});
app.use(router);

db.then(()=>{
        app.listen(PORT, ()=> console.log(`Server running through port ${PORT}`.bgYellow.black));
    })
    .catch((err)=> console.log(err.message));