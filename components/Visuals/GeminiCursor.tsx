"use client";

import { useEffect, useRef, useState } from "react";

export default function GeminiCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    const cursorPosition = useRef({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        setIsActive(true);

        const onMouseMove = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", onMouseMove);

        let animationFrameId: number;

        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
        };

        const animate = () => {
            const factor = 0.15; // Slightly tighter control for the "Dark Mode" feel

            cursorPosition.current.x = lerp(
                cursorPosition.current.x,
                mousePosition.current.x,
                factor
            );
            cursorPosition.current.y = lerp(
                cursorPosition.current.y,
                mousePosition.current.y,
                factor
            );

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${cursorPosition.current.x - 10}px, ${cursorPosition.current.y - 10}px, 0)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    if (!isActive) return null;

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[99999]"
                style={{
                    // High-contrast Blue/Pink gradient for Dark Mode
                    background: "linear-gradient(135deg, #3b82f6, #ec4899)",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                    mixBlendMode: "normal",
                }}
            />
            <style jsx global>{`
        /* Hide default cursor only when strictly engaging with the page content if desired, 
           but typically we hide it on body for custom cursor. 
           The prompt implies replacement: "Gemini Orb custom cursor (Replacement for Pointer)" */
        body {
            cursor: none;
        }
        a, button, input {
            cursor: none;
        }
      `}</style>
        </>
    );
}
