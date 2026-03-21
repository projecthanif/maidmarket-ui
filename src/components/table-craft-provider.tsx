"use client";

import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { TableProvider } from "react-table-craft";

interface TableCraftProviderProps {
  children: React.ReactNode;
  filterOptions?: boolean;
  paginationOptions?: { pageSizeOptions: number[] };
}

export default function TableCraftProvider({
  children,
  filterOptions = true,
  paginationOptions = { pageSizeOptions: [10, 20, 50] },
}: TableCraftProviderProps) {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <TableProvider
      config={{
        features: {
          columnVisibility: false,
          viewToggle: false,
          csvExport: false,
          rowSelection: true,
          filter: filterOptions,
        },
        pagination: paginationOptions,
        router: {
          push: (url) => navigate(url),
          replace: (url) => navigate(url, { replace: true }),
          getSearchParams: () => searchParams,
          getPathname: () => location.pathname,
        },
      }}
    >
      {children}
    </TableProvider>
  );
}
