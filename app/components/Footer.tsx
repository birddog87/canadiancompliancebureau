import { LogoText } from "./Logo";

const orgLinks = [
  { href: "#about", label: "About the CCB" },
  { href: "#services", label: "Our Work" },
  { href: "#resources", label: "Publications" },
  { href: "/blog", label: "News & Analysis" },
];

const consumerLinks = [
  { href: "#complaint", label: "File a Complaint" },
  { href: "/resources/bidder-rights", label: "Know Your Rights" },
  { href: "#faq", label: "Frequently Asked Questions" },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-300 pt-14" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/[0.06]">
          <div>
            <div className="mb-1">
              <LogoText light />
            </div>
            <p className="text-[13px] leading-relaxed text-navy-400 mt-4 max-w-[320px]">
              An independent compliance and consumer advocacy organization
              monitoring online auction platforms and marketplaces across Canada.
              Protecting bidders, consignors, and the integrity of fair commerce.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-navy-200 mb-4.5">
              Organization
            </h4>
            {orgLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block text-[13px] text-navy-400 no-underline py-1.5 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-navy-200 mb-4.5">
              For Consumers
            </h4>
            {consumerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block text-[13px] text-navy-400 no-underline py-1.5 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-navy-200 mb-4.5">
              Contact
            </h4>
            <a
              href="mailto:investigations@canadiancompliancebureau.ca"
              className="block text-[13px] text-navy-400 no-underline py-1.5 hover:text-white transition-colors"
            >
              investigations@canadian
              <br />
              compliancebureau.ca
            </a>
            <a
              href="mailto:director@canadiancompliancebureau.ca"
              className="block text-[13px] text-navy-400 no-underline py-1.5 hover:text-white transition-colors"
            >
              director@canadian
              <br />
              compliancebureau.ca
            </a>
            <a
              href="mailto:media@canadiancompliancebureau.ca"
              className="block text-[13px] text-navy-400 no-underline py-1.5 hover:text-white transition-colors"
            >
              media@canadian
              <br />
              compliancebureau.ca
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-xs text-navy-500 gap-3">
          <span>
            &copy; 2024-2026 Canadian Compliance Bureau. All rights reserved.
          </span>
          <div className="flex gap-5">
            <a href="/privacy" className="text-navy-500 no-underline hover:text-navy-300 transition-colors">
              Privacy Policy
            </a>
            <a href="/disclaimer" className="text-navy-500 no-underline hover:text-navy-300 transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
