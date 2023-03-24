import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartItem } from 'src/app/models/cart-item';
import { IProduct } from 'src/app/models/products';

@Component({
  selector: 'app-cart-line',
  templateUrl: './cart-line.component.html',
  styleUrls: ['./cart-line.component.css']
})
export class CartLineComponent {
  @Input() public cartItem!: ICartItem;
  @Output() public removeFromCart: EventEmitter<ICartItem> = new EventEmitter<ICartItem>();

  public onRemoveFromCart(): void {
    this.removeFromCart.emit(this.cartItem);
  }
}
