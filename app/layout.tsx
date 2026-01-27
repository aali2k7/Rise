import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Sections/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rise.edu.in"),
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "RISE Institute" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rise.edu.in",
    siteName: "RISE Institute",
    title: {
      default: "RISE - Our Effort. Your Rise.",
      template: "%s | RISE",
    },
    description: "Premium coaching institute for JEE and NEET aspirants.",
    images: [{
      url: "/opengraph-image.png", // Assuming a default OG image exists or will be picked up if placed in root
      width: 1200,
      height: 630,
      alt: "RISE Institute",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "RISE - Our Effort. Your Rise.",
      template: "%s | RISE",
    },
    description: "Premium coaching institute for JEE and NEET aspirants.",
    images: ["/twitter-image.png"], // Assuming default
  },
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
    "logo": "https://rise.edu.in/brand/RISE%20Logo.jpeg",
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
