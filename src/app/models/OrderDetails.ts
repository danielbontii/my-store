export class OrderDetails {
  name: string;
  cost?: number;

  constructor(name: string, cost?: number) {
    this.name = name;
    this.cost = cost;
  }
}
