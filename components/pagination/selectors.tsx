"use client";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";

import { useContext } from "react";
import PageSelector from "./page-selector";
import { ProductContext } from "@/global-store/products/context";

export default function Selectors() {
  const { state } = useContext(ProductContext);
  return (
    <div className="ml-auto flex items-center gap-2 lg:ml-0">
      <PageSelector
        step={{
          currentPage: 1,
        }}
        disabled={state.page.currentPage == 1}
      >
        <span className="sr-only">Go to first page</span>
        <IconChevronsLeft />
      </PageSelector>
      <PageSelector
        step={{
          currentPage: state.page.currentPage - 1,
        }}
        disabled={state.page.currentPage == 1}
      >
        <span className="sr-only">Go to previous page</span>
        <IconChevronLeft />
      </PageSelector>
      <PageSelector
        step={{
          currentPage: state.page.currentPage + 1,
        }}
        disabled={state.page.currentPage == state.page.pages}
      >
        <span className="sr-only">Go to next page</span>
        <IconChevronRight />
      </PageSelector>
      <PageSelector
        step={{
          currentPage: state.page.pages,
        }}
        disabled={state.page.currentPage == state.page.pages}
      >
        <span className="sr-only">Go to last page</span>
        <IconChevronsRight />
      </PageSelector>
    </div>
  );
}
