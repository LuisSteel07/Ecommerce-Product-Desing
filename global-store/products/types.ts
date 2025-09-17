import { Cart } from "@/types/cart-product";
import { Page } from "@/types/page";
import { ProductProps } from "@/types/product-props";

export type GlobalState = {
  products: Array<ProductProps>;
  page: Partial<Page>;
  search: string;
  cart: Cart;
};
