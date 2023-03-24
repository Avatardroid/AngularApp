import { ICartItem } from "../models/cart-item";

export interface CartState {
  items: ICartItem[];
}

export const initialState: CartState = {
  items: [],
};
