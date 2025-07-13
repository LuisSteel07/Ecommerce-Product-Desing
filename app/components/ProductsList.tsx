"use client";

import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../Contexts/ProductProvider"

export default function ProductsList() {
  const { state } = useContext(ProductContext);

  return (
    <>
      {state.products.map((e) => {
        return <ProductCard product={e} key={e.id} />;
      })}
    </>
  );
}
