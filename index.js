const express = require('express');

/// Colors dependency is intended to provide features such as colors in the node.js console.
const colors = require('colors');
/// Morgan depency is a HTTP request logger middleware for node.js
const morgan = require('morgan');
const router = require('./router.js');
const cors = require("cors"); 
/// Winston is intended to be a logging library with support for multiple transports which basically operates as a storage device for the logs.
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