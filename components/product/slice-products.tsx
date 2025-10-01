"use client";

import ProductCard from "./product-card";
import { useFetch } from "@/hooks/useFetch";
import { useContext } from "react";
import ItemsNotFound from "../messages/items-not-found";
import { ProductContext } from "@/global-store/products/context";

export default function SlicePorducts() {
  useFetch();
  const { state } = useContext(ProductContext);

  const startRange: number =
    state.page.currentPage == 1
      ? 0
      : state.page.quantityProducts! * state.page.currentPage! -
        state.page.quantityProducts!;

  console.log(startRange);

  return state.products.length ? (
    state.products
      .slice(startRange, state.page.quantityProducts! * state.page.currentPage!)
      .map((e) => {
        if (state.search != "") {
          if (e.name.toLowerCase().includes(state.search.toLowerCase())) {
            return <ProductCard product={e} key={e.id} />;
          }
        } else {
          return <ProductCard product={e} key={e.id} />;
        }
      })
  ) : (
    <ItemsNotFound />
  );
}
