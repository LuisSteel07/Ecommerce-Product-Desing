import { FC, PropsWithChildren, useContext } from "react";
import { Button } from "../ui/button";
import { Page } from "@/types/page";
import { ProductContext } from "@/global-store/products/context";

type Props = {
  step: Partial<Page>;
  disabled: boolean;
};

const PageSelector: FC<PropsWithChildren<Props>> = ({
  step,
  disabled,
  children,
}) => {
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
};

export default PageSelector;
