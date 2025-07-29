"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { ProductContext } from "@/contexts/ProductProvider";

export default function Search() {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(ProductContext);

  return (
    <div className="flex flex-row gap-4 h-10">
      <Input
        className="h-10"
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
        className="h-10 dark:bg-white/80 dark:hover:bg-white/50 bg-muted hover:bg-black/50"
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
