"use client";

import { motion } from "framer-motion";
import { Instagram } from "@/components/ui/icons";
import { 
  MessageSquare, 
  Mail, 
  PhoneCall, 
  Database, 
  Workflow, 
  BarChart3, 
  MessageCircle, 
  Layers,
  Sparkles
} from "lucide-react";

interface Node {
  id: string;
  name: string;
  icon: any;
  status: "live" | "upcoming" | "planned";
  phase: string;
  x: number; // percentage from left
  y: number; // percentage from top
}

export function RoadmapVisual() {
  const nodes: Node[] = [
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      status: "live",
      phase: "Live Now",
      x: 20,
      y: 25,
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: MessageCircle,
      status: "live",
      phase: "Live Now",
      x: 80,
      y: 25,
    },
    {
      id: "voice",
      name: "Voice AI",
      icon: PhoneCall,
      status: "upcoming",
      phase: "Q3 Beta",
      x: 85,
      y: 50,
    },
    {
      id: "crm",
      name: "CRM Hub",
      icon: Database,
      status: "upcoming",
      phase: "Q4",
      x: 80,
      y: 75,
    },
    {
      id: "email",
      name: "Email Campaigns",
      icon: Mail,
      status: "planned",
      phase: "Planned",
      x: 20,
      y: 75,
    },
    {
      id: "sms",
      name: "SMS Alerts",
      icon: MessageSquare,
      status: "planned",
      phase: "Planned",
      x: 15,
      y: 50,
    },
  ];

  return (
    <div className="relative w-full aspect-[4/3] max-w-xl mx-auto bg-card border border-border rounded-2xl p-6 overflow-hidden flex flex-col justify-between shadow-sm select-none">
      
      {/* Background grid details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent)_0%,transparent_70%)] opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.15] pointer-events-none" />
      
      {/* Top title bar */}
      <div className="flex items-center justify-between z-10 border-b border-border pb-3 mb-2 bg-card/50 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-foreground tracking-tight">Tekly Hub Core System</span>
        </div>
        <span className="text-[9px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full border border-emerald-500/20 font-medium">
          Active Cluster
        </span>
      </div>

      {/* Node Grid Network Canvas */}
      <div className="relative flex-1 w-full my-4">
        
        {/* Connection paths (SVGs with animated dasharray) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {nodes.map((node) => {
            // Lines connecting to the center hub (50%, 50%)
            const isLive = node.status === "live";
            return (
              <g key={`line-${node.id}`}>
                <line
                  x1="50%"
                  y1="50%"
                  x2={`${node.x}%`}
                  y2={`${node.y}%`}
                  className={`${
                    isLive 
                      ? "stroke-primary/45 stroke-[1.5]" 
                      : "stroke-border stroke-[1] stroke-dasharray-[4_4]"
                  }`}
                />
                {isLive && (
                  <motion.circle
                    r="3"
                    fill="var(--primary)"
                    animate={{
                      cx: ["50%", `${node.x}%`],
                      cy: ["50%", `${node.y}%`],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: node.id === "instagram" ? 0 : 1.5,
                    }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Central Hub Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0px oklch(var(--primary) / 0.2)",
                "0 0 0 12px oklch(var(--primary) / 0)",
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground border-4 border-background"
          >
            <Sparkles className="w-6 h-6 animate-pulse" />
          </motion.div>
          <span className="text-[10px] font-bold text-foreground mt-2 bg-background border border-border px-2 py-0.5 rounded-full shadow-sm">
            AI Engine
          </span>
        </div>

        {/* Channel Nodes */}
        {nodes.map((node) => {
          const IconComponent = node.icon;
          const isLive = node.status === "live";
          const isUpcoming = node.status === "upcoming";

          return (
            <div
              key={node.id}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors border shadow-sm ${
                  isLive
                    ? "bg-card border-primary text-primary"
                    : isUpcoming
                    ? "bg-card border-border text-muted-foreground"
                    : "bg-muted/80 border-border/40 text-muted-foreground/50"
                }`}
              >
                <IconComponent className="w-5 h-5" />
              </motion.div>

              <div className="flex flex-col items-center mt-1.5">
                <span className="text-[9px] font-semibold text-foreground leading-none">
                  {node.name}
                </span>
                <span
                  className={`text-[7px] leading-none mt-1 px-1 py-0.2 rounded ${
                    isLive
                      ? "bg-primary/10 text-primary font-bold"
                      : isUpcoming
                      ? "bg-amber-500/10 text-amber-500 dark:text-amber-400 font-medium"
                      : "bg-accent text-muted-foreground"
                  }`}
                >
                  {node.phase}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom informational details */}
      <div className="flex justify-between items-center z-10 border-t border-border pt-2 text-[8px] text-muted-foreground">
        <span>Active Node Protocol: HTTPS / Webhook</span>
        <span>Secure TLS Encrypted</span>
      </div>
    </div>
  );
}
