'use client';

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
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
        <div className="flex w-full items-center justify-between relative">
            <Dialog>
                <DialogTrigger>
                        <Image src={image} alt="product photo" className="md:flex hidden z-10 md:rounded-2xl rounded-none md:w-[360px] w-full hover:scale-105 duration-200" width={360} height={360}/>
                </DialogTrigger>
                <DialogContent className="text-white bg-black/80">
                    <DialogTitle>Images</DialogTitle>
                    <section className="hidden lg:flex justify-center items-center">
                        <div className="z-50 hidden lg:flex justify-between absolute w-full">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center" onClick={() => handle_change_image(position-1)}>
                                <Image src="/icon-previous.svg" alt="icon previous" width={12} height={12}/>
                            </span>
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center" onClick={() => handle_change_image(position+1)}>
                                <Image src="/icon-next.svg" alt="icon previous" width={12} height={12}/>
                            </span>
                        </div>
                        <Image src={image} alt="product photo" className="z-10 md:rounded-2xl rounded-none md:w-[360px] w-full" width={360} height={360}/>
                    </section>
                </DialogContent>
            </Dialog>
            <section className="md:hidden flex justify-center items-center">
                <div className="z-50 lg:hidden flex justify-between absolute w-full">
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center" onClick={() => handle_change_image(position-1)}>
                        <Image src="/icon-previous.svg" alt="icon previous" width={12} height={12}/>
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center" onClick={() => handle_change_image(position+1)}>
                        <Image src="/icon-next.svg" alt="icon previous" width={12} height={12}/>
                    </span>
                </div>
                <Image src={image} alt="product photo" className="z-10 md:rounded-2xl rounded-none md:w-[360px] w-full" width={360} height={360}/>
            </section>
        </div>
    )
}