import { Search, FileText, ShieldCheck, Flag } from "./Icons";

const services = [
  {
    icon: Search,
    title: "Platform Monitoring",
    desc: "Continuous monitoring of online auction platforms for patterns of price manipulation, shill bidding, and employee self-dealing in violation of platform terms and consumer protection standards.",
  },
  {
    icon: FileText,
    title: "Complaint Investigation",
    desc: "Formal investigation of consumer complaints regarding unfair auction practices, including documentation of evidence, cross-referencing of marketplace activity, and identification of responsible parties.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Reviews",
    desc: "Structured assessment of auction house practices against platform terms of service, industry best practices, and applicable provincial and federal consumer protection regulations.",
  },
  {
    icon: Flag,
    title: "Regulatory Referral",
    desc: "When investigations reveal conduct that may violate provincial or federal law, we prepare formal referrals to the appropriate regulatory and enforcement authorities, including the Competition Bureau of Canada.",
  },
];

export function Services() {
  return (
    <section
      className="py-20 bg-warm-50 border-b border-warm-200"
      id="services"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-navy-500 mb-3">
          Our Work
        </p>
        <h2 className="font-serif text-[34px] font-bold text-navy-900 leading-tight tracking-tight mb-4">
          Compliance Monitoring &amp; Enforcement
        </h2>
        <p className="text-base text-warm-500 leading-relaxed max-w-[600px]">
          We employ a range of investigative and compliance tools to protect the
          interests of Canadian auction participants.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-12">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-warm-200 rounded-[10px] p-7 transition-all duration-200 hover:border-navy-200 hover:shadow-[0_4px_16px_rgba(12,26,46,0.06)] hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 bg-navy-50 border border-navy-100 rounded-[10px] flex items-center justify-center mb-4.5 text-navy-600">
                <s.icon className="w-[22px] h-[22px]" />
              </div>
              <h3 className="font-serif text-[17px] font-semibold text-navy-800 mb-2.5 leading-snug">
                {s.title}
              </h3>
              <p className="text-[13.5px] text-warm-500 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
