import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Navbar />

      <main className="flex-grow py-20 lg:py-28 bg-transparent relative overflow-hidden text-left">
        {/* Background visual spotlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
          <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />
        </div>
        
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Compliance</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Last Updated: June 2026
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 border-t border-slate-100 pt-8 text-sm text-slate-600 leading-relaxed font-sans font-medium">
            <p>
              At Tekly, we respect your privacy and are committed to protecting your personal information.
            </p>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Information We Collect</h2>
              <p>When you interact with Tekly, we may collect:</p>
              <ul className="list-disc list-inside pl-4 flex flex-col gap-1 text-slate-600">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Information you voluntarily provide through our website</li>
              </ul>
              <p>This information is collected only to provide our services and communicate with you.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">How We Use Your Information</h2>
              <p>We may use your information to:</p>
              <ul className="list-disc list-inside pl-4 flex flex-col gap-1 text-slate-600">
                <li>Manage the Tekly waitlist</li>
                <li>Send product updates and launch announcements</li>
                <li>Respond to your questions or requests</li>
                <li>Improve our products and services</li>
              </ul>
              <p>We do not sell or rent your personal information.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Data Security</h2>
              <p>
                We take reasonable measures to protect the information you provide and limit access to authorized personnel only.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Your Rights</h2>
              <p>You may request to:</p>
              <ul className="list-disc list-inside pl-4 flex flex-col gap-1 text-slate-600">
                <li>Access your personal information</li>
                <li>Update your information</li>
                <li>Delete your information</li>
              </ul>
              <p>To make a request, please contact us.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Changes to This Policy</h2>
              <p>
                This Privacy Policy may be updated from time to time. Any changes will be posted on this page with the updated revision date.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Contact</h2>
              <p>
                If you have any questions regarding this Privacy Policy or your personal information, please contact us at:
              </p>
              <p className="font-bold text-slate-905">
                <a href="mailto:srishanthreddyy05@gmail.com" className="text-blue-600 hover:underline">
                  srishanthreddyy05@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
