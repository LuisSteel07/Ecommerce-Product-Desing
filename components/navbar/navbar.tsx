import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import ThemeSelector from "../theme/theme-selector";
import CartPopover from "../product/cart-popover";
import Search from "./search";
import { UserDetails } from "./user-details";

export default function Navbar() {
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
        <UserDetails />
        <Search />
      </section>
    </nav>
  );
}
