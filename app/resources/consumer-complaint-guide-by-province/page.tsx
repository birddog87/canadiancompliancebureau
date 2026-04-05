import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Province-by-Province Guide to Filing Consumer Complaints in Canada",
  description:
    "A complete directory of consumer protection offices across all Canadian provinces and territories, with step-by-step instructions for filing complaints about online auction fraud and marketplace misconduct.",
  openGraph: {
    type: "article",
    title:
      "Province-by-Province Guide to Filing Consumer Complaints in Canada",
    description:
      "A complete directory of consumer protection offices across all Canadian provinces and territories, with step-by-step instructions for filing complaints.",
    url: "https://canadiancompliancebureau.com/resources/consumer-complaint-guide-by-province",
    publishedTime: "2025-09-15T00:00:00Z",
    authors: ["CCB Research Division"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Province-by-Province Consumer Complaint Guide — Canada",
    description:
      "Complete directory of consumer protection offices across all Canadian provinces and territories.",
  },
  alternates: {
    canonical:
      "https://canadiancompliancebureau.com/resources/consumer-complaint-guide-by-province",
  },
};

export default function ConsumerComplaintGuideByProvince() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Province-by-Province Guide to Filing Consumer Complaints in Canada",
    datePublished: "2025-09-15",
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
      "A complete directory of consumer protection offices across all Canadian provinces and territories, with step-by-step instructions for filing complaints about online auction fraud and marketplace misconduct.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://canadiancompliancebureau.com/resources/consumer-complaint-guide-by-province",
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
        name: "Consumer Complaint Guide by Province",
        item: "https://canadiancompliancebureau.com/resources/consumer-complaint-guide-by-province",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-warm-50 border-b border-warm-200">
          <div className="max-w-[760px] mx-auto px-6 py-3">
            <nav className="text-xs text-warm-400 flex items-center gap-1.5">
              <a href="/" className="text-warm-400 no-underline hover:text-navy-600 transition-colors">Home</a>
              <span>/</span>
              <a href="/#resources" className="text-warm-400 no-underline hover:text-navy-600 transition-colors">Resources</a>
              <span>/</span>
              <span className="text-navy-600">Consumer Complaint Guide by Province</span>
            </nav>
          </div>
        </div>

        <article className="max-w-[760px] mx-auto px-6 py-12 md:py-16">
          <header className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-red-600 mb-3">Reference Guide</p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 leading-tight mb-4">
              Province-by-Province Guide to Filing Consumer Complaints in Canada
            </h1>
            <p className="text-warm-500 text-sm">Published September 15, 2025 &middot; CCB Research Division</p>
          </header>

          <div className="prose prose-warm max-w-none text-warm-700 leading-relaxed space-y-6">
            <p className="text-lg text-warm-600 leading-relaxed">
              Consumer protection in Canada is primarily a provincial responsibility. Each province and territory
              operates its own consumer protection office with the authority to investigate complaints, mediate
              disputes, and take enforcement action against businesses that violate consumer protection law.
              This guide provides a complete directory of where and how to file complaints across every
              jurisdiction in Canada.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              Why Filing a Provincial Complaint Matters
            </h2>
            <p>
              Provincial consumer protection offices have enforcement powers that individual consumers do not.
              They can issue compliance orders, impose administrative penalties, revoke business licences, and
              refer matters for prosecution. Even if your individual complaint does not lead to immediate action,
              it contributes to the evidence base that triggers investigations when a pattern of misconduct emerges.
            </p>
            <p>
              Before filing a provincial complaint, we recommend{" "}
              <a href="/resources/documenting-auction-fraud" className="text-navy-600 underline hover:text-navy-800">
                documenting your evidence thoroughly
              </a>{" "}
              and following our{" "}
              <a href="/resources/how-to-report-auction-fraud" className="text-navy-600 underline hover:text-navy-800">
                step-by-step reporting guide
              </a>.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              Federal Complaints: The Competition Bureau of Canada
            </h2>
            <p>
              For conduct that crosses provincial boundaries or involves violations of the Competition Act
              (such as bid rigging, deceptive marketing, or price fixing), the Competition Bureau of Canada
              is the appropriate federal agency.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>What they investigate:</strong> Bid rigging (Section 47), deceptive marketing practices (Sections 52, 74.01), price maintenance, and abuse of dominant position</li>
              <li><strong>How to file:</strong> Online complaint form at the Competition Bureau website, or by telephone at 1-800-348-5358</li>
              <li><strong>Penalties:</strong> Criminal prosecution (up to 14 years imprisonment for bid rigging), administrative monetary penalties up to $10 million for a first offence</li>
            </ul>

            <hr className="my-10 border-warm-200" />

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">Ontario</h2>
            <p><strong>Agency:</strong> Consumer Protection Ontario (Ministry of Public and Business Service Delivery)</p>
            <p><strong>Legislation:</strong> Consumer Protection Act, 2002</p>
            <p><strong>Phone:</strong> 1-800-889-9768</p>
            <p><strong>How to file:</strong> Online complaint form at Ontario.ca or by telephone. You can also visit a ServiceOntario centre in person.</p>
            <p><strong>What they cover:</strong> Unfair business practices, false or misleading representations, internet agreements, door-to-door sales, motor vehicle repairs, and more. For a detailed guide to how the CPA applies to online auctions, see our <a href="/resources/ontario-consumer-protection-auctions" className="text-navy-600 underline hover:text-navy-800">Ontario CPA and online auctions guide</a>.</p>
            <p><strong>Typical timeline:</strong> 14-30 days for initial assessment. Complex investigations may take several months.</p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">British Columbia</h2>
            <p><strong>Agency:</strong> Consumer Protection BC</p>
            <p><strong>Legislation:</strong> Business Practices and Consumer Protection Act (BPCPA)</p>
            <p><strong>Phone:</strong> 1-888-564-9963</p>
            <p><strong>How to file:</strong> Online complaint form at consumerprotectionbc.ca or by telephone.</p>
            <p><strong>What they cover:</strong> Deceptive or unconscionable acts and practices, debt collection, funeral services, travel agents, and telecommunications contracts. The BPCPA prohibits a broad range of deceptive conduct including misrepresentation of goods and services.</p>
            <p><strong>Note:</strong> BC also has the Civil Resolution Tribunal (CRT) for disputes up to $5,000, which handles consumer complaints through an online process.</p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">Alberta</h2>
            <p><strong>Agency:</strong> Service Alberta — Consumer Investigations Unit</p>
            <p><strong>Legislation:</strong> Consumer Protection Act, Fair Trading Act</p>
            <p><strong>Phone:</strong> 1-877-427-4088</p>
            <p><strong>How to file:</strong> Online complaint form at alberta.ca or by telephone. Written complaints can be mailed to the Consumer Investigations Unit.</p>
            <p><strong>What they cover:</strong> Unfair trading practices, internet sales, direct sales, credit reporting, and cost of credit disclosure. The Fair Trading Act prohibits deceptive and unconscionable practices in consumer transactions.</p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">Quebec</h2>
            <p><strong>Agency:</strong> Office de la protection du consommateur (OPC)</p>
            <p><strong>Legislation:</strong> Consumer Protection Act (Loi sur la protection du consommateur)</p>
            <p><strong>Phone:</strong> 1-888-672-2556</p>
            <p><strong>How to file:</strong> Online complaint form at opc.gouv.qc.ca or by telephone. The OPC offers mediation services for consumer disputes.</p>
            <p><strong>What they cover:</strong> Quebec&apos;s Consumer Protection Act provides some of the strongest consumer protections in Canada. It includes strict liability provisions, broad definitions of prohibited practices, and robust enforcement mechanisms. The Act covers advertising, warranties, distance contracts, and credit.</p>
            <p><strong>Note:</strong> Quebec is a civil law jurisdiction. Consumer protection remedies in Quebec may differ from those in common law provinces.</p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">Manitoba</h2>
            <p><strong>Agency:</strong> Consumer Protection Office (Manitoba)</p>
            <p><strong>Legislation:</strong> Consumer Protection Act</p>
            <p><strong>Phone:</strong> 1-800-782-0067</p>
            <p><strong>How to file:</strong> Online complaint form at manitoba.ca or by telephone.</p>
            <p><strong>What they cover:</strong> Unfair business practices, internet agreements, direct sales, credit reporting, and payday loans. The office can investigate complaints and take enforcement action.</p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">Saskatchewan</h2>
            <p><strong>Agency:</strong> Financial and Consumer Affairs Authority of Saskatchewan (FCAA)</p>
            <p><strong>Legislation:</strong> Consumer Protection and Business Practices Act</p>
            <p><strong>Phone:</strong> 1-877-880-5550</p>
            <p><strong>How to file:</strong> Online complaint form at fcaa.gov.sk.ca or by telephone.</p>
            <p><strong>What they cover:</strong> Unfair practices, consumer agreements, internet sales, credit reporting, and collection practices.</p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">Nova Scotia</h2>
            <p><strong>Agency:</strong> Service Nova Scotia — Consumer Protection Division</p>
            <p><strong>Legislation:</strong> Consumer Protection Act</p>
            <p><strong>Phone:</strong> 1-800-670-4357</p>
            <p><strong>How to file:</strong> Online complaint form at novascotia.ca or by telephone.</p>
            <p><strong>What they cover:</strong> Consumer transactions, unfair trade practices, direct sellers, internet sales, and collection agencies.</p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">New Brunswick</h2>
            <p><strong>Agency:</strong> Financial and Consumer Services Commission (FCNB)</p>
            <p><strong>Legislation:</strong> Consumer Product Warranty and Liability Act, Cost of Credit Disclosure and Payday Loans Act</p>
            <p><strong>Phone:</strong> 1-866-933-2222</p>
            <p><strong>How to file:</strong> Online complaint form at fcnb.ca or by telephone.</p>
            <p><strong>What they cover:</strong> Consumer protection, securities, insurance, pensions, credit unions, and cooperative associations. FCNB also provides educational resources for consumers.</p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">Newfoundland and Labrador</h2>
            <p><strong>Agency:</strong> Digital Government and Service NL — Consumer Affairs Division</p>
            <p><strong>Legislation:</strong> Consumer Protection and Business Practices Act</p>
            <p><strong>Phone:</strong> 1-877-968-2600</p>
            <p><strong>How to file:</strong> By telephone or written complaint to the Consumer Affairs Division.</p>
            <p><strong>What they cover:</strong> Unfair business practices, consumer agreements, warranties, and trade practices.</p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">Prince Edward Island</h2>
            <p><strong>Agency:</strong> Consumer, Corporate and Insurance Division (Department of Justice and Public Safety)</p>
            <p><strong>Legislation:</strong> Consumer Protection Act</p>
            <p><strong>Phone:</strong> (902) 368-4580</p>
            <p><strong>How to file:</strong> By telephone or written complaint.</p>
            <p><strong>What they cover:</strong> Consumer transactions, unfair practices, direct sellers, and business licensing.</p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              Northwest Territories, Nunavut, and Yukon
            </h2>
            <p>
              The three territories have smaller consumer protection operations, often housed within
              broader government services departments:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Northwest Territories:</strong> Municipal and Community Affairs — Consumer Affairs. Phone: (867) 767-9160 ext. 21045.</li>
              <li><strong>Nunavut:</strong> Department of Community and Government Services — Consumer Affairs. Phone: (867) 975-6000.</li>
              <li><strong>Yukon:</strong> Department of Community Services — Consumer Services. Phone: (867) 667-5111. Yukon also has a Consumer Protection Act.</li>
            </ul>
            <p>
              For territorial residents dealing with out-of-territory online auction houses, filing with
              the Competition Bureau (federal) and the CCB may be more effective than territorial
              consumer affairs offices, which have limited resources for cross-jurisdictional matters.
            </p>

            <hr className="my-10 border-warm-200" />

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              Tips for Filing an Effective Complaint
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Be specific:</strong> Include dates, amounts, names, and transaction reference numbers. Vague complaints are harder to investigate.</li>
              <li><strong>Attach evidence:</strong> Include screenshots, receipts, communications, and any other documentation. See our <a href="/resources/documenting-auction-fraud" className="text-navy-600 underline hover:text-navy-800">evidence documentation guide</a>.</li>
              <li><strong>State the law:</strong> If you can identify the specific provision of consumer protection law that was violated, include it. This helps investigators prioritize your complaint.</li>
              <li><strong>Be clear about your desired outcome:</strong> State whether you are seeking a refund, replacement, or other resolution.</li>
              <li><strong>Follow up:</strong> If you have not received a response within 30 days, follow up by telephone.</li>
              <li><strong>File with multiple agencies:</strong> You can and should file with more than one agency. Provincial complaints, federal complaints, and <a href="/#complaint" className="text-navy-600 underline hover:text-navy-800">CCB complaints</a> serve different purposes and are not mutually exclusive.</li>
            </ol>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-12 mb-4">
              When Provincial Complaints Aren&apos;t Enough
            </h2>
            <p>
              Provincial consumer protection offices are effective for businesses operating within
              their jurisdiction, but they have limitations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cross-provincial businesses:</strong> If the auction house operates from a different province, your local office may have limited jurisdiction. File with both your province and the business&apos;s home province.</li>
              <li><strong>International platforms:</strong> For auction platforms based outside Canada, provincial enforcement is difficult. The Competition Bureau and the Canadian Anti-Fraud Centre may be more effective.</li>
              <li><strong>Criminal conduct:</strong> If you suspect criminal fraud (theft, identity fraud, organized schemes), report to police in addition to consumer protection authorities.</li>
              <li><strong>Significant financial losses:</strong> For larger claims, consider consulting a consumer protection lawyer about civil litigation or <a href="/resources/auction-house-refund-guide" className="text-navy-600 underline hover:text-navy-800">small claims court</a>.</li>
            </ul>
          </div>

          <div className="mt-16 pt-8 border-t border-warm-200">
            <h3 className="font-serif text-lg font-bold text-navy-800 mb-4">Related Resources</h3>
            <div className="space-y-3">
              <a href="/resources/how-to-report-auction-fraud" className="block text-navy-600 no-underline hover:text-navy-800 text-[15px]">&rarr; How to Report Online Auction Fraud in Canada</a>
              <a href="/resources/ontario-consumer-protection-auctions" className="block text-navy-600 no-underline hover:text-navy-800 text-[15px]">&rarr; Ontario Consumer Protection Act and Online Auctions</a>
              <a href="/resources/documenting-auction-fraud" className="block text-navy-600 no-underline hover:text-navy-800 text-[15px]">&rarr; How to Document Auction Fraud for a Legal Complaint</a>
              <a href="/resources/bidder-rights" className="block text-navy-600 no-underline hover:text-navy-800 text-[15px]">&rarr; Your Rights as an Online Auction Bidder in Canada</a>
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
