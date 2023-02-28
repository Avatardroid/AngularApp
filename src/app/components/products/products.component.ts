import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];
  productsSubscription!: Subscription;

  constructor(private ProductService: ProductsService,
              private cartService: CartService) { }

  ngOnInit() {
    this.productsSubscription = this.ProductService.getProducts().subscribe((data) => {this.products = data});
  }

  ngOnDestroy(){
    if(this.productsSubscription) this.productsSubscription.unsubscribe();
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }
}
