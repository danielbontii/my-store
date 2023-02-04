import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  name: string = '';
  namePattern: string | RegExp = '^[^\s]*([a-zA-Z-])+?\\s*([a-zA-Z-])*'

  address: string = '';
  addressPattern: string | RegExp = '^[^\s]*([a-zA-Z0-9-_])+?\\s*([a-zA-Z0-9-_])*'


  @Input()
  creditCardNumber: string | RegExp = '';
  creditCardPattern: string | RegExp = '\\d{16}';

  constructor(private router: Router, private cartService: CartService) {}

  confirmOrder():void {
    this.cartService.emptyCart();
    this.router.navigate(['confirmation'])
  }

}
