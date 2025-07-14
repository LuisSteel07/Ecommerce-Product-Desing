"use client";
import { createContext, Dispatch, useReducer } from "react";
import reducer from "../reducer/reducer";
import { Action } from "../types/Action";
import { GlobalState } from "../types/GlobalState";

type ProductContextType = {
  dispatch: Dispatch<Action>;
  state: GlobalState;
};

const initialState: GlobalState = {
  products: [],
  page: 5,
  search: "",
  cart: {
    products: [],
    total: 0,
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
