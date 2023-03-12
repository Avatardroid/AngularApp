import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) },
  { path: 'cart', loadChildren: () => import('./components/cart/cart.module').then(m => m.CartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
