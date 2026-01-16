"use client";

export default function SelectGoalSection() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const goals = [
        { label: "Doctor", target: "doctor" },
        { label: "Engineer", target: "engineer" },
        { label: "Commerce", target: "commerce" },
        { label: "Classes 6–10", target: "foundation" },
        { label: "Explore", target: "courses" },
    ];

    return (
        <section className="bg-white py-12 border-b border-slate-100">
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="max-w-md">
                        <h2 className="text-lg font-semibold text-primary">
                            Select your goal
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                            to explore our courses
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 sm:gap-4">
                        {goals.map((goal) => (
                            <button
                                key={goal.label}
                                onClick={() => scrollToSection(goal.target)}
                                className="px-5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:border-primary/30 hover:bg-slate-50 hover:text-primary transition-all shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                aria-label={`Select ${goal.label}`}
                            >
                                {goal.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
