"use client";

import { motion } from "framer-motion";
import { Building2, Sparkles, FolderKanban } from "lucide-react";

export function Personas() {
  const personas = [
    {
      icon: Building2,
      title: "Businesses",
      description: "Reduce repetitive customer communication.",
    },
    {
      icon: Sparkles,
      title: "Creators",
      description: "Manage conversations and grow communities.",
    },
    {
      icon: FolderKanban,
      title: "Agencies",
      description: "Handle multiple clients from one platform.",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title copy */}
        <div className="max-w-3xl flex flex-col gap-4 text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Target Audience</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who Tekly is built for.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Whether you are managing a single corporate brand, a creator channel, or multiple customer client accounts.
          </p>
        </div>

        {/* 3 cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((per, idx) => {
            const IconComponent = per.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 450, damping: 25 }}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:border-primary/20 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <h3 className="text-base font-bold text-foreground">
                    {per.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {per.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
