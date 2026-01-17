"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Premium Header Component
 * Stationary (Fixed) frosted-glass header with subtle sky tint
 * Explicitly designed to not move or resize on scroll.
 */
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Track scroll for subtle material shift (only shadow/opacity, no layout changes)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
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
            // Fixed positioning to ensure it stays at the top
            // Constant padding (py-4) to prevent jumping
            // z-50 to stay above everything
            className={`fixed top-0 left-0 w-full z-50 py-4 border-b border-white/25 nav-glass-tint transition-all duration-500 ease-out-cubic ${scrolled ? "scrolled shadow-sm" : ""
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex justify-between items-center h-14">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/brand/RISE Logo.jpeg"
                            alt="RISE"
                            width={48}
                            height={48}
                            priority
                            className="rounded-md"
                        />
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-accent-navy tracking-tight group-hover:opacity-80 transition-smooth leading-none">
                                RISE
                            </span>
                            <span className="text-[0.6rem] font-medium text-slate-500 tracking-[0.15em] uppercase leading-tight mt-0.5 group-hover:text-accent-navy transition-colors">
                                Our Effort. Your Rise
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-smooth relative group ${isActive
                                        ? "text-accent-navy"
                                        : "text-text-DEFAULT hover:text-accent-navy"
                                        }`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-accent-navy transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    ></span>
                                </Link>
                            );
                        })}

                        {/* CTA Button */}
                        <Link href="/contact" className="btn-primary text-sm px-6 py-2.5">
                            Enquire
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
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

                {/* Mobile Dropdown Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-out-cubic ${isOpen ? "max-h-96 pb-4" : "max-h-0"
                        }`}
                >
                    <div className="pt-4 space-y-1 border-t border-base-subtle">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 text-sm font-medium rounded-md transition-smooth ${isActive
                                        ? "text-accent-navy bg-base"
                                        : "text-text-DEFAULT hover:bg-base"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
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
