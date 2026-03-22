import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { ReactNode } from "react";

export const iframeHeight = "800px";

export const description = "A sidebar with a header and a search form.";

export default function SellerDashboardLayout({
  children,
  breadcrumb,
}: {
  children: ReactNode;
  breadcrumb?: { title: string; url: string }[];
}) {
  const marqueeText = "Welcome to the Seller Dashboard";
  const announcement = false;

  return (
    <div className="[--header-height:calc(--spacing(10))]">
      <SidebarProvider className="flex flex-col">
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <SiteHeader breadcrumb={breadcrumb} />
            {announcement && (
              <div className="w-full overflow-hidden whitespace-nowrap bg-muted/50 py-1">
                <div className="animate-marquee inline-block text-sm font-medium text-bold text-red-600 ">
                  {marqueeText}
                </div>
              </div>
            )}
            {children}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
