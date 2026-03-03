import { Shield, AlertCircle, Eye, Lock } from "./Icons";

const principles = [
  {
    icon: Shield,
    title: "Consumer Protection",
    desc: "Every bidder deserves access to a fair and transparent auction process, free from insider manipulation.",
  },
  {
    icon: AlertCircle,
    title: "Evidence-Based Investigation",
    desc: "Our findings are grounded in documented evidence, cross-referenced data, and verifiable facts.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "We publish our findings and methodologies to maintain public accountability and industry awareness.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    desc: "Complainant information is handled with strict confidentiality throughout every stage of investigation.",
  },
];

export function About() {
  return (
    <section className="py-20 bg-white border-b border-warm-200" id="about">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-navy-500 mb-3">
          About the CCB
        </p>
        <h2 className="font-serif text-[34px] font-bold text-navy-900 leading-tight tracking-tight mb-4">
          Ensuring Fair Auction Practices
          <br />
          for Canadian Consumers
        </h2>
        <p className="text-base text-warm-500 leading-relaxed max-w-[600px]">
          An independent compliance and consumer advocacy organization dedicated
          to marketplace transparency and accountability.
        </p>

        <div className="grid lg:grid-cols-2 gap-15 mt-12 items-start">
          <div className="space-y-4.5">
            <p className="drop-cap text-[15.5px] text-warm-600 leading-[1.75]">
              The Canadian Compliance Bureau was established to address a growing
              gap in oversight of online auction platforms and consumer
              marketplaces operating in Canada. As online auctions have expanded
              rapidly, so too have instances of price manipulation, employee
              self-dealing, shill bidding, and other practices that undermine
              fair commerce and erode consumer trust.
            </p>
            <p className="text-[15.5px] text-warm-600 leading-[1.75]">
              Our mandate is to monitor auction platforms, investigate complaints
              from consumers and market participants, document patterns of
              non-compliance with platform terms of service and applicable
              regulations, and pursue corrective action through direct
              engagement, regulatory referral, and public reporting.
            </p>
            <p className="text-[15.5px] text-warm-600 leading-[1.75]">
              We work closely with platform operators, provincial consumer
              protection agencies, and the Competition Bureau of Canada to ensure
              that auction marketplaces operate with the integrity that Canadian
              consumers deserve.
            </p>
          </div>

          <div className="bg-warm-50 border border-warm-200 rounded-[10px] p-8">
            <h3 className="font-serif text-lg font-semibold text-navy-800 mb-5 pb-4 border-b border-warm-200">
              Our Guiding Principles
            </h3>
            {principles.map((p, i) => (
              <div
                key={i}
                className={`flex gap-3.5 py-3.5 ${
                  i < principles.length - 1
                    ? "border-b border-warm-100"
                    : ""
                }`}
              >
                <div className="w-9 h-9 bg-navy-50 border border-navy-100 rounded-lg flex items-center justify-center flex-shrink-0 text-navy-600">
                  <p.icon className="w-[18px] h-[18px]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-navy-800 mb-1">
                    {p.title}
                  </h4>
                  <p className="text-[13px] text-warm-500 leading-normal">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
