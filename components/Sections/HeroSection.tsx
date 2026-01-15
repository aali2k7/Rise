export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#F9FAFB]"
    >
      {/* Mandala Wheel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 z-0 h-[600px] w-[600px] sm:-bottom-48 sm:-right-48 sm:h-[720px] sm:w-[720px]"
      >
        <svg
          viewBox="0 0 200 200"
          className="mandala-wheel h-full w-full"
        >
          <g
            fill="none"
            stroke="#1A3C5E"
            strokeWidth="1.1"
            opacity="0.065"
            vectorEffect="non-scaling-stroke"
          >
            {/* Concentric geometry */}
            <circle cx="100" cy="100" r="86" />
            <circle cx="100" cy="100" r="74" />
            <circle cx="100" cy="100" r="62" />
            <circle cx="100" cy="100" r="50" />
            <circle cx="100" cy="100" r="38" />
            <circle cx="100" cy="100" r="26" />
            <circle cx="100" cy="100" r="14" />

            {/* Angular mandala polygons */}
            <polygon points="182,100 158,158 100,182 42,158 18,100 42,42 100,18 158,42" />
            <polygon points="170,100 149.5,149.5 100,170 50.5,149.5 30,100 50.5,50.5 100,30 149.5,50.5" />
            <polygon points="158,100 141,141 100,158 59,141 42,100 59,59 100,42 141,59" />
            <polygon points="100,22 155,45 178,100 155,155 100,178 45,155 22,100 45,45" />

            {/* Radial architectural lines */}
            <line x1="118" y1="100" x2="186" y2="100" />
            <line x1="116.6" y1="106.9" x2="179.5" y2="132.9" />
            <line x1="112.7" y1="112.7" x2="160.8" y2="160.8" />
            <line x1="106.9" y1="116.6" x2="132.9" y2="179.5" />
            <line x1="100" y1="118" x2="100" y2="186" />
            <line x1="93.1" y1="116.6" x2="67.1" y2="179.5" />
            <line x1="87.3" y1="112.7" x2="39.2" y2="160.8" />
            <line x1="83.4" y1="106.9" x2="20.5" y2="132.9" />
            <line x1="82" y1="100" x2="14" y2="100" />
            <line x1="83.4" y1="93.1" x2="20.5" y2="67.1" />
            <line x1="87.3" y1="87.3" x2="39.2" y2="39.2" />
            <line x1="93.1" y1="83.4" x2="67.1" y2="20.5" />
            <line x1="100" y1="82" x2="100" y2="14" />
            <line x1="106.9" y1="83.4" x2="132.9" y2="20.5" />
            <line x1="112.7" y1="87.3" x2="160.8" y2="39.2" />
            <line x1="116.6" y1="93.1" x2="179.5" y2="67.1" />
          </g>
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <header className="max-w-2xl">
              <p className="text-sm font-medium tracking-wide text-[#1A3C5E]/80">
                Premium coaching, built around mentorship
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#1A3C5E] sm:text-5xl sm:leading-tight">
                Structured guidance for every stage of your child’s academic journey —
                <span className="text-[#74B49B]"> with long-term mentorship</span> at the core.
              </h1>

              <p className="mt-6 text-base leading-relaxed text-[#334155] sm:text-lg">
                RISE is not a short-term coaching setup. We work as a steady mentorship ecosystem
                where clarity is built step-by-step, discipline is nurtured over time, and students
                grow into confident learners — in academics and in character.
              </p>
            </header>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#footer"
                className="inline-flex items-center justify-center rounded-md bg-[#F4A261] px-6 py-3 text-sm font-semibold text-[#1A3C5E] shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:ring-offset-2 focus:ring-offset-[#F9FAFB]"
              >
                Enquire Now
              </a>

              <a
                href="#footer"
                className="inline-flex items-center justify-center rounded-md border border-[#1A3C5E]/25 px-6 py-3 text-sm font-semibold text-[#1A3C5E] hover:border-[#1A3C5E]/35 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#1A3C5E]/25 focus:ring-offset-2 focus:ring-offset-[#F9FAFB]"
              >
                Talk to a Counselor
              </a>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-[#1A3C5E]/70">
              For parents who value consistency, accountability, and calm, expert guidance.
            </p>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-md" />
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        .mandala-wheel {
          animation: mandala-rotate 80s linear infinite;
          transform-origin: 50% 50%;
        }

        @keyframes mandala-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
