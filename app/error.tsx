"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, AlertTriangle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an analytics or reporting provider
    console.error("[Application Error Boundary]:", error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background text-foreground px-6 relative overflow-hidden select-none">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-destructive/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="text-center flex flex-col items-center gap-6 max-w-md relative z-10">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-semibold border border-destructive/20">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Error 500</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-none text-foreground font-sans">
          Something went wrong
        </h1>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          An unexpected error occurred in our system. We have flagged this issue and are working to resolve it.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Button
            onClick={() => reset()}
            className="h-10 px-6 font-bold rounded-full bg-primary text-primary-foreground shadow-md cursor-pointer text-xs flex items-center gap-1.5 justify-center"
          >
            <RefreshCw className="w-4 h-4" />
            Try again
          </Button>

          <Link href="/" passHref>
            <Button
              variant="outline"
              className="h-10 px-6 font-semibold rounded-full border border-border bg-card/40 hover:bg-accent/40 text-foreground cursor-pointer text-xs flex items-center gap-1.5 justify-center w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Return Home
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
