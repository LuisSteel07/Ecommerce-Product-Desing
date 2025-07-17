"use client";

import { Button } from "@/components/ui/button";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductProvider";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Pagination() {
  const { state, dispatch } = useContext(ProductContext);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (state.page == 5) setLocked(true);
    else setLocked(false);
  }, [state.page]);

  return (
    <div className="flex items-center gap-8 lg:w-fit">
      <div className="hidden items-center gap-2 lg:flex">
        <Label htmlFor="rows-per-page" className="text-sm font-medium">
          Rows per page
        </Label>
        <Select
          value={`${state.page}`}
          onValueChange={(value) => {
            dispatch({
              type: "SET_PAGE",
              payload: {
                page: Number(value),
              },
            });
          }}
        >
          <SelectTrigger size="sm" className="w-20" id="rows-per-page">
            <SelectValue placeholder={state.page} />
          </SelectTrigger>
          <SelectContent side="top">
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-fit items-center justify-center text-sm font-medium">
        Page {0} of {1}
      </div>
      <div className="ml-auto flex items-center gap-2 lg:ml-0">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => {
            dispatch({
              type: "SET_PAGE",
              payload: {
                page: 0,
              },
            });
          }}
          disabled={locked}
        >
          <span className="sr-only">Go to first page</span>
          <IconChevronsLeft />
        </Button>
        <Button
          variant="outline"
          className="size-8"
          size="icon"
          onClick={() =>
            dispatch({
              type: "SET_PAGE",
              payload: {
                page: state.page - 1,
              },
            })
          }
          disabled={locked}
        >
          <span className="sr-only">Go to previous page</span>
          <IconChevronLeft />
        </Button>
        <Button
          variant="outline"
          className="size-8"
          size="icon"
          onClick={() =>
            dispatch({
              type: "SET_PAGE",
              payload: {
                page: state.page + 1,
              },
            })
          }
          disabled={locked}
        >
          <span className="sr-only">Go to next page</span>
          <IconChevronRight />
        </Button>
        <Button
          variant="outline"
          className="hidden size-8 lg:flex"
          size="icon"
          onClick={() =>
            dispatch({
              type: "SET_PAGE",
              payload: {
                page: state.page,
              },
            })
          }
          disabled={locked}
        >
          <span className="sr-only">Go to last page</span>
          <IconChevronsRight />
        </Button>
      </div>
    </div>
  );
}
