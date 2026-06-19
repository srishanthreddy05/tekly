"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { waitlistSchema, type WaitlistInput } from "@/lib/validators";
import { SuccessDialog } from "./SuccessDialog";

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
    if (isSubmitting) return; // Prevent double submission
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
        toast.success("Welcome to Tekly! 🚀");
        reset();
        setIsDialogOpen(true);
      } else if (response.status === 409) {
        toast.error("You're already on the waitlist.");
      } else {
        toast.error(result.error || "Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("Unable to connect. Please try again.");
      console.error("[Waitlist Form Submission Error]:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
              <AlertCircle className="w-3.5 h-3.5" /> {errors.name.message}
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
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}
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

      {/* Success Dialog Popup */}
      <SuccessDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
