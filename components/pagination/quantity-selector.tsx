"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductContext } from "@/contexts/ProductProvider";
import { useContext } from "react";

export default function QuantitySelector() {
  const { state, dispatch } = useContext(ProductContext);

  return (
    <div className="hidden items-center gap-2 lg:flex">
      <Label htmlFor="rows-per-page" className="text-sm font-medium">
        Rows per page
      </Label>
      <Select
        onValueChange={(value) => {
          dispatch({
            type: "SET_PAGE",
            payload: {
              page: {
                actualPage: state.page.actualPage,
                quantityProducts: Number(value),
                pages: Math.ceil(
                  state.page.quantityProducts / Number(value)
                ),
              },
            },
          });
        }}
      >
        <SelectTrigger size="sm" className="w-20" id="rows-per-page">
          <SelectValue placeholder={state.page.quantityProducts} />
        </SelectTrigger>
        <SelectContent side="top">
          {[10, 15, 20, 30].map((pageSize) => (
            <SelectItem key={pageSize} value={`${pageSize}`}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
