const express = require('express');
const router = express.Router();
const FilmController = require('../controllers/filmController');
const authController = require ('../controllers/authController'); ///////////////////////////// REVISAR /////////////////////////

router.post('/registerFilm',authController.assertIsAdmin, FilmController.registerFilm);
router.get('/getAll',FilmController.getFilms);
router.get('/getTopRated', FilmController.getTopRatedFilms);
router.get('/getById/:id' , FilmController.getFilmById);
router.get('/getByTitle/:title', FilmController.getFilmByTitle);
router.get('/getByGenre/:genre', FilmController.getFilmsByGenre);
router.put('/update/:id_film',authController.assertIsAdmin, FilmController.updateFilm);
router.delete('/delete/:id_film', authController.assertIsAdmin,FilmController.deleteFilm);

module.exports = router;