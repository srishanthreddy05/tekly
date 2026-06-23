"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer id="footer" className="w-full bg-transparent border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & Company info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <span className="text-base font-black italic tracking-wide text-slate-900 font-serif">Tekly</span>
          <span className="text-xs text-slate-500 font-medium">
            Built by Thrivex Labs • Hyderabad, India
          </span>
          <a
            href="mailto:srishanthreddyy05@gmail.com"
            className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium mt-1"
          >
            srishanthreddyy05@gmail.com
          </a>
        </div>

        {/* Right Side: Legal Links & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs font-semibold text-slate-655">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">
              Contact
            </Link>
            <Link href="/data-deletion" className="hover:text-slate-900 transition-colors">
              Data Deletion
            </Link>
          </div>
          <span className="text-[10px] text-slate-400 font-semibold leading-none text-center md:text-right mt-1">
            © {new Date().getFullYear()} Tekly. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
