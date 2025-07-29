import { ProductContext } from "@/contexts/ProductProvider";
import { CartProduct } from "@/types/CartProduct";
import { useContext, useEffect, useState } from "react";

export default function ProductCount({ product }: { product: CartProduct }) {
  const { state } = useContext(ProductContext);
  const [productCart, setProductCart] = useState<CartProduct>(product);

  useEffect(() => {
    setProductCart(
      state.cart.products.find((e) => e.id == product.id) || product
    );
  }, [state.cart.products, product]);

  return <p className="font-bold text-lg">{productCart.count}</p>;
}
