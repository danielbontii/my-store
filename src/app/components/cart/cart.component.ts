import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartItems: CartItem[] = [];
  totalCost: number = 0;


  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.updateCart();
    this.updateTotalCost();
  }

  updateCart(): void {
    this.cartItems = this.cartService.index();
  }

  updateTotalCost(): void {
    this.totalCost = this.cartService.calculateCost();
  }

  updateItemPrice(item: CartItem):void {
    this.totalCost = this.cartService.calculateCost(item)
    this.updateCart();
  }

  removeCartItem(id: number):void {
    this.cartItems = this.cartService.removeFromCart(id);
    this.updateTotalCost();
  }

}
