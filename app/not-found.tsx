"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background text-foreground px-6 relative overflow-hidden select-none">
      
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="text-center flex flex-col items-center gap-6 max-w-md relative z-10">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold border border-border">
          <HelpCircle className="w-3.5 h-3.5 text-primary" />
          <span>Error 404</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-none text-foreground font-sans">
          Page not found
        </h1>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          The page you are looking for doesn't exist or has been relocated to another route. Let's get you back.
        </p>

        <Link href="/" passHref>
          <Button
            variant="default"
            className="h-10 px-6 font-bold rounded-full bg-gradient-to-r from-primary to-indigo-600 hover:opacity-95 text-primary-foreground shadow-md cursor-pointer text-xs flex items-center gap-1.5 mt-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </Button>
        </Link>

      </div>
    </div>
  );
}
