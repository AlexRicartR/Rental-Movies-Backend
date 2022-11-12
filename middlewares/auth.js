/// Creating auth middleware structure

const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {

    console.log(req.headers);

    // Check if there is an existing token
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Access not granted" });
    } else {

        // Check if token is correct
        let token = req.headers.authorization.split(" ")[1];

        // Check if token is correct
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "A problem occurred while the token was being decoded.", err });
            } else {
                req.user = decoded;
                next();
            }

        })
    }

};