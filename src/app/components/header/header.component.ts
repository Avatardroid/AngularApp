import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartItemCount } from 'src/app/selectors/cart.selector';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  itemCount$!: Observable<number>;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.itemCount$ = this.store.pipe(select(selectCartItemCount));
  }

}
