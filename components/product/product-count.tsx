import { ProductContext } from "@/global-store/products/context";
import { CartProduct } from "@/types/cart-product";
import { useContext, useMemo } from "react";

export default function ProductCount({ product }: { product: CartProduct }) {
  const { state } = useContext(ProductContext);

  const productCart = useMemo(
    () => state.cart.products.find((e) => e.id == product.id) ?? product,
    [state.cart.products, product]
  );

  return <p className="font-bold text-lg">{productCart.count}</p>;
}
