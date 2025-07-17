"use client";

import ProductCard from "./product-card";
import { SkeletonCard } from "../skeleton-component";
import { useFetch } from "../../hooks/useFetch";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductProvider";
import { useFilter } from "../../hooks/useFilter";

export default function ProductsList() {
  const { state } = useContext(ProductContext);
  const { data, error, loading } = useFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/Products?lastProductIndex=0&itemsPerPage=${state.page}`
  );
  const { filter } = useFilter(state.search, data);

  if (loading) return <SkeletonCard />;
  if (error)
    return (
      <h1 className="text-2xl font-bold lg:min-h-[360px] min-h-[240px] grow">
        {error}
      </h1>
    );
  if (filter.length == 0)
    return (
      <h1 className="text-2xl font-bold lg:min-h-[360px] min-h-[240px] grow">
        No Products
      </h1>
    );

  return (
    <section className="flex flex-row flex-wrap items-start gap-4 justify-center">
      {filter.map((e) => {
        return <ProductCard product={e} key={e.id} />;
      })}
    </section>
  );
}
