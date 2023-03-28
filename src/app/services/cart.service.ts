import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, pipe } from 'rxjs';
import { ICartItem } from '../models/cart-item';
import { IProduct } from '../models/products';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../actions/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //private cartItems$ = new BehaviorSubject<ICartItem[]>([]);

  constructor(private store: Store) { }

  addToCart(product: IProduct) {
      let cartItem: ICartItem = {
      item: product,
      count: 1,
    }
    this.store.dispatch(addToCart(cartItem));
  }

  removeFromCart(cartItem: ICartItem): void {
    this.store.dispatch(removeFromCart(cartItem));
  }

  // addToCart(product: IProduct) {
  //   let cartItem: ICartItem = {
  //     item: product,
  //     count: 1,
  //   }
  //   let findItem = this.cartItems.find((i) => i.item.id == cartItem.item.id)
  //   if (findItem != null) {
  //     findItem.count++;
  //   }
  //   else {
  //     this.cartItems.push(cartItem);
  //   }
  // }

  // getItems() {
  //   return this.cartItems;
  // }

  // getCartTotal(): number {
  //   let total = 0;
  //   for (let citem of this.cartItems) {
  //     total += citem.count * citem.item.price;
  //   }
  //   return total;
  // }

  // getCartItemsCount() {
  //     return this.cartItemCount$.asObservable();
  // }

}
