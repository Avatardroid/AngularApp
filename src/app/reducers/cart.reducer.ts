import { createReducer, on } from "@ngrx/store";
import { addToCart } from "../actions/cart.actions";
import { initialState } from "../state/cart.state";

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => {
    const curItem = state.items.find(item => item.item.id === product.item.id);
    if (curItem != null) {
      return {
        ...state,
        items: state.items.map(item =>
          item.item.id === product.item.id ? { ...item, count: item.count + 1 } : item
        )
      };
    } else {
      return {
        ...state,
        items: [...state.items, product]
      };
    }
  })
);
