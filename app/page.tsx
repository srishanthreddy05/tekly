import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";
import { WhyTekly } from "@/components/marketing/why-tekly";
import { Progress } from "@/components/marketing/progress";
import { Preview } from "@/components/marketing/preview";
import { VisionFlow } from "@/components/marketing/vision-flow";
import { WhyUs } from "@/components/marketing/why-us";
import { Personas } from "@/components/marketing/personas";
import { Roadmap } from "@/components/marketing/roadmap";
import { FAQ } from "@/components/marketing/faq";
import { WaitlistSection } from "@/components/marketing/waitlist-section";
import { Footer } from "@/components/marketing/footer";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Dynamic Floating Navbar */}
      <Navbar />

      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* SECTION 1 — Product Vision */}
        <WhyTekly />

        {/* SECTION 2 — Current Progress Timeline */}
        <Progress />

        {/* SECTION 3 — Product Preview 8 Cards */}
        <Preview />

        {/* SECTION 4 — Multi-Channel Vision Flow */}
        <VisionFlow />

        {/* SECTION 5 — Why Tekly 3 Value Cards */}
        <WhyUs />

        {/* SECTION 6 — Who Tekly Is Built For Personas */}
        <Personas />

        {/* SECTION 7 — Roadmap (Completed V1 highlighted, muted upcoming) */}
        <Roadmap />

        {/* SECTION 8 — FAQ (Questions match list) */}
        <FAQ />

        {/* SECTION 9 — Primary Waitlist Conversion Section (Name & Email fields) */}
        <WaitlistSection />
      </main>

      {/* Footer detailing legal & Thrivex Labs info */}
      <Footer />

      {/* Form Submission status toasts */}
      <Toaster position="bottom-right" />
    </div>
  );
}
