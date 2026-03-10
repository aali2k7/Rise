export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] bg-white">
            {/* Absolutely centered content — immune to body padding-top */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
                {/* Animated RISE wordmark */}
                <div className="relative">
                    <span
                        className="text-4xl font-extrabold tracking-tight text-[#1E3A8A]"
                        style={{ letterSpacing: "-0.03em" }}
                    >
                        RISE
                    </span>
                    {/* Underline sweep animation */}
                    <span
                        className="absolute bottom-0 left-0 h-[3px] rounded-full bg-[#10B981]"
                        style={{
                            animation: "rise-sweep 1.2s cubic-bezier(0.4,0,0.2,1) infinite",
                            width: "100%",
                        }}
                    />
                </div>

                {/* Tagline */}
                <p
                    className="text-sm font-medium uppercase tracking-widest text-slate-400"
                    style={{ letterSpacing: "0.2em" }}
                >
                    Our Effort. Your Rise.
                </p>

                {/* Three-dot pulse loader */}
                <div className="flex items-center gap-2 mt-2">
                    {[0, 1, 2].map((i) => (
                        <span
                            key={i}
                            className="block h-2 w-2 rounded-full bg-[#1E3A8A]"
                            style={{
                                animation: `rise-dot-pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Inline keyframes */}
            <style>{`
        @keyframes rise-sweep {
          0%   { transform: scaleX(0); transform-origin: left; opacity: 1; }
          50%  { transform: scaleX(1); transform-origin: left; opacity: 1; }
          51%  { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; opacity: 0.4; }
        }

        @keyframes rise-dot-pulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40%            { transform: scale(1);   opacity: 1; }
        }
      `}</style>
        </div>
    );
}
