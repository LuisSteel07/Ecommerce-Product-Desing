"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import ImagesCarousel from "./ImagesCarousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SelectImage from "./SelectImage";
import { ProductContext } from "@/app/contexts/ProductProvider";

export default function ProductImages(params: { id: number }) {
  const { state } = useContext(ProductContext);

  let product = state.products.find((e) => e.id == params.id);

  if (!product) {
    product = state.products[0];
  }

  const [image, setImage] = useState(product.thumbnail);

  return (
    <section className="flex flex-col justify-center items-center gap-4 md:w-[500px] sm:w-[360px] w-full">
      <div className="md:flex md:flex-col hidden w-[480px]">
        <Dialog>
          <DialogTrigger>
            <Image
              src={image}
              alt="product photo"
              className="rounded-2xl"
              width={480}
              height={480}
            />
          </DialogTrigger>
          <DialogContent className="dark:text-white text-black bg-transparent border-0 w-[650px] shadow-none">
            <DialogTitle></DialogTitle>
            <article className="w-full">
              <ImagesCarousel actual={image} images={[image]} />
              <SelectImage images_thumbnails={[image]} setImage={setImage} />
            </article>
          </DialogContent>
        </Dialog>
        <SelectImage images_thumbnails={[image]} setImage={setImage} />
      </div>
      <div className="flex justify-center md:hidden w-full">
        <ImagesCarousel actual={image} images={[image]} />
      </div>
    </section>
  );
}
