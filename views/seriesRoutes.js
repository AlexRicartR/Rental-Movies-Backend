const express = require('express');
const router = express.Router();
const serieController = require('../controllers/serieController');

// GET
router.get('/showTopRated', serieController.getSerie1 );
router.get('/showById/:id', serieController.getSerie2);
router.get('/showByName/:name', serieController.getSerie3);
router.get('/showNextEp', serieController.getSerie4);
router.get('/showPermit', serieController.getSerie5);


module.exports = router;