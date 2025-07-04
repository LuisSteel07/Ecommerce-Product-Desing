'use client'

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { ProductProps } from "./types/ProductProps";
import ProductImages from "./components/product/ProductImages";

let component: ProductProps = {
      title: "Fall Limited Edition Sneakers",
      name: "SNEAKER COMPANY",
      description: "These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      price: 250.00,
      discount: 50,
      list_images: [
          "/image-product-1.jpg",
          "/image-product-2.jpg",
          "/image-product-3.jpg",
          "/image-product-4.jpg"
      ],
      list_images_thumbnails: [
          "/image-product-1-thumbnail.jpg",
          "/image-product-2-thumbnail.jpg",
          "/image-product-3-thumbnail.jpg",
          "/image-product-4-thumbnail.jpg",
      ],
}

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar product={component} count={count} setCount={setCount}/>
      <article className="flex md:flex-row flex-col lg:gap-28 gap-16 justify-center md:mt-8 m-0">
        <ProductImages images={component.list_images} images_thumbnails={component.list_images_thumbnails} />
        <Product product={component} setCount={setCount} count={count}/>
      </article>
    </>
  );
}
