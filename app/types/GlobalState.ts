import { Cart } from "./CartProduct";
import { ProductProps } from "./ProductProps";

export type GlobalState = {
  products: Array<ProductProps>;
  cart: Cart;
};