"use client";

import ProductCard from "./product-card";
import { useFetch } from "@/hooks/useFetch";
import { useContext } from "react";
import ItemsNotFound from "../messages/items-not-found";
import { ProductContext } from "@/global-store/products/context";

export default function SlicePorducts() {
  useFetch();
  const { state } = useContext(ProductContext);

  return state.products.length ? (
    state.products.slice(0, state.page.quantityProducts).map((e) => {
      if(state.search != ""){
        if(e.name.toLowerCase().includes(state.search.toLowerCase())){
          console.log(`${state.search}`)
          return <ProductCard product={e} key={e.id} />;
        }
      }
      else {
        return <ProductCard product={e} key={e.id} />;
      }
    })
  ) : (
    <ItemsNotFound />
  );
}
