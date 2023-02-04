import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  confirmOrder():void {
    this.router.navigate(['confirmation'])
  }

}
