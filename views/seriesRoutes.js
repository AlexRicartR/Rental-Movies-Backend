const express = require('express');
const router = express.Router();
const serieController = require('../controllers/serieController');

// GET
router.get('/topRatedSeries', serieController.getSerie1 );
router.get('/serieById/:id', serieController.getSerie2);
router.get('/serieByName/:name', serieController.getSerie3);
router.get('/serieUpcomingEpisodes', serieController.getSerie4);
router.get('/seriePermit', serieController.getSerie5);


module.exports = router;