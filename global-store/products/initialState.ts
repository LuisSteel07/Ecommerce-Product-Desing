import { GlobalState } from "./types";

export const initialState: GlobalState = {
  products: [],
  page: {
    currentPage: 1,
    quantityProducts: 10,
    pages: 1,
  },
  search: "",
  cart: {
    products: [],
    total: 0,
    products_amount: 0,
  },
};
