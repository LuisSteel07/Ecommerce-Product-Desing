import { ReactNode, useContext } from "react";
import { Button } from "../ui/button";
import { ProductContext } from "@/contexts/ProductProvider";
import { Page } from "@/types/Page";

export default function PageSelector({
  children,
  step,
  disabled,
}: {
  children: ReactNode;
  step: Page;
  disabled: boolean;
}) {
  const { dispatch } = useContext(ProductContext);
  return (
    <Button
      variant="outline"
      className="hidden h-8 w-8 p-0 lg:flex"
      disabled={disabled}
      onClick={() => {
        dispatch({
          type: "SET_PAGE",
          payload: {
            page: step,
          },
        });
      }}
    >
      {children}
    </Button>
  );
}
