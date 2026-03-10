"use client";

import { useState, useRef, useEffect } from "react";

/**
 * AmbientAudio — Plays calming forest/bird ambient sounds.
 * 
 * - Uses a free CC0 nature ambience track
 * - Starts muted, user must click to enable (browser autoplay policy)
 * - Small floating toggle button in bottom-left corner
 * - Fades in/out smoothly
 */

const AMBIENT_SRC = "https://cdn.pixabay.com/audio/2022/03/10/audio_d8b8b4791c.mp3";

export default function AmbientAudio() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Fade volume in/out
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        let frameId: number;
        const targetVolume = isPlaying ? 0.15 : 0; // Very low ambient volume
        const step = isPlaying ? 0.005 : -0.01;

        const fade = () => {
            if (!audio) return;
            const next = Math.max(0, Math.min(0.15, audio.volume + step));
            audio.volume = next;

            if ((step > 0 && next < targetVolume) || (step < 0 && next > 0)) {
                frameId = requestAnimationFrame(fade);
            } else if (next === 0 && !isPlaying) {
                audio.pause();
            }
        };

        if (isPlaying) {
            audio.play().catch(() => { });
        }
        frameId = requestAnimationFrame(fade);

        return () => cancelAnimationFrame(frameId);
    }, [isPlaying]);

    const toggle = () => {
        setHasInteracted(true);
        setIsPlaying((prev) => !prev);
    };

    return (
        <>
            <audio
                ref={audioRef}
                src={AMBIENT_SRC}
                loop
                preload="none"
            />

            {/* Floating toggle button — bottom left */}
            <button
                onClick={toggle}
                aria-label={isPlaying ? "Mute ambient sounds" : "Play ambient sounds"}
                className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-3 py-2 rounded-full 
                           bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-lg
                           hover:bg-white hover:shadow-xl transition-all duration-300 
                           text-sm font-medium text-[#1A2E44] group"
                title={isPlaying ? "Mute ambient sounds" : "🌿 Enable calming forest sounds"}
            >
                {/* Sound wave icon */}
                <span className="text-base">
                    {isPlaying ? "🔊" : "🔇"}
                </span>
                <span className={`overflow-hidden transition-all duration-300 whitespace-nowrap ${hasInteracted ? "max-w-0 opacity-0" : "max-w-[140px] opacity-100"
                    }`}>
                    🌿 Forest sounds
                </span>
            </button>
        </>
    );
}
