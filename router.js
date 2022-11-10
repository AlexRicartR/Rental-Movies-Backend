const router = require('express').Router();

const RouterMovie = require('./views/RouterMovie'); /// Look over here
const RouterGenre = require('./views/RouterGenre');

router.use('/movies', RouterMovie);
router.use('/genres', RouterGenre);

module.exports = router;