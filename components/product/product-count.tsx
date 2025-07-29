import { ProductContext } from "@/contexts/ProductProvider";
import { CartProduct } from "@/types/cart-product";
import { useContext, useEffect, useMemo, useState } from "react";

export default function ProductCount({ product }: { product: CartProduct }) {
  const { state } = useContext(ProductContext);

  const productCart = useMemo(
    () => state.cart.products.find((e) => e.id == product.id) ?? product,
    [state.cart.products, product.id]
  );

  return <p className="font-bold text-lg">{productCart.count}</p>;
}
