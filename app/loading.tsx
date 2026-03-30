export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 bg-[#FAF8F5] flex items-center justify-center">
            {/* Minimalist Premium Loader container */}
            <div className="flex flex-col items-center">
                
                {/* Elegant Shimmering Typography Logo */}
                <h1 
                    className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] bg-clip-text text-transparent bg-gradient-to-r from-[#1A3C5E] via-[#60A5FA] to-[#1A3C5E]" 
                    style={{ 
                        backgroundSize: '200% auto',
                        animation: 'rise-shimmer 2s linear infinite'
                    }}
                >
                    RISE
                </h1>
                
                {/* Thin Sleek Progress Line */}
                <div className="w-16 h-[2px] mt-6 bg-slate-200 rounded-full overflow-hidden relative">
                    <div 
                        className="absolute inset-y-0 left-0 w-full bg-[#1A3C5E] rounded-full"
                        style={{
                            animation: 'rise-fast-sweep 1s cubic-bezier(0.4, 0, 0.2, 1) infinite'
                        }}
                    ></div>
                </div>
            </div>

            {/* Inline keyframes to keep it SSR compliant without "use client" */}
            <style>{`
                @keyframes rise-shimmer {
                    to {
                        background-position: 200% center;
                    }
                }
                
                @keyframes rise-fast-sweep {
                    0% {
                        transform: translateX(-100%) scaleX(0.5);
                    }
                    50% {
                        transform: translateX(0%) scaleX(1);
                    }
                    100% {
                        transform: translateX(100%) scaleX(0.5);
                    }
                }
            `}</style>
        </div>
    );
}
