import Image from "next/image";
import { ProductProps } from "@/app/types/ProductProps";

type CartProductProps = {
  product: ProductProps;
  count: number;
  setCount: (value: number) => void;
};

export default function CartProduct({
  product,
  count,
  setCount,
}: CartProductProps) {
  return (
    <section className="flex flex-row gap-4 items-center dark:text-white text-black/60">
      <Image
        src={product.list_images[0]}
        alt="product image"
        width={64}
        height={64}
        className="w-16 rounded-md"
      />
      <div className="flex flex-col">
        <p>{product.title}</p>
        <p>
          ${(product.price * product.discount) / 100} x {count}{" "}
          <span className="font-bold text-black">
            ${((product.price * product.discount) / 100) * count}
          </span>
        </p>
      </div>
      <Image
        src="/icon-delete.svg"
        alt="icon delete"
        width={16}
        height={16}
        className="w-4 h-4"
        onClick={() => setCount(0)}
      />
    </section>
  );
}
