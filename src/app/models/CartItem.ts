import { Product } from './Product';

export class CartItem extends Product {
  quantity: number;
  constructor(
    quantity: number,
    id: number,
    name: string,
    price: number,
    url: string,
    description: string
  ) {
    super(id, name, price, url, description);
    this.quantity = quantity;
  }
}
