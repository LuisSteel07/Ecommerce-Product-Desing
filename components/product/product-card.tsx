import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ProductProps } from "@/types/ProductProps";
import ActionCart from "./action-cart";
import ProductCount from "./product-count";

export default function ProductCard({ product }: { product: ProductProps }) {
  const { id, name, short_description, price, thumbnail } = product;

  return (
    <Card className="w-[340px] m-4">
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <Link href={`/details/${id}`} className="text-orange-500 font-bold">
          View more
        </Link>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <Image
          src={thumbnail}
          alt="Product Image"
          width={320}
          height={320}
          className="rounded-md"
        />
        <section className="flex flex-col gap-4">
          <CardDescription className="text-xl">
            {short_description}
          </CardDescription>
          <div className="flex flex-row justify-between items-center">
            <p className="font-bold text-lg">${price}</p>
            <div className="flex flex-row justify-center items-center gap-4">
              <ActionCart type="DECREMENT" payload={{ ...product }} />
              <ProductCount product={{ ...product, count: 0 }} />
              <ActionCart type="INCREMENT" payload={{ ...product }} />
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
