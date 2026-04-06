import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Rights as an Online Auction Bidder in Canada",
  description:
    "A comprehensive guide to the legal protections, complaint procedures, and enforcement options available to online auction bidders under Canadian federal and provincial law.",
  openGraph: {
    type: "article",
    title: "Your Rights as an Online Auction Bidder in Canada",
    description:
      "A comprehensive guide to the legal protections, complaint procedures, and enforcement options available to online auction bidders under Canadian federal and provincial law.",
    url: "https://canadiancompliancebureau.com/resources/bidder-rights",
    publishedTime: "2025-01-22T00:00:00Z",
    authors: ["CCB Research Division"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Rights as an Online Auction Bidder in Canada",
    description:
      "Legal protections, complaint procedures, and enforcement options for online auction bidders in Canada.",
  },
  alternates: {
    canonical:
      "https://canadiancompliancebureau.com/resources/bidder-rights",
  },
};

export default function BidderRights() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Your Rights as an Online Auction Bidder in Canada",
    datePublished: "2025-01-22",
    author: {
      "@type": "Organization",
      name: "CCB Research Division",
      url: "https://canadiancompliancebureau.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Canadian Compliance Bureau",
      url: "https://canadiancompliancebureau.com",
    },
    description:
      "A comprehensive guide to the legal protections, complaint procedures, and enforcement options available to online auction bidders under Canadian federal and provincial law.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://canadiancompliancebureau.com/resources/bidder-rights",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://canadiancompliancebureau.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: "https://canadiancompliancebureau.com/#resources",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Bidder Rights",
        item: "https://canadiancompliancebureau.com/resources/bidder-rights",
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-warm-50 border-b border-warm-200">
          <div className="max-w-[760px] mx-auto px-6 py-3">
            <nav className="text-xs text-warm-400 flex items-center gap-1.5">
              <a
                href="/"
                className="text-warm-400 no-underline hover:text-navy-600 transition-colors"
              >
                Home
              </a>
              <span>/</span>
              <a
                href="/#resources"
                className="text-warm-400 no-underline hover:text-navy-600 transition-colors"
              >
                Resources
              </a>
              <span>/</span>
              <span className="text-warm-600">Bidder Rights</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="max-w-[760px] mx-auto px-6 py-12 md:py-16">
          {/* Meta */}
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-red-600 mb-3">
              CCB Consumer Guide
            </p>
            <h1 className="font-serif text-3xl md:text-[2.5rem] md:leading-[1.18] font-bold text-navy-900 mb-4">
              Your Rights as an Online Auction Bidder in Canada
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-warm-400">
              <span>Published January 22, 2025</span>
              <span className="hidden sm:inline">|</span>
              <span>CCB Research Division</span>
            </div>
          </div>

          <div className="w-12 h-px bg-navy-200 mb-10" />

          {/* Body */}
          <div className="prose-custom space-y-6 text-[15.5px] leading-[1.78] text-warm-700">
            <p>
              Online auction bidders in Canada are protected by an overlapping
              framework of federal and provincial legislation, platform-specific
              contractual terms, and common law principles. Understanding these
              protections is essential for anyone who participates in online
              auctions, whether casually or as a regular buyer. This guide
              summarizes the key legal instruments, the rights they confer, and
              the practical steps you can take when those rights are violated.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Provincial Consumer Protection Legislation
            </h2>
            <p>
              In Ontario, the{" "}
              <em>Consumer Protection Act, 2002</em> (CPA) provides the
              broadest set of protections for auction bidders. The CPA applies to
              consumer transactions, which include purchases made through online
              auction platforms when the seller is acting in the course of
              business. Key provisions include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Unfair practices (Part III):</strong> It is an unfair
                practice to make false, misleading, or deceptive representations
                about goods or services. This covers misrepresented item
                conditions, falsified provenance, and undisclosed defects. If an
                auction house or seller knowingly misrepresents an item, the
                buyer may be entitled to rescission of the contract or damages.
              </li>
              <li>
                <strong>Internet agreements (Part III.1):</strong> Online
                auction purchases may qualify as internet agreements under the
                CPA, which require the seller to provide certain disclosures
                before the transaction and delivery within 30 days unless
                otherwise agreed.
              </li>
              <li>
                <strong>Credit card chargeback rights:</strong> Where a consumer
                has paid by credit card and the supplier has not met their
                obligations, the CPA allows the consumer to request a chargeback
                through their card issuer after first demanding a refund from the
                supplier.
              </li>
            </ul>
            <p>
              Other provinces have comparable legislation. British
              Columbia&apos;s <em>Business Practices and Consumer Protection Act</em>{" "}
              and Quebec&apos;s <em>Consumer Protection Act</em> contain similar
              unfair practices provisions and disclosure requirements. Alberta&apos;s{" "}
              <em>Consumer Protection Act</em> and the <em>Fair Trading Act</em>{" "}
              together address misleading representations and provide complaint
              and enforcement mechanisms.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Federal Legislation: The Competition Act
            </h2>
            <p>
              The federal <em>Competition Act</em> applies across all provinces
              and targets conduct that undermines fair competition, including in
              online marketplaces. Two provisions are particularly relevant to
              auction bidders:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Bid-rigging (Section 47):</strong> It is a criminal
                offence for parties to agree among themselves on bids to be
                submitted, or for one party to agree to withdraw a bid, without
                disclosing the arrangement to the person calling for bids. This
                provision directly addresses shill bidding rings and collusive
                practices between auction house employees and outside
                accomplices.
              </li>
              <li>
                <strong>
                  Misleading representations (Sections 52 and 74.01):
                </strong>{" "}
                Both the criminal and civil tracks of the <em>Competition Act</em>{" "}
                prohibit false or misleading representations made to promote the
                supply of a product. Auction houses that systematically
                misrepresent item conditions, lot contents, or bidding activity
                may be subject to Competition Bureau investigation and
                enforcement.
              </li>
            </ul>
            <p>
              Complaints under the <em>Competition Act</em> can be filed
              directly with the Competition Bureau of Canada. While the Bureau
              prioritizes cases with broad market impact, individual complaints
              contribute to pattern detection and may trigger formal inquiries
              when sufficient evidence accumulates.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Platform Terms of Service Protections
            </h2>
            <p>
              Beyond statutory protections, the terms of service of major auction
              platforms create contractual obligations that can be enforced
              through civil proceedings or platform dispute resolution processes.
              Most platforms operating in Canada include provisions addressing:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Prohibitions on shill bidding, bid manipulation, and undisclosed
                employee participation.
              </li>
              <li>
                Requirements for accurate item descriptions and disclosure of
                known defects or damage.
              </li>
              <li>
                Buyer protection policies that may include refunds for items
                significantly not as described.
              </li>
              <li>
                Dispute resolution mechanisms, typically beginning with direct
                communication between buyer and seller and escalating to
                platform mediation.
              </li>
            </ul>
            <p>
              It is important to note that platform terms of service are
              contracts, not statutes. The platform itself decides whether and
              how to enforce them, and its incentives may not always align with
              buyer interests. This is why statutory protections remain the more
              reliable foundation for consumer rights.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              What to Do If You Suspect Fraud
            </h2>
            <p>
              If you believe you have been the victim of auction fraud or unfair
              practices, the CCB recommends the following sequence of actions:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Document everything immediately.</strong> Save
                screenshots of the listing, your bid history, the final sale
                confirmation, any communications with the seller or auction
                house, and photographs of the item received (if applicable).
              </li>
              <li>
                <strong>Contact the seller or auction house directly.</strong>{" "}
                Many disputes arise from miscommunication or honest error. A
                written request for resolution creates a record and satisfies the
                precondition for most escalation paths.
              </li>
              <li>
                <strong>File a complaint with the platform.</strong> Use the
                platform&apos;s built-in dispute resolution process. Attach your
                documentation.
              </li>
              <li>
                <strong>
                  File a complaint with your provincial consumer protection
                  authority.
                </strong>{" "}
                In Ontario, this is the Ministry of Public and Business Service
                Delivery. In BC, the Consumer Protection BC. In Quebec, the
                Office de la protection du consommateur.
              </li>
              <li>
                <strong>
                  Report to the Competition Bureau if bid-rigging or systematic
                  fraud is involved.
                </strong>{" "}
                Use the Bureau&apos;s online complaint form or call
                1-800-348-5358.
              </li>
              <li>
                <strong>Submit a report to the CCB.</strong> Our investigations
                team reviews all submissions and can coordinate with provincial
                and federal authorities where appropriate.
              </li>
            </ol>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Small Claims Court in Ontario
            </h2>
            <p>
              For disputes involving amounts up to $35,000, Ontario&apos;s Small
              Claims Court provides an accessible and relatively low-cost forum
              for resolution. Key considerations for auction-related claims:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The filing fee is $102 for claims up to $10,000 and $152 for
                claims between $10,001 and $35,000. There are additional costs
                for serving the claim and attending a hearing.
              </li>
              <li>
                You do not need a lawyer. The court is designed for
                self-represented litigants, and Duty Counsel may be available to
                assist on hearing dates.
              </li>
              <li>
                You must sue the correct party. This is typically the auction
                house or the individual seller, depending on who made the
                misrepresentation or breached the contract.
              </li>
              <li>
                Jurisdiction matters. You can generally file in the court closest
                to where the transaction occurred, where the defendant resides,
                or where the defendant carries on business.
              </li>
              <li>
                Your documentation is your case. Judges assess credibility based
                on contemporaneous records. Screenshots with timestamps, written
                communications, and organized evidence are far more persuasive
                than after-the-fact recollections.
              </li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Filing Complaints: Quick Reference
            </h2>
            <div className="bg-warm-50 border border-warm-200 rounded-lg p-5 text-sm space-y-3">
              <div>
                <strong className="text-navy-800">Ontario:</strong>{" "}
                Ministry of Public and Business Service Delivery &mdash;{" "}
                <span className="text-navy-600">ontario.ca/consumer</span>
              </div>
              <div>
                <strong className="text-navy-800">British Columbia:</strong>{" "}
                Consumer Protection BC &mdash;{" "}
                <span className="text-navy-600">consumerprotectionbc.ca</span>
              </div>
              <div>
                <strong className="text-navy-800">Alberta:</strong>{" "}
                Service Alberta &mdash;{" "}
                <span className="text-navy-600">servicealberta.ca</span>
              </div>
              <div>
                <strong className="text-navy-800">Quebec:</strong>{" "}
                Office de la protection du consommateur &mdash;{" "}
                <span className="text-navy-600">opc.gouv.qc.ca</span>
              </div>
              <div>
                <strong className="text-navy-800">Federal:</strong>{" "}
                Competition Bureau of Canada &mdash;{" "}
                <span className="text-navy-600">competitionbureau.gc.ca</span>
              </div>
              <div>
                <strong className="text-navy-800">CCB:</strong>{" "}
                Canadian Compliance Bureau &mdash;{" "}
                <span className="text-navy-600">
                  canadiancompliancebureau.ca/complaint
                </span>
              </div>
            </div>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Know Your Position
            </h2>
            <p>
              The rights outlined in this guide exist whether or not an auction
              house acknowledges them. Many bidders accept unfair outcomes
              because they assume auction purchases are inherently &ldquo;buyer
              beware&rdquo; transactions with no recourse. This is incorrect.
              Canadian consumer protection law applies to commercial auction
              transactions, and the tools for enforcement, while sometimes slow,
              are real and available. The most important step any bidder can take
              is to document thoroughly and report promptly.
            </p>
            <p>
              For further guidance, see our companion publication{" "}
              <a
                href="/resources/employee-self-dealing"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                Understanding Employee Self-Dealing in Online Auctions
              </a>{" "}
              and the{" "}
              <a
                href="/resources/compliance-report-2025"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                2025-2026 Marketplace Compliance Report
              </a>
              .
            </p>
          </div>

          {/* Back link */}
          <div className="mt-14 pt-8 border-t border-warm-200">
            <a
              href="/#resources"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-600 no-underline hover:text-navy-800 transition-colors"
            >
              <span>&larr;</span>
              <span>Back to Resources</span>
            </a>
          </div>
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
