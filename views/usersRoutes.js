const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/authController');

router.post('/register', AuthController.authRegisterController, UserController.registerUser)
router.post('/login', UserController.loginUser);
router.get('/getAll', UserController.getUsers);
router.get('/getById/:id_user', UserController.getUserById);
router.put('/update/:id_user', UserController.updateUser)
router.delete('/delete/:id_user', AuthController.assertIsAdmin, UserController.deleteUser)

module.exports = router;
