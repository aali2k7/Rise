export default function DirectorsDesk() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="mx-auto max-w-3xl px-6 lg:px-0">

        {/* Header */}
        <header className="text-center">
          <h2 className="text-4xl font-semibold text-[#1A3C5E]">
            A message from the director
          </h2>

          <div className="mx-auto mt-6 h-px w-20 bg-[#74B49B]" />
        </header>

        {/* Content */}
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-600">

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

          <p className="font-medium text-[#1A3C5E]">
            My promise to you is this: we will treat your child with the same
            care and expectation we would want for our own.
          </p>

        </div>

        {/* Signature */}
        <div className="mt-10 text-right">
          <p className="text-sm font-semibold text-[#1A3C5E]">
            — Director, RISE
          </p>
        </div>

      </div>
    </section>
  );
}
