import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICartProducts } from './models/products.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any[]>('/api/products');
  }

  getCart(): Observable<ICartProducts[]> {
    return this.http.get<ICartProducts[]>(`/api/getCart`);
  }

  addToCart(productId: number) {
    return this.http.post<any>('/api/addToCart', {productId});
  }
}
