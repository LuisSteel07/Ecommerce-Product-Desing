"use client";

import ProductCard from "./product-card";
import { ProductContext } from "@/contexts/ProductProvider";
import { useContext } from "react";
import ItemsNotFound from "../messages/items-not-found";
import { useFetch } from "@/hooks/useFetch";

export default function SliceProducts() {
  useFetch();
  const { state } = useContext(ProductContext);

  return state.products.length ? (
    state.products.map((e) => <ProductCard product={e} key={e.id} />)
  ) : (
    <ItemsNotFound />
  );
}
