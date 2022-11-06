const express = require('express');
const app = express();
const port = process.env.PORT || 3006;
const router = require('./router');
const db = require('./db.js');
const cors = require ('cors');

// Middleware
app.use(cors());
app.use(express.json());  
app.use(router);



//Database connection
db.then(()=>{
    //Starting server
        app.listen(port, ()=> console.log(`Node server running on http://localhost:${port}`));
    })
    .catch((err)=> console.log(err.message));