"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

/**
 * Premium Navigation Component
 * Features: Sticky header with backdrop blur, smooth transitions, mobile-responsive
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for subtle header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/approach", label: "Teaching Approach" },
    { href: "/results", label: "Results" },
    { href: "/faculty", label: "Faculty" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-base-light/98 backdrop-blur-md border-b transition-smooth ${
        scrolled ? "border-base-subtle shadow-soft" : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/brand/RISE Logo.jpeg"
              alt="RISE"
              width={44}
              height={44}
              priority
              className="rounded-sm"
            />
            <span className="text-2xl font-bold text-accent-navy tracking-tight group-hover:opacity-80 transition-smooth">
              RISE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-DEFAULT hover:text-accent-navy transition-smooth relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-navy group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm px-6 py-2.5">
              Enquire
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-text-primary hover:bg-base transition-smooth focus:outline-none focus:ring-2 focus:ring-accent-navy"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out-cubic ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="pt-4 space-y-1 border-t border-base-subtle">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-text-DEFAULT hover:bg-base rounded-md transition-smooth"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 btn-primary text-center text-sm mt-2"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
