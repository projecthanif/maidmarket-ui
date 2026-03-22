import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Camera, Image as ImageIcon, Plus, X } from "lucide-react";

import SellerDashboardLayout from "@/components/layouts/seller-dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

const productSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.number().min(0.01, "Price must be greater than 0"),
  category: z.string().min(1, "Please select a category"),
  status: z.enum(["active", "draft", "archived"]),
});

type ProductFormValues = z.infer<typeof productSchema>;

export default function CreateProduct() {
  const breadcrumb = [
    { title: "Dashboard", url: "/seller/dashboard" },
    { title: "Product", url: "/seller/product" },
    { title: "New Product", url: "#" },
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
      status: "active",
    },
  });

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
                Create New Product
              </h1>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  asChild
                  className="text-muted-foreground"
                >
                  <Link to="/seller/product">Cancel</Link>
                </Button>
                <Button type="submit">Save Product</Button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Main Content Area */}
              <div className="md:col-span-2 space-y-5">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g. Premium House Cleaning Service"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your service or product in detail..."
                              className="min-h-37.5"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ImageIcon className="h-5 w-5" /> Media
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Label
                      htmlFor="media-upload"
                      onDragOver={handleDragOver}
                      onDragEnter={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 transition-colors cursor-pointer w-full py-12 ${
                        isDragging
                          ? "border-primary bg-primary/10"
                          : "border-primary/20 bg-[#F8F9FE] hover:bg-primary/5"
                      }`}
                    >
                      <div className="p-4 bg-white shadow-sm rounded-2xl">
                        <Camera className="h-8 w-8 text-[#30347F]" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-[#30347F]">
                          Upload Product Photo
                        </h3>
                        <p className="text-base text-muted-foreground font-normal">
                          Drag and drop or click to browse
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground/70 font-normal">
                        PNG, JPG, or WEBP up to 10MB
                      </p>
                      <Input
                        id="media-upload"
                        type="file"
                        className="sr-only"
                        multiple
                        accept="image/png, image/jpeg, image/webp"
                        onChange={handleFileChange}
                      />
                    </Label>

                    {previews.length > 0 && (
                      <div className="flex gap-4 flex-wrap">
                        {previews.map((preview, index) => (
                          <div
                            key={index}
                            className="relative h-28 w-28 rounded-xl overflow-hidden border bg-[#F8F9FE] flex items-center justify-center group"
                          >
                            <img
                              src={preview}
                              alt={`Preview ${index}`}
                              className="object-cover h-full w-full"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="bg-white/20 hover:bg-red-500 hover:text-white text-white rounded-full p-1.5 transition-colors"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        ))}
                        <Label
                          htmlFor="media-upload-more"
                          className="h-28 w-28 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
                        >
                          <Plus className="h-8 w-8 text-gray-400" />
                          <Input
                            id="media-upload-more"
                            type="file"
                            className="sr-only"
                            multiple
                            accept="image/png, image/jpeg, image/webp"
                            onChange={handleFileChange}
                          />
                        </Label>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Settings Area */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Pricing</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Base Price</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <InputGroup>
                                <InputGroupAddon>₦</InputGroupAddon>
                                <InputGroupInput
                                  type="number"
                                  step="0.01"
                                  placeholder="0.00"
                                  className="pl-7"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(
                                      parseFloat(e.target.value) || "",
                                    )
                                  }
                                />
                                <InputGroupAddon align="inline-end">
                                  <InputGroupText>NGN</InputGroupText>
                                </InputGroupAddon>
                              </InputGroup>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Organization</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Category</FormLabel>
                          <FormControl>
                            <select
                              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="" disabled>
                                Select category
                              </option>
                              <option value="cleaning">Cleaning</option>
                              <option value="repair">Repair</option>
                              <option value="gardening">Gardening</option>
                              <option value="moving">Moving</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <FormControl>
                            <select
                              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            >
                              <option value="active">Active</option>
                              <option value="draft">Draft</option>
                              <option value="archived">Archived</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </form>
      </Form>
    </SellerDashboardLayout>
  );
}
