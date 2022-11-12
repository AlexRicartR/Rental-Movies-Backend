const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const GenreRouter = require('./views/GenreRouter');
const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/api', UserRouter); //Login and register routes
router.use('/movies',auth, MovieRouter); //add auth
router.use('/categories',auth, GenreRouter);

module.exports = router;