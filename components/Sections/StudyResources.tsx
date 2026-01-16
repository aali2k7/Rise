export default function StudyResources() {
  return (
    <section id="study-resources" className="w-full bg-white">
      <div className="content-container-narrow section-spacing">
        <header className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-section">
              Study Resources & Support
            </h2>
            <div className="mt-6 h-px w-16 bg-[#74B49B] mx-auto" />
          </div>
          <p className="mt-8 text-body text-slate-600 max-w-2xl mx-auto">
            Comprehensive materials designed to complement structured mentorship and reinforce learning.
          </p>
        </header>

        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-subsection mb-4">Curated Study Material</h3>
            <p className="text-body text-slate-600 max-w-3xl mx-auto">
              Carefully selected resources that align with our teaching methodology. Each material is chosen 
              to build conceptual clarity and support long-term retention, ensuring students have access 
              to quality content that enhances their understanding.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-subsection mb-4">Guided Practice Sessions</h3>
            <p className="text-body text-slate-600 max-w-3xl mx-auto">
              Structured practice opportunities with faculty oversight. Students work through problems 
              and concepts under guidance, receiving immediate feedback and clarification to strengthen 
              their problem-solving abilities and confidence.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-subsection mb-4">Revision & Assessment Support</h3>
            <p className="text-body text-slate-600 max-w-3xl mx-auto">
              Regular revision materials and assessments to track progress. These tools help identify 
              areas needing attention and ensure students are well-prepared for examinations, with 
              focused support for improvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
