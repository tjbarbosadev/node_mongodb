import { Request, Response } from 'express';
import Product from '../models/Product';

export default class ProductsController {
  constructor() {}

  static async showProducts(req: Request, res: Response) {
    const products = await Product.getProducts();
    console.log(products);
    res.render('products/all', { products });
  }

  static createProduct(req: Request, res: Response) {
    res.render('products/create');
  }

  static createProductSave(req: Request, res: Response) {
    const { name, image, price, description } = req.body;
    const product = new Product(name, price, image, description);
    product.save();
    res.render('products/all');
  }
}
