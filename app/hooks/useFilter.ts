import { useEffect, useState } from "react";
import { ProductProps } from "../types/ProductProps";

export function useFilter(search: string, data: Array<ProductProps> | null) {
  const [filter, setFilter] = useState<Array<ProductProps>>([]);

  useEffect(() => {
    if (data) setFilter(data.filter((e) => e.name.includes(search)));
  }, [data, search]);

  return { filter, setFilter };
}
