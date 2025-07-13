"use client";
import { createContext, Dispatch, useReducer } from "react";
import { ProductProps } from "../types/ProductProps";
import reducer from "../Reducer/reducer";
import { Action } from "../types/Action";
import { GlobalState } from "../types/GlobalState";

const products: Array<ProductProps> = [
  {
    id: 12,
    name: "Malta Van Pur 330ml (six pack)",
    short_description:
      "Pack de 6 latas de Malta Van Pur, con un sabor auténtico y refrescante.",
    price: 3.99,
    thumbnail:
      "https://cdn.compratoday.com/products/PUCARA/02 Malta Van Pur.jpg",
  },
  {
    id: 13,
    name: "Other Malta Van Pur 330ml (six pack)",
    short_description:
      "Pack de 6 latas de Malta Van Pur, con un sabor auténtico y refrescante.",
    price: 3.99,
    thumbnail:
      "https://cdn.compratoday.com/products/PUCARA/02 Malta Van Pur.jpg",
  },
];

type ProductContextType = {
  dispatch: Dispatch<Action>;
  state: GlobalState;
};

const initialState: GlobalState = {
  products: products,
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
