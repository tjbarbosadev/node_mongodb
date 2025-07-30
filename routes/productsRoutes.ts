import express from 'express';
import ProductsController from '../controllers/ProductsController';

const ProductRouter = express.Router();

ProductRouter.get('/', ProductsController.showProducts);
ProductRouter.get('/:id', ProductsController.showProduct);
ProductRouter.get('/create', ProductsController.createProduct);
ProductRouter.post('/create', ProductsController.createProductSave);

export default ProductRouter;
