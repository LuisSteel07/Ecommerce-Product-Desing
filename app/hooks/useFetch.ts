import { useState, useEffect } from "react";
import { ProductProps } from "../types/ProductProps";

export function useFetch(url: string) {
  const [data, setData] = useState<Array<ProductProps> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const json = await res.json();
        setData(json.items);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unkdown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
