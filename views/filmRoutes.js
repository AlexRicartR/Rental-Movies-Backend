const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');


// GET
router.get('/topRatedFilm', filmController.getFilm1 );
router.get('/filmById/:id', filmController.getFilm2);
router.get('/movieByName/:name', filmController.getFilm3);
router.get('/filmByGenre/:genreM', filmController.getFilm4);


module.exports = router;