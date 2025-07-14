"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductProvider";

export default function Pagination() {
  const { state, dispatch } = useContext(ProductContext);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (state.page == 5) setLocked(true);
    else setLocked(false);
  }, [state.page]);

  return (
    <div className="flex flex-row grow justify-center items-center gap-8">
      <Button
        onClick={() =>
          dispatch({ type: "SET_PAGE", payload: { page: state.page - 5 } })
        }
        disabled={locked}
      >
        <Image
          src={"/icon-previous.svg"}
          width={12}
          height={12}
          alt="previous icon"
        />
      </Button>
      <p>{state.page}</p>
      <Button
        onClick={() =>
          dispatch({ type: "SET_PAGE", payload: { page: state.page + 5 } })
        }
      >
        <Image src={"/icon-next.svg"} width={12} height={12} alt="next icon" />
      </Button>
    </div>
  );
}
