"use client";

import ProductCard from "./product-card";
import { ProductContext } from "@/contexts/ProductProvider";
import { useFetch } from "@/hooks/useFetch";
import { useContext } from "react";
import ItemsNotFound from "../messages/items-not-found";

export default function SlicePorducts() {
  const { } = useFetch();
  const { state } = useContext(ProductContext);

  return (
    <>
      {
        state.products.length != 0 ?
          state.products.slice(0, state.page.quantityProducts).map((e) => 
          {
            return <ProductCard product={e} key={e.id} />;
          })
          :
          <ItemsNotFound />
      }
    </>
  );
}
