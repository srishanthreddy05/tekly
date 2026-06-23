import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://tekly.in"),
  title: "Tekly | Multi-Channel Customer Engagement Platform",
  description: "Tekly helps businesses automate customer conversations, streamline communication, and manage customer engagement from one intelligent platform.",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  keywords: [
    "Customer Engagement",
    "Instagram Automation",
    "CRM",
    "AI Automation",
    "WhatsApp Automation",
    "Business Automation",
    "Social Media Automation",
    "India",
  ],
  authors: [{ name: "Thrivex Labs" }],
  openGraph: {
    title: "Tekly | Multi-Channel Customer Engagement Platform",
    description: "Tekly helps businesses automate customer conversations, streamline communication, and manage customer engagement from one intelligent platform.",
    url: "https://tekly.in",
    siteName: "Tekly",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Tekly Customer Engagement Platform Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tekly | Multi-Channel Customer Engagement",
    description: "Unify Instagram, WhatsApp, and email customer streams under one platform.",
    images: ["/logo.jpeg"],
  },
  other: {
    "facebook-domain-verification": "YOUR_META_VERIFICATION_TOKEN_HERE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD schemas
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://tekly.in/#organization",
        "name": "Tekly",
        "url": "https://tekly.in",
        "logo": "https://tekly.in/logo.jpeg",
        "sameAs": [
          "https://www.linkedin.com/company/tekly"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@tekly.in",
          "contactType": "customer support",
          "areaServed": "IN"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://tekly.in/#website",
        "url": "https://tekly.in",
        "name": "Tekly",
        "description": "Multi-Channel Customer Engagement Platform",
        "publisher": {
          "@id": "https://tekly.in/#organization"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://tekly.in/#software",
        "name": "Tekly",
        "operatingSystem": "All",
        "applicationCategory": "BusinessApplication",
        "url": "https://tekly.in",
        "publisher": {
          "@id": "https://tekly.in/#organization"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased scroll-smooth",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        playfair.variable
      )}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://tekly.in" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
          {/* Vercel Analytics & Speed Insights for production optimization */}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
