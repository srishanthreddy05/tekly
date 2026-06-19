"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormInput = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true);
    // Simulate API request dispatch
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />

      <main className="flex-grow py-20 lg:py-28 bg-background relative overflow-hidden text-left">
        
        {/* Background visual details */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.06] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Location & Coordinates (col-span-5) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Get In Touch</span>
                <h1 className="text-3xl font-bold tracking-tight text-foreground font-sans">
                  Contact our team.
                </h1>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
                  Have questions about integrations, schedules, or compliance audits? Send us a message and we'll reply shortly.
                </p>
              </div>

              {/* Office markers */}
              <div className="flex flex-col gap-4 mt-2">
                <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5.5 h-5.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground leading-none">Email Address</span>
                    <a href="mailto:srishanthreddyy05@gmail.com" className="text-sm font-bold text-foreground mt-1.5 leading-none hover:underline">
                      srishanthreddyy05@gmail.com
                    </a>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5.5 h-5.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground leading-none">Office Location</span>
                    <span className="text-sm font-bold text-foreground mt-1.5 leading-none">
                      Hyderabad, India
                    </span>
                  </div>
                </div>
              </div>

              <span className="text-[10px] text-muted-foreground/60">
                Thrivex Labs Corporation
              </span>

            </div>

            {/* Right Column: Contact Form Panel (col-span-7) */}
            <div className="lg:col-span-7 bg-card border border-border p-6 lg:p-8 rounded-2xl shadow-sm">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col gap-4 text-center items-center py-8"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-bold text-foreground">Message Dispatched</h3>
                    <p className="text-xs text-muted-foreground max-w-sm leading-relaxed mx-auto">
                      Thank you for reaching out. We have logged your request and a member of Thrivex Labs will connect shortly.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 rounded-full text-xs font-semibold"
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name-input" className="text-xs font-semibold text-foreground">
                      Full Name
                    </label>
                    <Input
                      id="name-input"
                      type="text"
                      placeholder="Srishanth Reddy"
                      className="h-10 bg-background border border-input rounded-lg focus:border-primary text-sm shadow-inner"
                      disabled={isSubmitting}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-[10px] text-destructive font-medium pl-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email-input" className="text-xs font-semibold text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email-input"
                      type="email"
                      placeholder="srishanthreddyy05@gmail.com"
                      className="h-10 bg-background border border-input rounded-lg focus:border-primary text-sm shadow-inner"
                      disabled={isSubmitting}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-destructive font-medium pl-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message-input" className="text-xs font-semibold text-foreground">
                      Your Inquiry
                    </label>
                    <Textarea
                      id="message-input"
                      placeholder="Detail your questions or business requirements..."
                      className="min-h-[120px] bg-background border border-input rounded-lg focus:border-primary text-sm shadow-inner resize-none p-3"
                      disabled={isSubmitting}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-[10px] text-destructive font-medium pl-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-10 font-bold rounded-lg bg-gradient-to-r from-primary to-indigo-600 hover:opacity-95 text-primary-foreground shadow-md cursor-pointer mt-2 text-xs flex items-center justify-center gap-1.5"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </Button>

                </form>
              )}

            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
