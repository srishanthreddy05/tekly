import { Metadata } from "next";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export const metadata: Metadata = {
  title: "Data Deletion Request | Tekly Customer Engagement",
  description: "Request removal of your waitlist lead data and contact details from the Tekly platform databases.",
  alternates: {
    canonical: "/data-deletion",
  },
};

export default function DataDeletionPage() {
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
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Data Controls</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans">
              Data Deletion
            </h1>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 border-t border-slate-100 pt-8 text-sm text-slate-600 leading-relaxed font-sans font-medium">
            <p>
              If you would like us to remove your information from Tekly, you may request deletion at any time.
            </p>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Waitlist Removal</h2>
              <p>
                If you joined the Tekly waitlist and would like your information removed, simply send an email to:
              </p>
              <p className="font-bold text-slate-905">
                <a href="mailto:srishanthreddyy05@gmail.com" className="text-blue-600 hover:underline">
                  srishanthreddyy05@gmail.com
                </a>
              </p>
              <p>Please include:</p>
              <ul className="list-disc list-inside pl-4 flex flex-col gap-1 text-slate-600">
                <li>Your name</li>
                <li>The email address used to join the waitlist</li>
              </ul>
              <p>
                We will process your request as soon as reasonably possible and confirm once your information has been removed.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Future Services</h2>
              <p>
                As Tekly grows, users will continue to have the ability to request deletion of their personal information associated with the platform.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Contact</h2>
              <p>
                For any privacy, security, or data-related questions, please contact:
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
