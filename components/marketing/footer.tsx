"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Mail, MapPin } from "lucide-react";
import { Linkedin, Twitter, Github, Instagram } from "@/components/ui/icons";

export function Footer() {
  const pathname = usePathname();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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
    }
  };

  return (
    <footer className="w-full bg-card border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo Column */}
          <div className="md:col-span-4 flex flex-col gap-4 text-left">
            <Link 
              href="/" 
              className="flex items-center gap-2.5 self-start"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <div className="relative w-8 h-8 rounded-lg bg-white border border-border overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.jpeg"
                  alt="Tekly Brandmark"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-base font-bold text-foreground tracking-tight">Tekly</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              Unify Instagram, WhatsApp, and CRM communications in one intelligent, Meta-compliant dashboard workspace.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="mailto:hello@tekly.in"
                className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>hello@tekly.in</span>
              </a>
              <div className="text-xs text-muted-foreground flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-6 grid grid-cols-3 gap-6 text-left">
            
            {/* Product Column */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-foreground tracking-wider uppercase">Product</span>
              <Link
                href="/#features"
                onClick={(e) => handleNavClick(e, "features")}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                href="/#roadmap"
                onClick={(e) => handleNavClick(e, "roadmap")}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Roadmap
              </Link>
              <Link
                href="/#faq"
                onClick={(e) => handleNavClick(e, "faq")}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </Link>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-foreground tracking-wider uppercase">Company</span>
              <Link href="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/data-deletion" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Data Deletion
              </Link>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-foreground tracking-wider uppercase">Resources</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5 shrink-0" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <Instagram size={14} className="shrink-0" />
                <span>Instagram</span>
              </a>
              <a
                href="mailto:hello@tekly.in"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Social icons Column (col-span-2) */}
          <div className="md:col-span-2 flex flex-col gap-3 md:items-end">
            <span className="text-xs font-bold text-foreground tracking-wider uppercase">Social</span>
            <div className="flex gap-2.5">
              <a
                href="https://linkedin.com"
                aria-label="Tekly LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Tekly Twitter"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all shadow-sm"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                aria-label="Tekly GitHub"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Made in India tag */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col text-left gap-1">
            <span className="text-xs text-muted-foreground font-semibold">
              © 2026 Tekly. All rights reserved.
            </span>
            <span className="text-[10px] text-muted-foreground/60 flex items-center gap-1 mt-0.5">
              Built by Thrivex Labs • Made in India 🇮🇳
            </span>
          </div>
          
          <p className="text-[9.5px] text-muted-foreground/65 leading-normal max-w-md md:text-right">
            Disclaimer: Tekly is a software communication dashboard. This service is not affiliated, sponsored, or associated with Meta Platforms, Inc. Instagram and WhatsApp are registered trademarks of Meta Platforms, Inc.
          </p>
        </div>

      </div>
    </footer>
  );
}
