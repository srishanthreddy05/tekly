"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // slightly larger offset for floating navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      handleScrollTo(id);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-full border border-border/80 bg-background/75 backdrop-blur-md shadow-sm transition-all duration-200 py-2.5 px-6 flex items-center justify-between">
        
        {/* Logo and Brand */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-border bg-white shadow-sm flex items-center justify-center">
            <Image
              src="/logo.jpeg"
              alt="Tekly Logo"
              fill
              priority
              className="object-cover"
            />
          </div>
          <span className="text-base font-bold tracking-tight text-foreground font-sans">
            Tekly
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/#features"
            onClick={(e) => handleNavClick(e, "features")}
            className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#vision"
            onClick={(e) => handleNavClick(e, "vision")}
            className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            Vision
          </Link>
          <Link
            href="/#roadmap"
            onClick={(e) => handleNavClick(e, "roadmap")}
            className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            Roadmap
          </Link>
          <Link
            href="/#faq"
            onClick={(e) => handleNavClick(e, "faq")}
            className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </Link>
        </nav>

        {/* Global Utilities */}
        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground cursor-pointer rounded-full h-8 w-8 hover:bg-accent/40"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 transition-all" />
              ) : (
                <Moon className="h-4 w-4 transition-all" />
              )}
            </Button>
          )}

          <Link
            href="/#waitlist-form"
            onClick={(e) => handleNavClick(e, "waitlist-form")}
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "font-medium cursor-pointer rounded-full text-xs px-4"
            )}
          >
            Join Waitlist
            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground rounded-full h-8 w-8 hover:bg-accent/40"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}

          <Link
            href="/#waitlist-form"
            onClick={(e) => handleNavClick(e, "waitlist-form")}
            className={cn(
              buttonVariants({ variant: "default", size: "xs" }),
              "rounded-full text-[11px] px-3 font-semibold mr-1 animate-shimmer"
            )}
          >
            Waitlist
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-8 w-8 hover:bg-accent/40"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4 text-foreground" />
            ) : (
              <Menu className="h-4 w-4 text-foreground" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer (Slide down absolute menu) */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 z-50 rounded-2xl border border-border bg-card/95 backdrop-blur-md px-5 py-6 flex flex-col gap-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-3">
            <Link
              href="/#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="text-left text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors py-1.5"
            >
              Features
            </Link>
            <Link
              href="/#vision"
              onClick={(e) => handleNavClick(e, "vision")}
              className="text-left text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors py-1.5"
            >
              Vision
            </Link>
            <Link
              href="/#roadmap"
              onClick={(e) => handleNavClick(e, "roadmap")}
              className="text-left text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors py-1.5"
            >
              Roadmap
            </Link>
            <Link
              href="/#faq"
              onClick={(e) => handleNavClick(e, "faq")}
              className="text-left text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors py-1.5"
            >
              FAQ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
