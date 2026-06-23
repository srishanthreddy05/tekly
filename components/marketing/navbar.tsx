"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for floating navbar
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
    <header className="sticky top-6 z-50 w-full px-4 sm:px-6 lg:px-8">
      <div className={`mx-auto max-w-5xl rounded-full border py-3 px-8 flex items-center justify-between transition-all duration-300 ${
        isScrolled 
          ? "bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.03)] border-slate-200/80" 
          : "bg-white/35 backdrop-blur-md shadow-none border-transparent"
      }`}>
        
        {/* Logo and Brand */}
        <Link 
          href="/" 
          className="flex items-center gap-2 cursor-pointer"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <div className="relative w-6.5 h-6.5 rounded-lg overflow-hidden border border-border bg-white shadow-sm flex items-center justify-center">
            <Image
              src="/logo.jpeg"
              alt="Tekly Logo"
              fill
              priority
              className="object-cover"
            />
          </div>
          <span className="text-base font-black italic tracking-wide text-slate-900 font-serif">
            Tekly
          </span>
        </Link>

        {/* Minimal Navigation links */}
        <nav className="flex items-center gap-5 sm:gap-6">
          <Link
            href="/#vision"
            onClick={(e) => handleNavClick(e, "vision")}
            className="text-[11px] sm:text-xs font-bold text-slate-500 hover:text-slate-955 transition-colors"
          >
            Vision
          </Link>
          <Link
            href="/#waitlist"
            onClick={(e) => handleNavClick(e, "waitlist")}
            className="px-4 py-1.5 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white text-[11px] sm:text-xs font-extrabold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Waitlist
          </Link>
        </nav>

      </div>
    </header>
  );
}
