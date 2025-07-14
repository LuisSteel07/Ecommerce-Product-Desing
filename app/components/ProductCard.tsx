import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useContext, useEffect, useState } from "react";
import { ProductProps } from "../types/ProductProps";
import { ProductContext } from "../contexts/ProductProvider";
import Link from "next/link";

type ProductCardComponent = {
  product: ProductProps;
};

export default function ProductCard({ product }: ProductCardComponent) {
  const { id, name, short_description, price, thumbnail } = product;
  const { state, dispatch } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let searchQuantity = 0;

    state.cart.products.map((e) => {
      if (e.id === id) {
        searchQuantity = e.count;
        return;
      }
    });

    if (!searchQuantity) {
      setQuantity(0);
    } else {
      setQuantity(searchQuantity);
    }
  }, [state.cart.products]);

  return (
    <Card className="w-[360px] m-4">
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
              <Button
                className="bg-muted"
                onClick={() =>
                  dispatch({
                    type: "DECREMENT",
                    payload: {
                      ...product,
                    },
                  })
                }
              >
                <Image
                  src={"/icon-minus.svg"}
                  alt="icon minus"
                  width={12}
                  height={12}
                />
              </Button>
              <p className="font-bold text-lg">{quantity}</p>
              <Button
                className="bg-muted"
                onClick={() =>
                  dispatch({
                    type: "INCREMENT",
                    payload: {
                      ...product,
                    },
                  })
                }
              >
                <Image
                  src={"/icon-plus.svg"}
                  alt="icon plus"
                  width={12}
                  height={12}
                />
              </Button>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
