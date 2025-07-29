import { useState, useEffect, useContext } from "react";
import { ProductContext } from "@/contexts/ProductProvider";

export function useFetch() {
  const { state, dispatch } = useContext(ProductContext);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = state.search
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/Products?lastProductIndex=0&itemsPerPage=${state.page.quantityProducts}&keyword=${state.search}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/Products?lastProductIndex=0&itemsPerPage=${state.page.quantityProducts}`;

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const json = await res.json();

        dispatch({
          type: "SET_PRODUCTS",
          payload: json.items,
        });
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    };

    fetchData();
  }, [state.page, state.search, dispatch, state.products.length]);

  return { error };
}
