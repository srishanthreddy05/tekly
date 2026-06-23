"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductShowcase } from "./product-showcase";

export function Hero() {
  const scrollToSection = (id: string) => {
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

  return (
    <section 
      className="relative w-full overflow-hidden py-24 lg:py-36 border-b border-slate-100 bg-[#FAFBFC]"
      style={{
        background: "radial-gradient(circle at 75% 40%, rgba(37, 99, 235, 0.055), transparent 60%), #FAFBFC"
      }}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left z-10">
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12] font-sans">
              Customer Engagement.
              <span className="block text-[#2563EB] mt-1 pb-1 font-serif italic font-medium">
                Simplified.
              </span>
            </h1>

            {/* Sub-heading */}
            <p className="max-w-lg mx-auto lg:mx-0 text-sm sm:text-base text-slate-500 leading-relaxed font-medium font-sans">
              Tekly helps businesses automate customer conversations and manage relationships from one unified platform.
              <span className="block mt-2.5 font-bold text-slate-800">
                We’re starting with Instagram and building toward a multi-channel customer engagement platform powered by intelligent automation.
              </span>
            </p>

            {/* Buttons Row */}
            <div className="flex flex-row justify-center lg:justify-start gap-4 mt-2">
              <Button
                onClick={() => scrollToSection("waitlist")}
                className="h-11 px-6 font-bold rounded-full bg-[#2563EB] hover:bg-blue-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer text-xs transition-all duration-200 border border-transparent flex items-center gap-1.5"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("vision")}
                variant="outline"
                className="h-11 px-6 font-semibold rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:-translate-y-0.5 text-slate-700 cursor-pointer text-xs transition-all duration-200 shadow-sm"
              >
                Learn More
              </Button>
            </div>

          </div>

          {/* Right Column: Premium Interactive Product Showcase Carousel */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center">
            <ProductShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
