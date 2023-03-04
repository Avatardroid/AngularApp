import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICartItem } from '../models/cart-item';
import { IProduct } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems: ICartItem[] = [];
  private cartItemCount = new BehaviorSubject(0);

  addToCart(product: IProduct) {
    let cartItem: ICartItem = {
      item: product,
      count: 1,
    }
    let findItem = this.cartItems.find((i) => i.item.id == cartItem.item.id)
    if (findItem != null) {
      findItem.count++;
    }
    else {
      this.cartItems.push(cartItem);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1)
  }

  getItems() {
    return this.cartItems;
  }

  getCartTotal(): number {
    let total = 0;
    for (let citem of this.cartItems) {
      total += citem.count * citem.item.price;
    }
    return total;
  }

  getCartItemsCount(): BehaviorSubject<number>{
      return this.cartItemCount;
  }

}
