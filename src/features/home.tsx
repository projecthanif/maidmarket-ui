import AppLayout from "@/components/layouts/app-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "@/app/dummy/products";
import {
  CheckCircle2,
  Search,
  ShieldCheck,
  Menu,
  X,
  MapPin,
  Tag,
  ShoppingBag,
  Store,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const featuredProducts = products.slice(0, 8);

  const categories = [
    { name: "Electronics", icon: <Tag className="w-5 h-5" />, count: 120 },
    { name: "Fashion", icon: <Tag className="w-5 h-5" />, count: 85 },
    { name: "Furniture", icon: <Tag className="w-5 h-5" />, count: 42 },
    { name: "Lifestyle", icon: <Tag className="w-5 h-5" />, count: 96 },
  ];

  const AppName = import.meta.env.VITE_APP_NAME;

  return (
    <AppLayout>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center px-4 md:px-6 justify-between">
            <div className="flex items-center gap-6 flex-1">
              <Link to="/" className="flex items-center space-x-2">
                <span className="font-bold text-xl">{AppName}</span>
              </Link>

              <div className="hidden md:flex flex-1 max-w-md relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for items, categories, or sellers..."
                  className="w-full bg-background pl-8"
                />
              </div>

              <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-muted-foreground ml-auto">
                <Link
                  to="/browse"
                  className="transition-colors hover:text-foreground"
                >
                  Browse
                </Link>
                <Link
                  to="/seller/dashboard"
                  className="transition-colors hover:text-foreground"
                >
                  Sell
                </Link>
              </nav>
            </div>

            <div className="hidden md:flex items-center gap-4 ml-6">
              <Button variant="ghost" asChild>
                <Link to="/auth/login">Log In</Link>
              </Button>
              <Button asChild>
                <Link to="/auth/register">Sign Up</Link>
              </Button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t p-4 bg-background">
              <nav className="flex flex-col space-y-4">
                <div className="relative mb-2">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search items..."
                    className="w-full bg-background pl-8"
                  />
                </div>
                <Link
                  to="/browse"
                  className="text-sm font-medium hover:text-primary"
                >
                  Browse All Products
                </Link>
                <Link
                  to="/seller/dashboard"
                  className="text-sm font-medium hover:text-primary"
                >
                  Start Selling
                </Link>
                <div className="flex flex-col gap-2 pt-4 border-t">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/auth/login">Log In</Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link to="/auth/register">Sign Up</Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="relative bg-muted/30 py-20 lg:py-32 overflow-hidden border-b">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Your Trusted Local Marketplace
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Buy and sell within your community securely. Discover great
                  deals on electronics, fashion, furniture, and more.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Button size="lg" className="h-12 px-8 text-lg" asChild>
                  <Link to="/browse">Browse Listings</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-lg"
                  asChild
                >
                  <Link to="/seller/dashboard">Start Selling</Link>
                </Button>
              </div>
              <div className="pt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Verified Sellers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Secure Messaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Community Driven</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              Explore Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, idx) => (
                <Link
                  key={idx}
                  to={`/browse?category=${category.name.toLowerCase()}`}
                  className="flex flex-col items-center p-6 bg-card rounded-xl border shadow-sm transition-all hover:border-primary hover:shadow-md group"
                >
                  <div className="mb-3 p-4 bg-muted rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold">{category.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    {category.count} items
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-2xl font-bold tracking-tight">
                Featured Listings
              </h2>
              <Link
                to="/browse"
                className="text-primary hover:underline text-sm font-medium"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-xl border shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    {product.images && product.images.length > 0 ? (
                      <img
                        src={product.images[0].url}
                        alt={product.images[0].alt || product.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <ShoppingBag className="w-10 h-10 opacity-20" />
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold">
                      New
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="text-xs text-muted-foreground mb-1">
                      {product.category.name}
                    </div>
                    <h3 className="font-semibold line-clamp-1 mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-bold text-lg">
                        ₦
                        {product.price.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3 mr-1" /> Campus
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground text-lg">
                The easiest way to buy and sell locally.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <StepCard
                number="1"
                icon={<Search className="w-6 h-6" />}
                title="Discover"
                description="Search for specific items or browse categories to find what you need in your area."
              />
              <StepCard
                number="2"
                icon={<Store className="w-6 h-6" />}
                title="Connect"
                description="Message the seller directly through our secure platform to ask questions or arrange a meetup."
              />
              <StepCard
                number="3"
                icon={<ShieldCheck className="w-6 h-6" />}
                title="Transact Safely"
                description="Meet in a safe location, check the item, and complete your purchase securely."
              />
            </div>
          </div>
        </section>

        {/* Trust & Safety Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  Trust & Safety First
                </h2>
                <p className="text-muted-foreground text-lg">
                  We verify all sellers and provide secure messaging to ensure
                  your marketplace experience is safe, reliable, and spam-free.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Required
                    identity verification
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Community
                    reporting system
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Moderated
                    listings
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <ShieldCheck className="w-48 h-48 text-primary/20" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to clear out your closet?
            </h2>
            <p className="text-primary-foreground/90 text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of community members buying and selling daily.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="h-12 px-8 text-lg font-semibold"
              asChild
            >
              <Link to="/auth/register">Create an Account</Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 bg-background border-t">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-bold text-lg mb-1">{AppName}</span>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} {AppName}. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </AppLayout>
  );
}

function StepCard({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center text-primary group-hover:border-primary transition-colors">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold border-2 border-background">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-xs">{description}</p>
    </div>
  );
}
