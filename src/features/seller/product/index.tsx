import SellerDashboardLayout from "@/components/layouts/seller-dashboard-layout";
import ProductWidget from "@/components/product/product-widget";
import ProductTable from "@/components/product/table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function SellerProductPage() {
  const navigate = useNavigate();
  const breadcrumb = [
    { title: "Dashboard", url: "/seller/dashboard" },
    { title: "Product", url: "#" },
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
        <section className="grid auto-rows-min gap-4 md:grid-cols-3 mt-8 mx-5">
          <ProductWidget title="Total Products" value="25" />
          <ProductWidget title="Active Listings" value="20" />
          <ProductWidget title="Out of Stock" value="5" />
        </section>
        <section className="mt-14">
          <ProductTable />
        </section>
      </section>
    </SellerDashboardLayout>
  );
}
