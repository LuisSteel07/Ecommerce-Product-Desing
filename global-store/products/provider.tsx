"use client";
import { useReducer } from "react";
import { initialState } from "./initialState";
import { ProductContext } from "./context";
import reducer from "./reducer";

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
