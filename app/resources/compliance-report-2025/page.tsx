import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2025-2026 Marketplace Compliance Report: GTA Region",
  description:
    "Annual compliance monitoring report covering online auction and marketplace practices in the Greater Toronto Area, including key findings on employee self-dealing, shill bidding, and inventory diversion.",
  openGraph: {
    type: "article",
    title: "2025-2026 Marketplace Compliance Report: GTA Region",
    description:
      "Annual compliance monitoring report covering online auction and marketplace practices in the Greater Toronto Area, including key findings on employee self-dealing, shill bidding, and inventory diversion.",
    url: "https://canadiancompliancebureau.com/resources/compliance-report-2025",
    publishedTime: "2026-02-01T00:00:00Z",
    authors: ["CCB Research Division"],
  },
  twitter: {
    card: "summary_large_image",
    title: "2025-2026 Marketplace Compliance Report: GTA Region",
    description:
      "Annual compliance report on GTA online auction practices — employee self-dealing, shill bidding, and inventory diversion findings.",
  },
  alternates: {
    canonical:
      "https://canadiancompliancebureau.com/resources/compliance-report-2025",
  },
};

export default function ComplianceReport2025() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "2025-2026 Marketplace Compliance Report: GTA Region",
    datePublished: "2026-02-01",
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
      "Annual compliance monitoring report covering online auction and marketplace practices in the Greater Toronto Area, including key findings on employee self-dealing, shill bidding, and inventory diversion.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://canadiancompliancebureau.com/resources/compliance-report-2025",
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
        name: "Compliance Report 2025-2026",
        item: "https://canadiancompliancebureau.com/resources/compliance-report-2025",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
              <span className="text-warm-600">
                2025-2026 Compliance Report
              </span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="max-w-[760px] mx-auto px-6 py-12 md:py-16">
          {/* Meta */}
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-red-600 mb-3">
              Annual Report
            </p>
            <h1 className="font-serif text-3xl md:text-[2.5rem] md:leading-[1.18] font-bold text-navy-900 mb-4">
              2025-2026 Marketplace Compliance Report: GTA Region
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-warm-400">
              <span>Published February 1, 2026</span>
              <span className="hidden sm:inline">|</span>
              <span>CCB Research Division</span>
            </div>
          </div>

          <div className="w-12 h-px bg-navy-200 mb-10" />

          {/* Body */}
          <div className="prose-custom space-y-6 text-[15.5px] leading-[1.78] text-warm-700">
            {/* Executive Summary box */}
            <div className="bg-navy-50 border-l-4 border-navy-600 rounded-r-lg p-5 text-sm space-y-3">
              <p className="font-semibold text-navy-800 text-base">
                Executive Summary
              </p>
              <p>
                This report presents findings from the Canadian Compliance
                Bureau&apos;s monitoring activities across 14 online auction
                platforms and 23 individual auction houses operating in the
                Greater Toronto Area during the April 2025 to January 2026
                reporting period. The CCB processed 214 formal complaints,
                conducted 38 targeted investigations, and referred 9 cases to
                provincial or federal authorities. Employee self-dealing
                complaints increased 40% year-over-year, emerging as the
                dominant category of reported misconduct.
              </p>
            </div>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Scope and Methodology
            </h2>
            <p>
              The CCB&apos;s monitoring program covers all auction houses
              operating on major third-party platforms (HiBid, Proxibid,
              BidSpotter) within the GTA, as well as independent auction
              operations that conduct business primarily through their own
              websites. During this reporting period, our monitoring team tracked
              approximately 47,000 individual lot transactions across 1,260
              auction events. Monitoring activities included automated bid
              pattern analysis, manual lot description review, consumer complaint
              investigation, and open-source intelligence collection on secondary
              marketplace activity linked to auction house employees.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Complaint Volume and Categories
            </h2>
            <p>
              The CCB received 214 formal complaints during the reporting
              period, up from 168 in the prior year (a 27% increase). Complaints
              were categorized as follows:
            </p>

            {/* Stats table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-navy-200">
                    <th className="text-left py-2.5 pr-4 font-semibold text-navy-800">
                      Category
                    </th>
                    <th className="text-right py-2.5 px-4 font-semibold text-navy-800">
                      2024-25
                    </th>
                    <th className="text-right py-2.5 px-4 font-semibold text-navy-800">
                      2025-26
                    </th>
                    <th className="text-right py-2.5 pl-4 font-semibold text-navy-800">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-200">
                    <td className="py-2.5 pr-4">Employee self-dealing</td>
                    <td className="text-right py-2.5 px-4">62</td>
                    <td className="text-right py-2.5 px-4">87</td>
                    <td className="text-right py-2.5 pl-4 text-red-600 font-medium">
                      +40%
                    </td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="py-2.5 pr-4">Shill bidding</td>
                    <td className="text-right py-2.5 px-4">41</td>
                    <td className="text-right py-2.5 px-4">48</td>
                    <td className="text-right py-2.5 pl-4 text-red-600 font-medium">
                      +17%
                    </td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="py-2.5 pr-4">
                      Item misrepresentation
                    </td>
                    <td className="text-right py-2.5 px-4">34</td>
                    <td className="text-right py-2.5 px-4">39</td>
                    <td className="text-right py-2.5 pl-4 text-red-600 font-medium">
                      +15%
                    </td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="py-2.5 pr-4">Inventory diversion</td>
                    <td className="text-right py-2.5 px-4">18</td>
                    <td className="text-right py-2.5 px-4">24</td>
                    <td className="text-right py-2.5 pl-4 text-red-600 font-medium">
                      +33%
                    </td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="py-2.5 pr-4">
                      Premium/fee disputes
                    </td>
                    <td className="text-right py-2.5 px-4">8</td>
                    <td className="text-right py-2.5 px-4">11</td>
                    <td className="text-right py-2.5 pl-4 text-red-600 font-medium">
                      +38%
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">Other</td>
                    <td className="text-right py-2.5 px-4">5</td>
                    <td className="text-right py-2.5 px-4">5</td>
                    <td className="text-right py-2.5 pl-4 text-warm-400">
                      0%
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-navy-200 font-semibold text-navy-800">
                    <td className="py-2.5 pr-4">Total</td>
                    <td className="text-right py-2.5 px-4">168</td>
                    <td className="text-right py-2.5 px-4">214</td>
                    <td className="text-right py-2.5 pl-4">+27%</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Key Finding 1: Employee Self-Dealing
            </h2>
            <p>
              Employee self-dealing was the most reported category of misconduct
              for the second consecutive year, accounting for 41% of all
              complaints. Investigations confirmed substantive violations in 23
              of 87 complaints (26% confirmation rate). The confirmed cases
              involved 7 distinct auction houses and 12 individual employees.
            </p>
            <p>
              The most common confirmed pattern was employees maintaining
              undisclosed buyer accounts and winning lots at or near opening bid
              prices. In 4 cases, the CCB documented parallel resale activity on
              Facebook Marketplace and Kijiji, where employees resold items
              within 48 hours of auction close at markups averaging 180% to 340%
              above their winning bid. One investigation identified a single
              employee who had won 312 lots over an 8-month period using three
              separate accounts registered to family members, with estimated
              resale revenue exceeding $74,000.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Key Finding 2: Shill Bidding Patterns
            </h2>
            <p>
              The CCB&apos;s automated bid pattern analysis flagged 1,847
              transactions across the monitoring period that exhibited
              statistical indicators consistent with shill bidding. After manual
              review, 391 transactions (21%) were assessed as probable shill
              bidding, involving 9 auction houses. Common indicators included:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Bidder accounts that exclusively bid on a single auction
                house&apos;s listings and never won (consistent with
                price-driving behavior).
              </li>
              <li>
                Bid sequences that consistently pushed final prices to within
                5-8% of estimated retail value, a suspiciously precise range that
                maximizes revenue without triggering buyer resistance.
              </li>
              <li>
                Multiple bidder accounts operating from the same IP address or
                device fingerprint as the auction house&apos;s administrative
                systems.
              </li>
            </ul>
            <p>
              The estimated financial impact of probable shill bidding on
              affected buyers was $218,000 in aggregate overpayment during the
              reporting period.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Key Finding 3: Inventory Diversion
            </h2>
            <p>
              Inventory diversion, the practice of removing consigned items from
              auction and selling them through private channels, was confirmed in
              6 cases involving 3 auction houses. These cases were typically
              reported by consignors who discovered that items they had submitted
              for auction either never appeared in any listing or were listed in
              degraded condition and sold well below expected value.
            </p>
            <p>
              In the most significant case, a consignor submitted a 240-item
              estate lot valued at approximately $32,000. Only 168 items appeared
              in the subsequent auction. The auction house attributed the
              discrepancy to &ldquo;items deemed unsaleable,&rdquo; but a CCB
              investigation subsequently identified 47 of the missing items
              listed on a secondary marketplace by an account linked to the
              warehouse manager, with a combined asking price of $8,400.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Case Outcomes and Referrals
            </h2>
            <p>
              Of the 38 targeted investigations initiated during the reporting
              period:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>23 resulted in confirmed violations</strong> supported by
                documentary evidence sufficient for regulatory referral.
              </li>
              <li>
                <strong>9 were referred to external authorities:</strong> 6 to
                the Ontario Ministry of Public and Business Service Delivery, 2
                to the Competition Bureau of Canada, and 1 to York Regional
                Police (fraud unit).
              </li>
              <li>
                <strong>4 auction houses implemented corrective measures</strong>{" "}
                following CCB engagement, including adoption of employee bidding
                policies, implementation of account auditing procedures, and
                termination of employees involved in confirmed self-dealing.
              </li>
              <li>
                <strong>11 investigations were closed</strong> due to
                insufficient evidence to confirm the reported conduct,
                dissolution of the subject business, or complainant withdrawal.
              </li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Recommendations
            </h2>
            <p>
              Based on this year&apos;s findings, the CCB makes the following
              recommendations to auction platforms, auction houses, and
              regulatory authorities:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>
                  Mandatory employee transaction disclosure:
                </strong>{" "}
                All auction houses should be required to maintain and disclose a
                registry of employee-associated buyer accounts. Platforms should
                audit for undisclosed employee accounts on a quarterly basis.
              </li>
              <li>
                <strong>
                  Automated bid pattern monitoring:
                </strong>{" "}
                Platforms should implement algorithmic detection of bid patterns
                consistent with shill bidding and flag anomalous accounts for
                human review. The CCB is prepared to share its detection
                methodology with platforms that request it.
              </li>
              <li>
                <strong>Consignor manifest requirements:</strong> Auction houses
                should be required to provide consignors with a complete itemized
                manifest of all received goods within 5 business days of intake,
                and consignors should be notified of any items withdrawn from
                auction with a written explanation.
              </li>
              <li>
                <strong>Provincial licensing framework:</strong> The CCB
                renews its recommendation that Ontario introduce a licensing
                requirement for online auction houses, similar to existing
                requirements for traditional auctioneers, with compliance
                auditing and penalty provisions.
              </li>
              <li>
                <strong>Expanded Competition Bureau engagement:</strong> The
                CCB urges the Competition Bureau to treat systematic shill
                bidding as a priority enforcement area under Section 47 of the{" "}
                <em>Competition Act</em>, and to issue formal guidance
                clarifying the application of bid-rigging provisions to online
                auction platforms.
              </li>
            </ol>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              About This Report
            </h2>
            <p>
              This report covers the period from April 1, 2025 to January 31,
              2026. It was prepared by the CCB Research Division with
              contributions from the Investigations Unit and the Consumer
              Complaints Office. Methodology notes and supplementary data tables
              are available upon request. The CCB welcomes feedback from auction
              industry participants, consumer advocates, and regulatory
              authorities.
            </p>
            <p>
              For related publications, see{" "}
              <a
                href="/resources/employee-self-dealing"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                Understanding Employee Self-Dealing in Online Auctions
              </a>{" "}
              and{" "}
              <a
                href="/resources/bidder-rights"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                Your Rights as an Online Auction Bidder in Canada
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
    </>
  );
}
