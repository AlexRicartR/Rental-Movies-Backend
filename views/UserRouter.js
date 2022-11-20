const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/userController');


router.post('/signin', AuthController.signIn);
router.post('/signup', AuthController.signUp);


module.exports = router;