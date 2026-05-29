import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Sections/Header";
import ScrollRevealProvider from "@/components/UI/ScrollRevealProvider";
import GlobalPreloader from "@/components/UI/GlobalPreloader";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export const metadata: Metadata = {
  metadataBase: new URL("https://riseinrise.com"),
  title: { default: "Rise In Rise Institute - Best Coaching for JEE, NEET & Foundation in Ranchi", template: "%s | Rise In Rise Institute" },
  description: "Rise In Rise Institute, Doranda Ranchi - expert coaching for JEE, NEET, Class 6-12 Foundation & Commerce. Small batches, concept-first teaching, proven results since 1999.",
  keywords: ["Rise In Rise Institute","coaching institute Ranchi","JEE coaching Ranchi","NEET coaching Ranchi","foundation classes Doranda Ranchi","best coaching institute Doranda","class 10 coaching Ranchi","class 12 science coaching Ranchi","commerce coaching Ranchi","Park Lane Doranda coaching","CBSE coaching Ranchi","Arbaaz Rahman coaching","Manish Verma coaching Ranchi","small batch coaching Ranchi","concept clarity JEE NEET"],
  authors: [{ name: "Rise In Rise Institute" }],
  creator: "Rise In Rise Institute",
  publisher: "Rise In Rise Institute",
  category: "Education",
  formatDetection: { email: false, address: false, telephone: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: "https://riseinrise.com" },
  openGraph: { type: "website", locale: "en_IN", url: "https://riseinrise.com", siteName: "Rise In Rise Institute", title: { default: "Rise In Rise Institute - JEE, NEET & Foundation Coaching in Ranchi", template: "%s | Rise In Rise Institute" }, description: "Ranchi's trusted coaching institute in Doranda. Expert faculty, small batches, proven results for JEE, NEET, Class 6-12 & Commerce.", images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Rise In Rise Institute - Doranda, Ranchi" }] },
  twitter: { card: "summary_large_image", title: { default: "Rise In Rise Institute - Ranchi's Trusted Coaching", template: "%s | Rise In Rise Institute" }, description: "Best coaching for JEE, NEET & Foundation in Doranda, Ranchi.", images: ["/twitter-image.png"] },
  icons: { icon: "/brand/RISE%20Logo.jpeg", shortcut: "/brand/RISE%20Logo.jpeg", apple: "/brand/RISE%20Logo.jpeg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": ["EducationalOrganization","LocalBusiness"], "@id": "https://riseinrise.com/#organization", "name": "Rise In Rise Institute", "alternateName": "RISE Institute", "url": "https://riseinrise.com", "logo": { "@type": "ImageObject", "url": "https://riseinrise.com/brand/RISE%20Logo.jpeg", "width": 112, "height": 112 }, "image": "https://riseinrise.com/opengraph-image.png", "description": "Rise In Rise Institute offers expert coaching for JEE, NEET, Foundation (Class 6-10) and Commerce (Class 11-12) in Doranda, Ranchi.", "foundingDate": "1999", "founder": [{ "@type": "Person", "name": "Arbaaz Rahman" },{ "@type": "Person", "name": "Manish Verma" }], "telephone": "+91-7781073369", "sameAs": ["https://www.facebook.com/riseinriseinstitute","https://www.instagram.com/riseinriseinstitute","https://www.youtube.com/@riseinriseinstitute"], "address": { "@type": "PostalAddress", "streetAddress": "Park Lane, beside Sri Krishna Park, opposite Doranda College Road, Darzee Mohalla, Shyamali Colony", "addressLocality": "Doranda, Ranchi", "addressRegion": "Jharkhand", "postalCode": "834002", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": "23.3397", "longitude": "85.3143" }, "contactPoint": { "@type": "ContactPoint", "telephone": "+91-7781073369", "contactType": "admissions", "areaServed": "Ranchi", "availableLanguage": ["en","hi"] }, "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "15:00", "closes": "18:00" },{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "09:00", "closes": "12:00" }], "priceRange": "Rs.1800-Rs.2500/month" },{ "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "What are the fees at Rise In Rise Institute?", "acceptedAnswer": { "@type": "Answer", "text": "Class 6 & 7 - Rs.1800/month, Class 8 - Rs.2000/month, Class 9 & 10 - Rs.2500/month. Call 7781073369 for details." } },{ "@type": "Question", "name": "What are the class timings?", "acceptedAnswer": { "@type": "Answer", "text": "Monday to Saturday 3 PM to 6 PM. Sunday tests 9 AM to 12 PM." } },{ "@type": "Question", "name": "Where is Rise In Rise Institute located?", "acceptedAnswer": { "@type": "Answer", "text": "Park Lane, beside Sri Krishna Park, opposite Doranda College, Ranchi, Jharkhand 834002." } },{ "@type": "Question", "name": "How many students per batch?", "acceptedAnswer": { "@type": "Answer", "text": "Strict cap of 20 students per batch for focused individual mentorship." } }] }] };
  return (
    <html lang="en">
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></head>
      <body className="bg-[#FAF8F5] text-[#0F172A] antialiased selection:bg-[#B48446] selection:text-white relative">
        <a href="https://wa.me/917781073369?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Rise%20In%20Rise%20Institute%20admissions." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" style={{ position:"fixed", bottom:"24px", right:"24px", zIndex:9999, width:"56px", height:"56px", backgroundColor:"#25D366", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 20px rgba(37,211,102,0.4)" }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        </a>
        <GlobalPreloader />
        <ScrollRevealProvider><Header /><main>{children}</main></ScrollRevealProvider>
      </body>
    </html>
  );
}