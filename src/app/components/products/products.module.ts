import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductLineComponent } from '../product-line/product-line.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductLineComponent,
    ProductLineComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
