import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ProductProps } from "@/types/product-props";
import ActionCart from "./action-cart";
import ProductCount from "./product-count";

export default function ProductCard({ product }: { product: ProductProps }) {
  const { id, name, short_description, price, thumbnail } = product;

  const description: string =
    short_description.length > 80
      ? `${short_description.slice(0, 77)}...`
      : short_description;

  return (
    <Card className="w-[340px] m-4">
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <Link href={`/details/${id}`} className="text-orange-500 font-bold">
          View more
        </Link>
      </CardHeader>
      <CardContent className="flex flex-col gap-8 justify-center items-center">
        <Image
          src={thumbnail}
          alt="Product Image"
          width={240}
          height={240}
          className="rounded-md h-[240px] w-[240px]"
        />
        <section className="flex flex-col gap-4">
          <CardDescription className="text-xl">{description}</CardDescription>
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
