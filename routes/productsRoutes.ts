import express from 'express';
import ProductsController from '../controllers/ProductsController';

const ProductRouter = express.Router();

ProductRouter.get('/create', ProductsController.createProduct);
ProductRouter.post('/create', ProductsController.createProductSave);

ProductRouter.get('/edit/:id', ProductsController.editProduct);
ProductRouter.post('/edit/', ProductsController.editProductSave);

ProductRouter.get('/delete/:id', ProductsController.deleteProduct);

ProductRouter.get('/:id', ProductsController.showProduct);
ProductRouter.get('/', ProductsController.showProducts);

export default ProductRouter;
