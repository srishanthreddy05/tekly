"use client";

import { motion } from "framer-motion";
import { HelpCircle, RefreshCw, Unlink, Combine } from "lucide-react";

export function WhyTekly() {
  const cards = [
    {
      icon: Unlink,
      title: "The Fragmentation Pain",
      description:
        "Teams constantly switch between Instagram, WhatsApp, email clients, and disconnected CRMs. Conversations slip, response times slow down, and customer details get lost.",
    },
    {
      icon: Combine,
      title: "Unified Communication Core",
      description:
        "Tekly bridges these gaps by routing every message stream into one intelligent engine. Manage all replies, context history, and workflows under a single, cohesive pane.",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Headline block */}
        <div className="max-w-3xl flex flex-col gap-4 text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Product Vision</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for the future of customer engagement.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Businesses shouldn't have to switch between multiple tools just to communicate with customers. Tekly is being built as one platform where businesses can automate conversations, manage customer relationships, and streamline communication across multiple channels.
          </p>
        </div>

        {/* Dynamic 2-card comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-background shadow-sm flex flex-col gap-4 hover:border-primary/20 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-foreground tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {card.description}
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
