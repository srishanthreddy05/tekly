"use client";

import { motion } from "framer-motion";
import { Zap, Combine, Brain } from "lucide-react";

export function WhyUs() {
  const cards = [
    {
      icon: Zap,
      title: "Simple",
      description: "Technology should simplify business, not complicate it.",
    },
    {
      icon: Combine,
      title: "Multi-Channel",
      description: "Manage conversations across multiple channels from one workspace.",
    },
    {
      icon: Brain,
      title: "AI Assisted",
      description: "Automate repetitive work while keeping people at the center of customer relationships.",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header copy */}
        <div className="max-w-3xl flex flex-col gap-4 text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Core Value Pillars</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for communication scales.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We establish our platform around three core principles that create direct, reliable, and compliant customer value.
          </p>
        </div>

        {/* 3 card grid stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/20 transition-all duration-200 shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <h3 className="text-base font-bold text-foreground leading-none">
                    {card.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
