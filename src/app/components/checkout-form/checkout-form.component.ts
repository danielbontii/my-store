import { Component, EventEmitter, Output } from '@angular/core';
import { OrderDetails } from 'src/app/models/OrderDetails';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {
  name = '';
  namePattern = '^[^s]*([a-zA-Z-])+?\\s*([a-zA-Z-])*';

  address = '';
  addressPattern: string | RegExp =
    '^[^s]*([a-zA-Z0-9-_])+?\\s*([a-zA-Z0-9-_])*';

  creditCardNumber: string | RegExp = '';
  creditCardPattern: string | RegExp = '\\d{16}';

  @Output() emmitConfirmOrder: EventEmitter<OrderDetails> = new EventEmitter();

  confirmOrder(): void {
    this.emmitConfirmOrder.emit(new OrderDetails(this.name));
  }
}
