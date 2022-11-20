const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/loanController');

// Endpoints for CRUD are herein stated
router.get('/', CategoryController.getAll);
router.get('/:id', CategoryController.getById);
router.get('/type/:type', CategoryController.getByType);
router.post('/', CategoryController.create);
router.put('/:id', CategoryController.update);
router.delete('/', CategoryController.deleteAll);
router.delete('/:id', CategoryController.delete);

module.exports = router;