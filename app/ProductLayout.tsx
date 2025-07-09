"use client";
import { useState } from "react";
import { ProductContext } from "./Contexts/ProductContext";
import { ProductProps } from "./types/ProductProps";
import ProductImages from "./components/product/ProductImages";
import Product from "./components/Product";

const product: ProductProps = {
  title: "Fall Limited Edition Sneakers",
  name: "SNEAKER COMPANY",
  description:
    "These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 250.0,
  discount: 50,
  list_images: [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ],
  list_images_thumbnails: [
    "/image-product-1-thumbnail.jpg",
    "/image-product-2-thumbnail.jpg",
    "/image-product-3-thumbnail.jpg",
    "/image-product-4-thumbnail.jpg",
  ],
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState<number>(0);

  return (
    <ProductContext.Provider value={{ product, count, setCount }}>
      {children}
      <article className="flex lg:flex-row flex-col items-center lg:gap-28 gap-16 justify-center md:mt-24 m-0">
        <ProductImages />
        <Product />
      </article>
    </ProductContext.Provider>
  );
}
