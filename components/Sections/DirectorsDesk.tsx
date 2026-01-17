export default function DirectorsDesk() {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#fcfcfd] ambient-bloom-container">
      {/*
             Constrained Reading Frame - Wider for 2 columns
             (Paper-like, centered, breathable)
           */}
      <div className="relative z-10 mx-auto max-w-6xl px-8 py-16 lg:px-16 lg:py-20 letter-frame rounded-2xl">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* LEFT COLUMN: The Letter (Dominant - col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Header: Formal & Anchored */}
            <header className="mb-8">
              <h2 className="text-3xl md:text-3xl font-serif font-medium text-[#1A3C5E] tracking-tight text-left">
                A message from the director
              </h2>
              <div className="mt-4 h-px w-20 bg-slate-200" />
            </header>

            {/* Content: Calm, Readable, Intentional */}
            <div className="space-y-6 text-lg leading-[1.8] text-slate-700 font-sans">
              <p>
                When I started RISE, the goal was simple: to create a space where
                students are guided with patience, not pressure. Academic success
                is important, but it should never come at the cost of confidence or
                curiosity.
              </p>

              <p>
                We take responsibility for each child&apos;s progress. That means
                clear planning, consistent follow-through, and honest communication
                with parents. There are no shortcuts here — only steady, structured
                effort and mentorship that adapts to the student&apos;s pace.
              </p>

              {/* Promise Line */}
              <p className="pt-4 font-medium text-[#1A3C5E] text-xl">
                My promise to you is this: we will treat your child with the same
                care and expectation we would want for our own.
              </p>
            </div>

            {/* Signature */}
            <footer className="mt-10 border-t border-slate-100 pt-6">
              <p className="text-sm font-semibold text-[#1A3C5E] tracking-wide uppercase opacity-80">
                — Director, RISE
              </p>
            </footer>
          </div>

          {/* RIGHT COLUMN: The Guiding Principle (Secondary - col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:border-l lg:border-slate-100 lg:pl-16">
            {/* 
                            Institutional Quote 
                            - Acts as an oath/principle on the wall
                            - Visually distinct but calm
                        */}
            <blockquote className="quote-text text-xl lg:text-2xl text-slate-500 italic">
              “Education is not the transfer of information, but the cultivation of judgment, discipline, and character — guided patiently over time.”
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
