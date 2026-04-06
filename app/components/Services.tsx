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
        <h2 className="font-serif text-[34px] font-bold text-navy-900 leading-tight tracking-tight mb-3">
          Compliance Monitoring &amp; Enforcement
        </h2>
        <p className="text-base text-warm-500 leading-relaxed max-w-[600px] mb-12">
          Investigative and compliance tools to protect
          Canadian auction participants.
        </p>

        {/* Primary services — larger, more prominent */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {services.slice(0, 2).map((s, i) => (
            <div
              key={i}
              className="bg-white border border-warm-200 rounded-[10px] p-8 transition-all duration-200 hover:border-navy-200 hover:shadow-[0_4px_16px_rgba(12,26,46,0.06)]"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-navy-800 rounded-[10px] flex items-center justify-center flex-shrink-0 text-navy-200">
                  <s.icon className="w-[22px] h-[22px]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy-800 mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-warm-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting services — compact, secondary visual weight */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.slice(2).map((s, i) => (
            <div
              key={i}
              className="border border-warm-200 rounded-[10px] px-7 py-5 flex items-center gap-4 transition-all duration-200 hover:border-navy-200 hover:bg-white"
            >
              <div className="w-9 h-9 bg-navy-50 border border-navy-100 rounded-lg flex items-center justify-center flex-shrink-0 text-navy-600">
                <s.icon className="w-[18px] h-[18px]" />
              </div>
              <div>
                <h3 className="font-serif text-[16px] font-semibold text-navy-800 leading-snug">
                  {s.title}
                </h3>
                <p className="text-[13px] text-warm-500 leading-relaxed mt-0.5">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
