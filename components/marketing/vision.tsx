"use client";

import { 
  MessageCircle, 
  MessageSquare, 
  Mail, 
  Database, 
  Cpu, 
  PhoneCall, 
  Combine,
  ChevronRight
} from "lucide-react";
import { Instagram } from "@/components/ui/icons";
import { motion } from "framer-motion";

export function Vision() {
  const channels = [
    { name: "Instagram", icon: Instagram, color: "text-pink-500 bg-pink-50" },
    { name: "WhatsApp", icon: MessageCircle, color: "text-emerald-600 bg-emerald-50" },
    { name: "Facebook", icon: MessageSquare, color: "text-blue-600 bg-blue-50" },
    { name: "Email", icon: Mail, color: "text-amber-600 bg-amber-50" },
    { name: "SMS", icon: MessageSquare, color: "text-indigo-600 bg-indigo-50" },
    { name: "CRM", icon: Database, color: "text-purple-650 bg-purple-50" },
    { name: "AI Agents", icon: Cpu, color: "text-sky-600 bg-sky-50" },
    { name: "AI Voice Calls", icon: PhoneCall, color: "text-teal-600 bg-teal-50" },
    { name: "One Platform", icon: Combine, color: "text-[#00473e] bg-[#e8f8f0] border-emerald-200/50" },
  ];

  return (
    <section id="vision" className="w-full py-20 lg:py-28 border-b border-slate-100 bg-[#FAFBFC] relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-14">
        
        {/* Visual Channel Sequence */}
        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-2 md:gap-x-3">
          {channels.map((channel, index) => {
            const IconComponent = channel.icon;
            const isLast = index === channels.length - 1;

            return (
              <div key={index} className="flex items-center gap-2 md:gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-full border border-border bg-white shadow-sm cursor-default transition-all duration-300 hover:shadow-md hover:border-slate-300/80`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${channel.color}`}>
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 tracking-tight font-sans">
                    {channel.name}
                  </span>
                </motion.div>

                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.04 }}
                    className="text-slate-300"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Vision Tagline */}
        <div className="max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal font-serif italic tracking-tight px-4"
          >
            "Our vision is to simplify customer engagement by bringing every communication channel into one intelligent workspace."
          </motion.p>
        </div>

      </div>
    </section>
  );
}
