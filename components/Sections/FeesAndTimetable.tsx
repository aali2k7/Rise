export default function FeesAndTimetable() {
  const fees = [
    { class: "Class 6", fee: "1,800", period: "per month" },
    { class: "Class 7", fee: "1,800", period: "per month" },
    { class: "Class 8", fee: "2,000", period: "per month" },
    { class: "Class 9", fee: "2,500", period: "per month" },
    { class: "Class 10", fee: "2,500", period: "per month" },
  ];
  const timetable = [
    { day: "Monday", slots: ["3-4 PM: Science / Maths", "4-5 PM: English / Physics", "5-6 PM: SST / Chemistry"] },
    { day: "Tuesday", slots: ["3-4 PM: Science / Chemistry", "4-5 PM: SST / Maths", "5-6 PM: -"] },
    { day: "Wednesday", slots: ["3-4 PM: Maths / Science", "4-5 PM: English / Maths", "5-6 PM: SST / Biology"] },
    { day: "Thursday", slots: ["3-4 PM: SST / Chemistry", "4-5 PM: Maths / English", "5-6 PM: -"] },
    { day: "Friday", slots: ["3-4 PM: Science / SST", "4-5 PM: Test / Science", "5-6 PM: Maths / Chemistry"] },
    { day: "Saturday", slots: ["3-4 PM: Chemistry (11-12)", "4-5 PM: Revision", "5-6 PM: -"] },
    { day: "Sunday", slots: ["9-10 AM: Test (All Classes)", "10-11 AM: Test", "11-12 PM: Test / Discussion"] },
  ];
  return (
    <section className="w-full py-20 sm:py-24 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A3C5E] tracking-tight">Fees & <span className="text-[#F59E0B]">Timetable</span></h2>
          <div className="mt-4 h-px w-16 bg-[#C9A96E] mx-auto opacity-30" />
          <p className="mt-6 text-lg text-slate-500 font-medium max-w-xl mx-auto">Transparent fees. Structured timings. No surprises.</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-[#1A3C5E] mb-6">Monthly Fees</h3>
            <div className="space-y-3">
              {fees.map((f, i) => (
                <div key={i} className="flex items-center justify-between bg-white border border-[#E8DFD3]/50 rounded-2xl px-6 py-4 shadow-sm">
                  <span className="font-semibold text-[#1A3C5E]">{f.class}</span>
                  <div className="text-right"><span className="text-xl font-black text-[#059669]">Rs.{f.fee}</span><span className="text-xs text-slate-400 ml-1">{f.period}</span></div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-4 font-medium">* Conditions apply. Call for Class 11-12 & JEE/NEET fee details.</p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="tel:+917781073369" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A3C5E] text-white text-sm font-bold rounded-xl hover:bg-[#0f243a] transition-colors">Call for Details</a>
              <a href="https://wa.me/917781073369?text=Hi%2C%20I%20want%20to%20know%20about%20fees%20at%20Rise%20In%20Rise%20Institute." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white text-sm font-bold rounded-xl hover:bg-[#1fba58] transition-colors">WhatsApp</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1A3C5E] mb-6">Weekly Schedule</h3>
            <div className="space-y-3">
              {timetable.map((t, i) => (
                <div key={i} className={`bg-white border rounded-2xl px-5 py-4 shadow-sm ${t.day === "Sunday" ? "border-amber-200 bg-amber-50/30" : "border-[#E8DFD3]/50"}`}>
                  <div className="flex items-start gap-4">
                    <div className={`text-xs font-black uppercase tracking-wider pt-0.5 w-20 shrink-0 ${t.day === "Sunday" ? "text-amber-600" : "text-[#1A3C5E]"}`}>{t.day}</div>
                    <div className="space-y-1">{t.slots.map((s, j) => (<p key={j} className="text-sm text-slate-600 font-medium">{s}</p>))}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-4 font-medium">* Sunday is test day for all classes 8-12.</p>
          </div>
        </div>
      </div>
    </section>
  );
}