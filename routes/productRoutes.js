const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.showProducts);
router.get('/dashboard', productController.showDashboard);
router.get('/dashboard/new', productController.showNewProduct);
router.post('/dashboard', productController.createProduct);
router.delete('/dashboard/:productId/delete', productController.deleteProduct);

module.exports = router;