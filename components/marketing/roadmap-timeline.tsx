"use client";

import { motion } from "framer-motion";
import { RoadmapVisual } from "@/components/visual-assets/roadmap-visual";
import { ArrowRight, MessageCircle, Phone, Database, Milestone } from "lucide-react";

export function RoadmapTimeline() {
  const steps = [
    {
      quarter: "Phase 1: Active",
      title: "Instagram automation",
      description: "Direct DM responders, comment keyword capture, auto-replies, and basic audience list tagging.",
      icon: MessageCircle,
      active: true,
    },
    {
      quarter: "Phase 2: Q3 Beta",
      title: "WhatsApp & Voice AI pipelines",
      description: "Trigger WhatsApp follow-ups for premium leads and implement Voice AI reservation agents.",
      icon: Phone,
      active: false,
    },
    {
      quarter: "Phase 3: Q4 & Beyond",
      title: "Unified CRM & AI Workflows",
      description: "Sync all conversations across Email, SMS, WhatsApp and Instagram inside a unified workspace.",
      icon: Database,
      active: false,
    },
  ];

  return (
    <section id="roadmap" className="w-full py-20 lg:py-32 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Roadmap explanations */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold border border-border">
              <Milestone className="w-3.5 h-3.5 text-primary" />
              <span>Future Roadmap</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              One central engine. Every customer channel.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Today we start with Instagram automation, but the long-term vision is a completely unified customer communication layers. Unify marketing, CRM, and voice response into a single workspace.
            </p>

            {/* Steps timeline list */}
            <div className="flex flex-col gap-4 mt-2">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all ${
                      step.active
                        ? "bg-card border-primary/30 shadow-sm"
                        : "bg-muted/40 border-border/60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`text-[10px] uppercase font-bold tracking-wider ${
                          step.active ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {step.quarter}
                      </span>
                      <IconComponent
                        className={`w-4 h-4 ${
                          step.active ? "text-primary" : "text-muted-foreground/60"
                        }`}
                      />
                    </div>
                    <h4 className="text-sm font-bold text-foreground mb-0.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Svg Interactive Map Node visualization */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <RoadmapVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
