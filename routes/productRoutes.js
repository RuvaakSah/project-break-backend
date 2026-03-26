const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.showProducts);
router.get('/dashboard', productController.showDashboard);
router.get('/dashboard/new', productController.showNewProduct);
router.post('/dashboard', productController.createProduct);
router.delete('/dashboard/:_id/delete', productController.deleteProduct);
router.get('/dashboard/:_id/edit', productController.showEditProduct);
router.put('/dashboard/:_id', productController.updateProduct);
router.get('/dashboard/:productId', productController.showProductById);

module.exports = router;