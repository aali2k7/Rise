export default function DirectorsDesk() {
  return (
    <section id="directors-desk" className="w-full bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-28 lg:py-32">
        <div className="border border-slate-100/80 bg-gradient-to-br from-slate-50/50 to-white/80 backdrop-blur-sm px-10 py-14 sm:px-16 sm:py-18 shadow-sm">
          
          <header className="text-center">
            <div className="inline-block">
              <h2 className="text-3xl font-semibold leading-tight text-[#1A3C5E] sm:text-4xl lg:text-5xl">
                A message from the director
              </h2>
            </div>
          </header>

          <div className="mt-10 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#74B49B] to-transparent" />
          </div>

          <div className="mt-16 space-y-10 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-relaxed lg:text-xl lg:leading-relaxed">
            <p className="text-justify">
              When I started RISE, the goal was simple: to create a space where students are guided
              with patience, not pressure. Academic success is important, but it should never come at
              the cost of confidence or curiosity.
            </p>

            <p className="text-justify">
              We take responsibility for each child's progress. That means clear planning, consistent
              follow-through, and honest communication with parents. There are no shortcuts here — only
              steady, structured effort and mentorship that adapts to the student's pace.
            </p>

            <p className="text-justify">
              My promise to you is this: we will treat your child with the same care and expectation
              we would want for our own. We will celebrate small wins, address challenges early, and
              keep you informed every step of the way.
            </p>

            <div className="mt-16 pt-10 border-t border-slate-100/60">
              <p className="text-center font-medium text-[#1A3C5E] sm:text-lg lg:text-xl">
                Thank you for trusting us with this important stage of your child's journey.
              </p>
              
              <div className="mt-10 text-center">
                <div className="inline-block">
                  <div className="h-px w-56 bg-gradient-to-r from-transparent via-[#74B49B] to-transparent" />
                  <p className="mt-3 text-sm font-medium text-slate-600">
                    The Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
