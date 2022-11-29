const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const UserController = {};
const generateToken = (user) => {
    return jwt.sign({ email: user.email }, authConfig.secret, {
        expiresIn: authConfig.expires
    })
}

UserController.getUsers = async (req, res) => {
    try {
        User.findAll()
            .then(resp => {
                res.send(resp);
            });
    } catch (error) {
        res.send(error);
    }
}

UserController.getUserById = async (req, res) => {
    try {
        let id_user = req.params.id_user;
        User.findByPk(id_user)
            .then(resp => {
                res.send(resp);
            });

    } catch (error) {
        res.send(error);
    }
}

UserController.registerUser = async (req, res) => {
    try {
        let data = req.body;
        let password = bcrypt.hashSync(data.user_password, Number.parseInt(authConfig.rounds || 10));
        let user = await User.create({
            email: data.email,
            user_password: password,
            username: data.username,
            surname_user: data.surname_user,
            admin_status:  data.admin_status || false

        })
        res.send({
            resp: {
                user: data.email,
                token: generateToken(user)
            },
            message: 'User created successfully'
        });

    } catch (error) {
        res.send(error)
    }

}

UserController.loginUser = async (req, res) => {
    try {
        let data = req.body

        const user = await User.findOne({ where: { email: data.email } })
        const validPassword = await bcrypt.compareSync(data.user_password, user.user_password)

        if (!validPassword) {
            throw new Error("Invalid username or password")
        }
        res.send({
            resp: {
                user: data.email,
                token: generateToken(user)
            },
            message: 'Login successful'
        });
    }

    catch (error) {
        res.status(401).send({
            message: "Invalid email/password"
        });
    }

}

UserController.updateUser = async (req, res) => {
    try {

        let data = req.body;
        if (data.user_password) {
            data.user_password = bcrypt.hashSync(data.user_password, Number.parseInt(authConfig.rounds || 10));
        }
        let user = await User.update(
            {
                "user_password": data.user_password,
                "username": data.username,
                "surname_user": data.surname_user,

            }, {
            where: { id_user: req.params.id_user }

        });
        res.send({
            token: generateToken(user),
            message: 'User updated successfully.'
        })

    } catch (error) {
        res.send(error);
    }
};

UserController.deleteUser = async (req, res) => {

    try {

        let data = req.params;
        let resp = await User.destroy({
            where: { id_user: data.id_user }
        })
        if (resp == 1) {
            res.send('User has been deleted');
        } else {
            res.send("User hasn't been deleted");
        }

    } catch (error) {
        res.send(error);
    }

}

module.exports = UserController;