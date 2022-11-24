const models = require('../models/index');
const bcrypt = require('bcrypt');

/// Check last video regarding jsonwebtoken

const jsonwebtoken = require("jsonwebtoken");
const userController = {};

/* Below const is intended to be called from auth.service. 
**Internal comment: Double check if it does not conflict. */

const {
    isEmailOk,
    isPassOk,
    /// ** Internal comment: Check notes 
} = require('../services/auth.service');

userController.getUser1 = async (req, res) => {
    try {
        let resp = await models.users.findAll()
        res.send(resp)

    } catch (err) {
        res.send(err)
    }

};

/// Below function is inteded to check first if password is valid and secondly if the email is valid.

userController.userPost = async (req, res) => {
    const body = req.body;
    try {
        isPassOk(body.password);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Ooops! Wrong password: " + error.message });
        return;
    }
    try {
        isEmailOk(body.email);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Ooops! Wrong email: " + error.message });
        return;
    }

    /// Following the example as stated in npmjs.com/package/bcrypt 
    try {
        const basicPass = body.password
        bcrypt.genSalt(function async(err, salt) {
            bcrypt.hash(basicPass, salt, async function (err, hash) {
                const createdUser = await models.users.create(
                    {
                        name: body.name,
                        email: body.email,
                        dateBirth: body.dateBirth,
                        password: hash,
                        id_usertype: body.id_usertype

                    }
                )
                res.send(createdUser)
            });
        });
    } catch (err) {
        res.send(err)
    }
};

userController.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const locateUser = await models.users.findOne({ where: { email: email } });
    if (!locateUser) {
        return res.status(404).json({ message: "Wrong password and/or email address" })
    }

    /// Following example

    const hashedPassword = () => {
        const loginPassword = password;
        bcrypt.compare(loginPassword, locateUser.password, function (err, result) {

            if (!result) {
                return res.send({ message: "Wrong password and/or email address" });
            } else {
                const secret = process.env.JWT_SECRET || '';
                const jwt = jsonwebtoken.sign({
                    id_user: locateUser.id_user,
                    email: locateUser.email,
                    created: Date.now(),
                    id_usertype: locateUser.id_usertype
                }, secret);
                return res.send({
                    message: "You have been logged in successfully",
                    jwt: jwt,
                });
            }
        });
    }
    hashedPassword()


}



userController.displayUser = async (req, res) => {
    let id = req.params;
    const { email } = req.body
    try {
        const locateUser = await models.users.findAll({ where: { email: email } })
        let dataUser = locateUser.map(user => user.dataValues)
        let userObject = dataUser.map(id => id.id_user)
        if (Number(id.id) === userObject[0]) {
            let user = await models.users.findOne({
                where: { email: email }
            })
            res.send(user)
        } else {
            res.send({ message: 'Hey buddy! It seems that you are trying to perform a search that does not match the route id.' })
        }

    } catch (err) {
        res.send(err)
    }
};

userController.updatedUser = async (req, res) => {
    try {
        let id = req.params.id;
        let user = req.body;
        const locateUser = await models.users.findAll({ where: { email: user.email } })
        let dataUser = locateUser.map(user => user.dataValues)
        let userObject = dataUser.map(id => id.id_user)
        if (Number(id) === userObject[0]) {
            let resp = await models.users.update(
                {
                    name: user.name,
                    email: user.email,
                    dateBirth: user.dateBirth
                },
                {
                    where: { id_user: id }
                }
            )
            res.send({
                resp: resp,
                message: 'User successfully updated'
            })
        } else {
            res.send({ message: 'Hey buddy! It appears that you are attempting to modify a route that does not apply to your account.' })
        }

    } catch (err) {
        res.send(err)
    }
};

userController.deleteUsers = async (req, res) => {
    try {
        let id = req.body
        let resp = await models.users.destroy({
            where: { id_user: id.id_user }
        })
        if (resp == 1) {
            res.send("User succesfully deleted.")
        } else {
            res.send("Unable to delete user.")
        }
    } catch (err) {
        res.send(err)
    }
}
module.exports = userController