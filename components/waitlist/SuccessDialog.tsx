"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SuccessDialog({ open, onOpenChange }: SuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-8 rounded-3xl border border-border bg-card shadow-2xl overflow-hidden">
        {/* Glow effect inside dialog */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-neon-green/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col items-center text-center gap-6 relative z-10 py-2">
          {/* Animated checkmark icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
          >
            <CheckCircle2 className="w-8 h-8" />
          </motion.div>

          <DialogHeader className="flex flex-col gap-2">
            <DialogTitle className="text-2xl font-bold tracking-tight text-foreground font-heading">
              You're on the waitlist!
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground leading-relaxed px-4">
              Thank you for joining Tekly. We'll notify you as soon as early access opens.
            </DialogDescription>
          </DialogHeader>

          <Button
            onClick={() => onOpenChange(false)}
            className="w-full h-11 font-semibold rounded-xl bg-gradient-to-r from-primary to-indigo-600 hover:opacity-95 text-primary-foreground shadow-md transition-all duration-200 cursor-pointer text-sm"
          >
            Back to Home
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
