import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartItem[] = [];

  index() {
    return this.cart;
  }

  addToCart = (item: CartItem): CartItem[] => {
    const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      this.cart[index].quantity += item.quantity;
      alert(`${item.name} added to cart`);
      console.log(this.cart);
      return this.cart;
    }

    this.cart.push(item);
    alert(`${item.name} added to cart`);
    console.log(this.cart);

    return this.cart;
  };

  removeFromCart(id: number): CartItem[] {
    const index = this.cart.findIndex((cartItem) => cartItem.id === id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      alert(`${this.cart[index].name} removed from cart`);
      console.log(this.cart);
      return this.cart;
    }
    throw new Error('Cart Item not found');
  }
}
