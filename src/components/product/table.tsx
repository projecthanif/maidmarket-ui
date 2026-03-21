"use client";

import { ClientSideTable } from "react-table-craft";
import { useSearchParams } from "react-router-dom";
import TableCraftProvider from "@/components/table-craft-provider";
import { products } from "@/app/dummy/products";
import { productColumns, filterableProductColumns } from "./product-column";

export default function ProductTable() {
  const [searchParams] = useSearchParams();
  const perPage =
    Number(searchParams.get("per_page")) ||
    Number(searchParams.get("pageSize")) ||
    Number(searchParams.get("limit")) ||
    10;

  return (
    <TableCraftProvider>
      <ClientSideTable
        withIndex={true}
        data={products}
        columns={productColumns}
        pageSize={perPage}
        pageCount={Math.ceil(products.length / perPage)}
        filterableColumns={filterableProductColumns}
      />
    </TableCraftProvider>
  );
}
