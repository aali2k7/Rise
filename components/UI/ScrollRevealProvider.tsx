"use client";

import { useEffect } from "react";

export default function ScrollRevealProvider({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        // Respect prefers-reduced-motion
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) return;

        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: "0px 0px -40px 0px",
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // animate once
                }
            });
        }, observerOptions);

        // Slight delay so DOM is fully painted
        const timer = setTimeout(() => {
            const targets = document.querySelectorAll(
                "section h1, section h2, section h3, section p:not(.director-promise-text), .card-glass, .focus-card, .scroll-reveal-target"
            );

            targets.forEach((el, index) => {
                // Only add scroll-reveal if not already marked
                if (!el.classList.contains("scroll-reveal") && !el.classList.contains("scroll-reveal-scale")) {
                    el.classList.add("scroll-reveal");
                }

                // Stagger cascade delay — groups of 5
                const delay = (index % 5) * 80;
                if (delay > 0) {
                    (el as HTMLElement).style.transitionDelay = `${delay}ms`;
                }

                observer.observe(el);
            });
        }, 150);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    return <>{children}</>;
}
