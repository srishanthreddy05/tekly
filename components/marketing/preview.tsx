"use client";

import { motion } from "framer-motion";
import { 
  Workflow, 
  MessageSquare, 
  UserCheck, 
  Sparkles, 
  Send,
  User,
  Activity,
  Database,
  Layers,
  Settings,
  Bell,
  Eye,
  CheckCircle2,
  Lock,
  ArrowRight
} from "lucide-react";
import { Instagram } from "@/components/ui/icons";

export function Preview() {
  const cards = [
    {
      id: "instagram-auto",
      title: "Instagram Automation",
      badge: "Active Core",
      icon: Instagram,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      content: (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center bg-accent/40 px-2.5 py-1.5 rounded border border-border">
            <span className="text-[9px] font-bold text-foreground">API Sync Status</span>
            <span className="text-[7px] bg-emerald-500/15 text-emerald-500 px-1.5 py-0.2 rounded font-bold">Connected</span>
          </div>
          <div className="flex items-center justify-between text-[8px] text-muted-foreground pt-1">
            <span>Webhook Latency</span>
            <span className="font-semibold text-foreground">0.3s</span>
          </div>
        </div>
      ),
    },
    {
      id: "comment-auto",
      title: "Comment Automation",
      badge: "Trigger Engine",
      icon: MessageSquare,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      content: (
        <div className="flex flex-col gap-2 text-left">
          <div className="text-[8px] text-muted-foreground">Keyword triggers matches:</div>
          <div className="flex flex-wrap gap-1">
            <span className="text-[8px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.2 rounded font-semibold">"DEMO"</span>
            <span className="text-[8px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.2 rounded font-semibold">"PRICE"</span>
            <span className="text-[8px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.2 rounded font-semibold">"WAITLIST"</span>
          </div>
        </div>
      ),
    },
    {
      id: "dm-auto",
      title: "DM Automation",
      badge: "Responder",
      icon: Send,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      content: (
        <div className="flex flex-col gap-1.5">
          <div className="p-2 rounded bg-accent/40 border border-border text-[8.5px] leading-relaxed text-muted-foreground">
            "Hey! Here is your private beta link: <span className="text-primary font-semibold underline">tekly.in/join</span>"
          </div>
        </div>
      ),
    },
    {
      id: "unified-inbox",
      title: "Unified Inbox",
      badge: "Joint Stream",
      icon: Layers,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      content: (
        <div className="flex flex-col gap-1.5 text-left">
          <div className="flex justify-between items-center text-[8px] p-1 rounded bg-accent/30 border border-transparent">
            <span className="font-semibold text-foreground">Adithya (Instagram)</span>
            <span className="text-muted-foreground">12s ago</span>
          </div>
          <div className="flex justify-between items-center text-[8px] p-1 rounded bg-accent/30 border border-transparent">
            <span className="font-semibold text-foreground">David V. (WhatsApp)</span>
            <span className="text-muted-foreground">2m ago</span>
          </div>
        </div>
      ),
    },
    {
      id: "customer-profile",
      title: "Customer Profile",
      badge: "CRM Detail",
      icon: User,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      content: (
        <div className="flex flex-col gap-1.5 text-left">
          <div className="flex items-center gap-1.5">
            <div className="w-5.5 h-5.5 rounded-full bg-primary/10 flex items-center justify-center text-[8px] font-bold text-primary">YS</div>
            <div className="flex flex-col leading-none">
              <span className="text-[9px] font-bold text-foreground">Yashwanth</span>
              <span className="text-[7.5px] text-muted-foreground mt-0.5">yashwanth@tekly.in</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "crm-overview",
      title: "CRM Overview",
      badge: "Database",
      icon: Database,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      content: (
        <div className="grid grid-cols-2 gap-2 text-left">
          <div className="bg-accent/40 border border-border p-1.5 rounded flex flex-col">
            <span className="text-[7px] uppercase font-bold text-muted-foreground">Total Leads</span>
            <span className="text-[10px] font-bold text-foreground mt-0.5">2,482</span>
          </div>
          <div className="bg-accent/40 border border-border p-1.5 rounded flex flex-col">
            <span className="text-[7px] uppercase font-bold text-muted-foreground">Sync Status</span>
            <span className="text-[9px] font-bold text-emerald-500 mt-0.5">OK</span>
          </div>
        </div>
      ),
    },
    {
      id: "auto-builder",
      title: "Automation Builder",
      badge: "Flow Canvas",
      icon: Workflow,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      content: (
        <div className="flex items-center gap-1.5 justify-center py-1">
          <span className="text-[8px] px-1.5 py-0.5 bg-accent rounded border border-border">Reel Comment</span>
          <ArrowRight className="w-2.5 h-2.5 text-muted-foreground" />
          <span className="text-[8px] px-1.5 py-0.5 bg-primary text-primary-foreground rounded font-semibold">Send DM</span>
        </div>
      ),
    },
    {
      id: "analytics-summary",
      title: "Analytics Summary",
      badge: "Real-time Metrics",
      icon: Activity,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      content: (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-[8.5px]">
            <span className="text-muted-foreground">Avg Conversion</span>
            <span className="font-bold text-foreground">92.4%</span>
          </div>
          <div className="w-full bg-accent h-1 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-[92%]" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="relative w-full py-20 lg:py-28 border-b border-border bg-background overflow-hidden">
      {/* Neon glow backdrops */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 right-10 w-[400px] h-[400px] bg-neon-green/6 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 left-10 w-[400px] h-[400px] bg-neon-yellow/8 rounded-full blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header copy */}
        <div className="max-w-3xl flex flex-col gap-4 text-left mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">System Capabilities</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Inside the Tekly dashboard.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Take a look at how Tekly streamlines customer interactions. Simple layouts, powerful triggers, and data-dense dashboards.
          </p>
        </div>

        {/* 8-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.id}
                className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 hover:border-primary/20 hover:shadow-md transition-all duration-200"
              >
                
                {/* Header elements inside card */}
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-lg ${card.bg} ${card.color} flex items-center justify-center shrink-0`}>
                    <IconComponent className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-wider bg-accent/60 text-muted-foreground border border-border px-2 py-0.5 rounded-full">
                    {card.badge}
                  </span>
                </div>

                {/* Card Title & Content */}
                <div className="flex flex-col gap-1 text-left">
                  <h3 className="text-xs font-bold text-foreground tracking-tight leading-none">
                    {card.title}
                  </h3>
                  <div className="mt-3 w-full border-t border-border/60 pt-3">
                    {card.content}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
