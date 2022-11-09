const express = require ('express');
const colors = require('colors');
const morgan = require ('morgan');



const app = express();
const router = require ('./router');
const PORT = 3000;
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log(`Server running through port ${PORT}`);
});

