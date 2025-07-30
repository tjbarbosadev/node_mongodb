import conn from '../db/conn';
import { ObjectId } from 'mongodb';

export default class Product {
  constructor(
    readonly name: string,
    readonly price: number,
    readonly image: string,
    readonly description: string
  ) {}

  save() {
    const product = conn.db().collection('products').insertOne({
      name: this.name,
      price: this.price,
      image: this.image,
      description: this.description,
    });

    return product;
  }

  static getProducts() {
    const products = conn.db().collection('products').find().toArray();
    return products;
  }

  static async getProductById(_id: ObjectId) {
    const product = await conn.db().collection('products').findOne({ _id });
    return product;
  }
}
