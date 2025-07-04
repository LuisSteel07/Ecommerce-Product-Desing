'use client';

import { useEffect, useState } from "react";

type ImagesCarouselProps = {
    images: Array<string>
    actual: string
}

export default function ImagesCarousel({actual, images}: ImagesCarouselProps){
    const [position, setPosition] = useState(0)
    const [image, setImage] = useState(actual)

    function handle_change_image(new_position: number){
        if(new_position < 0 || new_position > (images.length - 1)){
            setPosition(position)
        } else setPosition(new_position)
    }

    useEffect(() => {
        setImage(images[position])
    }, [position])

    useEffect(() => {
        setImage(actual)
        let index = 0
        images.map((e) => {
            if(e == images[0]) setPosition(index)
            index++
        })
    }, [actual])

    return (
        <section>
            <div className="flex w-full items-center justify-between relative">
                <div className="z-50 md:hidden flex justify-between absolute w-full">
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center" onClick={() => handle_change_image(position-1)}>
                        <img src="/icon-previous.svg" alt="icon previous" className="p-2"/>
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center" onClick={() => handle_change_image(position+1)}>
                        <img src="/icon-next.svg" alt="icon previous" className="p-2"/>
                    </span>
                </div>
                <img src={image} alt="product photo" className="z-10 md:rounded-2xl rounded-none md:w-[360px] w-full"/>
            </div>
        </section>
    )
}