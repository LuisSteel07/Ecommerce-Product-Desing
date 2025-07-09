"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductContext } from "../Contexts/ProductContext";

export default function Product() {
  const { product, setCount } = useContext(ProductContext);
  const [value, setValue] = useState(0);

  function handle_submit() {
    setCount(value);
  }

  useEffect(() => {
    if (value < 0) {
      setValue(0);
    }
  }, [value]);

  return (
    <section className="dark:text-white flex flex-col gap-12 md:w-[480px] md:mt-8 m-8">
      <div>
        <h6 className="dark:text-white/60 font-bold text-black/60 text-[12px]">
          {product.name}
        </h6>
        <h1 className="font-bold md:text-4xl text-2xl">{product.title}</h1>
      </div>
      <p className="dark:text-white/60 text-black/60 text-lg">
        {product.description}
      </p>
      <div className="flex md:flex-col flex-row justify-between md:items-start items-center">
        <div className="flex flex-row gap-4 items-center font-bold">
          <p className="text-2xl">
            ${(product.price * product.discount) / 100}
          </p>
          <p className="bg-black p-1 text-center text-[12px] rounded-xl text-white w-10">
            {product.discount}%
          </p>
        </div>
        <p className="text-base dark:text-white/60 text-black/60 line-through">
          ${product.price}
        </p>
      </div>
      <section className="flex md:flex-row flex-col gap-4 w-full">
        <div className="flex flex-row rounded-lg dark:bg-white/10 bg-black/10 md:w-[140px] w-full h-12 text-xl justify-evenly items-center">
          <Button className="bg-muted" onClick={() => setValue(value - 1)}>
            <Image
              src={"/icon-minus.svg"}
              alt="icon minus"
              width={12}
              height={12}
            />
          </Button>
          <p className="font-bold">{value}</p>
          <Button className="bg-muted" onClick={() => setValue(value + 1)}>
            <Image
              src={"/icon-plus.svg"}
              alt="icon plus"
              width={12}
              height={12}
            />
          </Button>
        </div>
        <Button
          onClick={() => handle_submit()}
          className="bg-orange-500 hover:bg-amber-600/90 justify-center items-center gap-4 rounded-lg flex flex-row md:w-[180px] w-full h-12"
        >
          <Image
            src="/icon-cart.svg"
            alt="icon cart"
            className="dark:hidden block w-4 h-4 contrast-200"
            width={16}
            height={16}
          />
          <Image
            src="/icon-cart-light.svg"
            alt="icon cart"
            className="dark:block hidden w-4 h-4 contrast-200"
            width={16}
            height={16}
          />
          <p className="dark:text-white text-black text-[14px]">Add to cart</p>
        </Button>
      </section>
    </section>
  );
}
