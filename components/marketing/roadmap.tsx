"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Play, CircleDot, Milestone } from "lucide-react";
import { Instagram } from "@/components/ui/icons";

export function Roadmap() {
  const versions = [
    {
      version: "Version 1.0",
      title: "Instagram Automation",
      status: "completed",
      statusText: "Completed",
      description: "Auto comment responders, DM keyword triggers, and basic audience capture metrics.",
    },
    {
      version: "Version 2.0",
      title: "Unified Inbox",
      status: "upcoming",
      statusText: "Upcoming",
      description: "Aggregate message pings across Instagram, WhatsApp, and Facebook Messenger.",
    },
    {
      version: "Version 3.0",
      title: "CRM Integration",
      status: "upcoming",
      statusText: "Upcoming",
      description: "Customer database synchronization, tagging profiles, and context attributes logging.",
    },
    {
      version: "Version 4.0",
      title: "AI Workflows",
      status: "upcoming",
      statusText: "Upcoming",
      description: "Auto intent parsing and smart drafts generation for incoming inquiries.",
    },
    {
      version: "Version 5.0",
      title: "Voice AI",
      status: "upcoming",
      statusText: "Upcoming",
      description: "Inbound audio calling integrations and automated customer booking calendar triggers.",
    },
    {
      version: "Version 6.0",
      title: "Workflow Builder",
      status: "upcoming",
      statusText: "Upcoming",
      description: "Interactive visual drag-and-drop canvas workflow designer.",
    },
  ];

  return (
    <section id="roadmap" className="w-full py-20 lg:py-28 border-b border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Title copy */}
        <div className="max-w-3xl flex flex-col gap-4 text-left mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Development Lifecycle</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our long-term platform roadmap.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Take a look at how we scale from simple social response bots into a fully integrated, multichannel communication hub.
          </p>
        </div>

        {/* Vertical timeline stack */}
        <div className="relative border-l border-border max-w-xl mx-auto flex flex-col gap-8 pl-6 text-left">
          
          {versions.map((ver, idx) => {
            const isCompleted = ver.status === "completed";

            return (
              <div key={idx} className="relative group">
                
                {/* Node indicator */}
                <div className={`absolute -left-[33px] top-1.5 w-4 h-4 rounded-full border-4 border-background flex items-center justify-center ${
                  isCompleted
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                }`} />

                {/* Content details */}
                <div className={`p-5 rounded-2xl border transition-all duration-200 shadow-sm ${
                  isCompleted
                    ? "bg-card border-primary/30 text-foreground"
                    : "bg-card/40 border-border/60 text-muted-foreground"
                }`}>
                  
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-col gap-0.5">
                      <span className={`text-[9px] uppercase font-bold tracking-wider ${isCompleted ? "text-primary" : "text-muted-foreground/60"}`}>
                        {ver.version}
                      </span>
                      <h4 className={`text-sm font-bold tracking-tight mt-0.5 ${isCompleted ? "text-foreground" : "text-muted-foreground"}`}>
                        {ver.title}
                      </h4>
                    </div>

                    <span className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isCompleted
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "bg-accent text-muted-foreground border border-border/80"
                    }`}>
                      {ver.statusText}
                    </span>
                  </div>

                  <p className="text-[11px] leading-relaxed mt-2 text-muted-foreground">
                    {ver.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
