const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');
const AuthController = require('../controllers/authController')

router.post('/register', loanController.createLoan);
router.get('/getAll', AuthController.assertIsAdmin, loanController.getAllLoans);
router.get('/getUserLoans/:user_id', loanController.getUserLoans)
router.put('/update/:id_item', loanController.updateLoan);
router.delete('/delete/:id_item', loanController.deleteOrder);

module.exports = router;


