"use client";

import { motion } from "framer-motion";
import { 
  MessageCircle, 
  MessageSquare, 
  Mail, 
  PhoneCall, 
  Database, 
  Activity, 
  Layers,
  Sparkles,
  Zap,
  Combine
} from "lucide-react";
import { Instagram } from "@/components/ui/icons";

interface Node {
  name: string;
  icon: any;
  color: string;
  bg: string;
}

export function VisionFlow() {
  const channels: Node[] = [
    { name: "Instagram", icon: Instagram, color: "text-pink-500", bg: "bg-pink-500/10" },
    { name: "WhatsApp", icon: MessageCircle, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { name: "Facebook", icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-600/10" },
    { name: "Email", icon: Mail, color: "text-amber-500", bg: "bg-amber-500/10" },
    { name: "SMS", icon: MessageSquare, color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { name: "Voice AI", icon: PhoneCall, color: "text-cyan-500", bg: "bg-cyan-500/10" },
    { name: "CRM Data", icon: Database, color: "text-purple-500", bg: "bg-purple-500/10" },
    { name: "Analytics", icon: Activity, color: "text-rose-500", bg: "bg-rose-500/10" },
    { name: "Workflows", icon: Layers, color: "text-sky-400", bg: "bg-sky-400/10" },
  ];

  return (
    <section className="w-full py-20 lg:py-28 border-b border-border bg-background relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent)_0%,transparent_75%)] opacity-35 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header copy */}
        <div className="max-w-3xl flex flex-col gap-4 text-left mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Multi-Channel Vision</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where Tekly is heading.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Consolidating disjointed systems into a single, cohesive communications node. Save time, encrypt records, and respond faster.
          </p>
        </div>

        {/* Visual node flowchart layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          
          {/* Left panel: Channels (col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-4">
            {channels.map((node, idx) => {
              const IconComponent = node.icon;
              return (
                <div
                  key={node.name}
                  className="bg-card border border-border p-4 rounded-xl flex flex-col items-center gap-3 shadow-sm hover:border-primary/20 transition-all duration-200"
                >
                  <div className={`w-9 h-9 rounded-full ${node.bg} ${node.color} flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-foreground leading-none">
                    {node.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Connection Vector center column (col-span-1) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-full">
            <svg className="w-16 h-32 text-muted-foreground/30">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                </marker>
              </defs>
              <line x1="0" y1="50%" x2="90%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
            </svg>
          </div>

          {/* Right panel: Central Unified Platform Node (col-span-4) */}
          <div className="lg:col-span-4 flex items-center justify-center">
            
            <div className="w-full bg-card border border-primary/30 p-8 rounded-2xl flex flex-col items-center gap-4 text-center shadow-lg relative overflow-hidden">
              {/* Glow highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
              
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-md animate-pulse">
                <Combine className="w-7 h-7" />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold text-foreground">One Unified Platform</h3>
                <span className="text-[9px] font-bold uppercase tracking-wider text-primary">Unifying Every Stream</span>
                <p className="text-[10px] text-muted-foreground leading-relaxed mt-2 max-w-xs">
                  All channels, customer variables, triggers, and AI responders routing under a single, central platform workspace.
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-[8.5px] font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mt-1">
                <Zap className="w-3.5 h-3.5" />
                <span>Consolidated Infrastructure</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
