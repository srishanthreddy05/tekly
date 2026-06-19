"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Zap, Target, Shield } from "lucide-react";

export function FeatureAutomation() {
  const features = [
    {
      icon: Zap,
      title: "Comment Triggers",
      description:
        "Define trigger words (e.g., 'DEMO', 'GROWTH') in your posts. Whenever someone comments, Tekly instantly initiates an automated direct message thread.",
    },
    {
      icon: Target,
      title: "Lead Attribution",
      description:
        "Segment and tag leads based on the specific Reels or Posts they engaged with, sending tailored assets that maximize conversion rates.",
    },
    {
      icon: Shield,
      title: "100% Meta Compliant",
      description:
        "Built on official Meta Messenger API graph protocols. Your account and credentials remain fully secure and secure from shadowbans.",
    },
  ];

  return (
    <section id="features" className="w-full py-20 lg:py-32 border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual representation of triggers */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="bg-background border border-border rounded-2xl p-6 shadow-sm flex flex-col gap-6 relative">
              <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary">
                Active Protocol
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Trigger Event</span>
                <div className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 text-xs font-bold">
                      IG
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-foreground">User comments on Reel</span>
                      <span className="text-[10px] text-muted-foreground">Keyword matches: \"GROWTH\"</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Instantly
                  </span>
                </div>
              </div>

              {/* Connecting arrow indicator */}
              <div className="flex justify-center -my-2">
                <div className="h-6 w-0.5 bg-gradient-to-b from-primary to-primary/40 flex items-center justify-center relative">
                  <div className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">System Action</span>
                <div className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                      AI
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-foreground">Send Private Message</span>
                      <span className="text-[10px] text-muted-foreground">Custom invite card + Brevo sync</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                    Dispatched
                  </span>
                </div>
              </div>

              {/* Grid data specs */}
              <div className="border-t border-border pt-4 grid grid-cols-3 gap-2 text-center">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-foreground">0.4s</span>
                  <span className="text-[9px] text-muted-foreground">Average Latency</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-foreground">99.8%</span>
                  <span className="text-[9px] text-muted-foreground">Delivery Rate</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-foreground">100%</span>
                  <span className="text-[9px] text-muted-foreground">Compliance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy description */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Core Modules</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Turn Instagram comments into conversion pipelines.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Stop letting qualified leads slip away in your comments. With Tekly, configure instant triggers that message users immediately, bringing them straight from your organic social media accounts into your sales funnel.
            </p>

            <div className="flex flex-col gap-5 mt-2">
              {features.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <h4 className="text-sm font-bold text-foreground">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed max-w-lg">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
