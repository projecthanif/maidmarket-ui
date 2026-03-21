import SellerDashboardLayout from "@/components/layouts/seller-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateProduct() {
  const breadcrumb = [
    { title: "Dashboard", url: "/seller/dashboard" },
    { title: "Product", url: "/seller/product" },
    { title: "New Product", url: "#" },
  ];
  return (
    <SellerDashboardLayout breadcrumb={breadcrumb}>
      <section className="h-full p-10">
        <h1 className="text-2xl font-semibold mb-5">Create New Product</h1>
        <form>
          <div className="flex flex-row flex-between flex-wrap mb-2">
            <div className="flex flex-col">
              <label htmlFor="title">Product Name</label>
              <Input id="title" name="title" className="w-lg mr-10" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="title">Product Name</label>
              <Input id="title" name="title" className="w-lg" />
            </div>
          </div>
          <section className="flex justify-end mt-10 mr-10">
            <Button className="p-4 w-40 text-red-600 bg-transparent focus:bg-black mr-10">
              Cancel & Discard
            </Button>
            <Button className="p-4 w-40">Save Product</Button>
          </section>
        </form>
      </section>
    </SellerDashboardLayout>
  );
}
