import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<IProduct[]>(this.url);
  }
}
