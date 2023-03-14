import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/models/products';

@Component({
  selector: 'app-product-line',
  templateUrl: './product-line.component.html',
  styleUrls: ['./product-line.component.css']
})
export class ProductLineComponent {
  @Input() public product!: IProduct;
  @Output() public addToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  public onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
