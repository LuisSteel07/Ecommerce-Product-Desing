import { CartProduct } from "./CartProduct";
import { ProductProps } from "./ProductProps";

export type Action =
  | { type: "DECREMENT"; payload: ProductProps }
  | { type: "DELETE"; payload: { id: number } }
  | { type: "INCREMENT"; payload: ProductProps };
