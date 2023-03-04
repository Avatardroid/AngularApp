import { Component, Input } from '@angular/core';
import { ICartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart-line',
  templateUrl: './cart-line.component.html',
  styleUrls: ['./cart-line.component.css']
})
export class CartLineComponent {
  @Input() public cartItem!: ICartItem;

}
