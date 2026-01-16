"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
    text: string;
    speed?: number;
    startDelay?: number;
    className?: string;
    cursor?: boolean;
}

export default function Typewriter({
    text,
    speed = 100,
    startDelay = 0,
    className = "",
    cursor = true,
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsStarted(true);
        }, startDelay);

        return () => clearTimeout(timer);
    }, [startDelay]);

    useEffect(() => {
        if (!isStarted) return;

        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText((prev) => prev + text.charAt(currentIndex));
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed, isStarted]);

    return (
        <span className={className}>
            {displayedText}
            {cursor && displayedText.length < text.length && (
                <span className="animate-pulse">|</span>
            )}
        </span>
    );
}

// Helper to disable cursor after typing is done (visual polish)
// Re-implementation for safer state handling inside the loop isn't ideal with simple interval.
// Simpler approach: CSS cursor or just omitted. keeping it simple.
