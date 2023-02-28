import { Injectable } from '@angular/core';
import { IProduct } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items: IProduct[] = [];

  addToCart(product: IProduct) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getQtyItems() {
    return this.items.length;
  }

  getCartTotal(): number {
    let total = 0;
    for (let item of this.items) {
      total += item.price;
    }
    return total;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
