import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';

import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  quantity: number;

  @Output() addCartItem: EventEmitter<CartItem> = new EventEmitter();

  constructor(private cartService: CartService) {
    this.quantity = 1;
  }

  addToCart() {
    this.cartService.addToCart({ ...this.product, quantity: this.quantity });
  }
}
