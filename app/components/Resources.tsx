import { ArrowRight } from "./Icons";

const resources = [
  {
    tag: "Guidance",
    title: "Understanding Employee Self-Dealing in Online Auctions",
    desc: "A comprehensive overview of how auction house employees exploit insider access to divert inventory and manipulate bidding outcomes.",
    href: "/resources/employee-self-dealing",
    date: "March 2025",
  },
  {
    tag: "Consumer Rights",
    title: "Your Rights as an Online Auction Bidder in Canada",
    desc: "Know your protections under provincial consumer protection legislation and platform terms of service when participating in online auctions.",
    href: "/resources/bidder-rights",
    date: "January 2025",
  },
  {
    tag: "Report",
    title: "2025-2026 Marketplace Compliance Report: GTA Region",
    desc: "Annual summary of compliance monitoring activity, investigation outcomes, and emerging trends in auction marketplace misconduct.",
    href: "/resources/compliance-report-2025",
    date: "February 2026",
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
        <p className="text-base text-warm-500 leading-relaxed max-w-[600px] mb-12">
          Educational materials and investigation summaries to help consumers and
          industry participants understand their rights and obligations.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <a
              key={i}
              href={r.href}
              className="group bg-white border border-warm-200 rounded-[10px] p-7 no-underline transition-all duration-200 hover:border-navy-200 hover:shadow-[0_4px_16px_rgba(12,26,46,0.06)] hover:-translate-y-0.5 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10.5px] font-semibold uppercase tracking-wider text-navy-500 bg-navy-50 px-2.5 py-1 rounded">
                  {r.tag}
                </span>
                <span className="text-[11px] text-warm-400">{r.date}</span>
              </div>
              <h3 className="font-serif text-[17px] font-semibold text-navy-800 mb-2.5 leading-snug group-hover:text-navy-600 transition-colors">
                {r.title}
              </h3>
              <p className="text-[13.5px] text-warm-500 leading-relaxed mb-5 flex-1">
                {r.desc}
              </p>
              <span className="text-[13px] font-semibold text-navy-600 inline-flex items-center gap-1.5 group-hover:text-navy-800 transition-colors">
                Read Publication
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 no-underline hover:text-navy-800 transition-colors"
          >
            View All 13 Resources
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
