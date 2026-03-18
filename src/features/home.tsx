import AppLayout from "@/components/layouts/app-layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Search,
  ShieldCheck,
  UserCheck,
  Star,
  Calendar,
  Clock,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppLayout>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center px-4 md:px-6 justify-between">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center space-x-2">
                <span className="font-bold text-xl">MaidMarketplace</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-muted-foreground">
                <Link
                  to="/search"
                  className="transition-colors hover:text-foreground"
                >
                  Find a Maid
                </Link>
                <Link
                  to="/about"
                  className="transition-colors hover:text-foreground"
                >
                  About Us
                </Link>
              </nav>
            </div>

            <div className="hidden md:flex items-center gap-4">
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
                <Link
                  to="/search"
                  className="text-sm font-medium hover:text-primary"
                >
                  Find a Maid
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-medium hover:text-primary"
                >
                  About Us
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
        <section className="relative bg-muted/30 py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Find the Perfect Help for Your Home
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Connect with verified, reliable maids and housekeepers in your
                  area. Simplify your life with MaidMarketplace.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Button size="lg" className="h-12 px-8 text-lg" asChild>
                  <Link to="/search">Find a Maid</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-lg"
                  asChild
                >
                  <Link to="/auth/register">Become a Maid</Link>
                </Button>
              </div>
              <div className="pt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Verified Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Insured Work</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Value Props */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Why Choose MaidMarketplace?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We make it safe and easy to find the help you need, connecting
                you with trusted professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<UserCheck className="h-10 w-10 text-primary" />}
                title="Verified Profiles"
                description="Every maid on our platform undergoes a thorough background check and identity verification process."
              />
              <FeatureCard
                icon={<ShieldCheck className="h-10 w-10 text-primary" />}
                title="Secure Payments"
                description="Pay securely through our platform. Funds are released only when you are satisfied with the service."
              />
              <FeatureCard
                icon={<Search className="h-10 w-10 text-primary" />}
                title="Easy Booking"
                description="Browse profiles, read reviews, and book services instantly with our user-friendly interface."
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground text-lg">
                Simple steps to get a sparkling clean home.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <StepCard
                number="1"
                icon={<Search className="w-6 h-6" />}
                title="Search"
                description="Filter by location, price, and services to find the perfect match for your needs."
              />
              <StepCard
                number="2"
                icon={<Calendar className="w-6 h-6" />}
                title="Book"
                description="Select a time that works for you and secure your booking online instantly."
              />
              <StepCard
                number="3"
                icon={<Clock className="w-6 h-6" />}
                title="Relax"
                description="Enjoy your free time while a professional takes care of your home."
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Trusted by Thousands
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                quote="I found an amazing housekeeper within hours. The process was so simple and the results were fantastic!"
                author="Sarah J."
                role="Homeowner"
              />
              <TestimonialCard
                quote="MaidMarketplace helped me fill my schedule with great clients. Highly recommended for any cleaner looking for work."
                author="Maria R."
                role="Professional Maid"
              />
              <TestimonialCard
                quote="Secure payments and verified profiles gave me peace of mind. Excellent customer service as well."
                author="David L."
                role="Busy Professional"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to get started?
            </h2>
            <p className="text-primary-foreground/90 text-xl mb-8 max-w-2xl mx-auto">
              Join our community today and experience the difference of a
              professionally cleaned home.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="h-12 px-8 text-lg font-semibold"
              asChild
            >
              <Link to="/auth/register">Sign Up Now</Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 bg-background border-t">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-bold text-lg mb-1">MaidMarketplace</span>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} MaidMarketplace. All rights
                reserved.
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

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-sm border transition-shadow hover:shadow-md">
      <div className="mb-4 p-3 bg-primary/10 text-primary rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
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

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="p-8 bg-card rounded-xl border shadow-sm flex flex-col justify-between h-full">
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="italic text-muted-foreground mb-6 text-lg">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-sm">{author}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
