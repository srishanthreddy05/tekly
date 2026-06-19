import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing tekly.in or registering for waitlist queues, you accept and agree to comply with these Terms of Service. If you disagree, do not use the website or waitlist enrollment.",
    },
    {
      title: "Service Usage Limits",
      content:
        "Tekly is a pre-release customer engagement software under development. Usage of the waitlist sign-up, early access tokens, and preview dashboard layouts is permitted strictly for evaluation, testing, and informational review.",
    },
    {
      title: "Instagram & Meta Integrations",
      content:
        "Our automation features depend on official Facebook Messenger and Instagram Graph APIs. You must hold active developer access or business accounts and comply with Meta's developer terms of service.",
    },
    {
      title: "Account Responsibility",
      content:
        "You are responsible for ensuring that all communications, triggers, comment-matching, and automated direct messages sent via Tekly comply with applicable marketing, spam, and telecommunication laws.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Thrivex Labs shall not be liable for system downtime, API modifications by Meta Platforms Inc., account suspensions, data leaks from third-party syncs, or business losses resulting from platform errors.",
    },
    {
      title: "Termination of Access",
      content:
        "We reserve the right to suspend or block access to waitlists, early access registration portals, or beta dashboard trials at any time without notice for violation of terms.",
    },
    {
      title: "Warranty Disclaimer",
      content:
        "The services, mockups, and preview tools on this site are provided 'as is' without warranty of any kind, whether express, implied, statutory, or otherwise.",
    },
    {
      title: "Governing Law",
      content:
        "These terms are governed by and construed in accordance with the laws of India, under the jurisdiction of the courts of Hyderabad, Telangana.",
    },
    {
      title: "Contact & Support",
      content:
        "For legal audit queries or developer integration questions, email Thrivex Labs at hello@tekly.in.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />

      <main className="flex-grow py-20 lg:py-28 bg-transparent relative overflow-hidden text-left">
        {/* Background visual spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-neon-green/18 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-neon-yellow/12 rounded-full blur-[110px] pointer-events-none" />
        </div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          
          {/* Header */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Legal Terms</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-sans">
              Terms of Service
            </h1>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Last updated: June 19, 2026. Please read these Terms of Service carefully before utilizing the Tekly customer engagement platform.
            </p>
          </div>

          {/* Terms Document layout */}
          <div className="flex flex-col gap-8 border-t border-border pt-8">
            {sections.map((sec, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <h2 className="text-sm font-bold text-foreground tracking-tight">
                  {idx + 1}. {sec.title}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
