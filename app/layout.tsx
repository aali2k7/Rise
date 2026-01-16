import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "RISE - Our Effort. Your Rise.",
  description:
    "Premium coaching institute for JEE and NEET aspirants. Class 11 and 12 preparation with discipline, consistency, and results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />

        <main>{children}</main>
      </body>
    </html>
  );
}
