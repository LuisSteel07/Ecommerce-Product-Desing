import { Cart } from "./cart-product";
import { Page } from "./page";
import { ProductProps } from "./product-props";

export type GlobalState = {
  products: Array<ProductProps>;
  page: Page;
  search: string;
  cart: Cart;
};
