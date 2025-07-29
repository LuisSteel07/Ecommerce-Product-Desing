import Image from "next/image";
import { CartProduct } from "@/types/cart-product";
import { useContext } from "react";
import { ProductContext } from "@/contexts/ProductProvider";

type CartProductProps = {
  product: CartProduct;
};

export default function CartProductCard({ product }: CartProductProps) {
  const { dispatch } = useContext(ProductContext);
  return (
    <section className="flex flex-row gap-4 items-center dark:text-white text-black/60">
      <Image
        src={product.thumbnail}
        alt="product image"
        width={64}
        height={64}
        className="w-16 rounded-md"
      />
      <div className="flex flex-col">
        <p>{product.name}</p>
        <div className="flex flex-row gap-4">
          <p>
            ${product.price} x {product.count}{" "}
          </p>
          <p className="font-bold dark:text-white text-black">
            ${(product.price * product.count).toFixed(2)}
          </p>
        </div>
      </div>
      <Image
        src="/icon-delete.svg"
        alt="icon delete"
        width={16}
        height={16}
        className="w-4 h-4"
        onClick={() =>
          dispatch({ type: "DELETE", payload: { id: product.id } })
        }
      />
    </section>
  );
}
