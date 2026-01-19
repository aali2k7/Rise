"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/#programs", label: "Courses" },
        { href: "/approach", label: "Teaching Approach" },
        { href: "/results", label: "Results" },
        { href: "/faculty", label: "Faculty" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section (Left) */}
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
                            <span className="text-2xl font-bold text-[#1A3C5E] tracking-tight group-hover:opacity-80 transition-all leading-none">
                                RISE
                            </span>
                            <span className="text-[0.6rem] font-medium text-slate-500 tracking-[0.15em] uppercase leading-tight mt-0.5 group-hover:text-[#1A3C5E] transition-colors">
                                Our Effort. Your Rise
                            </span>
                        </div>
                    </Link>

                    {/* Navigation Links (Center) */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-all relative group ${isActive
                                        ? "text-[#1A3C5E]"
                                        : "text-slate-600 hover:text-[#1A3C5E]"
                                        }`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-[#1A3C5E] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
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
                            className="hidden lg:inline-flex items-center justify-center rounded-md bg-[#1A3C5E] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1A3C5E]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A3C5E] transition-all"
                        >
                            Enquire
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 transition-all focus:outline-none"
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
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
