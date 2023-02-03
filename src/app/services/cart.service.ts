import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  index(): CartItem[] {
    const cart = localStorage.getItem('cart');
    if (cart) {
      return JSON.parse(cart);
    }
    return [];
  }

  findCartItemIndex(cart: CartItem[], id: number): number {
    return cart.findIndex((cartItem) => cartItem.id === id);
  }

  saveCart(cart: CartItem[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  addToCart = (item: CartItem): CartItem[] => {
    const cart = this.index();
    const index = this.findCartItemIndex(cart, item.id);
    if (index !== -1) {
      cart[index].quantity += item.quantity;
      this.saveCart(cart);
      alert(`${item.name} added to cart`);
      return cart;
    }

    cart.push(item);
    this.saveCart(cart);
    alert(`${item.name} added to cart`);
    return cart;
  };

  removeFromCart(id: number): CartItem[] {
    const cart = this.index();
    const index = this.findCartItemIndex(cart, id);

    if (index !== -1) {
      const itemToDelete = cart.splice(index, 1);
      console.log(cart);
      this.saveCart(cart);
      alert(`${itemToDelete[0].name} removed from cart`);
      return cart;
    }
    throw new Error('Cart Item not found');
  }

  calculateCost(updatedItem: CartItem | null = null): number {
    const cart = this.index();
    if (updatedItem) {
      if (updatedItem.quantity === 0) {
        this.removeFromCart(updatedItem.id);
        return this.calculateCost();
      }
      const updatedItemIndex = this.findCartItemIndex(cart, updatedItem.id);
      if (updatedItemIndex !== -1) {
        cart[updatedItemIndex].quantity = updatedItem.quantity;
        this.saveCart(cart);
      }
    }
    const cost = cart.reduce(
      (prev, curr) => curr.quantity * curr.price + prev,
      0
    );

    return parseFloat(cost.toFixed(2));
  }
}
