"use client";

import { motion } from "framer-motion";
import { Check, Hourglass, Calendar, Sparkles } from "lucide-react";

export function Progress() {
  const steps = [
    {
      title: "Instagram Automation",
      description: "Direct message keyword replies and comment handlers.",
      status: "done",
      emoji: "✅",
    },
    {
      title: "Meta App Review",
      description: "App verification and policy checks.",
      status: "current",
      emoji: "🔄",
    },
    {
      title: "Early Access",
      description: "Priority invites sent to waitlist candidates.",
      status: "upcoming",
      emoji: "🚀",
    },
    {
      title: "Multi-Channel Messaging",
      description: "WhatsApp Business API and Messenger streams.",
      status: "upcoming",
      emoji: "💬",
    },
    {
      title: "AI Workflows",
      description: "Context-aware response builders.",
      status: "upcoming",
      emoji: "🤖",
    },
    {
      title: "CRM & Analytics",
      description: "Customer database and conversion metrics.",
      status: "upcoming",
      emoji: "📊",
    },
    {
      title: "AI Voice Agents",
      description: "Inbound voice operators and bookings.",
      status: "upcoming",
      emoji: "📞",
    },
    {
      title: "Workflow Builder",
      description: "Drag-and-drop workflow canvas.",
      status: "upcoming",
      emoji: "⚙️",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title row */}
        <div className="max-w-3xl flex flex-col gap-4 text-left mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Development Journey</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our path to unified customer engagement.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We prioritize secure, stable, and Meta-compliant integrations. Track our progression as we expand the platform's features.
          </p>
        </div>

        {/* Stepper Grid Timeline */}
        <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-4 items-start w-full overflow-x-auto pb-4 scrollbar-none">
          
          {steps.map((step, idx) => {
            const isDone = step.status === "done";
            const isCurrent = step.status === "current";

            return (
              <div key={idx} className="flex-1 min-w-[200px] flex flex-col gap-3 relative">
                
                {/* Horizontal connector line for large screens */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[14px] left-[32px] right-0 h-0.5 bg-border -z-10" />
                )}

                {/* Node circle status indicator */}
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center border text-[11px] shrink-0 ${
                    isDone
                      ? "bg-primary border-primary text-primary-foreground"
                      : isCurrent
                      ? "bg-amber-500/10 border-amber-500 text-amber-500 animate-pulse"
                      : "bg-background border-border text-muted-foreground"
                  }`}>
                    {isDone ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : isCurrent ? (
                      <Hourglass className="w-3 h-3" />
                    ) : (
                      step.emoji
                    )}
                  </div>
                  
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    isDone 
                      ? "text-primary" 
                      : isCurrent 
                      ? "text-amber-500" 
                      : "text-muted-foreground"
                  }`}>
                    {isDone ? "Completed" : isCurrent ? "Active Stage" : "Planned"}
                  </span>
                </div>

                {/* Node details */}
                <div className="flex flex-col gap-1 pr-4">
                  <h4 className="text-xs font-bold text-foreground leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">
                    {step.description}
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
