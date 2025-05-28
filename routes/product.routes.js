const express = require('express');
const router = express.Router();
const controller = require('../src/controller/productController');
const validateProduct = require('../src/middlewares/validateProduct');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', validateProduct, controller.create);
router.put('/:id', validateProduct, controller.update);
router.delete('/:id', validateProduct, controller.remove);

module.exports = router;