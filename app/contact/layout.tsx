import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Tekly | Get in Touch with Thrivex Labs",
  description: "Have questions about Tekly's multi-channel automation or Instagram CRM tools? Reach out to our technical support team in Hyderabad, India.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
