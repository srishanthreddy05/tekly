import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Sparkles, Combine, Brain, Eye } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Combine,
      title: "Consolidated Pipelines",
      description: "We bring separate, disconnected communication streams (Instagram comments, DMs, WhatsApp, SMS) into a single unified platform.",
    },
    {
      icon: Brain,
      title: "Human-Centric AI",
      description: "Our systems are built to automate routine data matching, comments sorting, and template replies, keeping people at the center.",
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description: "We operate on official APIs (Facebook Graph API) to guarantee compliance, avoiding shortcuts that expose client data.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />

      <main className="flex-grow py-20 lg:py-28 bg-transparent relative overflow-hidden text-left">
        {/* Background visual spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-neon-green/18 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-neon-yellow/12 rounded-full blur-[110px] pointer-events-none" />
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          
          {/* Header copy */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Our Story</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-sans">
              Simplifying customer engagement.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mt-2">
              Tekly was founded by Thrivex Labs in Hyderabad, India, with a clear purpose: to resolve the fragmentation overhead of modern client communications.
            </p>
          </div>

          {/* Section: Why we exist */}
          <div className="flex flex-col gap-4 border-t border-border pt-8">
            <h2 className="text-lg font-bold text-foreground tracking-tight">Why Tekly Exists</h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Every day, growing businesses waste hours switching between separate browser tabs to respond to social comments, WhatsApp messages, CRM records, and email inquiries. Critical leads fall through the cracks, response latencies spike, and context gets lost.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We built Tekly to act as a single, unified database layer for customer communications. Starting with Instagram Automation, we are expanding to WhatsApp, email, and Voice AI so you can run all engagement from one intelligent dashboard.
            </p>
          </div>

          {/* Section: Core Values */}
          <div className="flex flex-col gap-6 border-t border-border pt-8">
            <h2 className="text-lg font-bold text-foreground tracking-tight">Our Core Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="flex flex-col gap-3 p-4 bg-card border border-border rounded-xl shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-xs font-bold text-foreground">{v.title}</h4>
                      <p className="text-[10px] text-muted-foreground leading-relaxed mt-1">{v.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Mission & Vision */}
          <div className="flex flex-col gap-4 border-t border-border pt-8">
            <h2 className="text-lg font-bold text-foreground tracking-tight">Our Mission</h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We do not build technology to replace people. We build technology to simplify communication, helping teams focus their creative efforts on customer relations, conversions, and growth.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
