"use client";

import { motion } from "framer-motion";
import { ArrowUp, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WaitlistPreview() {
  const handleScrollToForm = () => {
    const element = document.getElementById("waitlist-form");
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      
      // Optionally focus the input inside the form
      const input = element.querySelector("input");
      if (input) {
        setTimeout(() => input.focus(), 800);
      }
    }
  };

  return (
    <section className="w-full py-20 lg:py-28 bg-background relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,var(--accent)_0%,transparent_50%)] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 relative z-10">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Priority Beta Access</span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl max-w-xl leading-tight">
          Ready to scale your customer channels?
        </h2>
        
        <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
          Limited slots available for early users. Join the waitlist today to lock in priority access and receive early adopter credits.
        </p>

        <Button
          onClick={handleScrollToForm}
          className="h-11 px-8 rounded-full bg-gradient-to-r from-primary to-indigo-600 hover:opacity-95 text-primary-foreground font-semibold shadow-lg text-xs cursor-pointer mt-2"
        >
          Reserve Your Spot
          <ArrowUp className="ml-1.5 h-4 w-4" />
        </Button>

      </div>
    </section>
  );
}
