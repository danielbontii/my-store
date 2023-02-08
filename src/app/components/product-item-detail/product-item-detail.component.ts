import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {
  product: Product | undefined;
  quantity: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.quantity = 1;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.productService
        .getProduct(params['id'])
        .subscribe((res) => (this.product = res));
    });
  }

  addToCart() {
    this.cartService.addToCart({
      ...(this.product as Product),
      quantity: this.quantity
    });
  }
}
