"use client";

import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { motion } from "framer-motion";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="w-full py-20 lg:py-28 border-b border-slate-100 bg-[#FAFBFC] relative overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Launch Readiness (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white border border-border rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6 h-full justify-between">
              
              {/* Header info */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Project Status</span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight font-sans">Launch Readiness</h3>
              </div>

              {/* Status checklist */}
              <div className="flex flex-col gap-3 mt-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Current Status</span>
                <ul className="flex flex-col gap-3 text-xs text-slate-700 font-semibold leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="shrink-0 text-emerald-600">✅</span>
                    <span>Instagram Automation completed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0">🔄</span>
                    <span>Meta App Review in progress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0">🚀</span>
                    <span>Public launch immediately after approval</span>
                  </li>
                </ul>
              </div>

              {/* Next Roadmap */}
              <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 mt-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Next Up</span>
                <ul className="flex flex-col gap-2.5 text-xs text-slate-700 font-semibold leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 shrink-0 font-bold">•</span>
                    <span>Multi-channel Messaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 shrink-0 font-bold">•</span>
                    <span>CRM Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 shrink-0 font-bold">•</span>
                    <span>AI Agent Automations</span>
                  </li>
                </ul>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Waitlist Signup Form (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white border border-border rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6">
              
              {/* Header copy */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-755">Early Access</span>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight font-sans">Join the Waitlist</h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  Tekly is currently under Meta App Review. Join the waitlist and be among the first to access the platform when it launches.
                </p>
              </div>

              {/* Form wrapper */}
              <div className="mt-2">
                <WaitlistForm />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
