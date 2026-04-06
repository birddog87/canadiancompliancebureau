import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Do If an Auction House Refuses Your Refund",
  description:
    "A practical guide for Canadian consumers dealing with auction houses that refuse refunds, including your legal options, escalation steps, and how to file effective complaints.",
  openGraph: {
    type: "article",
    title: "What to Do If an Auction House Refuses Your Refund",
    description:
      "A practical guide for Canadian consumers dealing with auction houses that refuse refunds, including your legal options, escalation steps, and how to file effective complaints.",
    url: "https://canadiancompliancebureau.com/resources/auction-house-refund-guide",
    publishedTime: "2025-12-12T00:00:00Z",
    authors: ["CCB Research Division"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What to Do If an Auction House Refuses Your Refund",
    description:
      "Your legal options when an auction house refuses a refund — escalation steps and complaint filing guide.",
  },
  alternates: {
    canonical:
      "https://canadiancompliancebureau.com/resources/auction-house-refund-guide",
  },
};

export default function AuctionHouseRefundGuide() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What to Do If an Auction House Refuses Your Refund",
    datePublished: "2025-12-12",
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
      "A practical guide for Canadian consumers dealing with auction houses that refuse refunds, including your legal options, escalation steps, and how to file effective complaints.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://canadiancompliancebureau.com/resources/auction-house-refund-guide",
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
        name: "Auction House Refund Guide",
        item: "https://canadiancompliancebureau.com/resources/auction-house-refund-guide",
      },
    ],
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-warm-50 border-b border-warm-200">
          <div className="max-w-[760px] mx-auto px-6 py-3">
            <nav className="text-xs text-warm-400 flex items-center gap-1.5">
              <a href="/" className="text-warm-400 no-underline hover:text-navy-600 transition-colors">Home</a>
              <span>/</span>
              <a href="/#resources" className="text-warm-400 no-underline hover:text-navy-600 transition-colors">Resources</a>
              <span>/</span>
              <span className="text-navy-600">Auction House Refund Guide</span>
            </nav>
          </div>
        </div>

        <article className="max-w-[760px] mx-auto px-6 py-12 md:py-16">
          <header className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-red-600 mb-3">
              Consumer Guide
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 leading-tight mb-4">
              What to Do If an Auction House Refuses Your Refund
            </h1>
            <p className="text-warm-500 text-sm">
              Published December 12, 2025 &middot; CCB Research Division
            </p>
          </header>

          <div className="prose prose-warm max-w-none text-warm-700 leading-relaxed space-y-6">
            <p className="text-lg text-warm-600 leading-relaxed">
              You won the auction, paid the invoice, and then discovered the item was misrepresented,
              damaged, or never delivered. You contacted the auction house for a refund and were told no.
              This guide walks you through your options — from the initial demand to small claims court —
              so you can recover what you are owed.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              When Are You Entitled to a Refund?
            </h2>
            <p>
              Under Canadian consumer protection law, you may be entitled to a refund from an auction house when:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The item was <strong>materially different</strong> from its listing description (wrong condition, authenticity, or provenance)</li>
              <li>The item was <strong>never delivered</strong> or delivered significantly late without prior agreement</li>
              <li>The auction house engaged in <strong>unfair practices</strong> such as <a href="/resources/is-shill-bidding-illegal" className="text-navy-600 underline hover:text-navy-800">shill bidding</a> or <a href="/resources/how-auction-houses-manipulate-prices" className="text-navy-600 underline hover:text-navy-800">price manipulation</a></li>
              <li><strong>Hidden fees</strong> were added after the sale that were not disclosed before bidding</li>
              <li>The auction house <strong>violated its own stated terms</strong> regarding returns or disputes</li>
              <li>The transaction qualifies for <strong>rescission</strong> under provincial consumer protection legislation (e.g., Ontario&apos;s CPA allows rescission within one year for unfair practices)</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              Common Reasons Auction Houses Deny Refunds
            </h2>
            <p>
              Auction houses frequently cite the following reasons when denying refund requests — and why
              these reasons may not hold up:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-warm-200">
                <thead>
                  <tr className="bg-warm-50">
                    <th className="text-left p-3 font-semibold text-navy-700 border-b border-warm-200">Their Claim</th>
                    <th className="text-left p-3 font-semibold text-navy-700 border-b border-warm-200">The Reality</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-100">
                    <td className="p-3">&quot;All sales are final&quot;</td>
                    <td className="p-3">This clause does not override consumer protection law. If unfair practices were involved, you have a statutory right to rescission that cannot be waived by contract.</td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="p-3">&quot;You had the opportunity to inspect&quot;</td>
                    <td className="p-3">For online auctions, physical inspection is often impossible. The listing description becomes the basis of the sale, and material misrepresentations are actionable.</td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="p-3">&quot;Our terms limit liability&quot;</td>
                    <td className="p-3">Limitation clauses that attempt to exclude liability for misrepresentation or unfair practices may be void under provincial consumer protection statutes.</td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="p-3">&quot;The item was sold as-is&quot;</td>
                    <td className="p-3">&quot;As-is&quot; refers to condition, not authenticity. Selling a reproduction as authentic, or significantly misrepresenting condition, is not protected by an as-is clause.</td>
                  </tr>
                  <tr>
                    <td className="p-3">&quot;Too much time has passed&quot;</td>
                    <td className="p-3">Limitation periods vary. Under Ontario&apos;s CPA, you have up to one year for rescission and two years for court action under the Limitations Act.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              Step 1: Review the Terms and Conditions
            </h2>
            <p>
              Before escalating, carefully review the auction house&apos;s terms and conditions. Look for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The stated return and refund policy — does the auction house have a process for disputes?</li>
              <li>Any guarantees of authenticity or condition</li>
              <li>The buyer&apos;s premium and any other fees you were charged</li>
              <li>Dispute resolution clauses (mediation, arbitration, jurisdiction)</li>
              <li>Any terms that appear to waive your statutory rights — these may be unenforceable</li>
            </ul>
            <p>
              Screenshot or save a copy of the terms. If they have been changed since your transaction,
              the version in effect at the time of your purchase applies.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              Step 2: Make a Formal Written Demand
            </h2>
            <p>
              Send a clear, written demand for a refund. Email is fine, but keep a copy. Your demand should include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name, contact information, and the transaction reference number</li>
              <li>A description of the item and the purchase price (including all fees)</li>
              <li>The specific problem (misrepresentation, non-delivery, hidden fees, etc.)</li>
              <li>The resolution you are seeking (full refund, partial refund, return and refund)</li>
              <li>A deadline for response (14 days is standard)</li>
              <li>A statement that you intend to escalate to consumer protection authorities and/or pursue legal action if the matter is not resolved</li>
            </ul>
            <p>
              A formal demand letter demonstrates seriousness and creates a documented record that you
              attempted to resolve the issue before involving third parties. Many auction houses will
              settle at this stage to avoid regulatory scrutiny.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              Step 3: Escalate to Consumer Protection Authorities
            </h2>
            <p>
              If the auction house does not respond or refuses your demand, file complaints with the
              relevant authorities:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Your provincial consumer protection office</strong> — see our <a href="/resources/consumer-complaint-guide-by-province" className="text-navy-600 underline hover:text-navy-800">province-by-province guide</a> for contact details and filing instructions. Ontario residents should see our guide to the <a href="/resources/ontario-consumer-protection-auctions" className="text-navy-600 underline hover:text-navy-800">Ontario CPA and online auctions</a>.</li>
              <li><strong>The Competition Bureau of Canada</strong> — if the conduct involves deceptive marketing practices or bid rigging</li>
              <li><strong>The Better Business Bureau</strong> — while not a government agency, a BBB complaint creates a public record and some businesses respond to avoid negative ratings</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              Step 4: File a Complaint with the CCB
            </h2>
            <p>
              The Canadian Compliance Bureau tracks complaints against auction houses and identifies
              patterns of misconduct. Filing with the CCB helps build the evidence base for broader
              investigations and regulatory referrals.{" "}
              <a href="/#complaint" className="text-navy-600 underline hover:text-navy-800">
                Submit your complaint here
              </a>.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              Step 5: Consider Small Claims Court
            </h2>
            <p>
              Small claims court is often the most effective path to recovering your money. The process
              is designed for self-represented litigants and does not require a lawyer.
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-warm-200">
                <thead>
                  <tr className="bg-warm-50">
                    <th className="text-left p-3 font-semibold text-navy-700 border-b border-warm-200">Province</th>
                    <th className="text-left p-3 font-semibold text-navy-700 border-b border-warm-200">Maximum Claim</th>
                    <th className="text-left p-3 font-semibold text-navy-700 border-b border-warm-200">Filing Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-100">
                    <td className="p-3">Ontario</td>
                    <td className="p-3">$35,000</td>
                    <td className="p-3">$102 - $252</td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="p-3">British Columbia (CRT)</td>
                    <td className="p-3">$5,000 (online); $35,000 (small claims)</td>
                    <td className="p-3">$75 - $200</td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="p-3">Alberta</td>
                    <td className="p-3">$50,000</td>
                    <td className="p-3">$100 - $200</td>
                  </tr>
                  <tr className="border-b border-warm-100">
                    <td className="p-3">Quebec</td>
                    <td className="p-3">$15,000</td>
                    <td className="p-3">$73 - $196</td>
                  </tr>
                  <tr>
                    <td className="p-3">Manitoba</td>
                    <td className="p-3">$15,000</td>
                    <td className="p-3">$50 - $100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              To file a small claims action, you will need the auction house&apos;s legal business name
              and address, your evidence package, and the total amount you are claiming. Many courts now
              accept online filings.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              Credit Card Chargebacks: Your Secret Weapon
            </h2>
            <p>
              If you paid by credit card, a chargeback may be the fastest path to recovery. Under
              Visa and Mastercard network rules, you can dispute a charge when goods were not received
              as described.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact your credit card issuer&apos;s disputes department</li>
              <li>Provide documentation showing the discrepancy between the listing and what was received</li>
              <li>Include your written demand to the auction house and their response (or lack thereof)</li>
              <li>Most issuers have a 120-day window from the transaction date, so act quickly</li>
            </ul>
            <p>
              Chargebacks bypass the auction house entirely — your bank reverses the charge and the
              auction house must prove the transaction was legitimate. This is particularly effective
              for clear-cut cases of non-delivery or material misrepresentation.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              When an Auction House Goes Out of Business
            </h2>
            <p>
              If the auction house ceases operations before resolving your dispute:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Credit card chargeback</strong> remains available regardless of the business&apos;s status</li>
              <li><strong>File a claim</strong> with the bankruptcy trustee if the business is in insolvency proceedings</li>
              <li><strong>Report to police</strong> if you suspect the business closed to avoid fraud claims</li>
              <li><strong>Document everything</strong> while the business&apos;s website and listings are still accessible</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              Prevention: Protecting Yourself Before You Bid
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Research the auction house before participating — check reviews, BBB rating, and complaint history</li>
              <li>Read the full terms and conditions, especially the return and dispute policies</li>
              <li>Always pay by credit card for chargeback protection</li>
              <li>Set a maximum bid and do not exceed it under any circumstances</li>
              <li>Know the <a href="/resources/auction-scam-red-flags" className="text-navy-600 underline hover:text-navy-800">red flags of auction fraud</a> before you start bidding</li>
              <li>Understand your <a href="/resources/bidder-rights" className="text-navy-600 underline hover:text-navy-800">rights as a bidder</a> under Canadian law</li>
            </ul>
          </div>

          <div className="mt-16 pt-8 border-t border-warm-200">
            <h3 className="font-serif text-lg font-bold text-navy-800 mb-4">Related Resources</h3>
            <div className="space-y-3">
              <a href="/resources/how-to-report-auction-fraud" className="block text-navy-600 no-underline hover:text-navy-800 text-[15px]">&rarr; How to Report Online Auction Fraud in Canada</a>
              <a href="/resources/ontario-consumer-protection-auctions" className="block text-navy-600 no-underline hover:text-navy-800 text-[15px]">&rarr; Ontario Consumer Protection Act and Online Auctions</a>
              <a href="/resources/bidder-rights" className="block text-navy-600 no-underline hover:text-navy-800 text-[15px]">&rarr; Your Rights as an Online Auction Bidder in Canada</a>
              <a href="/resources/documenting-auction-fraud" className="block text-navy-600 no-underline hover:text-navy-800 text-[15px]">&rarr; How to Document Auction Fraud for a Legal Complaint</a>
            </div>
          </div>

          <div className="mt-8">
            <a href="/#resources" className="text-sm text-warm-400 no-underline hover:text-navy-600 transition-colors">&larr; Back to Resources</a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
