import { Cart } from "./cart-product";
import { Page } from "./page";
import { ProductProps } from "./ProductProps";

export type GlobalState = {
  products: Array<ProductProps>;
  page: Page;
  search: string;
  cart: Cart;
};
