import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICartItem } from 'src/app/models/cart-item';
import { selectCartItems } from 'src/app/selectors/cart.selector';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items$!: Observable<ICartItem[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.items$ = this.store.pipe(select(selectCartItems));
  }

}
