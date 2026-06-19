import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Trash2, ShieldCheck, Mail } from "lucide-react";

export default function DataDeletionPage() {
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
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Compliance & Policy</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-sans">
              Data Deletion Instructions
            </h1>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Tekly is committed to maintaining privacy boundaries. Below are instructions to disconnect Meta app integrations and request the deletion of your account data.
            </p>
          </div>

          {/* Section: Disconnect Meta Integration */}
          <div className="flex flex-col gap-4 border-t border-border pt-8">
            <h2 className="text-sm font-bold text-foreground tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
              1. How to remove Tekly from your Instagram / Facebook Page
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              If you have connected your Meta business account to Tekly and wish to remove de-authorize the integration, follow these standard Meta guidelines:
            </p>
            <ol className="list-decimal list-inside text-xs text-muted-foreground flex flex-col gap-2 pl-2">
              <li>Log in to your Facebook account and navigate to your business profile settings.</li>
              <li>Go to <strong>Settings & Privacy</strong> ➔ <strong>Settings</strong>.</li>
              <li>Select <strong>Business Integrations</strong> from the left-hand menu.</li>
              <li>Locate <strong>Tekly</strong> in the list of active integrations and click <strong>Remove</strong>.</li>
              <li>Confirm the deletion request prompt. Meta will immediately de-authorize our webhook listeners.</li>
            </ol>
          </div>

          {/* Section: Request Database deletion */}
          <div className="flex flex-col gap-4 border-t border-border pt-8">
            <h2 className="text-sm font-bold text-foreground tracking-tight flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-primary shrink-0" />
              2. How to Request Deletion of Stored Database Records
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              When you delete or de-authorize the integration, or if you simply registered on our waitlist and wish to remove your data from our database cluster (Google Firebase Firestore & Brevo SMTP servers), you can submit a deletion request:
            </p>
            <ul className="list-disc list-inside text-xs text-muted-foreground flex flex-col gap-2 pl-2">
              <li>Send a formal data deletion email request to: <a href="mailto:hello@tekly.in" className="text-primary hover:underline font-bold">hello@tekly.in</a>.</li>
              <li>Specify your waitlist email address and name.</li>
              <li>Our team will process the request and remove all name tokens, email addresses, and metadata stamps within <strong>5 business days</strong>.</li>
              <li>You will receive a final confirmation email once all database records have been deleted.</li>
            </ul>
          </div>

          {/* Section: Compliance Acknowledgment */}
          <div className="flex flex-col gap-4 border-t border-border pt-8 p-5 bg-card border border-dashed border-border rounded-xl">
            <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Meta Developer Policy Compliance
            </h2>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              These guidelines satisfy section 8 of the Meta Platform Developer Terms. Tekly does not cache user data once disconnected and honors all de-authorization alerts via Meta platform webhook callbacks.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
