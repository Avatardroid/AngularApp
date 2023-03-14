import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css']
})
export class CartTotalComponent {
  public total: number;

  constructor(private cartService: CartService) {
    this.total = cartService.getCartTotal();
  }
}
