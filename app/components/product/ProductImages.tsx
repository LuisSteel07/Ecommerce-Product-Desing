'use client';

import Image from "next/image"
import { useState } from "react"
import ImagesCarousel from "./ImagesCarousel";

type ProductImagesProps = {
    images: Array<string>,
    images_thumbnails: Array<string>
}

export default function ProductImages({images, images_thumbnails}:ProductImagesProps){
    const [image, setImage] = useState(images[0])

    return (
        <section className="flex flex-col justify-center items-center gap-4 md:w-[360px] sm:w-[360px] w-full">
            <ImagesCarousel actual={image} images={images} />
            <div className="lg:flex lg:flex-row hidden gap-8 justify-between">
                {
                    images_thumbnails.map((e) => {
                        return (<Image src={e} alt="Product Photo Thumbnail" className="rounded-2xl hover:border-amber-600 hover:border-2 hover:opacity-60" key={e} width={60} height={60} onClick={(event) => setImage(e.replace('-thumbnail', ''))}/>)
                    })
                }
            </div>
        </section>
    )
}