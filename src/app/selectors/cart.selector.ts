import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";

export const selectCart = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.items
);

export const selectCartItemCount = createSelector(
  selectCartItems,
  (items) =>
  items.reduce(
    (total, item) => total + item.count, 0
  )
);

export const selectCartTotal = createSelector(
  selectCartItems,
  (items) =>
    items.reduce(
      (total, item) => total + item.count * item.item.price,0
    )
);
