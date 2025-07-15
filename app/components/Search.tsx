"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductProvider";

export default function Search() {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(ProductContext);

  return (
    <div className="flex flex-row gap-4 h-[40px]">
      <Input
        className="h-[40px]"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter"
            ? dispatch({ type: "FILTER_PRODUCTS", payload: { search: value } })
            : {}
        }
      />
      <Button
        onClick={() =>
          dispatch({ type: "FILTER_PRODUCTS", payload: { search: value } })
        }
        className="h-[40px]"
      >
        <Image
          alt="Magnifier icon"
          width={20}
          height={20}
          src={"/magnifier.svg"}
        />
      </Button>
    </div>
  );
}
