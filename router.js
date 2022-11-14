


const router = require('express').Router();

const auth = require('./middlewares/auth');

//Importing routes as set forth in the views folder

const MovieRouter = require('./views/MovieRouter');
const CategoryRouter = require('./views/CategoryRouter');
const UserRouter = require('./views/UserRouter');

router.use('/api', UserRouter); 
router.use('/movies',auth, MovieRouter); 
router.use('/categories',auth, CategoryRouter);

module.exports = router;