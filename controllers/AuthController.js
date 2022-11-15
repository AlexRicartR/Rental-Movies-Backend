const { user } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const AuthController = {}; 


AuthController.signIn = (req, res) =>{
        let { email, password } = req.body;
        user.findOne({ where: { email: email }
        }).then(user => {
            if (!user) {
                res.status(404).json({ msg: "This email does not belong to any registered user" });
            } else {
                if (bcrypt.compareSync(password, user.password)) {
                    let token = jwt.sign({ user: user }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });

                    res.json({
                        user: user,
                        token: token
                    })
                } else {
                    res.status(401).json({ msg: "Wrong password" })
                }
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    };

AuthController.signUp = (req, res)=> {

        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

        user.create({
            name: req.body.name,
            email: req.body.email,
            password: password
        }).then(user => {

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

