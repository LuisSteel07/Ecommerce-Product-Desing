import { Action } from "../types/Action";
import { CartProduct } from "../types/CartProduct";
import { GlobalState } from "../types/GlobalState";

export default function reducer(
  state: GlobalState,
  action: Action
): GlobalState {
  switch (action.type) {
    case "INCREMENT":
      const existingProduct = state.cart.products.find(
        (e) => e.id === action.payload.id
      );

      let updatedCartProducts: CartProduct[];

      if (existingProduct) {
        updatedCartProducts = state.cart.products.map((e) =>
          e.id === action.payload.id ? { ...e, count: e.count + 1 } : e
        );
      } else {
        updatedCartProducts = [
          ...state.cart.products,
          { ...action.payload, count: 1 },
        ];
      }

      const incrementTotal = updatedCartProducts.reduce(
        (sum, item) => sum + item.price * item.count,
        0
      );

      return {
        ...state,
        cart: {
          products: updatedCartProducts,
          total: incrementTotal,
        },
      };
    case "DECREMENT":
      const updatedCartProductsDecrement = state.cart.products
        .map((e) =>
          e.id === action.payload.id ? { ...e, count: e.count - 1 } : e
        )
        .filter((e) => e.count > 0);

      const decrementTotal = updatedCartProductsDecrement.reduce(
        (sum, item) => sum + item.price * item.count,
        0
      );

      return {
        ...state,
        cart: {
          products: updatedCartProductsDecrement,
          total: decrementTotal,
        },
      };
    case "DELETE":
      const filterCartProduct = state.cart.products.filter(
        (e) => e.id != action.payload.id
      );
      const filterTotal = filterCartProduct.reduce(
        (sum, item) => sum + item.price * item.count,
        0
      );
      return {
        ...state,
        cart: {
          products: filterCartProduct,
          total: filterTotal,
        },
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        cart: state.cart,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload.page,
      };
    case "FILTER_PRODUCTS":
      return {
        ...state,
        search: action.payload.search,
      };
  }
}
