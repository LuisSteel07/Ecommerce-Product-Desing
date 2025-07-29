import { Cart } from "./CartProduct";
import { Page } from "./Page";
import { ProductProps } from "./ProductProps";

export type GlobalState = {
  products: Array<ProductProps>;
  page: Page;
  search: string;
  cart: Cart;
};
