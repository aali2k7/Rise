export default function MentorshipStatement() {
  return (
    <section id="mentorship" className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FDFCFB 0%, #FAF9F6 40%, #F9F7F4 100%)' }}>
      {/* Subtle navy glow accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A2E44]/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="content-container section-spacing">
        <div className="max-w-4xl">
          <header>
            <p className="text-[#C9A96E] font-bold uppercase tracking-wider text-sm">
              Our Philosophy
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#1A2E44] sm:text-5xl">
              Mentorship that stays with a student — not just through an exam.
            </h2>
          </header>

          <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#C9A96E] to-[#D4B896]" />

          <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-2xl border border-[#E8DFD3] shadow-sm p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <p className="text-xl font-semibold tracking-tight text-[#1A2E44]">
              RISE is not just coaching. It is a long-term mentorship ecosystem designed to support a
              child&apos;s academic growth — and the discipline, confidence, and clarity that sustain it.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[#4A5568]">
              Mentorship at RISE is practical and consistent: academic planning that fits the student&apos;s
              phase, regular tracking that highlights what is improving and what needs attention, and
              individual guidance that helps students correct course early. Parents are kept involved
              through steady updates and open communication — so expectations remain clear and progress
              is never left to guesswork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
