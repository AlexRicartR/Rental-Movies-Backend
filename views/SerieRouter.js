const express = require('express');
const router = express.Router();

const SerieController = require('../controllers/SerieController');

// Endpoints for CRUD are herein stated
router.get('/', SerieController.getAll);
router.get('/:id', SerieController.getById);
router.get('/name/:title', SerieController.getByTitle);
router.post('/', SerieController.create);
router.put('/:id', SerieController.update);
router.delete('/', SerieController.deleteAll);
router.delete('/:id', SerieController.delete);

module.exports = router;