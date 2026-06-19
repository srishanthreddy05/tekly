"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageCircle, BarChart3, HelpCircle, Layers, Mail, Database, BrainCircuit } from "lucide-react";
import { Instagram } from "@/components/ui/icons";

export function Vision() {
  const steps = [
    {
      badge: "Today",
      title: "Instagram Automation",
      description: "Direct message keyword replies, comment automation, and automatic lead tracking. Fully operational now.",
      icon: Instagram,
      active: true,
    },
    {
      badge: "Q3 Beta",
      title: "Multi-Channel Messaging",
      description: "WhatsApp Business API integrations, Facebook Messenger, and secure SMS pipelines operating in unified streams.",
      icon: MessageCircle,
      active: false,
    },
    {
      badge: "Q4 Roadmap",
      title: "CRM & AI Agents",
      description: "Unified profile hub, contact tagging, and custom-trained AI message dispatchers that reply to inquiries.",
      icon: BrainCircuit,
      active: false,
    },
    {
      badge: "Upcoming",
      title: "Voice AI & Workflow Builder",
      description: "Inbound phone agents and canvas workflow builders that route complex business operations.",
      icon: Layers,
      active: false,
    },
  ];

  return (
    <section id="vision" className="w-full py-20 lg:py-28 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="max-w-3xl flex flex-col gap-4 text-left mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Core Expansion Vision</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One Platform. Every Customer Conversation.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Tekly is designed to unify all customer touchpoints. Our roadmap charts the progression from social automation to a complete omnichannel business engine.
          </p>
        </div>

        {/* 4-column visual step layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between aspect-[1/1] ${
                  step.active
                    ? "bg-card border-primary shadow-md relative overflow-hidden"
                    : "bg-card/45 border-border/80"
                }`}
              >
                {step.active && (
                  <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-12 h-12 bg-primary/10 rounded-full blur-md" />
                )}

                <div className="flex justify-between items-start">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center border shrink-0 ${
                    step.active
                      ? "bg-primary/10 border-primary/20 text-primary"
                      : "bg-background border-border text-muted-foreground"
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    step.active
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-muted-foreground"
                  }`}>
                    {step.badge}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 mt-4">
                  <h4 className="text-sm font-bold text-foreground tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
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
