"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Tekly?",
      answer:
        "Tekly is a multi-channel customer engagement platform built for SaaS and scaling businesses. We unify Instagram, WhatsApp, Facebook Messenger, email, SMS, Voice AI, and CRM records into a single, intelligent workspace to automate routine customer interaction workflows.",
    },
    {
      question: "When will it launch?",
      answer:
        "We are currently rolling out Private Beta access for Instagram Automation. The platform is scheduled for public release in Q4. Early waitlist registrants will receive rolling access invites starting next month.",
    },
    {
      question: "How do I join early access?",
      answer:
        "Simply enter your name and email address in the waitlist form in the early access section below. Priority invites are dispatched based on registration timing.",
    },
    {
      question: "Will WhatsApp be supported?",
      answer:
        "Yes. WhatsApp Business API integration is in active engineering development and will launch as part of our Version 2.0 release in Q3.",
    },
    {
      question: "Is Tekly replacing people?",
      answer:
        "No. Tekly is built to automate repetitive, routine tasks—like matching comment keywords, capturing contact names, and sending DM links. This simplifies how businesses communicate and empowers teams to focus on customer relationships, not replacing them.",
    },
    {
      question: "Can I use Tekly for my business?",
      answer:
        "Absolutely. Whether you are a small business automating Instagram Reels replies, a creator managing direct message communities, or a marketing agency scaling multiple client panels, Tekly provides the tools you need.",
    },
  ];

  return (
    <section id="faq" className="w-full py-20 lg:py-28 border-b border-border bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Title block */}
        <div className="flex flex-col gap-4 text-center items-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold border border-border">
            <HelpCircle className="w-3.5 h-3.5 text-primary" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
            Have questions about Tekly? Learn more about our roadmap, release schedules, and core features.
          </p>
        </div>

        {/* Accordions stack */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-border rounded-xl bg-card overflow-hidden transition-all hover:border-primary/20 shadow-sm"
              >
                {/* Trigger bar */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4.5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors hover:bg-accent/10"
                >
                  <span className="text-sm font-bold text-foreground tracking-tight">
                    {faq.question}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <Minus className="w-3 h-3 text-muted-foreground" />
                    ) : (
                      <Plus className="w-3 h-3 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {/* Content dropdown */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-1 text-xs leading-relaxed text-muted-foreground border-t border-border/40 bg-accent/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
