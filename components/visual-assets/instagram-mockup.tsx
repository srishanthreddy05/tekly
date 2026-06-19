"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Send, Check, Heart, User, Sparkles } from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "system";
  text: string;
  timestamp: string;
  hasCard?: boolean;
}

export function InstagramMockup() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [step, setStep] = useState(0);

  const script: Message[] = [
    {
      id: 1,
      sender: "user",
      text: "Just commented 'GROWTH' on your latest product reveal reel! 📈",
      timestamp: "10:24 AM",
    },
    {
      id: 2,
      sender: "system",
      text: "Hey there! Thanks for engaging with our post. Here is your fast-track waitlist invite to Tekly: Instagram Automation & Multi-Channel Engagement.",
      timestamp: "10:24 AM",
    },
    {
      id: 3,
      sender: "system",
      text: "Join the waitlist to unlock voice AI, automated WhatsApp pipelines, and Instagram DMs under one platform.",
      timestamp: "10:24 AM",
      hasCard: true,
    },
  ];

  useEffect(() => {
    // Reset conversation script and run in a loop
    if (step === 0) {
      setMessages([]);
      setTyping(false);
      const timer = setTimeout(() => {
        setTyping(true);
        setStep(1);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (step === 1) {
      const timer = setTimeout(() => {
        setMessages([script[0]]);
        setTyping(false);
        setStep(2);
      }, 1500);
      return () => clearTimeout(timer);
    }

    if (step === 2) {
      const timer = setTimeout(() => {
        setTyping(true);
        setStep(3);
      }, 1200);
      return () => clearTimeout(timer);
    }

    if (step === 3) {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, script[1]]);
        setTyping(false);
        setStep(4);
      }, 2000);
      return () => clearTimeout(timer);
    }

    if (step === 4) {
      const timer = setTimeout(() => {
        setTyping(true);
        setStep(5);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (step === 5) {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, script[2]]);
        setTyping(false);
        setStep(6);
      }, 1500);
      return () => clearTimeout(timer);
    }

    if (step === 6) {
      const timer = setTimeout(() => {
        setStep(0);
      }, 8000); // Wait 8 seconds before restarting the loop
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="relative w-full max-w-[340px] mx-auto rounded-[38px] border-4 border-zinc-200 dark:border-zinc-800 bg-zinc-950 p-2.5 shadow-2xl overflow-hidden aspect-[9/18.5]">
      {/* Speaker/Camera notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-black rounded-full z-20 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-800 mr-2" />
        <div className="w-10 h-1 bg-zinc-900 rounded-full" />
      </div>

      {/* Screen Frame */}
      <div className="w-full h-full rounded-[30px] bg-background border border-zinc-100 dark:border-zinc-900 overflow-hidden flex flex-col pt-6 select-none">
        
        {/* DM Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-primary/20">
              <span className="text-[10px] font-bold text-primary">T</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-xs font-semibold text-foreground tracking-tight leading-none">tekly_hq</span>
                <span className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center text-[6px] text-white font-bold">✓</span>
              </div>
              <span className="text-[9px] text-muted-foreground leading-none mt-0.5">Active now</span>
            </div>
          </div>
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
        </div>

        {/* Conversation Area */}
        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2.5 scrollbar-none justify-end">
          
          <div className="text-center my-2">
            <span className="text-[9px] bg-accent/50 text-accent-foreground px-2 py-0.5 rounded-full border border-border">
              Instagram Automation Flow
            </span>
          </div>

          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 450, damping: 30 }}
              className={`flex flex-col max-w-[85%] ${
                msg.sender === "user" ? "self-end items-end" : "self-start items-start"
              }`}
            >
              {msg.sender === "system" && (
                <span className="text-[8px] text-muted-foreground ml-1.5 mb-0.5">Tekly Bot</span>
              )}
              
              <div
                className={`px-3 py-2 text-xs rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                    : "bg-muted text-foreground rounded-tl-sm border border-border"
                }`}
              >
                {msg.text}
              </div>

              {msg.hasCard && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-1.5 w-full bg-card border border-border rounded-xl p-2.5 flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-[10px] font-semibold text-foreground">Launch Invite</span>
                  </div>
                  <p className="text-[9px] text-muted-foreground leading-normal">
                    Secure your spot and receive 50% early adopter credit.
                  </p>
                  <div className="w-full text-center py-1 text-[9px] font-medium bg-primary text-primary-foreground rounded-md shadow-sm">
                    Enter waitlist
                  </div>
                </motion.div>
              )}

              <span className="text-[7px] text-muted-foreground mt-0.5 px-1.5">
                {msg.timestamp}
              </span>
            </motion.div>
          ))}

          {/* Typing Indicator */}
          {typing && (
            <div className="self-start flex flex-col items-start max-w-[80%]">
              <span className="text-[8px] text-muted-foreground ml-1.5 mb-0.5">Tekly AI</span>
              <div className="bg-muted px-3.5 py-2.5 rounded-2xl rounded-tl-sm border border-border flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" />
              </div>
            </div>
          )}
        </div>

        {/* DM Footer Input */}
        <div className="p-3 border-t border-border bg-card flex items-center gap-2">
          <div className="flex-1 bg-accent/40 rounded-full border border-border px-3 py-1.5 flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground">Start conversation...</span>
            <Send className="w-3 h-3 text-muted-foreground" />
          </div>
          <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center border border-border">
            <Heart className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}
