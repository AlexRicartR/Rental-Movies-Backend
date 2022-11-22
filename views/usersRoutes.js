const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authBearerMiddleware, isUserTypeAdmin, checkUserPermission } = require('../middleware/auth.middleware')

router.get('/displayUser', userController.getUser1);
router.post('/createUser', userController.userPost);
router.post('/loginUser', userController.loginUser);
router.get('/showYourUser/:id', authBearerMiddleware, checkUserPermission, userController.displayUser);
router.put('/modifUser/:id', authBearerMiddleware, checkUserPermission, userController.updatedUser);
router.delete('/deleteUser', authBearerMiddleware, checkUserPermission, isUserTypeAdmin, userController.deleteUsers);


module.exports = router