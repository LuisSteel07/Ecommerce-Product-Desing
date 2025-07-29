import { FC, PropsWithChildren, useContext } from "react";
import { Button } from "../ui/button";
import { ProductContext } from "@/contexts/ProductProvider";
import { Page } from "@/types/page";

type Props = {
  step: Partial<Page>;
  disabled: boolean;
};

const PageSelector: FC<PropsWithChildren<Props>> = ({
  disabled,
  step,
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
