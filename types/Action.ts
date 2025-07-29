import { Page } from "./Page";
import { ProductProps } from "./ProductProps";

export type Action =
  | { type: "DECREMENT"; payload: ProductProps }
  | { type: "DELETE"; payload: { id: number } }
  | { type: "INCREMENT"; payload: ProductProps }
  | { type: "SET_PRODUCTS"; payload: Array<ProductProps> }
  | { type: "SET_PAGE"; payload: { page: Page } }
  | { type: "FILTER_PRODUCTS"; payload: { search: string } };
