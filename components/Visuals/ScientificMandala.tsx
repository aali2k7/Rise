"use client";

import React from "react";

export default function ScientificMandala() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-0 z-0
                 h-[800px] w-[800px]
                 -translate-y-1/2 translate-x-1/2
                 mandala-shadow"
        >
            <svg
                viewBox="0 0 800 800"
                className="h-full w-full"
                style={{ overflow: "visible" }}
            >
                {/* DEFINITIONS for text paths */}
                <defs>
                    <path id="path1" d="M 400, 400 m -100, 0 a 100,100 0 1,1 200, 0 a 100,100 0 1,1 -200, 0" />
                    <path id="path2" d="M 400, 400 m -180, 0 a 180,180 0 1,1 360, 0 a 180,180 0 1,1 -360, 0" />
                    <path id="path3" d="M 400, 400 m -260, 0 a 260,260 0 1,1 520, 0 a 260,260 0 1,1 -520, 0" />
                    <path id="path4" d="M 400, 400 m -340, 0 a 340,340 0 1,1 680, 0 a 340,340 0 1,1 -680, 0" />
                </defs>

                {/* RING 1 */}
                <g className="origin-center animate-spin-slow">
                    <text className="mandala-teal font-mono text-xl font-bold tracking-[1em]">
                        <textPath href="#path1" startOffset="0%">
                            + - × ÷ = % π ∑ ∫ √ + - × ÷ = % π ∑ ∫ √
                        </textPath>
                    </text>
                </g>

                {/* RING 2 */}
                <g className="origin-center animate-spin-reverse-slow">
                    <text className="mandala-teal font-mono text-lg font-medium tracking-[1.5em]">
                        <textPath href="#path2" startOffset="0%">
                            <tspan className="mandala-accent font-bold">E=mc²</tspan> • F=ma • H₂O • C₆H₁₂O₆ • λ=h/p •{" "}
                            <tspan className="mandala-accent font-bold">E=mc²</tspan> • F=ma • H₂O
                        </textPath>
                    </text>
                </g>

                {/* RING 3 */}
                <g className="origin-center animate-spin-slower">
                    <text className="mandala-teal font-mono text-lg tracking-[1.2em]">
                        <textPath href="#path3" startOffset="0%">
                            iℏ∂ψ/∂t = Ĥψ • ∇⋅B = 0 •{" "}
                            <tspan className="mandala-accent">Gμν + Λgμν = 8πTμν</tspan> •
                            iℏ∂ψ/∂t = Ĥψ • ∇⋅B = 0
                        </textPath>
                    </text>
                </g>

                {/* RING 4 */}
                <g className="origin-center animate-spin-reverse-slower">
                    <text className="mandala-teal font-serif text-2xl tracking-[2em] opacity-90">
                        <textPath href="#path4" startOffset="0%">
                            α β γ δ θ Ω Δ Φ α β γ δ θ Ω Δ Φ α β γ δ θ Ω Δ Φ
                        </textPath>
                    </text>
                </g>
            </svg>
        </div>
    );
}
