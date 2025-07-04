"use client"

import { ProductProps } from "../types/ProductProps";
import ProductImages from "./product/ProductImages";
import { useEffect, useState } from "react";

type ProductComponentProps = {
    product: ProductProps,
    setCount: Function,
    count: number
}

export default function Product({product, setCount, count}:ProductComponentProps){
    const [value, setValue] = useState(0)

    function handle_submit(){
        setCount(value)
    }

    useEffect(() => {
        if(value < 0){
            setValue(0)
        }
    }, [value])

    return (
        <section className="flex flex-col gap-8 md:w-[360px] md:mt-8 m-8">
            <div>
                <h6 className="font-bold text-black/60 text-[12px]">{product.name}</h6>
                <h1 className="font-bold md:text-4xl text-2xl">{product.title}</h1>
            </div>
            <p className="text-black/60 text-[14px]">{product.description}</p>
            <div className="flex md:flex-col flex-row justify-between md:items-start items-center">
                <div className="flex flex-row gap-4 items-center font-bold">
                    <p className="text-2xl">${(product.price * product.discount) / 100}</p>
                    <p className="bg-black p-1 text-center text-[12px] rounded-xl text-white w-10">{product.discount}%  </p>
                </div>
                <p className="text-base text-black/60 line-through">${product.price}</p>
            </div>
            <section className="flex md:flex-row flex-col gap-4 w-full">
                <div className="flex flex-row rounded-lg bg-black/10 md:w-[140px] w-full h-12 text-xl justify-evenly items-center">
                    <img src={"/icon-minus.svg"} onClick={e => setValue(value-1)} />
                    <p className="font-bold">{value}</p>
                    <img src={"/icon-plus.svg"} onClick={e => setValue(value+1)} />
                </div>
                <button onClick={(e) => handle_submit()} className="bg-amber-600 hover:bg-amber-500/80 transition-all ease-in-out duration-100 justify-center items-center gap-4 rounded-lg flex flex-row md:w-[180px] w-full h-12">
                    <img src="/icon-cart.svg" alt="icon cart" className="w-4 h-4 contrast-200" />
                    <p className="font-bold text-[14px]">Add to cart</p>
                </button>
            </section>
        </section>
    )
}