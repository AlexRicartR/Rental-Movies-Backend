const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');
const { authBearerMiddleware, isUserTypeAdmin, checkUserPermission } = require('../middleware/auth.middleware');

router.post('/newLoan/:id',authBearerMiddleware, checkUserPermission, loanController.newLoan );
router.get('/loansUser/:idUser', authBearerMiddleware, checkUserPermission, loanController.loansUser );
router.get('/loanUpdate/:idUser/:loanId', authBearerMiddleware, checkUserPermission, loanController.loanUpdate );
router.get('/fullLoanList',authBearerMiddleware, isUserTypeAdmin, checkUserPermission, loanController.fullLoanList );

module.exports = router