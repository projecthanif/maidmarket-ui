import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useParams, useNavigate } from "react-router-dom";
import SellerDashboardLayout from "@/components/layouts/seller-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { products } from "@/app/dummy/products";
import { productSchema, type ProductFormValues } from "@/types/product-schema";
import { ProductDetails } from "./components/product-details";
import { MediaUpload } from "./components/media-upload";
import { PricingInfo } from "./components/pricing-info";
import { OrganizationSettings } from "./components/organization-settings";

export default function UpdateProduct() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const breadcrumb = [
    { title: "Dashboard", url: "/seller/dashboard" },
    { title: "Product", url: "/seller/product" },
    { title: "Update Product", url: "#" },
  ];

  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const addFiles = (newFiles: File[]) => {
    if (newFiles.length > 0) {
      const newPreviews = newFiles.map((f) => URL.createObjectURL(f));
      setFiles((prev) => [...prev, ...newFiles]);
      setPreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const removeFile = (indexToRemove: number) => {
    setFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
    setPreviews((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    addFiles(files);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files || []);
    addFiles(files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      category: "",
      productState: "",
      status: "active",
    },
  });

  useEffect(() => {
    if (id) {
      const product = products.find((p) => p.id === id);
      if (product) {
        form.reset({
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category.name.toLowerCase(),
          productState: "new",
          status: "active",
        });

        if (product.images) {
          setPreviews(product.images.map((img) => img.url));
        }
      } else {
        navigate("/seller/product");
      }
    }
  }, [id, form, navigate]);

  function onSubmit(data: ProductFormValues) {
    console.log("Form submitted:", data, "Files:", files);
    // Add actual submit logic here, e.g., API call
  }

  return (
    <SellerDashboardLayout breadcrumb={breadcrumb}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full"
        >
          <section className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold tracking-tight">
                Update Product
              </h1>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  asChild
                  className="text-muted-foreground"
                >
                  <Link to="/seller/product">Cancel</Link>
                </Button>
                <Button type="submit">Update Product</Button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Main Content Area */}
              <div className="md:col-span-2 space-y-5">
                <ProductDetails control={form.control} />

                <MediaUpload
                  previews={previews}
                  isDragging={isDragging}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onFileChange={handleFileChange}
                  onRemoveFile={removeFile}
                />
              </div>

              {/* Sidebar Settings Area */}
              <div className="space-y-8">
                <PricingInfo control={form.control} />
                <OrganizationSettings control={form.control} />
              </div>
            </div>
          </section>
        </form>
      </Form>
    </SellerDashboardLayout>
  );
}
