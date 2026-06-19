"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { waitlistSchema, type WaitlistInput } from "@/lib/validation";

export function WaitlistSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: WaitlistInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Welcome to Tekly 🚀");
        setSubmitted(true);
        reset();
      } else if (response.status === 409) {
        toast.error("You're already on the waitlist.");
      } else {
        toast.error(result.error || "Unable to join. Please try again.");
      }
    } catch (error) {
      toast.error("Unable to join. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <section id="waitlist" className="w-full py-24 lg:py-32 border-b border-border bg-background relative overflow-hidden">
      
      {/* Background visual spotlight */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-neon-green/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-neon-yellow/10 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-6 relative">
        
        {/* Step Badge */}
        <div className="inline-flex items-center gap-1.5 self-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold border border-border">
          <Calendar className="w-3.5 h-3.5 text-primary" />
          <span>Priority Enrollment</span>
        </div>

        {/* Header copy */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl leading-tight">
            Join Early Access
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We're opening Tekly gradually. Join the waitlist to receive launch updates and early access invitation tokens.
          </p>
        </div>

        {/* Dynamic State display */}
        <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm text-left">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col gap-4 text-center items-center py-6"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-500">
                <CheckCircle2 className="w-6 h-6 animate-pulse" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold text-foreground">🎉 You're on the waitlist!</h3>
                <p className="text-xs text-muted-foreground max-w-sm leading-relaxed mx-auto">
                  We'll notify you as soon as early access becomes available. Thank you for supporting Tekly.
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleReset}
                className="mt-2 rounded-full text-xs cursor-pointer font-semibold"
              >
                Return Home
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              
              {/* Name field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name-input" className="text-xs font-semibold text-foreground">
                  Your Name
                </label>
                <Input
                  id="name-input"
                  type="text"
                  placeholder="Srishanth Reddy"
                  className="h-10 bg-background rounded-lg border border-input focus:border-primary text-sm shadow-inner"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-[10px] text-destructive font-medium pl-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email-input" className="text-xs font-semibold text-foreground">
                  Email Address
                </label>
                <Input
                  id="email-input"
                  type="email"
                  placeholder="srishanthreddyy05@gmail.com"
                  className="h-10 bg-background rounded-lg border border-input focus:border-primary text-sm shadow-inner"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-[10px] text-destructive font-medium pl-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-10 font-bold rounded-lg bg-gradient-to-r from-primary via-indigo-600 to-neon-green hover:opacity-95 text-primary-foreground shadow-[0_4px_15px_rgba(99,102,241,0.15)] hover:shadow-[0_4px_20px_rgba(57,255,20,0.22)] cursor-pointer mt-2 text-xs flex items-center justify-center gap-1.5 transition-all duration-300 border border-transparent"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Adding to list...</span>
                  </>
                ) : (
                  <>
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </Button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
