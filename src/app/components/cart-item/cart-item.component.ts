import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Event } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item!: CartItem;
  quantity!: number;

  @Output() updatedItemPrice: EventEmitter<CartItem> = new EventEmitter();
  @Output() removeCartItem: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.quantity = this.item.quantity;
  }

  updateCost(item: CartItem):void {
    item.quantity = this.quantity;
    this.updatedItemPrice.emit(item);
  }

  removeFromCart(id: number): void {
    this.removeCartItem.emit(id);
  }
}
