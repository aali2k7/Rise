"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/#about", label: "About" },
        { href: "/#programs", label: "Courses" },
        { href: "/faculty", label: "Faculty" },
        { href: "/approach", label: "Teaching Approach" },
        { href: "/results", label: "Results" },
        { href: "/contact", label: "Contact" },
    ];

    const socialLinks = [
        { icon: Instagram, href: "https://instagram.com/rise.edu.in", label: "Instagram" },
        { icon: Facebook, href: "https://facebook.com/rise.edu.in", label: "Facebook" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-out
                    ${scrolled
                        ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm h-16 lg:h-20"
                        : "bg-[#FAF8F5]/80 backdrop-blur-md border-b border-[#E8DFD3]/60 h-20 lg:h-24"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-10 h-full">
                    <div className="flex justify-between items-center h-full">
                        {/* Logo — Premium look with correct aspect ratio and styling */}
                        <Link href="/" className="flex items-center shrink-0 h-full py-1.5 lg:py-2.5 relative z-50">
                            <Image
                                src="/brand/RISE Logo.jpeg"
                                alt="RISE Institute"
                                width={300}
                                height={300}
                                priority={true}
                                className="h-full w-auto object-contain rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out hover:-translate-y-0.5 [mix-blend-mode:multiply]"
                            />
                        </Link>

                        {/* Desktop Navigation (Center) */}
                        <nav className="hidden lg:flex items-center space-x-10">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`text-[13px] font-bold uppercase tracking-widest transition-all duration-300 relative group ${isActive
                                            ? "text-[#1A3C5E]"
                                            : "text-slate-600 hover:text-[#1A3C5E]"
                                            }`}
                                    >
                                        {link.label}
                                        <span
                                            className={`absolute -bottom-1.5 left-0 h-[2px] bg-[#1A3C5E] transition-all duration-500 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                                }`}
                                        ></span>
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Desktop CTA & Mobile Toggle */}
                        <div className="flex items-center gap-6 relative z-50">
                            <Link
                                href="/enquire"
                                className="hidden lg:inline-flex items-center justify-center rounded-full bg-[#1A3C5E] px-8 py-3 text-[13px] font-black uppercase tracking-[0.1em] text-white shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 hover:bg-[#1A3C5E]/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                            >
                                Enquire Now
                            </Link>

                            {/* Modern Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`lg:hidden p-3 rounded-full transition-all duration-300 ${isOpen ? "bg-slate-100 text-slate-900" : scrolled ? "bg-slate-50 text-slate-700" : "bg-white/20 backdrop-blur-md text-slate-900 border border-white/30"
                                    }`}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Premium Mobile Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[80] lg:hidden bg-white"
                    >
                        {/* Abstract Background Design Elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
                            <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-60" />
                        </div>

                        <div className="relative h-full flex flex-col pt-32 px-8 pb-12 overflow-y-auto">
                            {/* Navigation Links */}
                            <div className="flex flex-col space-y-2 mb-12">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 px-2">Navigation</p>
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="group flex items-center justify-between py-4 px-2 border-b border-slate-50"
                                        >
                                            <span className={`text-3xl font-bold tracking-tight ${pathname === link.href ? "text-[#1A3C5E]" : "text-slate-800"}`}>
                                                {link.label}
                                            </span>
                                            <ArrowRight className={`w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1 ${pathname === link.href ? "text-[#1A3C5E] opacity-100" : "opacity-0"}`} />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Contact Info */}
                            <div className="mt-auto space-y-10">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-slate-600">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                            <Phone size={18} className="text-[#1A3C5E]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Call Us</p>
                                            <p className="text-sm font-bold text-slate-900">+91 82525 17726</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-600">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                                            <MapPin size={18} className="text-[#1A3C5E]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Visit Us</p>
                                            <p className="text-sm font-bold text-slate-900 italic">Doranda, Ranchi</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links & CTA */}
                                <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                                    <div className="flex gap-4">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.label}
                                                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white transition-transform hover:scale-110"
                                            >
                                                <social.icon size={18} aria-hidden="true" />
                                            </a>
                                        ))}
                                    </div>
                                    <Link
                                        href="/enquire"
                                        onClick={() => setIsOpen(false)}
                                        className="inline-flex items-center justify-center rounded-xl bg-[#1A3C5E] px-6 py-3 text-sm font-bold text-white shadow-lg"
                                    >
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
