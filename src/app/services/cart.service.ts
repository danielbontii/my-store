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
    const index = this.findCartItemIndex(id);
    console.log(index, this.cart[index]);

    if (index !== -1) {
      const itemToDelete = this.cart.splice(index, 1);
      alert(`${itemToDelete[0].name} removed from cart`);
      console.log(this.cart);
      return this.cart;
    }
    throw new Error('Cart Item not found');
  }

  calculateCost(updatedItem: (CartItem | null) = null ): number {
    if (updatedItem) {

      if (updatedItem.quantity === 0) {
        this.removeFromCart(updatedItem.id);
        return this.calculateCost();
      }

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
