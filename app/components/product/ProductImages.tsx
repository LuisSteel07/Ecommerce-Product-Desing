"use client";

import Image from "next/image";
import { useState } from "react";
import ImagesCarousel from "./ImagesCarousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SelectImage from "./SelectImage";

type ProductImagesProps = {
  images: Array<string>;
  images_thumbnails: Array<string>;
};

export default function ProductImages({
  images,
  images_thumbnails,
}: ProductImagesProps) {
  const [image, setImage] = useState(images[0]);

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
              <ImagesCarousel actual={image} images={images} />
              <SelectImage
                images_thumbnails={images_thumbnails}
                setImage={setImage}
              />
            </article>
          </DialogContent>
        </Dialog>
        <SelectImage
          images_thumbnails={images_thumbnails}
          setImage={setImage}
        />
      </div>
      <div className="flex md:hidden w-full">
        <ImagesCarousel actual={image} images={images} />
      </div>
    </section>
  );
}
