import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json');
  }

  getProduct(id: number): Observable<Product |undefined> {
    return this.getProducts().pipe(
      map((products) => products.find((product) => product.id === +id))
    );
  }
}
