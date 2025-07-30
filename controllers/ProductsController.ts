import { Request, Response } from 'express';
import Product from '../models/Product';

export default class ProductsController {
  constructor() {}

  static showProducts(req: Request, res: Response) {
    res.render('products/all');
  }

  static createProduct(req: Request, res: Response) {
    res.render('products/create');
  }

  static createProductSave(req: Request, res: Response) {
    const { name, price, description } = req.body;
    console.log(name, price, description);
    const product = new Product(name, price, description);
    product.save();
    res.render('products/all');
  }
}
