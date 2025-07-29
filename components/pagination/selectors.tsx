"use client";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";

import PageSelector from "./page-selector";
import { useContext } from "react";
import { ProductContext } from "@/contexts/ProductProvider";

export default function Selectors() {
  const { state } = useContext(ProductContext);
  return (
    <div className="ml-auto flex items-center gap-2 lg:ml-0">
      <PageSelector
        step={{
          ...state.page,
          actualPage: 1,
        }}
        disabled={state.page.actualPage == 1}
      >
        <span className="sr-only">Go to first page</span>
        <IconChevronsLeft />
      </PageSelector>
      <PageSelector
        step={{
          ...state.page,
          actualPage: state.page.actualPage - 1,
        }}
        disabled={state.page.actualPage == 1}
      >
        <span className="sr-only">Go to previous page</span>
        <IconChevronLeft />
      </PageSelector>
      <PageSelector
        step={{
          ...state.page,
          actualPage: state.page.actualPage + 1,
        }}
        disabled={state.page.actualPage == state.page.pages}
      >
        <span className="sr-only">Go to next page</span>
        <IconChevronRight />
      </PageSelector>
      <PageSelector
        step={{
          ...state.page,
          actualPage: state.page.pages,
        }}
        disabled={state.page.actualPage == state.page.pages}
      >
        <span className="sr-only">Go to last page</span>
        <IconChevronsRight />
      </PageSelector>
    </div>
  );
}
