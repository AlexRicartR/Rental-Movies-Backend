const express = require('express');
const router = express.Router();

const MovieController = require('../controllers/MovieController');

// Endpoints for CRUD are herein stated
router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getById);
router.get('/name/:title', MovieController.getByTitle);
router.post('/', MovieController.create);
router.put('/:id', MovieController.update);
router.delete('/', MovieController.deleteAll);
router.delete('/:id', MovieController.delete);

module.exports = router;