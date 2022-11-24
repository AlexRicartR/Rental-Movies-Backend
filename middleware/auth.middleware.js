const jsonwebtoken = require("jsonwebtoken");
const models = require('../models/index');

const authBearerMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).json({ message: "Login is required to access" });
    }
    const [strategy, jwt] = authorization.split(" ");
    console.log(strategy, jwt)
    try {
        if (strategy.toLowerCase() !== "bearer") {
            throw new Error("Not valid strategy");
        }
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
        console.log(payload)
        req.auth = payload

        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthenticated" });
        return;
    }
};

const checkUserPermission = async (req, res, next) => {
    const { authorization } = req.headers;
    const [strategy, jwt] = authorization.split(" ");
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    console.log(payload)
    let body = req.body;
    const locateUser = await models.users.findAll({ where: { email: body.email } })
    console.log('Prueba de ************************ LOCATE USER ********************************************', locateUser)
    let dataUser = locateUser.map(user => user.contentData)
    console.log('Prueba de ************************ DATA USER ********************************************', dataUser)
    let userObject = dataUser.map(id => id.id_user)
    console.log('Prueba de *************************** USER OBJECT *****************************************', userObject)

    if (payload.id_user === userObject[0] ) {
        next()
    }else {
        res.send({message: "Token id does not match"})
    }
};

const isUserTypeAdmin = (req, res, next) => {
    if (req.auth?.id_usertype === 1) {
        next();
    } else {
        res.status(403).json({ message: "Unauthorized" });
    }
}

module.exports = { authBearerMiddleware, isUserTypeAdmin, checkUserPermission };