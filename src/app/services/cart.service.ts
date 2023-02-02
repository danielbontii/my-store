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

  findCartItemIndex(id: number): number {
    return this.cart.findIndex((cartItem) => cartItem.id === id);
  }

  addToCart = (item: CartItem): CartItem[] => {
    // const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);
    const index = this.findCartItemIndex(item.id);
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
    // const index = this.cart.findIndex((cartItem) => cartItem.id === id);
    const index = this.findCartItemIndex(id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      alert(`${this.cart[index].name} removed from cart`);
      console.log(this.cart);
      return this.cart;
    }
    throw new Error('Cart Item not found');
  }

  calculateCost(updatedItem: (CartItem | null) = null ): number {
    if (updatedItem) {
      const updatedItemIndex = this.findCartItemIndex(updatedItem.id);

      if (updatedItemIndex !== -1) {
        this.cart[updatedItemIndex].quantity = updatedItem.quantity;
      }
    }
    const cost =  this.cart.reduce(
      (prev, curr) => curr.quantity * curr.price + prev,
      0
    );

    return parseFloat(cost.toFixed(2));
  }
}
