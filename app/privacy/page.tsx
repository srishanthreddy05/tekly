import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect name identifiers, email addresses, and metadata linked to customer conversation pipelines. We only process details explicitly submitted via waitlist registrations or retrieved through authorized Meta App integrations.",
    },
    {
      title: "How We Use Information",
      content:
        "We use your details to verify early access eligibility, communicate platform rollouts, maintain security parameters, sync records to customer lists, and optimize performance.",
    },
    {
      title: "Cookies & Storage",
      content:
        "Tekly uses system cookies and browser local storage to preserve user preferences (like your light or dark mode selection) and validate session authentications.",
    },
    {
      title: "Firebase Integration",
      content:
        "We use Google Firebase Firestore as our main database cloud node. User identifiers, signup sources, and enrollment registration stamps are stored securely inside encrypted Firestore data clusters.",
    },
    {
      title: "Brevo Email Syncing",
      content:
        "Waitlist registrations are synced to Brevo SMTP servers. Transactional emails (welcome notes, launch updates, verification keys) are disptached using Brevo's delivery systems.",
    },
    {
      title: "Telemetry & Analytics",
      content:
        "We deploy Vercel Analytics and Vercel Speed Insights to log page performance metrics, load latency times, and conversion clicks, helping optimize accessibility and visual speeds.",
    },
    {
      title: "Meta Platform Compliance",
      content:
        "Our Instagram response automation operates strictly via official Meta Graph API endpoints. We do not scrape, cache private account credentials, or bypass Messenger security limits.",
    },
    {
      title: "Data Retention & Security",
      content:
        "Waitlist identifiers are retained for the duration of the pre-launch phase and beta cycles. All records in transit are secured via TLS 1.3 encryption protocols.",
    },
    {
      title: "Data Deletion Rights",
      content:
        "Users hold full authority to inspect, update, or remove their data records. To initiate a de-authorization request or delete database records, visit our Data Deletion page or contact us.",
    },
    {
      title: "Contact Information",
      content:
        "For legal audit questions, data inspection requests, or policy inquiries, email Thrivex Labs at hello@tekly.in.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />

      <main className="flex-grow py-20 lg:py-28 bg-background relative overflow-hidden text-left">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          
          {/* Header */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Compliance</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-sans">
              Privacy Policy
            </h1>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Last updated: June 19, 2026. This Privacy Policy outlines how Thrivex Labs collects, secures, and handles user information for the Tekly platform.
            </p>
          </div>

          {/* Policy Document layout */}
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
