const express = require('express');
const productRouter = express.Router();
const { checkAuth } = require('../middlewares/auth');
const productController = require('../controllers/productController');

productRouter.get('/', productController.getProducts);
productRouter.get('/categories', productController.getCategories);
productRouter.get('/categories/:id', productController.getProductsFromCategory);
productRouter.get(
  '/admin',
  checkAuth('isAdmin'),
  productController.getProductsForAdmin
);
productRouter.get(
  '/admin/search',
  checkAuth('isAdmin'),
  productController.searchProductForAdmin
);
productRouter.get('/vendor/:id?', productController.getProductFromVendor);
productRouter.get('/search', productController.searchProduct);
productRouter.get('/:id', productController.getProduct);
productRouter.post('/new', checkAuth('isVendor'), productController.addProduct);
productRouter.patch(
  '/:id',
  checkAuth('isVendor'),
  productController.editProduct
);
productRouter.delete(
  '/:id',
  checkAuth('isVendor'),
  productController.deleteProduct
);

module.exports = productRouter;
