import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";
import { Vision } from "@/components/marketing/vision";
import { WaitlistSection } from "@/components/marketing/waitlist-section";
import { Footer } from "@/components/marketing/footer";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#FAFBFC]">
      {/* Floating Pill Navbar */}
      <Navbar />

      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Vision Timeline Section */}
        <Vision />

        {/* Waitlist and Status Section Side-by-Side */}
        <WaitlistSection />
      </main>

      {/* Footer detailing legal & Thrivex Labs info */}
      <Footer />

      {/* Form Submission status toasts */}
      <Toaster position="bottom-right" />
    </div>
  );
}
