
const express = require('express');
const router = express.Router();

const UserRoutes = require('./views/usersRoutes');
const filmRoutes = require('./views/filmRoutes');
const seriesRoutes = require('./views/seriesRoutes');
const loansRoutes = require('./views/loanRoutes');

router.use('/users', UserRoutes);
router.use('/films', filmRoutes);
router.use('/series', seriesRoutes);
router.use('/loans', loansRoutes )


module.exports = router;