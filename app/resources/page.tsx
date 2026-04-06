import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Publications",
  description:
    "All CCB publications, guides, and reports on online auction compliance, consumer protection, and marketplace integrity in Canada.",
  openGraph: {
    type: "website",
    title: "Resources & Publications | Canadian Compliance Bureau",
    description:
      "All CCB publications, guides, and reports on online auction compliance, consumer protection, and marketplace integrity in Canada.",
    url: "https://canadiancompliancebureau.com/resources",
  },
  alternates: {
    canonical: "https://canadiancompliancebureau.com/resources",
  },
};

const resources = [
  {
    tag: "Report",
    title: "The State of Online Auction Fraud in Canada: 2026 Overview",
    desc: "Comprehensive overview of auction fraud trends, emerging schemes, enforcement actions, and recommendations for reform.",
    href: "/resources/auction-fraud-canada-2026",
    date: "March 2026",
  },
  {
    tag: "Report",
    title: "2025-2026 Marketplace Compliance Report: GTA Region",
    desc: "Annual compliance monitoring report covering online auction practices in the Greater Toronto Area.",
    href: "/resources/compliance-report-2025",
    date: "February 2026",
  },
  {
    tag: "Research",
    title: "Auction House Employee Misconduct: A Pattern Analysis",
    desc: "Analysis of employee misconduct patterns including self-dealing, inventory diversion, and bid manipulation.",
    href: "/resources/auction-employee-misconduct-patterns",
    date: "February 2026",
  },
  {
    tag: "Legal Guide",
    title: "Is Shill Bidding Illegal in Canada?",
    desc: "The legality of shill bidding under the Competition Act and provincial consumer protection laws.",
    href: "/resources/is-shill-bidding-illegal",
    date: "March 2026",
  },
  {
    tag: "Consumer Guide",
    title: "How to Report Online Auction Fraud in Canada",
    desc: "Step-by-step guide to filing complaints with federal, provincial, and industry authorities.",
    href: "/resources/how-to-report-auction-fraud",
    date: "February 2026",
  },
  {
    tag: "Consumer Guide",
    title: "How Online Auction Houses Manipulate Prices",
    desc: "Methods auction houses use to inflate prices — shill bidding, reserve manipulation, phantom bids, and hidden fees.",
    href: "/resources/how-auction-houses-manipulate-prices",
    date: "January 2026",
  },
  {
    tag: "Consumer Guide",
    title: "Online Auction Red Flags: 10 Signs You're Being Scammed",
    desc: "The warning signs every Canadian bidder should watch for before placing a bid.",
    href: "/resources/auction-scam-red-flags",
    date: "January 2026",
  },
  {
    tag: "Consumer Guide",
    title: "What to Do If an Auction House Refuses Your Refund",
    desc: "Your legal options, escalation steps, and how to file effective complaints when denied a refund.",
    href: "/resources/auction-house-refund-guide",
    date: "December 2025",
  },
  {
    tag: "Legal Guide",
    title: "The Ontario Consumer Protection Act and Online Auctions",
    desc: "How Ontario's CPA applies to online auctions, your rights as a bidder, and how to enforce them.",
    href: "/resources/ontario-consumer-protection-auctions",
    date: "November 2025",
  },
  {
    tag: "Consumer Guide",
    title: "How to Document Auction Fraud for a Legal Complaint",
    desc: "Practical guide to collecting, organizing, and preserving evidence for complaints or court proceedings.",
    href: "/resources/documenting-auction-fraud",
    date: "October 2025",
  },
  {
    tag: "Reference",
    title: "Province-by-Province Guide to Filing Consumer Complaints",
    desc: "Complete directory of consumer protection offices across all Canadian provinces and territories.",
    href: "/resources/consumer-complaint-guide-by-province",
    date: "September 2025",
  },
  {
    tag: "Guidance",
    title: "Understanding Employee Self-Dealing in Online Auctions",
    desc: "How auction house employees exploit insider access to divert inventory and manipulate bidding outcomes.",
    href: "/resources/employee-self-dealing",
    date: "March 2025",
  },
  {
    tag: "Consumer Rights",
    title: "Your Rights as an Online Auction Bidder in Canada",
    desc: "Legal protections, complaint procedures, and enforcement options under Canadian federal and provincial law.",
    href: "/resources/bidder-rights",
    date: "January 2025",
  },
];

export default function ResourcesIndex() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-warm-50 border-b border-warm-200">
          <div className="max-w-[760px] mx-auto px-6 py-3">
            <nav className="text-xs text-warm-400 flex items-center gap-1.5">
              <a href="/" className="text-warm-400 no-underline hover:text-navy-600 transition-colors">Home</a>
              <span>/</span>
              <span className="text-navy-600">Resources</span>
            </nav>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-6 py-12 md:py-16">
          <header className="mb-12">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 leading-tight mb-3">
              Resources &amp; Publications
            </h1>
            <p className="text-warm-500 text-[15px]">
              Guides, reports, and reference materials on auction compliance,
              consumer protection, and marketplace integrity in Canada.
            </p>
          </header>

          <div className="space-y-4">
            {resources.map((r, i) => (
              <a
                key={i}
                href={r.href}
                className="group block border border-warm-200 rounded-lg p-5 md:p-6 no-underline transition-all duration-200 hover:border-navy-200 hover:shadow-[0_2px_12px_rgba(12,26,46,0.06)] hover:bg-warm-50/50"
              >
                <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                  <div className="flex items-center gap-3 mb-2 md:mb-0 md:w-[140px] md:flex-shrink-0 md:pt-0.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-navy-500 bg-navy-50 px-2 py-0.5 rounded">
                      {r.tag}
                    </span>
                    <span className="text-[11px] text-warm-400 md:hidden">{r.date}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-[16px] md:text-[17px] font-semibold text-navy-800 leading-snug mb-1.5 group-hover:text-navy-600 transition-colors">
                      {r.title}
                    </h2>
                    <p className="text-[13.5px] text-warm-500 leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                  <span className="hidden md:block text-[11px] text-warm-400 flex-shrink-0 pt-1">
                    {r.date}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
