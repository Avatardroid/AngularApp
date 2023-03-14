import { IProduct } from "./products";

export interface ICartItem {
  item: IProduct;
  count: number;
}
