"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductProvider";

export default function Search() {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(ProductContext);

  return (
    <div className="flex flex-row gap-4">
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        onClick={() =>
          dispatch({ type: "FILTER_PRODUCTS", payload: { search: value } })
        }
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
