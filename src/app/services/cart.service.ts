import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartItem[] = [];

  constructor() {}

  index() {
    return this.cart;
  }

  addToCart = (item: CartItem): CartItem[] => {
    const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      this.cart[index] = item;
      alert(`${item.name} added to cart`);
      return this.cart;
    }

    this.cart.push(item);
    return this.cart;
  };

  removeFromCart(id: number): CartItem[] {
    const index = this.cart.findIndex((cartItem) => cartItem.id === id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      alert(`${this.cart[index].name} removed from cart`);
      return this.cart;
    }
    throw new Error('Cart Item not found');
  }
}
