"use client";

import { ShieldCheck, Lock, HardDrive, KeyRound } from "lucide-react";

export function TrustVerification() {
  const points = [
    {
      icon: ShieldCheck,
      title: "Meta Verified Architecture",
      description:
        "Our pipelines communicate directly through official Facebook & Instagram Graph API channels, preventing credentials exposure or API bans.",
    },
    {
      icon: Lock,
      title: "GDPR & HIPAA Compliant",
      description:
        "Customer records, conversations, and identifiers are stored under strict data protection protocols, including data deletion request support.",
    },
    {
      icon: KeyRound,
      title: "End-to-End Encryption",
      description:
        "All data payloads in transit are encrypted via secure TLS 1.3 tunnels, protecting business communications from third-party sniffing.",
    },
  ];

  return (
    <section id="security" className="w-full py-20 lg:py-32 border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="max-w-3xl flex flex-col gap-4 text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Enterprise Ready</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A secure foundation built on trust.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We understand that customer communications hold critical business data. Tekly enforces strict compliance frameworks to ensure privacy, performance, and API safety.
          </p>
        </div>

        {/* 3-column card stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-4 transition-all hover:border-primary/20 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-bold text-foreground tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security badge footer */}
        <div className="mt-12 p-6 rounded-2xl border border-dashed border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 bg-muted/20">
          <div className="flex items-center gap-3">
            <HardDrive className="w-5 h-5 text-primary" />
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-foreground">Firestore Secure Cloud Hosting</span>
              <span className="text-[10px] text-muted-foreground">Encrypted database storage clusters in selected regional zones.</span>
            </div>
          </div>
          <span className="text-[9px] bg-accent text-accent-foreground border border-border px-3 py-1 rounded-full font-semibold">
            Status: Fully Operational
          </span>
        </div>

      </div>
    </section>
  );
}
