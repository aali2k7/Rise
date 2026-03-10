"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll(); // check on mount
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/#programs", label: "Courses" },
        { href: "/approach", label: "Teaching Approach" },
        { href: "/results", label: "Results" },
        { href: "/faculty", label: "Faculty" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out
                ${scrolled
                    ? "bg-white/[0.12] backdrop-blur-[20px] border-b border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.08)] h-16"
                    : "bg-white/[0.08] backdrop-blur-[20px] border-b border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.04)] h-24"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo — Free-form, no pill container */}
                    <Link href="/" className="flex items-center shrink-0">
                        <Image
                            src="/brand/RISE Logo.jpeg"
                            alt="RISE"
                            width={scrolled ? 64 : 100}
                            height={scrolled ? 64 : 100}
                            priority={true}
                            className="transition-all duration-300 ease-out hover:scale-105"
                        />
                    </Link>

                    {/* Navigation Links (Center) */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-all duration-200 relative group ${isActive
                                        ? "text-[#1A3C5E]"
                                        : "text-slate-700 hover:text-[#1A3C5E]"
                                        }`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-[2px] bg-[#1A3C5E] transition-all duration-200 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    ></span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Enquire Button (Right) & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/enquire"
                            className="no-animate hidden lg:inline-flex items-center justify-center rounded-xl bg-[#1A3C5E] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-[#1A3C5E]/90 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A3C5E]"
                        >
                            Enquire
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="no-animate lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-all focus:outline-none"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            <svg
                                className="h-6 w-6"
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
                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[85vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                >
                    <div className="pb-6 space-y-1 border-t border-slate-100 mt-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive
                                        ? "text-[#1A3C5E] bg-slate-50"
                                        : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <div className="px-4 pt-2">
                            <Link
                                href="/enquire"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center rounded-md bg-[#1A3C5E] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1A3C5E]/90"
                            >
                                Enquire
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
