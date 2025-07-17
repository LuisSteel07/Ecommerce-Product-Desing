import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CartProductCard from "./product-cart";
import { Button } from "@/components/ui/button";
import { ProductContext } from "../../contexts/ProductProvider";
import { useContext, useEffect, useState } from "react";

export default function CartPopover() {
  const { state } = useContext(ProductContext);
  const [allProducts, setAllProducts] = useState(0);

  useEffect(() => {
    let total = 0;
    state.cart.products.map((e) => {
      total += e.count;
    });
    setAllProducts(total);
  }, [state.cart.products]);

  return (
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
            <h1 className="dark:text-white text-black text-xl font-bold">
              Cart
            </h1>
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
  );
}
