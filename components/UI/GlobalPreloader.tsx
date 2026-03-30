"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalPreloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Prevent scrolling while preloader is active
            document.body.style.overflow = "hidden";

            // Exceptionally fast 450ms hold for a snappy, premium feel
            const timer = setTimeout(() => {
                setIsLoading(false);
                document.body.style.overflow = "";
            }, 450); 

            return () => {
                clearTimeout(timer);
                document.body.style.overflow = ""; 
            };
        }
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(8px)", scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF8F5]"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Premium Logo Reveal — Drops in gently */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-2xl shadow-[#1A3C5E]/10 border border-white bg-white flex items-center justify-center p-3 z-10"
                        >
                            <Image
                                src="/brand/RISE Logo.jpeg"
                                alt="RISE Logo"
                                fill
                                className="object-contain mix-blend-multiply drop-shadow-sm"
                                sizes="128px"
                                priority
                            />
                        </motion.div>

                        {/* Ultra-sleek minimalist sweeping progress line */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="w-32 h-[2px] bg-slate-200 mt-10 rounded-full overflow-hidden"
                        >
                            <motion.div 
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ 
                                    repeat: Infinity, 
                                    duration: 1.2, 
                                    ease: "easeInOut" 
                                }}
                                className="w-full h-full bg-[#1A3C5E] rounded-full"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
