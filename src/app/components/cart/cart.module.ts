import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { CartTotalComponent } from 'src/app/components/cart-total/cart-total.component';
import { CartLineComponent } from '../cart-line/cart-line.component';



@NgModule({
  declarations: [
    CartComponent,
    CartLineComponent,
    CartTotalComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
