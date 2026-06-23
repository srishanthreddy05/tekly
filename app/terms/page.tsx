import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export default function TermsPage() {
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
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Legal Terms</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Last Updated: June 2026
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8 border-t border-slate-100 pt-8 text-sm text-slate-600 leading-relaxed font-sans font-medium">
            <p>
              Welcome to Tekly.
            </p>
            <p>
              By accessing this website or joining the Tekly waitlist, you agree to these Terms of Service.
            </p>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Use of the Website</h2>
              <p>Tekly is currently under development.</p>
              <p>This website is intended to provide information about the product and allow users to join the early access waitlist.</p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">User Responsibilities</h2>
              <p>
                You agree to use this website lawfully and not engage in any activity that may interfere with its operation or security.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Intellectual Property</h2>
              <p>
                All content, branding, logos, designs, text, graphics, and software associated with Tekly are the property of Thrivex Labs unless otherwise stated.
              </p>
              <p>
                No part of this website may be copied, reproduced, or distributed without prior written permission.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Limitation of Liability</h2>
              <p>Tekly is provided on an "as available" basis during its pre-launch phase.</p>
              <p>
                We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of this website.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Changes to These Terms</h2>
              <p>
                These Terms of Service may be updated as Tekly evolves. Continued use of the website constitutes acceptance of the latest version.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">Contact</h2>
              <p>
                If you have any questions regarding these Terms, please contact us at:
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
