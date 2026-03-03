import { FileText, Shield, Search, ArrowRight } from "./Icons";

const resources = [
  {
    icon: FileText,
    tag: "Guidance",
    title: "Understanding Employee Self-Dealing in Online Auctions",
    desc: "A comprehensive overview of how auction house employees exploit insider access to divert inventory and manipulate bidding outcomes.",
  },
  {
    icon: Shield,
    tag: "Consumer Rights",
    title: "Your Rights as an Online Auction Bidder in Canada",
    desc: "Know your protections under provincial consumer protection legislation and platform terms of service when participating in online auctions.",
  },
  {
    icon: Search,
    tag: "Report",
    title: "2025-2026 Marketplace Compliance Report: GTA Region",
    desc: "Annual summary of compliance monitoring activity, investigation outcomes, and emerging trends in auction marketplace misconduct.",
  },
];

export function Resources() {
  return (
    <section
      className="py-20 bg-warm-50 border-b border-warm-200"
      id="resources"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-navy-500 mb-3">
          Resources
        </p>
        <h2 className="font-serif text-[34px] font-bold text-navy-900 leading-tight tracking-tight mb-4">
          Publications &amp; Guidance
        </h2>
        <p className="text-base text-warm-500 leading-relaxed max-w-[600px]">
          Educational materials and investigation summaries to help consumers and
          industry participants understand their rights and obligations.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
          {resources.map((r, i) => (
            <div
              key={i}
              className="bg-white border border-warm-200 rounded-[10px] overflow-hidden transition-all duration-200 hover:border-navy-200 hover:shadow-[0_4px_16px_rgba(12,26,46,0.06)]"
            >
              <div className="h-40 bg-gradient-to-br from-navy-800 to-navy-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern-dark" />
                <r.icon className="w-12 h-12 text-navy-300 relative z-10" />
              </div>
              <div className="p-6">
                <span className="text-[10.5px] font-semibold uppercase tracking-wider text-navy-500 bg-navy-50 px-2.5 py-1 rounded inline-block mb-3">
                  {r.tag}
                </span>
                <h3 className="font-serif text-[17px] font-semibold text-navy-800 mb-2.5 leading-snug">
                  {r.title}
                </h3>
                <p className="text-[13.5px] text-warm-500 leading-relaxed mb-4">
                  {r.desc}
                </p>
                <a
                  href="#"
                  className="text-[13px] font-semibold text-navy-600 no-underline inline-flex items-center gap-1.5 hover:text-navy-800 transition-colors"
                >
                  Read Publication
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
