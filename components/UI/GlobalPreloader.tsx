"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function GlobalPreloader() {
    const [loading, setLoading] = useState(true);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        // Only run on the client side
        if (typeof window !== "undefined") {
            // Prevent scrolling while preloader is active
            document.body.style.overflow = "hidden";

            // Allow the initial DOM and critical assets to load, then trigger fade out
            const timer = setTimeout(() => {
                setFading(true);

                // After fade out transition finishes, remove from DOM and restore scrolling
                setTimeout(() => {
                    setLoading(false);
                    document.body.style.overflow = "";
                }, 800); // matches the transition duration
            }, 1000); // 1-second minimum display time for the premium feel

            return () => {
                clearTimeout(timer);
                document.body.style.overflow = ""; // ensure scroll is restored on unmount
            };
        }
    }, []);

    if (!loading) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FDFCFB] transition-opacity duration-[800ms] ease-in-out ${fading ? 'opacity-0' : 'opacity-100'}`}>
            <div className="relative flex flex-col items-center">
                {/* Animated outer ring */}
                <div className="absolute -inset-4 rounded-full border border-orange-200/50 border-t-orange-500 animate-spin" style={{ animationDuration: '1.5s' }}></div>

                {/* Logo */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white flex items-center justify-center p-2 mb-6">
                    <Image
                        src="/brand/RISE Logo.jpeg"
                        alt="RISE Logo"
                        fill
                        className="object-contain mix-blend-multiply drop-shadow-sm"
                        sizes="120px"
                        priority
                    />
                </div>

                {/* Text */}
                <h2 className="text-[#1A3C5E] text-xl font-bold tracking-widest uppercase mb-2 animate-pulse">
                    Rise Education
                </h2>
                <div className="flex gap-1.5 mt-1">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
}
