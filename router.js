


const router = require('express').Router();

const auth = require('./middlewares/auth.middleware');

//Importing routes as set forth in the views folder

const MovieRouter = require('./views/MovieRouter');
const CategoryRouter = require('./views/CategoryRouter');
const UserRouter = require('./views/UserRouter');
const SerieRouter = require('./views/SerieRouter');

router.use('/api', UserRouter); 
router.use('/movies', MovieRouter); 
router.use('/categories', CategoryRouter);
router.use('/series', SerieRouter);

module.exports = router;