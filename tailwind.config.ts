import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium color system: formal, academic, trustworthy
        // Base: off-white / soft neutral backgrounds
        base: {
          light: "#FBFBFB",      // Pure off-white for main background
          DEFAULT: "#F7F7F7",    // Soft neutral for sections
          subtle: "#F0F0F0",     // Subtle divider/background
        },
        // Accent: deep navy (primary) OR muted emerald (alternative)
        accent: {
          navy: "#0F172A",        // Deep navy - primary accent (formal, trustworthy)
          "navy-light": "#1E293B", // Lighter navy for hovers
          emerald: "#2D5A4E",     // Muted emerald alternative
          "emerald-light": "#3D6A5E",
        },
        // Text: deep charcoal / near-black for maximum readability
        text: {
          primary: "#0A0A0A",    // Near-black for headings
          DEFAULT: "#1A1A1A",    // Deep charcoal for body
          secondary: "#4A4A4A",  // Medium gray for secondary text
          muted: "#6B6B6B",      // Light gray for muted text
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Professional typography scale with strong hierarchy
        "display": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h1": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h2": ["2.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        "h3": ["1.75rem", { lineHeight: "1.4", fontWeight: "600" }],
        "h4": ["1.5rem", { lineHeight: "1.5", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      spacing: {
        // Consistent spacing system
        "section": "8rem",        // Section padding (generous whitespace)
        "section-sm": "5rem",     // Smaller section padding
        "card": "2rem",           // Card padding
      },
      boxShadow: {
        // Subtle, premium shadows only
        "soft": "0 2px 8px rgba(0, 0, 0, 0.04)",
        "card": "0 4px 16px rgba(0, 0, 0, 0.06)",
        "hover": "0 8px 24px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        "card": "12px",
        "button": "8px",
      },
      transitionDuration: {
        "smooth": "300ms",
        "gentle": "400ms",
      },
      transitionTimingFunction: {
        "ease-out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
