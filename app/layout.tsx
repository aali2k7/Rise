import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Sections/Header";
import ScrollRevealProvider from "@/components/UI/ScrollRevealProvider";
import GlobalPreloader from "@/components/UI/GlobalPreloader";
import { SpeedInsights } from "@vercel/speed-insights/next";



export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rise.edu.in"),
  title: {
    default: "RISE Coaching Institute - Best JEE, NEET & Foundation Coaching in Ranchi",
    template: "%s | RISE Coaching Institute",
  },
  description:
    "Empowering students in Ranchi & Doranda to excel in JEE, NEET, and Foundation. Best coaching institute for personalized mentorship and proven results.",
  keywords: [
    "JEE Coaching in Ranchi",
    "NEET Coaching in Ranchi",
    "Foundation Classes Doranda",
    "Best Coaching Institute Ranchi",
    "Commerce Coaching Ranchi",
    "RISE Institute",
    "dear visitor allen",
    "visitor allen ac",
    "data links might",
    "navigate using saved",
    "bookmarked links please",
    "payments please note",
    "maintenance dear visitor",
    "jpg img brothers",
    "iit jee advanced",
    "jee advanced 2024",
    "jee advanced 2022",
    "iit jee main",
    "years classroom course",
    "jee advanced 2023",
    "ranchi city topper",
    "2022 tanish agarwal",
    "advanced 2024 question",
    "user name password",
    "name password submit",
    "iitjee olympiads etc",
    "coveted national level",
    "national level competitive",
    "level competitive examinations",
    "xii standards across",
    "top notch iits"
  ],
  authors: [{ name: "RISE Coaching Institute" }],
  creator: "RISE Coaching Institute",
  publisher: "RISE Coaching Institute",
  category: "Education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rise.edu.in",
    siteName: "RISE Coaching Institute",
    title: {
      default: "RISE - Best Coaching for JEE, NEET & Foundation in Ranchi",
      template: "%s | RISE Coaching Institute",
    },
    description: "Join Ranchi's premier coaching institute in Doranda. Expert faculty for JEE, NEET, Class 8-12, and Commerce.",
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "RISE Coaching Institute Classroom",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "RISE Coaching Institute - Ranchi's Top Choice",
      template: "%s | RISE",
    },
    description: "Best coaching for JEE, NEET & Foundation in Doranda, Ranchi.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/brand/RISE%20Logo.jpeg",
    shortcut: "/brand/RISE%20Logo.jpeg",
    apple: "/brand/RISE%20Logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://rise.edu.in/#organization",
        "name": "RISE Coaching Institute",
        "url": "https://rise.edu.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://rise.edu.in/brand/RISE%20Logo.jpeg",
          "width": 112,
          "height": 112
        },
        "sameAs": [
          "https://www.facebook.com/rise.edu.in",
          "https://www.instagram.com/rise.edu.in"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Doranda",
          "addressLocality": "Ranchi",
          "addressRegion": "Jharkhand",
          "postalCode": "834002",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-8252517726",
          "contactType": "customer service",
          "areaServed": "Ranchi",
          "availableLanguage": ["en", "hi"]
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://rise.edu.in/#localbusiness",
        "name": "RISE Coaching Institute",
        "image": "https://rise.edu.in/opengraph-image.png",
        "url": "https://rise.edu.in",
        "telephone": "+91-8252517726",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Doranda",
          "addressLocality": "Ranchi",
          "addressRegion": "Jharkhand",
          "postalCode": "834002",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "23.3441",
          "longitude": "85.3096"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "20:00"
        },
        "areaServed": "Ranchi",
        "priceRange": "₹₹"
      }
    ]
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
        <GlobalPreloader />
        <ScrollRevealProvider>
          <Header />

          <main>{children}</main>
          <SpeedInsights />
          {/* Invisible Keywords for SEO Strategy */}
          <div className="sr-only" aria-hidden="true" style={{ opacity: 0, position: 'absolute', pointerEvents: 'none', zIndex: -1 }}>
            dear visitor allen visitor allen ac data links might navigate using saved bookmarked links please payments please note maintenance dear visitor jpg img brothers iit jee advanced jee advanced 2024 jee advanced 2022 iit jee main years classroom course jee advanced 2023 ranchi city topper 2022 tanish agarwal advanced 2024 question user name password name password submit iitjee olympiads etc coveted national level national level competitive level competitive examinations xii standards across top notch iits
          </div>
        </ScrollRevealProvider>
      </body>
    </html>
  );
}
