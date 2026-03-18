import SellerDashboardLayout from "@/components/layouts/seller-dashboard-layout";

export default function SellerProductPage() {
  const breadcrumb = [
    { title: "Dashboard", url: "/seller/dashboard" },
    { title: "Product", url: "/seller/product" },
  ];
  return (
    <SellerDashboardLayout breadcrumb={breadcrumb}>
      <h1>Product</h1>
    </SellerDashboardLayout>
  );
}
