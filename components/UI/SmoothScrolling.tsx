"use client";

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'; // Optional Lenis styles

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis for premium smooth cinematic scrolling
        // Specs: 600-800ms duration (represented as 0.7 here as it typically defaults to 1.2s for generic lenis)
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard ease-out
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // ==========================================
        // Micro-animations & Scroll Reveal System 
        // using Intersection Observer
        // ==========================================
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px', // Trigger slightly before it comes into view
            threshold: 0.1, // Trigger when 10% of the element is visible
        };

        const animateOnScroll = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Apply different reveal classes based on data attributes or default to general reveal
                    const el = entry.target as HTMLElement;

                    // Add the visibility class
                    el.classList.add('scroll-reveal-visible');

                    // Optionally unobserve if we only want to animate once
                    // animateOnScroll.unobserve(el);
                }
            });
        }, observerOptions);

        // Target elements across the website for scroll reveal
        // Exclude certain specific elements if needed
        setTimeout(() => {
            const revealElements = document.querySelectorAll(
                'section h1, section h2, section h3, section p:not(.director-promise-text), .card-glass, .focus-card, .scroll-reveal-target, .scroll-reveal, .scroll-reveal-scale'
            );

            revealElements.forEach((el, index) => {
                // Add base class if not present
                if (!el.classList.contains('scroll-reveal-base')) {
                    el.classList.add('scroll-reveal-base');

                    // Add slight cascade delay based on DOM order for grouped elements to prevent simultaneous reveals
                    if (index % 4 !== 0) {
                        (el as HTMLElement).style.transitionDelay = `${(index % 4) * 100}ms`;
                    }

                    animateOnScroll.observe(el);
                }
            });
        }, 100); // Small timeout to ensure DOM is ready

        return () => {
            if (lenisRef.current) {
                lenisRef.current.destroy();
            }
            animateOnScroll.disconnect();
        };
    }, []);

    return <>{children}</>;
}
