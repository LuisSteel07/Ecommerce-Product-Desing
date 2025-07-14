"use client";

import ProductCard from "./ProductCard";
import { SkeletonCard } from "./SkeletonComponent";
import { useFetch } from "../hooks/useFetch";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";

export default function ProductsList() {
  const { state } = useContext(ProductContext);
  const { data, error, loading } = useFetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/Products?lastProductIndex=0&itemsPerPage=${state.page}`
  );

  if (loading) return <SkeletonCard />;
  if (error) return <h1 className="text-2xl font-bold">{error}</h1>;

  return (
    <section className="flex flex-row flex-wrap gap-4 justify-center">
      {data?.map((e) => {
        if (e.name.includes(state.search))
          return <ProductCard product={e} key={e.id} />;
      })}
    </section>
  );
}
