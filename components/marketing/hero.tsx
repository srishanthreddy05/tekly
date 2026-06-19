"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Globe, 
  Workflow, 
  Cpu,
  Mail,
  MessageSquare,
  MessageCircle,
  Database,
  BarChart3,
  PhoneCall,
  Lock,
  Sparkles,
  Send,
  UserCheck,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Instagram } from "@/components/ui/icons";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const channelPills = [
    { name: "Instagram", icon: Instagram, color: "text-pink-500", delay: 0 },
    { name: "WhatsApp", icon: MessageCircle, color: "text-emerald-500", delay: 1.2 },
    { name: "Facebook", icon: MessageSquare, color: "text-blue-600", delay: 0.6 },
    { name: "Email", icon: Mail, color: "text-amber-500", delay: 1.8 },
    { name: "SMS", icon: MessageSquare, color: "text-indigo-500", delay: 2.4 },
    { name: "Voice AI", icon: PhoneCall, color: "text-cyan-500", delay: 0.8 },
    { name: "Telegram", icon: Send, color: "text-sky-400", delay: 1.5 },
    { name: "CRM", icon: Database, color: "text-purple-500", delay: 2.1 },
  ];

  return (
    <section className="relative w-full overflow-hidden py-24 lg:py-36 border-b border-border bg-background">
      {/* Visual background details */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.06]" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] translate-y-1/2" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left z-10">
            
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold border border-border">
              <Sparkles className="w-3 h-3 text-primary animate-pulse" />
              <span>Multi-Channel Customer Engagement</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08] font-sans">
              One Platform.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-muted-foreground/60 mt-1">
                Every Customer Conversation.
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="max-w-lg text-sm sm:text-base text-muted-foreground leading-relaxed">
              Businesses waste valuable time managing customer interactions across fragmented tools. Tekly simplifies that. Starting with Instagram Automation, expanding into a complete, intelligent engagement suite.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-row gap-4 mt-2">
              <Button
                onClick={() => scrollToSection("waitlist")}
                className="h-12 px-8 font-bold rounded-full bg-gradient-to-r from-primary to-indigo-600 hover:opacity-95 text-primary-foreground shadow-lg cursor-pointer text-xs"
              >
                Join Waitlist
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("vision")}
                className="h-12 px-8 font-semibold rounded-full border border-border bg-card/40 hover:bg-accent/40 text-foreground cursor-pointer text-xs"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border/80">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-[10px] font-semibold text-muted-foreground leading-none">Meta Official APIs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-[10px] font-semibold text-muted-foreground leading-none">OAuth 2.0 Security</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Workflow className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-[10px] font-semibold text-muted-foreground leading-none">Real-Time Webhooks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-[10px] font-semibold text-muted-foreground leading-none">Built in India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Dashboard Mockup with Channel Pills */}
          <div className="lg:col-span-6 relative w-full aspect-[4/3.5] select-none">
            
            {/* Simulated Desktop dashboard viewport container */}
            <div className="absolute inset-4 rounded-2xl border border-border bg-card/45 backdrop-blur-sm shadow-2xl overflow-hidden flex flex-col">
              
              {/* Window chrome header */}
              <div className="px-4 py-3 border-b border-border/80 flex items-center justify-between bg-card/60">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                </div>
                <div className="text-[9px] font-semibold text-muted-foreground bg-accent/40 px-3 py-0.5 rounded border border-border">
                  app.tekly.in/inbox
                </div>
                <div className="w-8" />
              </div>

              {/* Viewport content */}
              <div className="flex-1 p-3 grid grid-cols-12 gap-3 bg-background/20 relative overflow-hidden">
                
                {/* Simulated Side card: Inbox Feed (col-span-5) */}
                <div className="col-span-5 bg-card/80 border border-border/80 rounded-xl p-2.5 flex flex-col gap-2 shadow-sm">
                  <span className="text-[9px] uppercase font-bold text-muted-foreground tracking-wider">Conversations</span>
                  
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between p-1.5 rounded bg-accent/60 border border-border">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center text-[8px] font-bold text-primary">AR</div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-bold text-foreground leading-none">Alex R.</span>
                          <span className="text-[8px] text-muted-foreground leading-none mt-0.5">comment: 'demo'</span>
                        </div>
                      </div>
                      <span className="text-[7px] text-primary font-semibold">Active</span>
                    </div>

                    <div className="flex items-center justify-between p-1.5 rounded hover:bg-accent/30 border border-transparent">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[8px] font-bold text-zinc-400">SC</div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-semibold text-muted-foreground leading-none">Sarah Chen</span>
                          <span className="text-[8px] text-muted-foreground/60 leading-none mt-0.5">DM: 'pricing'</span>
                        </div>
                      </div>
                      <span className="text-[7px] text-muted-foreground">2m ago</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Center card: CRM Node (col-span-7) */}
                <div className="col-span-7 flex flex-col gap-3">
                  
                  {/* CRM profile widget */}
                  <div className="bg-card/80 border border-border/80 rounded-xl p-2.5 flex flex-col gap-1.5 shadow-sm">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-foreground">Alex Rivera</span>
                        <span className="text-[8px] text-muted-foreground">alex@rivera.design</span>
                      </div>
                      <span className="text-[7px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.2 rounded font-bold">
                        IG Lead
                      </span>
                    </div>
                    <div className="flex items-center gap-2 border-t border-border pt-1.5">
                      <span className="text-[8px] text-muted-foreground">Status:</span>
                      <span className="text-[8px] text-emerald-500 font-bold flex items-center gap-0.5">
                        <UserCheck className="w-2.5 h-2.5" /> Synced to Brevo
                      </span>
                    </div>
                  </div>

                  {/* Flow Automation Node */}
                  <div className="bg-card/85 border border-border/80 rounded-xl p-2.5 flex flex-col gap-2 shadow-sm">
                    <span className="text-[8px] uppercase font-bold text-muted-foreground tracking-wider">Response Builder</span>
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded bg-accent border border-border text-[8px] font-semibold">Comment 'GROWTH'</div>
                      <div className="w-3 h-0.5 bg-primary/40" />
                      <div className="p-1 rounded bg-primary text-primary-foreground text-[8px] font-semibold flex items-center gap-0.5">
                        <Sparkles className="w-2 h-2" /> Dispatch DM
                      </div>
                    </div>
                  </div>

                </div>

                {/* Overlay Floating Analytics card */}
                <div className="absolute bottom-3 right-3 bg-card border border-border rounded-xl p-2.5 shadow-lg flex items-center gap-3 max-w-[140px] transform translate-y-1">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-foreground">92% Conversion</span>
                    <span className="text-[7px] text-muted-foreground">Response flow rate</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Channel Pills */}
            {channelPills.map((pill, index) => {
              const IconComponent = pill.icon;
              const positions = [
                "top-0 left-6", // Instagram
                "top-4 right-10", // WhatsApp
                "top-1/3 -left-4", // Facebook
                "top-1/2 -right-8", // Email
                "bottom-1/4 -left-6", // SMS
                "bottom-8 right-6", // Voice AI
                "bottom-0 left-12", // Telegram
                "top-10 left-1/2", // CRM
              ];

              return (
                <motion.div
                  key={index}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: pill.delay,
                  }}
                  className={`absolute ${positions[index]} z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/90 backdrop-blur-sm shadow-md cursor-default text-[10px] font-bold text-foreground`}
                >
                  <IconComponent className={`w-3.5 h-3.5 ${pill.color}`} />
                  <span>{pill.name}</span>
                </motion.div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}
