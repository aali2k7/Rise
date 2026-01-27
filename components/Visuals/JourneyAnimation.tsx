"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface JourneyAnimationProps {
    stepId: string;
    illustration: string;
    side: "left" | "right";
    /** Optional: Scene type for variant animations */
    variant?: "default" | "interaction" | "document";
}

/**
 * JourneyAnimation - Live Character Presence Component
 * 
 * Creates life-like animated character illustrations with:
 * - Subtle emergence entry animation
 * - Continuous micro-motion (breathing + sway)
 * - Ground shadow for depth anchoring
 * - Off-screen pause for performance
 * - Full accessibility support
 */
export default function JourneyAnimation({
    stepId,
    illustration,
    side,
    variant = "default",
}: JourneyAnimationProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    // Accessibility: Check for reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Performance: Pause animations when off-screen
    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1, rootMargin: "50px" }
        );

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    // Determine animation direction class
    const directionClass = side === "left" ? "from-left" : "from-right";

    // Determine visibility/pause class
    const pauseClass = !isVisible && !prefersReducedMotion ? "paused" : "";

    // Step-specific animation class (e.g., "step-01", "step-02", etc.)
    // Each step has a unique narrative-driven animation in globals.css
    const stepClass = `step-${stepId}`;

    // Determine image variant class for scene-specific animations (legacy support)
    const variantClass = variant === "interaction"
        ? "interaction"
        : variant === "document"
            ? "with-document"
            : "";

    return (
        <div
            ref={containerRef}
            className={`journey-animation ${directionClass} ${stepClass} ${pauseClass} flex items-center justify-center`}
            style={{
                // Inline fallback for reduced motion
                opacity: prefersReducedMotion ? 1 : undefined,
                animation: prefersReducedMotion ? "none" : undefined,
            }}
        >
            {/* Character Image with micro-motion */}
            <Image
                src={illustration}
                alt={`Step ${stepId} illustration - educational journey`}
                width={320}
                height={320}
                className={`w-full h-auto object-contain ${variantClass}`}
                priority={stepId === "01"} // Prioritize first visible image
                sizes="(max-width: 768px) 100vw, 320px"
                style={{
                    // Ensure no visible image edges
                    background: "transparent",
                    border: "none",
                }}
            />
        </div>
    );
}

