import { Page } from "@/types/page";
import { ProductProps } from "@/types/product-props";

export type Action =
  | { type: "DECREMENT"; payload: ProductProps }
  | { type: "DELETE"; payload: { id: number } }
  | { type: "INCREMENT"; payload: ProductProps }
  | { type: "SET_PRODUCTS"; payload: Array<ProductProps> }
  | { type: "SET_PAGE"; payload: { page: Partial<Page> } }
  | { type: "FILTER_PRODUCTS"; payload: { search: string } };
