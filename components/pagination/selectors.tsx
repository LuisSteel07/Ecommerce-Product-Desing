"use client";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";

import { useContext } from "react";
import { ProductContext } from "@/global-store/products/context";
import { Button } from "../ui/button";

export default function Selectors() {
  const { state, dispatch } = useContext(ProductContext);
  return (
    <div className="ml-auto flex items-center gap-2 lg:ml-0">
      <Button
        variant="outline"
        className="hidden h-8 w-8 p-0 lg:flex"
        disabled={state.page.currentPage == 1}
        onClick={() => {
          dispatch({
            type: "SET_PAGE",
            payload: {
              page: {
                currentPage: 1,
              },
            },
          });
        }}
      >
        <span className="sr-only">Go to first page</span>
        <IconChevronsLeft />
      </Button>
      <Button
        variant="outline"
        className="hidden h-8 w-8 p-0 lg:flex"
        disabled={state.page.currentPage == 1}
        onClick={() => {
          dispatch({
            type: "SET_PAGE",
            payload: {
              page: {
                currentPage: state.page.currentPage! - 1,
                pages: state.page.pages,
              },
            },
          });
        }}
      >
        <span className="sr-only">Go to previous page</span>
        <IconChevronLeft />
      </Button>
      <Button
        variant="outline"
        className="hidden h-8 w-8 p-0 lg:flex"
        disabled={state.page.currentPage == state.page.pages}
        onClick={() => {
          dispatch({
            type: "SET_PAGE",
            payload: {
              page: {
                currentPage: state.page.currentPage! + 1,
                pages: state.page.pages,
              },
            },
          });
        }}
      >
        <span className="sr-only">Go to next page</span>
        <IconChevronRight />
      </Button>
      <Button
        variant="outline"
        className="hidden h-8 w-8 p-0 lg:flex"
        disabled={state.page.currentPage == state.page.pages}
        onClick={() => {
          dispatch({
            type: "SET_PAGE",
            payload: {
              page: {
                currentPage: state.page.pages,
              },
            },
          });
        }}
      >
        <span className="sr-only">Go to last page</span>
        <IconChevronsRight />
      </Button>
    </div>
  );
}
