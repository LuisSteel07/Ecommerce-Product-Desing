import { createContext, Dispatch } from "react";
import { initialState } from "./initialState";
import { Action } from "./actions";
import { GlobalState } from "./types";

type ProductContextType = {
  dispatch: Dispatch<Action>;
  state: GlobalState;
};

export const ProductContext = createContext<ProductContextType>({
  dispatch: () => {},
  state: initialState,
});
