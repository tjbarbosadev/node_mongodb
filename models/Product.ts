import conn from '../db/conn';

export default class Product {
  constructor(
    readonly name: string,
    readonly price: number,
    readonly description: string
  ) {}

  save() {
    const product = conn.db().collection('products').insertOne({
      name: this.name,
      price: this.price,
      description: this.description,
    });

    return product;
  }
}
