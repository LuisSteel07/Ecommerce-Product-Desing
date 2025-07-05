'use client';
import Link from "next/link"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ProductProps } from "../types/ProductProps";
import { Button } from "@/components/ui/button";
import CartProduct from "./product/CartProduct";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";

type NavbarProps = {
    product: ProductProps,
    count: number,
    setCount: (value: number) => void
}

export default function Navbar({product, count, setCount}:NavbarProps) {
    return (
        <nav className="flex flex-row justify-between md:border-b-2 md:border-black/40 border-0 md:m-0 m-2 z-0">
            <section className="flex lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <div className="flex flex-row justify-center items-center gap-4">
                            <Image src="/icon-menu.svg" alt="icon menu" width={16} height={16}/>
                            <Image src="/logo.svg" alt="logo" height={16} width={80}/>
                        </div>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-white">
                        <SheetTitle>
                            <p className="font-bold text-2xl p-2">Menu</p>
                        </SheetTitle>
                        <SheetDescription></SheetDescription>
                        <Link href={"#"} className="font-semibold text-xl p-2">
                            Collections
                        </Link>
                        <Link href={"#"} className="font-semibold text-xl p-2">
                            Men
                        </Link>
                        <Link href={"#"} className="font-semibold text-xl p-2">
                            Women
                        </Link>
                        <Link href={"#"} className="font-semibold text-xl p-2">
                            About
                        </Link>
                        <Link href={"#"} className="font-semibold text-xl p-2">
                            Contact
                        </Link>
                    </SheetContent>
                    </Sheet>    
            </section>
            <section className="lg:flex hidden flex-row justify-center items-center gap-4">
                <Image src="/logo.svg" alt="logo" height={32} width={240} className="h-8 -translate-y-4 mr-4" />
                <Link href={"#"} className="h-full hover:border-b-4 hover:border-solid hover:border-b-amber-600 z-10 translate-y-0.5">
                    Collections
                </Link>
                <Link href={"#"} className="h-full hover:border-b-4 hover:border-solid hover:border-b-amber-600 z-10 translate-y-0.5">
                    Men
                </Link>
                <Link href={"#"} className="h-full hover:border-b-4 hover:border-solid hover:border-b-amber-600 z-10 translate-y-0.5">
                    Women
                </Link>
                <Link href={"#"} className="h-full hover:border-b-4 hover:border-solid hover:border-b-amber-600 z-10 translate-y-0.5">
                    About
                </Link>
                <Link href={"#"} className="h-full hover:border-b-4 hover:border-solid hover:border-b-amber-600 z-10 translate-y-0.5">
                    Contact
                </Link>
            </section>
            <section className="flex flex-row items-center justify-center gap-4">
                <Popover>
                    <PopoverTrigger>
                        <div className="z-0 flex relative">
                            <span className="z-10 -translate-y-4 translate-x-4  absolute bg-amber-600 p-3 rounded-full w-2 h-2 flex justify-center items-center">
                                <p>{count}</p>
                            </span>
                            <Image src="/icon-cart.svg" alt="cart" width={16} height={16} className="h-6 w-6"/>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="flex flex-col shadow-2xl shadow-black/60 w-[320px] bg-slate-100 p-2 gap-4 rounded-md">
                        <>
                            <h1 className="text-xl font-bold">Cart</h1>
                            <hr />
                            {
                                count == 0 ?
                                    <div className="flex justify-center items-center h-[120px]">
                                        <h1 className="text-xl font-bold">Empty Cart</h1>
                                    </div>
                                    :
                                    <>
                                        <CartProduct product={product} count={count} setCount={setCount} />
                                        <Button className="bg-amber-600">Checkout</Button>
                                    </>
                            }
                        </>
                    </PopoverContent>
                </Popover>
                <Avatar className="h-12 w-12 border-solid hover:border-amber-600 hover:border-2 transition-all ease-in-out duration-75">
                    <AvatarImage src={"/image-avatar.png"}/>
                </Avatar>
            </section>
        </nav>
    )
}

