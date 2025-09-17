import Image from "next/image";
import { Button } from "../ui/button";
import { useContext } from "react";
import { ProductContext } from "@/global-store/products/context";
import { Action } from "@/global-store/products/actions";

export default function ActionCart(action: Action) {
  const { dispatch } = useContext(ProductContext);
  return (
    <Button className="bg-muted" onClick={() => dispatch(action)}>
      {action.type === "DECREMENT" ? (
        <Image
          src={"/icon-minus.svg"}
          alt="icon minus"
          width={12}
          height={12}
        />
      ) : (
        <Image src={"/icon-plus.svg"} alt="icon plus" width={12} height={12} />
      )}
    </Button>
  );
}
