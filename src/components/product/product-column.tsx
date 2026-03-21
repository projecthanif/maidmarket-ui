"use client";

import { type ColumnDef } from "@tanstack/react-table";
import {
  DataTableColumnHeader,
  type DataTableFilterableColumn,
} from "react-table-craft";
import type { Product } from "@/types/product";
import { products } from "@/app/dummy/products";
import ProductAction from "./product-action";

export const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "images",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" />
    ),
    cell: ({ row }) => {
      const images = row.original.images;
      return (
        <div className="flex items-center">
          {images && images.length > 0 ? (
            <img
              src={images[0].url}
              alt={images[0].alt || "Product Image"}
              className="h-10 w-10 rounded-md object-cover"
            />
          ) : (
            <div className="h-10 w-10 rounded-md bg-muted" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
  },
  {
    id: "category",
    accessorKey: "category.name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "Action",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: () => <ProductAction />,
  },
];

export const filterableProductColumns: DataTableFilterableColumn<Product>[] = [
  {
    id: "category",
    title: "Category",
    options: Array.from(new Set(products.map((p) => p.category.name))).map(
      (category) => ({
        label: category,
        value: category,
      }),
    ),
  },
];
