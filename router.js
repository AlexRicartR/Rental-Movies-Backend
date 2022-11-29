

const express = require('express')
const router = express.Router()

const UsersRoutes = require('./views/UsersRoutes');
const loanRoutes = require('./views/loanRoutes');
const filmRoutes = require('./views/filmRoutes');
const SeriesRoutes = require('./views/SeriesRoutes');

router.use('/users', UsersRoutes);
router.use('/loans', loanRoutes);
router.use('/films', filmRoutes);
router.use('/series', SeriesRoutes);

module.exports = router;
