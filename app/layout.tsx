import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Sections/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rise.edu.in"), // Replace with actual domain if known, placeholder for now
  title: {
    default: "RISE - Our Effort. Your Rise.",
    template: "%s | RISE",
  },
  description:
    "Premium coaching institute for JEE and NEET aspirants. Class 11 and 12 preparation with discipline, consistency, and results.",
  keywords: ["JEE Coaching", "NEET Coaching", "Rise Institute", "Medical Entrance", "Engineering Entrance", "Class 11", "Class 12"],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "RISE Institute" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "RISE",
    "url": "https://rise.edu.in",
    "description": "Premium coaching institute for JEE and NEET aspirants.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Srinagar",
      "addressRegion": "Jammu and Kashmir",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8252517726",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />

        <main>{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
