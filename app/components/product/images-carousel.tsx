"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImagesCarouselProps = {
  images: Array<string>;
  actual: string;
};

export default function ImagesCarousel({
  actual,
  images,
}: ImagesCarouselProps) {
  const [position, setPosition] = useState(0);
  const [image, setImage] = useState(actual);

  function handle_change_image(new_position: number) {
    if (new_position < 0 || new_position > images.length - 1) {
      setPosition(position);
    } else setPosition(new_position);
  }

  useEffect(() => {
    setImage(images[position]);
  }, [position]);

  useEffect(() => {
    setImage(actual);
    let index = 0;
    images.map((e) => {
      if (e == images[0]) setPosition(index);
      index++;
    });
  }, [actual]);

  return (
    <section className="flex justify-center items-center md:w-[480px] w-[320px] relative">
      <div className="z-50 flex justify-between absolute md:w-[520px] w-[360px]">
        <span
          className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
          onClick={() => handle_change_image(position - 1)}
        >
          <Image
            src="/icon-previous.svg"
            alt="icon previous"
            width={12}
            height={12}
          />
        </span>
        <span
          className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
          onClick={() => handle_change_image(position + 1)}
        >
          <Image
            src="/icon-next.svg"
            alt="icon previous"
            width={12}
            height={12}
          />
        </span>
      </div>
      <Image
        src={image}
        alt="product photo"
        className="z-10 rounded-2xl"
        width={650}
        height={650}
        style={{ height: "auto", width: "auto" }}
      />
    </section>
  );
}
