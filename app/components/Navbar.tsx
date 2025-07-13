"use client";
import Link from "next/link";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Contexts/ProductProvider";
import CartProductCard from "./product/CartProduct";

export default function Navbar() {
  const { state } = useContext(ProductContext);
  const { setTheme } = useTheme();
  const [allProducts, setAllProducts] = useState(0);

  useEffect(() => {
    let total = 0;
    state.cart.products.map((e) => {
      total += e.count;
    });
    setAllProducts(total);
  }, [state.cart.products]);

  return (
    <nav className="flex flex-row justify-between md:border-b-2 md:border-black/10 dark:md:border-white/10 border-0 md:m-0 m-2 z-0">
      <section className="flex lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex flex-row justify-center items-center gap-4">
              <Image
                src="/icon-menu.svg"
                alt="icon menu"
                width={16}
                height={16}
                style={{ height: "auto", width: "auto" }}
              />
              <Image
                src="/logo.svg"
                alt="logo"
                height={16}
                width={80}
                style={{ height: "auto", width: "auto" }}
                className="dark:hidden block"
              />
              <Image
                src="/logo-light.svg"
                alt="logo"
                height={16}
                width={80}
                style={{ height: "auto", width: "auto" }}
                className="dark:block hidden"
              />
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="dark:bg-black bg-white">
            <SheetTitle>
              <p className="font-bold text-2xl p-2">Menu</p>
            </SheetTitle>
            <SheetDescription></SheetDescription>
            <Link href={"/"} className="font-semibold text-xl p-2">
              Home
            </Link>
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
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="logo"
            height={32}
            width={240}
            style={{ height: "auto", width: "auto" }}
            className="dark:hidden block h-8 -translate-y-4 mr-4"
          />
          <Image
            src="/logo-light.svg"
            alt="logo"
            height={32}
            width={240}
            style={{ height: "auto", width: "auto" }}
            className="dark:block hidden h-8 -translate-y-4 mr-4"
          />
        </Link>
        <Link
          href={"#"}
          className="h-full hover:border-b-4 hover:border-solid hover:border-b-amber-600 z-10 translate-y-0.5"
        >
          Collections
        </Link>
        <Link
          href={"#"}
          className="h-full hover:border-b-4 hover:border-solid hover:border-b-amber-600 z-10 translate-y-0.5"
        >
          Men
        </Link>
        <Link
          href={"#"}
          className="h-full hover:border-b-4 hover:border-solid hover:border-b-amber-600 z-10 translate-y-0.5"
        >
          Women
        </Link>
        <Link
          href={"#"}
          className="h-full hover:border-b-4 hover:border-solid hover:border-b-amber-600 z-10 translate-y-0.5"
        >
          About
        </Link>
        <Link
          href={"#"}
          className="h-full hover:border-b-4 hover:border-solid hover:border-b-amber-600 z-10 translate-y-0.5"
        >
          Contact
        </Link>
      </section>
      <section className="flex flex-row items-center justify-center gap-8 md:mb-4 mb-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white dark:bg-black" align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Popover>
          <PopoverTrigger>
            <div className="z-0 flex relative">
              <span className="z-10 -translate-y-4 translate-x-4  absolute bg-amber-600 p-3 rounded-full w-2 h-2 flex justify-center items-center">
                <p>{allProducts}</p>
              </span>
              <Image
                src="/icon-cart.svg"
                alt="cart"
                width={16}
                height={16}
                className="dark:hidden block h-6 w-6"
              />
              <Image
                src="/icon-cart-light.svg"
                alt="cart"
                width={16}
                height={16}
                className="dark:block hidden h-6 w-6"
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col shadow-2xl shadow-black/60 md:w-[420px] w-[360px] dark:bg-black bg-slate-100 p-8 gap-4 rounded-md">
            <>
              <div className="flex flex-row justify-between gap-4">
                <h1 className="dark:text-white text-black text-xl font-bold">Cart</h1>
                <p className="dark:text-white text-black text-md font-bold">
                  Total: {state.cart.total.toFixed(2)}
                </p>
              </div>
              <hr />
              {state.cart.products.length == 0 ? (
                <div className="flex justify-center items-center h-[120px]">
                  <h1 className="text-xl font-bold dark:text-white text-black">
                    Empty Cart
                  </h1>
                </div>
              ) : (
                <>
                  {state.cart.products.map((e) => {
                    return <CartProductCard product={e} key={e.id} />;
                  })}
                  <Button className="bg-amber-600">Checkout</Button>
                </>
              )}
            </>
          </PopoverContent>
        </Popover>
        <Avatar className="h-12 w-12 border-solid hover:border-amber-600 hover:border-2 transition-all ease-in-out duration-75">
          <AvatarImage src={"/image-avatar.png"} />
        </Avatar>
      </section>
    </nav>
  );
}
