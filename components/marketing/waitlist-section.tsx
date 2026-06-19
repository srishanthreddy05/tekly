"use client";

import { Calendar } from "lucide-react";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="w-full py-24 lg:py-32 border-b border-border bg-background relative overflow-hidden">
      
      {/* Background visual spotlight */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-neon-green/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-neon-yellow/10 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-6 relative">
        
        {/* Step Badge */}
        <div className="inline-flex items-center gap-1.5 self-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold border border-border">
          <Calendar className="w-3.5 h-3.5 text-primary" />
          <span>Priority Enrollment</span>
        </div>

        {/* Header copy */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
            Join Early Access
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We're opening Tekly gradually. Join the waitlist to receive launch updates and early access invitation tokens.
          </p>
        </div>

        {/* Dynamic State display */}
        <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm text-left">
          <WaitlistForm />
        </div>

      </div>
    </section>
  );
}

