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
import Image from "next/image";
import Search from "./Search";
import ThemeSelector from "./ThemeSelector";
import CartPopover from "./CartPopover";
import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex md:flex-row justify-between flex-col md:border-b-2 md:border-black/10 dark:md:border-white/10 border-0 m-2 z-0">
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex flex-row items-center mb-4 gap-4">
            <Image
              src="/icon-menu.svg"
              alt="icon menu"
              width={16}
              height={80}
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
          <div className="p-2">
            <ThemeSelector />
          </div>
        </SheetContent>
      </Sheet>
      <section className="flex flex-row items-center justify-center md:gap-8 gap-4 mb-4">
        <CartPopover />
        {session ? (
          <Link href={"/account"}>
            <Avatar className="h-12 w-12 border-solid hover:border-amber-600 hover:border-2 transition-all ease-in-out duration-75">
              <AvatarImage src={session.user?.image || ""} />
            </Avatar>
          </Link>
        ) : (
          <Button onClick={() => signIn()}>Sign In</Button>
        )}
        <Search />
      </section>
      {/* <section className="xl:flex hidden flex-row justify-center items-center gap-4">
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
      </section> */}
    </nav>
  );
}
