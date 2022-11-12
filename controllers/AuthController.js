const { user } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const AuthController = {}; //Create the object controller

//-------------------------------------------------------------------------------------
//REGISTER new user in database
//create user
AuthController.signUp = (req, res)=> {

    // Encrypt the passwd
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

    // Creating user
    user.create({
        name: req.body.name,
        email: req.body.email,
        password: password
    }).then(user => {

        // Creating the token
        let token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires
        });

        res.json({
            user: user,
            token: token
        });

    }).catch(err => {
        res.status(500).json(err);
    });

};

module.exports = AuthController;