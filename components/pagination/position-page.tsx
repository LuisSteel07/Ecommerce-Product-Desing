"use client";
import { ProductContext } from "@/global-store/products/context";
import { useContext } from "react";

export default function PositionPage() {
  const { state } = useContext(ProductContext);
  return (
    <div className="flex w-fit items-center justify-center text-sm font-medium">
      Page {state.page.currentPage} of {state.page.pages}
    </div>
  );
}
