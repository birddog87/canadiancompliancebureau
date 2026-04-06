import {
  FileText,
  ArrowRight,
} from "./Icons";

const stats = [
  { number: "347", label: "Complaints received and reviewed" },
  { number: "89", label: "Formal investigations opened" },
  { number: "62", label: "Cases resolved with corrective action" },
  { number: "14", label: "Referrals to regulatory authorities" },
];

export function Hero() {
  return (
    <section id="main-content" className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 py-[100px] lg:py-[100px] md:py-16">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_600px_at_15%_80%,rgba(43,82,130,0.35),transparent),radial-gradient(ellipse_700px_500px_at_85%_20%,rgba(27,50,88,0.4),transparent)]" />
      </div>
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid lg:grid-columns-[1fr_380px] lg:grid-cols-[1fr_380px] gap-15 lg:gap-15 items-center">
        <div>
          <h1 className="font-serif text-[44px] md:text-[44px] text-[30px] font-bold text-white leading-[1.15] tracking-tight mb-5">
            Protecting Marketplace{" "}
            <span className="text-gold-300">Integrity</span> Across Canada
          </h1>
          <p className="text-[17px] text-navy-200 leading-relaxed max-w-[540px] mb-9">
            The Canadian Compliance Bureau monitors online auction platforms and
            consumer marketplaces to ensure fair practices, investigate
            complaints, and hold sellers and auction operators accountable to
            established standards of conduct.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#complaint"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white no-underline bg-red-600 px-7 py-3.5 rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:bg-red-700 hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-all"
            >
              <FileText className="w-4 h-4" />
              File a Complaint
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white no-underline border-[1.5px] border-white/30 px-7 py-3.5 rounded-md hover:border-white/60 hover:bg-white/5 transition-all"
            >
              Learn About Our Work
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-8 backdrop-blur-sm max-w-[400px]">
          <h3 className="text-[11px] font-semibold uppercase tracking-widest text-navy-300 mb-6 pb-3.5 border-b border-white/[0.08]">
            2025-2026 Activity Summary
          </h3>
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex items-baseline gap-3 py-3.5 ${
                i < stats.length - 1 ? "border-b border-white/[0.05]" : ""
              }`}
            >
              <span className="font-serif text-[32px] font-bold text-white min-w-[80px]">
                {stat.number}
              </span>
              <span className="text-[13px] text-navy-300 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
