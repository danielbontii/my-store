import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  name!: string;
  price!: number;

  constructor(private router: Router) {}

  ngOnInit(): void {

    const {name,cost} = history.state;
    console.log(name, cost);


    if(!(name && cost)) {
      this.router.navigate(['cart']);
    }

    this.name = history.state.name;
    this.price = history.state.cost;
  }
}
