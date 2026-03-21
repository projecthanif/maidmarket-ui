import SellerDashboardLayout from "@/components/layouts/seller-dashboard-layout";
import ProductTable from "@/components/product/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function SellerProductPage() {
  const navigate = useNavigate();
  const breadcrumb = [
    { title: "Dashboard", url: "/seller/dashboard" },
    { title: "Product", url: "/seller/product" },
  ];
  return (
    <SellerDashboardLayout breadcrumb={breadcrumb}>
      <section className="p-3">
        <section className="mt-5 flex justify-between align-baseline mx-5">
          <h1 className="text-2xl font-semibold">Product Inventory</h1>
          <Button onClick={() => navigate("/seller/product/new")}>
            New Product
          </Button>
        </section>
        <section></section>
        <section className="mt-14">
          <ProductTable />
        </section>
      </section>
    </SellerDashboardLayout>
  );
}
