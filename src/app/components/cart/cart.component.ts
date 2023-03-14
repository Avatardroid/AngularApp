import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/models/cart-item';
import { IProduct } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  cartItems!: ICartItem[];

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }
}
