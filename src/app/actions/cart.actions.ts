import { createAction, props } from "@ngrx/store";
import { ICartItem } from "../models/cart-item";


export const addToCart = createAction(
  '[Cart] Add to cart',
  (product: ICartItem) => ({ product })
);
