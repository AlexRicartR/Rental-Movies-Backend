const express = require('express');
const router = express.Router();
const SerieController = require('../controllers/SerieController')
const authControllers = require('../controllers/authController')


router.post('/register', authControllers.assertIsAdmin, SerieController.registerSerie);
router.get('/getAll', SerieController.getSeries);
router.get('/upcomingSeries', SerieController.getUpcomingSeries)
router.get('/getTopRated', SerieController.getTopRatedSeries);
router.get('/getById/:id_serie', SerieController.getSerieById);
router.get('/getByTitle/:title', SerieController.getSerieByTitle);
router.get('/getAllTheater', SerieController.getTheaterSeries);
router.put('/update/:id_serie', authControllers.assertIsAdmin, SerieController.updateSerie);
router.delete('/delete/:id_serie', authControllers.assertIsAdmin, SerieController.deleteSerie);

module.exports = router;


