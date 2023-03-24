import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { cartReducer } from "./cart.reducer";

export const appReducer: ActionReducerMap<AppState> = {
  cart: cartReducer,
};
