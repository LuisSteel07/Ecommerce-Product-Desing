"use client";
import reducer from "@/reducer/reducer";
import { Action } from "@/types/action";
import { GlobalState } from "@/types/globalState";
import { createContext, Dispatch, useReducer } from "react";

type ProductContextType = {
  dispatch: Dispatch<Action>;
  state: GlobalState;
};

const initialState: GlobalState = {
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

export const ProductContext = createContext<ProductContextType>({
  dispatch: () => {},
  state: initialState,
});

export default function ProductProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ dispatch, state }}>
      {children}
    </ProductContext.Provider>
  );
}
