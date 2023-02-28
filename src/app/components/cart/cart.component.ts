import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  products!: IProduct[];

  ngOnInit() {
    this.products = this.cartService.getItems();
  }
}
