"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  Check, 
  Sparkles, 
  Users, 
  Lock, 
  Send, 
  Phone, 
  Calendar, 
  ChevronRight,
  TrendingUp
} from "lucide-react";
import { Instagram } from "@/components/ui/icons";

// Defining the tabs / modules
type ModuleType = "comment" | "dm" | "contacts" | "ai";

interface Tab {
  id: ModuleType;
  label: string;
}

const TABS: Tab[] = [
  { id: "comment", label: "Comment" },
  { id: "dm", label: "DM" },
  { id: "contacts", label: "Contacts" },
  { id: "ai", label: "AI" },
];

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [lastClickedTime, setLastClickedTime] = useState<number | null>(null);
  const [tick, setTick] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Resize listener to disable 3D rotation and adjust layout on mobile viewports
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto rotation logic (checks every second to support pauses and user activity cooldowns)
  useEffect(() => {
    const timer = setInterval(() => {
      if (isHovered) {
        return; // Pause rotation on hover
      }

      if (lastClickedTime) {
        const timeSinceClick = Date.now() - lastClickedTime;
        if (timeSinceClick < 10000) {
          // Pause rotation for 10s after tab clicks
          return;
        }
      }

      setTick((t) => {
        if (t >= 5) {
          setActiveTab((prev) => (prev + 1) % 4);
          return 0;
        }
        return t + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isHovered, lastClickedTime]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setLastClickedTime(Date.now());
    setTick(0);
  };

  const currentModuleId = TABS[activeTab].id;

  // Render active module content
  const renderModuleContent = () => {
    switch (currentModuleId) {
      case "comment":
        return <CommentModule key="comment" />;
      case "dm":
        return <DMModule key="dm" />;
      case "contacts":
        return <ContactsModule key="contacts" />;
      case "ai":
        return <AIModule key="ai" />;
    }
  };

  // 3D Card Hover Variants (disabled on mobile to prevent clipping and overflow)
  const cardVariants = {
    initial: {
      rotateY: isMobile ? 0 : -10,
      rotateX: isMobile ? 0 : 6,
      rotateZ: isMobile ? 0 : 1,
      y: 0,
      boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
    },
    hover: {
      rotateY: isMobile ? 0 : -3,
      rotateX: isMobile ? 0 : 2,
      rotateZ: isMobile ? 0 : 0.5,
      y: isMobile ? -4 : -6,
      boxShadow: "0 30px 70px rgba(15, 23, 42, 0.14)",
    },
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center px-4 sm:px-0 relative">
      {/* 3D Tilted Card Container */}
      <motion.div
        className="w-full bg-white border border-[#E2E8F0] rounded-[24px] overflow-hidden p-5 sm:p-6 md:p-8 flex flex-col justify-between select-none relative"
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        variants={cardVariants}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        style={{
          transformStyle: isMobile ? "flat" : "preserve-3d",
          perspective: 1200,
        }}
        onMouseEnter={() => setIsHovered(false)} // Ignore hover on touch/mobile to prevent loops
        onMouseOver={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Tabs at the top */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4 mb-6">
          <div className="flex bg-slate-50 p-1 rounded-xl w-full">
            {TABS.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(idx)}
                  className="relative flex-1 py-2 text-[11px] sm:text-xs md:text-sm font-semibold rounded-lg transition-colors duration-200 z-10 focus:outline-none cursor-pointer"
                  style={{
                    color: isActive ? "#2563EB" : "#64748B",
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-white border border-slate-100 shadow-sm rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic content with premium transition animations */}
        <div className="flex-1 min-h-[280px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentModuleId}
              initial={{ opacity: 0, x: 20, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex-grow flex flex-col justify-between"
            >
              {renderModuleContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Progress Dots Indicator */}
      <div className="flex gap-2.5 mt-8 justify-center items-center">
        {TABS.map((_, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={idx}
              onClick={() => handleTabClick(idx)}
              className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <motion.div
                className="h-2 rounded-full bg-slate-300 group-hover:bg-slate-400 transition-colors"
                animate={{
                  width: isActive ? 24 : 8,
                  backgroundColor: isActive ? "#2563EB" : "#D1D5DB",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================================
   MODULE 1: Comment Automation
   ============================================================================ */
function CommentModule() {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-pink-50 flex items-center justify-center text-pink-500">
            <Instagram className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-[#0F172A]">Instagram Comment Automation</span>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </div>
      </div>

      {/* Workflow UI */}
      <div className="my-6 flex flex-col gap-4 relative pl-4 border-l border-slate-100 py-1">
        {/* Step 1: User Comment */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl p-3 shadow-sm max-w-[90%]"
        >
          <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold shrink-0">
            AR
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-slate-800">adithya_r</span>
              <span className="text-[8px] text-slate-400">2m</span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Interested! What is the{" "}
              <motion.span
                animate={{ 
                  backgroundColor: ["rgba(37, 99, 235, 0)", "rgba(37, 99, 235, 0.15)", "rgba(37, 99, 235, 0)"]
                }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="font-bold text-[#2563EB] px-1 rounded border border-[#2563EB]/20"
              >
                PRICE
              </motion.span>
              ?
            </p>
          </div>
        </motion.div>

        {/* Step 2: Trigger Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65, duration: 0.3 }}
          className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium pl-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span>Keyword matched: </span>
          <span className="font-bold bg-blue-50 text-[#2563EB] border border-blue-100 px-1.5 py-0.25 rounded">"PRICE"</span>
        </motion.div>

        {/* Step 3: Automated Reply & DM */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.15, duration: 0.4 }}
          className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-3 shadow-md max-w-[90%] self-end"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white flex items-center justify-center shrink-0">
            <span className="text-[9px] font-black">T</span>
          </div>
          <div className="flex flex-col text-left flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-800">tekly.ai</span>
              <span className="text-[8px] text-slate-400">Just now</span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Check your DM! Sent you the pricing link. 🚀
            </p>
            <div className="mt-1.5 flex items-center gap-1 text-[9px] text-[#22C55E] font-bold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md self-start">
              <Check className="w-3 h-3 stroke-[3px]" />
              Auto Reply & DM Sent
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-3">
        <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-500">
          <img src="/meta.jpg" alt="Meta Logo" className="h-3.5 object-contain" />
          <span>Official Tech Provider</span>
        </div>
        <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Completed
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   MODULE 2: DM Automation
   ============================================================================ */
function DMModule() {
  const [messages, setMessages] = useState<number>(0);
  const [showTyping, setShowTyping] = useState<boolean>(false);

  useEffect(() => {
    // Flow sequence timing
    // 0.5s: Message 1 ("Hi 👋")
    // 1.5s: Show Typing indicator
    // 2.8s: Message 2 (Tekly welcome)
    // 3.5s: Show Buttons
    const t1 = setTimeout(() => setMessages(1), 400);
    const t2 = setTimeout(() => setShowTyping(true), 1200);
    const t3 = setTimeout(() => {
      setShowTyping(false);
      setMessages(2);
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center text-blue-600">
            <MessageSquare className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold text-[#0F172A]">Instagram Direct Messages</span>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Active
        </div>
      </div>

      {/* Chat Conversation View */}
      <div className="my-5 flex flex-col gap-3 min-h-[170px] justify-end">
        {/* Customer Message */}
        {messages >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="flex items-end gap-2 max-w-[80%]"
          >
            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[9px] font-semibold text-slate-700 shrink-0">
              U
            </div>
            <div className="bg-slate-100 text-slate-800 text-xs py-2 px-3 rounded-2xl rounded-bl-sm">
              Hi 👋
            </div>
          </motion.div>
        )}

        {/* Typing Indicator */}
        {showTyping && (
          <div className="flex items-end gap-2 max-w-[80%] self-end">
            <div className="bg-[#2563EB]/10 text-[#2563EB] text-xs py-2 px-3.5 rounded-2xl rounded-br-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white flex items-center justify-center shrink-0">
              <span className="text-[8px] font-bold">T</span>
            </div>
          </div>
        )}

        {/* Tekly Reply */}
        {messages >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="flex items-end gap-2 max-w-[85%] self-end"
          >
            <div className="flex flex-col items-end gap-1.5">
              <div className="bg-[#2563EB] text-white text-xs py-2 px-3.5 rounded-2xl rounded-br-sm text-right leading-relaxed shadow-sm">
                <p>Hello! Thanks for reaching out.</p>
                <p className="mt-0.5">Here's everything you need.</p>
              </div>
              <span className="text-[8px] text-slate-400 flex items-center gap-1">
                Delivered
                <Check className="w-2.5 h-2.5 stroke-[3px] text-emerald-500" />
              </span>
            </div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white flex items-center justify-center shrink-0">
              <span className="text-[8px] font-bold">T</span>
            </div>
          </motion.div>
        )}

        {/* Buttons Row */}
        {messages >= 2 && (
          <div className="flex flex-wrap gap-1.5 justify-end mt-1 pl-8">
            {["Pricing", "Demo", "Support"].map((btnLabel, btnIdx) => (
              <motion.button
                key={btnLabel}
                initial={{ opacity: 0, scale: 0.9, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2 + btnIdx * 0.1 }}
                className="bg-white border border-[#2563EB] text-[#2563EB] text-[10px] font-bold px-3 py-1 rounded-full shadow-sm hover:bg-blue-50 transition-colors cursor-pointer"
              >
                {btnLabel}
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-[10px] text-slate-400">
        <span>Instant reply workflow</span>
        <div className="flex items-center gap-1.5">
          <img src="/meta.jpg" alt="Meta Logo" className="h-3.5 object-contain" />
          <span className="font-semibold text-slate-500">API Compliant</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   MODULE 3: Lead Contacts Management
   ============================================================================ */
function ContactsModule() {
  const [contactsCount, setContactsCount] = useState<number>(124);
  const [showNewContact, setShowNewContact] = useState<boolean>(false);

  useEffect(() => {
    // Animate contact entry and counter increment after 1.5 seconds
    const contactTimer = setTimeout(() => {
      setShowNewContact(true);
    }, 800);

    const countTimer = setTimeout(() => {
      setContactsCount(125);
    }, 1400);

    return () => {
      clearTimeout(contactTimer);
      clearTimeout(countTimer);
    };
  }, []);

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600">
            <Users className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-[#0F172A]">Contacts</span>
            <span className="text-[8px] text-slate-400 -mt-0.5">Lead Management</span>
          </div>
        </div>
        <div className="bg-blue-50 text-[#2563EB] border border-blue-100 px-2 py-0.5 rounded-md text-[9px] font-bold flex items-center gap-1.5">
          <TrendingUp className="w-3 h-3" />
          Sync Active
        </div>
      </div>

      {/* Contacts List Showcase */}
      <div className="my-5 flex flex-col gap-2.5">
        {/* Dynamic New Lead: Yash Vardhan */}
        {showNewContact && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center justify-between p-2.5 rounded-xl bg-blue-50/50 border border-blue-100 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                YV
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-slate-800">Yash Vardhan</span>
                <span className="text-[9px] text-[#2563EB] font-medium flex items-center gap-1 mt-0.5">
                  <Instagram className="w-2.5 h-2.5" />
                  Instagram DM
                </span>
              </div>
            </div>
            <span className="text-[10px] font-bold bg-[#E2E8F0] text-slate-700 px-2 py-0.75 rounded-md">
              Interested
            </span>
          </motion.div>
        )}

        {/* Existing Lead: Charan Tej */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-[10px] font-bold">
              CT
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-slate-800">Charan Tej</span>
              <span className="text-[9px] text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                <Instagram className="w-2.5 h-2.5 text-pink-500" />
                Instagram Comment
              </span>
            </div>
          </div>
          <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.75 rounded-md">
            Customer
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
          <img src="/meta.jpg" alt="Meta Logo" className="h-3.5 object-contain" />
          <span>Meta Lead Sync</span>
        </div>
        <div className="flex items-center gap-1 text-[#0F172A] font-extrabold text-xs">
          <motion.span
            key={contactsCount}
            initial={{ scale: 0.8, y: -2 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-[#2563EB]"
          >
            {contactsCount}
          </motion.span>
          <span className="text-slate-700 font-medium">Leads</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   MODULE 4: AI Agents (Coming Soon)
   ============================================================================ */
function AIModule() {
  const checkList = [
    "AI Customer Replies",
    "AI Lead Qualification",
    "AI Follow-ups",
    "AI Voice Calls",
    "AI Scheduling",
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              rotate: [0, 5, -5, 0],
              opacity: [0.8, 1, 0.8] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-6 h-6 rounded-md bg-purple-50 flex items-center justify-center text-purple-600"
          >
            <Sparkles className="w-3.5 h-3.5 fill-purple-600/10" />
          </motion.div>
          <span className="text-xs font-bold text-[#0F172A]">AI Agents</span>
        </div>
        <div className="bg-purple-50 text-purple-700 border border-purple-100 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide">
          Coming Soon
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="my-5 flex flex-col gap-2">
        {checkList.map((item, idx) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08 + 0.15 }}
            className="flex items-center gap-2.5 py-1 px-1.5 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
              <Check className="w-2.5 h-2.5 text-purple-600 stroke-[3px]" />
            </div>
            <span className="text-xs font-semibold text-slate-700">{item}</span>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-[10px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <img src="/meta.jpg" alt="Meta Logo" className="h-3.5 object-contain" />
          <span>Meta Sandboxed</span>
        </div>
        <span className="font-bold text-purple-600 bg-purple-50/50 border border-purple-100 px-2 py-0.5 rounded">v2.0 Preview</span>
      </div>
    </div>
  );
}
