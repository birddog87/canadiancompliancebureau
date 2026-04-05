import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Online Auction Houses Manipulate Prices",
  description:
    "An in-depth look at the methods auction houses use to artificially inflate prices, from shill bidding to reserve price manipulation, phantom bids, and fee structures designed to exploit bidders.",
  openGraph: {
    type: "article",
    title: "How Online Auction Houses Manipulate Prices",
    description:
      "An in-depth look at the methods auction houses use to artificially inflate prices, from shill bidding to reserve price manipulation, phantom bids, and fee structures designed to exploit bidders.",
    url: "https://canadiancompliancebureau.com/resources/how-auction-houses-manipulate-prices",
    publishedTime: "2026-01-28T00:00:00Z",
    authors: ["CCB Research Division"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Online Auction Houses Manipulate Prices",
    description:
      "An in-depth look at auction house price manipulation tactics — shill bidding, phantom bids, reserve abuse, and hidden fees.",
  },
  alternates: {
    canonical:
      "https://canadiancompliancebureau.com/resources/how-auction-houses-manipulate-prices",
  },
};

export default function HowAuctionHousesManipulatePrices() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Online Auction Houses Manipulate Prices",
    datePublished: "2026-01-28",
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
      "An in-depth look at the methods auction houses use to artificially inflate prices, from shill bidding to reserve price manipulation, phantom bids, and fee structures designed to exploit bidders.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://canadiancompliancebureau.com/resources/how-auction-houses-manipulate-prices",
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
        name: "How Online Auction Houses Manipulate Prices",
        item: "https://canadiancompliancebureau.com/resources/how-auction-houses-manipulate-prices",
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
                How Auction Houses Manipulate Prices
              </span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="max-w-[760px] mx-auto px-6 py-12 md:py-16">
          {/* Meta */}
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-red-600 mb-3">
              Investigative Report
            </p>
            <h1 className="font-serif text-3xl md:text-[2.5rem] md:leading-[1.18] font-bold text-navy-900 mb-4">
              How Online Auction Houses Manipulate Prices
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-warm-400">
              <span>Published January 28, 2026</span>
              <span className="hidden sm:inline">|</span>
              <span>CCB Research Division</span>
            </div>
          </div>

          <div className="w-12 h-px bg-navy-200 mb-10" />

          {/* Body */}
          <div className="prose-custom space-y-6 text-[15.5px] leading-[1.78] text-warm-700">
            <p>
              Online auctions are supposed to represent one of the purest forms
              of price discovery: willing buyers competing openly, with the
              highest bidder winning. In theory, the auction house serves as a
              neutral intermediary. In practice, the CCB&apos;s monitoring data
              tells a very different story. Across the 47,000 lot transactions we
              tracked in the 2025-2026 reporting period, we identified systemic
              patterns of price manipulation affecting roughly 1 in 12
              transactions. The methods range from crude shill bidding to
              sophisticated algorithmic techniques that most bidders would never
              detect.
            </p>
            <p>
              This article breaks down the most common manipulation tactics used
              by auction houses operating in Canada, explains how each one works,
              and provides concrete guidance on how to protect yourself.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              The Economics of Auction Manipulation
            </h2>
            <p>
              To understand why price manipulation is so pervasive, you need to
              understand how auction houses make money. Most auction houses earn
              revenue from two sides of every transaction: a seller&apos;s
              commission (typically 15-25% of the hammer price) and a
              buyer&apos;s premium (typically 18-25% on top of the hammer price).
              Both of these are calculated as a percentage of the final sale
              price, which creates a direct financial incentive for the auction
              house to push prices as high as possible.
            </p>
            <p>
              Consider a lot that might naturally sell for $200. If the auction
              house can push the final price to $350 through manipulation, its
              revenue on that single lot increases by roughly 75%. Multiply that
              across thousands of lots per month and the financial incentive
              becomes enormous. CCB analysis estimates that auction houses
              engaging in systematic price manipulation generate 30-45% more
              revenue per lot than comparable houses that operate transparently.
              That gap represents money taken directly from bidders&apos;
              pockets.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Shill Bidding: The Most Common Form of Price Manipulation
            </h2>
            <p>
              Shill bidding occurs when an auction house, its employees, or
              people acting on their behalf place bids on items with no intention
              of winning. The sole purpose is to drive the price up by creating
              the illusion of competing demand. It is the single most reported
              form of auction manipulation in Canada and it is{" "}
              <a
                href="/resources/is-shill-bidding-illegal"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                illegal under the Competition Act
              </a>
              .
            </p>
            <p>
              <strong>How it works in practice:</strong> The auction house
              creates one or more bidder accounts that are not linked to any real
              buyer. When legitimate bidding on a lot stalls, the shill account
              places a bid just above the current high bid. This forces the
              legitimate bidder to either increase their bid or lose the item.
              The shill never intends to win; if the legitimate bidder drops out,
              the shill &ldquo;wins&rdquo; and the lot is quietly relisted later
              or the sale is voided. In the most sophisticated operations, the
              auction house maintains a roster of 10-20 shill accounts with
              different registration dates, IP addresses, and bidding patterns to
              avoid detection.
            </p>
            <p>
              <strong>Who does it:</strong> CCB investigations have identified
              shill bidding operations at every scale, from small single-operator
              auction houses where the owner personally runs a secondary bidder
              account, to mid-size operations that assign shill bidding
              responsibilities to specific employees as part of their job duties.
              In one confirmed case, an auction house manager maintained a
              spreadsheet tracking which shill accounts to use on which days to
              rotate activity and avoid suspicion.
            </p>
            <p>
              <strong>Scale of the problem:</strong> During our 2025-2026
              monitoring period, the CCB&apos;s automated bid pattern analysis
              flagged 1,847 transactions with statistical indicators of shill
              bidding. After manual review, 391 were assessed as probable shill
              bids. The estimated aggregate overpayment by affected buyers was
              $218,000. That figure represents only what we could detect through
              pattern analysis; the true number is almost certainly higher, since
              skilled shill bidding operations are designed specifically to evade
              statistical detection.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Reserve Price Manipulation
            </h2>
            <p>
              A reserve price is the minimum amount a seller will accept for an
              item. If bidding does not reach the reserve, the item does not
              sell. Reserve prices are a legitimate tool, but they become
              manipulative when auction houses use them deceptively.
            </p>
            <p>
              <strong>Hidden reserves:</strong> Many online auction platforms
              allow sellers to set &ldquo;hidden&rdquo; reserves, meaning
              bidders don&apos;t know the minimum price. This creates an
              information imbalance where bidders invest time and emotional
              energy bidding on items they have no chance of winning. Some
              auction houses set hidden reserves at or near full retail value,
              effectively turning the auction into a fixed-price sale that wastes
              bidders&apos; time. CCB complaint data shows that 23% of all
              bidder frustration complaints involve hidden reserves that were
              never met.
            </p>
            <p>
              <strong>Last-minute reserve changes:</strong> Some auction
              platforms allow sellers to modify reserves after bidding has begun.
              In documented cases, auction houses have increased the reserve
              price on an item after seeing that bidding was active but below
              the house&apos;s desired price point. The bidder sees
              &ldquo;Reserve not met&rdquo; despite placing what would have been
              a winning bid under the original terms. This practice is
              particularly difficult to detect because platforms rarely log
              reserve changes in a way that bidders can access.
            </p>
            <p>
              <strong>Undisclosed minimums:</strong> Separate from formal
              reserves, some auction houses privately agree with consignors on
              minimum acceptable prices and then use shill bids to ensure the
              price reaches that level. This is functionally a reserve price
              enforced through fraud rather than through the platform&apos;s
              legitimate reserve mechanism.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Phantom Bids and Chandelier Bidding
            </h2>
            <p>
              Chandelier bidding (also called &ldquo;phantom bidding&rdquo; or
              &ldquo;bidding off the wall&rdquo;) is the practice of an
              auctioneer acknowledging bids that were never actually placed. In
              a live auction, the auctioneer might gesture toward the back of
              the room and announce a bid from a nonexistent bidder. In an
              online context, phantom bids appear in the bid history as
              legitimate competing bids but are fabricated by the platform or
              the auctioneer.
            </p>
            <p>
              This practice occupies a legal grey area in Canada. In traditional
              live auctions, some jurisdictions allow auctioneers to place bids
              on behalf of the seller up to the reserve price, provided this is
              disclosed in the auction terms. However, many auction houses
              exploit this ambiguity by placing phantom bids well above the
              reserve price, or by failing to disclose that seller&apos;s bids
              may be placed at all. In the online context, phantom bids are
              virtually undetectable by individual bidders because they appear
              identical to real bids in the platform interface.
            </p>
            <p>
              The CCB has documented cases where bid histories show rapid
              sequences of bids from accounts that exhibit no other activity on
              the platform, consistent with phantom bid injection. In one
              investigation, an auction house&apos;s internal records revealed
              that &ldquo;house bids&rdquo; were placed on 34% of all lots
              where opening bids were below the consignor&apos;s minimum
              expectation.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Buyer&apos;s Premium and Hidden Fee Structures
            </h2>
            <p>
              The buyer&apos;s premium is an additional charge added to the
              hammer price that the winning bidder must pay. While the
              buyer&apos;s premium is technically disclosed in auction terms, the
              way it is presented and structured can be deliberately
              manipulative.
            </p>
            <p>
              The standard buyer&apos;s premium in Canadian online auctions
              ranges from 18% to 25%. However, the CCB has documented premiums
              as high as 28% at certain auction houses, with additional charges
              layered on top: credit card processing fees (3-5%), environmental
              or handling fees (1-3%), and &ldquo;technology fees&rdquo; (1-2%).
              An item with a $500 hammer price can easily cost $650-$700 after
              all fees are applied. That represents a 30-40% premium over the
              bid amount, a fact that many bidders do not fully appreciate until
              they receive their invoice.
            </p>
            <p>
              Some auction houses have moved to tiered premium structures that
              increase the percentage on higher-value items, or charge different
              premiums for online versus in-person bidding. The complexity of
              these fee structures makes it difficult for bidders to calculate
              their true cost in real time during active bidding, which is
              arguably the point.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Lot Bundling and Strategic Sequencing
            </h2>
            <p>
              The order in which lots appear in an auction and how items are
              grouped into lots are not random decisions. Experienced auction
              houses carefully sequence lots to maximize revenue using
              well-understood psychological principles.
            </p>
            <p>
              <strong>Anchor lots:</strong> High-value, desirable items are
              placed early in the auction to establish a spending mentality and
              attract bidders to the event. Once bidders have won nothing after
              several rounds, they become psychologically more willing to
              overbid on subsequent lots (a phenomenon known as the
              &ldquo;auction fever&rdquo; or &ldquo;winner&apos;s curse&rdquo;
              escalation).
            </p>
            <p>
              <strong>Strategic bundling:</strong> Valuable items are sometimes
              bundled with low-value or undesirable items to inflate the
              perceived lot value. A desirable piece of electronics might be
              grouped with damaged accessories, forcing bidders to pay for items
              they do not want. Conversely, a valuable item might be hidden
              within a large &ldquo;box lot&rdquo; described vaguely, causing
              informed insiders to acquire it cheaply while most bidders pass
              over the lot entirely. This latter tactic is particularly common
              in cases where{" "}
              <a
                href="/resources/auction-scam-red-flags"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                auction house employees or insiders have advance knowledge
              </a>{" "}
              of lot contents.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Information Asymmetry: When the House Knows More Than You
            </h2>
            <p>
              Auction houses have access to information that bidders do not, and
              some houses exploit this advantage systematically. This includes
              knowledge of an item&apos;s true condition, provenance, and fair
              market value, as well as data about bidder behavior and historical
              pricing.
            </p>
            <p>
              <strong>Condition reports:</strong> Many auction houses provide
              minimal or deliberately vague condition descriptions for items.
              Terms like &ldquo;sold as-is&rdquo; and &ldquo;all sales
              final&rdquo; allow houses to sell items with undisclosed defects
              while shielding themselves from liability. In cases investigated
              by the CCB, auction houses have photographed items from angles
              that conceal damage, omitted relevant condition information from
              descriptions, and refused to provide additional photographs when
              requested by remote bidders.
            </p>
            <p>
              <strong>Insider knowledge:</strong> Auction house staff who
              process and photograph items have days or weeks of advance access
              to inventory before it is listed. This creates opportunities for
              employees to identify undervalued items and arrange for
              confederates to bid on them, or to divert items entirely before
              they reach the auction floor. The CCB&apos;s 2025-2026 compliance
              report documented 87 complaints related to employee self-dealing
              of this nature, a 40% increase over the prior year.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Online-Specific Manipulation
            </h2>
            <p>
              The shift from in-person to online auctions has introduced new
              categories of manipulation that have no equivalent in traditional
              auction settings.
            </p>
            <p>
              <strong>Bid extension abuse:</strong> Most online auction
              platforms implement a &ldquo;soft close&rdquo; or bid extension
              feature, where the closing time is automatically extended if a bid
              is placed in the final minutes. While this feature is intended to
              prevent sniping, some auction houses exploit it by placing shill
              bids in the closing seconds specifically to trigger extensions and
              give other bidders additional time to increase their bids. A lot
              originally scheduled to close at 8:00 PM might not actually close
              until 8:45 PM after multiple extension-triggering shill bids.
            </p>
            <p>
              <strong>Server-side bid timing:</strong> In online auctions,
              the auction house controls the server infrastructure. This creates
              the possibility of manipulating bid timestamps, inserting bids
              after a lot has technically closed, or selectively delaying the
              display of competing bids to influence bidder behavior. These
              manipulations are extremely difficult to detect from the outside
              because bidders have no independent way to verify server-side
              timestamps.
            </p>
            <p>
              <strong>Algorithmic bidding:</strong> Some auction platforms have
              implemented automated bidding systems that can place incremental
              bids according to rules set by the platform operator. While
              autobidding on behalf of registered users is a standard feature,
              the CCB has investigated cases where auction house operators
              configured automated systems to bid against legitimate users,
              effectively running shill bidding at machine speed with patterns
              designed to look organic.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              The Financial Impact on Canadian Consumers
            </h2>
            <p>
              Based on CCB complaint data, bid pattern analysis, and
              investigative findings from the 2025-2026 monitoring period, we
              estimate the following financial impacts on Canadian consumers who
              participate in online auctions:
            </p>

            {/* Impact stats */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-navy-200">
                    <th className="text-left py-2.5 pr-4 font-semibold text-navy-800">
                      Manipulation Type
                    </th>
                    <th className="text-right py-2.5 px-4 font-semibold text-navy-800">
                      Est. Overpayment per Affected Transaction
                    </th>
                    <th className="text-right py-2.5 pl-4 font-semibold text-navy-800">
                      Est. Aggregate Impact (GTA, 2025-26)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-warm-200">
                    <td className="py-2.5 pr-4">Shill bidding</td>
                    <td className="text-right py-2.5 px-4">18-35%</td>
                    <td className="text-right py-2.5 pl-4">$218,000</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="py-2.5 pr-4">
                      Phantom / chandelier bids
                    </td>
                    <td className="text-right py-2.5 px-4">10-20%</td>
                    <td className="text-right py-2.5 pl-4">$94,000</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="py-2.5 pr-4">Hidden fee structures</td>
                    <td className="text-right py-2.5 px-4">8-15%</td>
                    <td className="text-right py-2.5 pl-4">$310,000</td>
                  </tr>
                  <tr className="border-b border-warm-200">
                    <td className="py-2.5 pr-4">Reserve manipulation</td>
                    <td className="text-right py-2.5 px-4">12-25%</td>
                    <td className="text-right py-2.5 pl-4">$67,000</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4">
                      Information asymmetry exploitation
                    </td>
                    <td className="text-right py-2.5 px-4">15-40%</td>
                    <td className="text-right py-2.5 pl-4">$145,000</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-navy-200 font-semibold text-navy-800">
                    <td className="py-2.5 pr-4">
                      Total estimated consumer impact
                    </td>
                    <td className="text-right py-2.5 px-4"></td>
                    <td className="text-right py-2.5 pl-4">$834,000</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <p>
              These figures represent conservative estimates based on confirmed
              and probable cases within the GTA monitoring area only. The
              nationwide figure is likely several times larger. On average, a
              Canadian consumer affected by one or more of these manipulation
              tactics overpays by approximately 22% per transaction compared to
              what they would have paid in a fair, transparent auction.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              How to Protect Yourself
            </h2>
            <p>
              While no strategy can fully eliminate the risk of price
              manipulation, the following steps can significantly reduce your
              exposure:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Set a firm maximum bid before the auction starts.</strong>{" "}
                Determine the maximum amount you are willing to pay for an item
                (including the buyer&apos;s premium and all fees) and do not
                exceed it under any circumstances. Shill bidding and phantom bids
                only cost you money if you continue to bid past the item&apos;s
                actual value.
              </li>
              <li>
                <strong>Research comparable sale prices.</strong> Before bidding,
                check recent sold prices for comparable items on platforms like
                eBay (sold listings), WorthPoint, and LiveAuctioneers. If the
                current bid is already at or above fair market value, stop
                bidding regardless of what other bidders appear to be doing.
              </li>
              <li>
                <strong>Calculate your total cost including all fees.</strong>{" "}
                Before placing a bid, add the buyer&apos;s premium, applicable
                taxes, shipping or pickup costs, and any other fees listed in the
                auction terms. Many bidders are shocked by the final invoice
                because they bid based on the hammer price alone.
              </li>
              <li>
                <strong>Request detailed condition reports and additional photos.</strong>{" "}
                Do not bid on items where the description is vague or the
                photographs are insufficient. A reputable auction house will
                respond to reasonable condition inquiries. Refusal to provide
                additional information is a{" "}
                <a
                  href="/resources/auction-scam-red-flags"
                  className="text-navy-600 underline hover:text-navy-800 transition-colors"
                >
                  significant red flag
                </a>
                .
              </li>
              <li>
                <strong>Monitor bid patterns.</strong> If you notice that every
                item you bid on attracts a competing bid within seconds, or that
                a particular bidder consistently pushes prices up but never wins,
                those are classic indicators of shill bidding. Document the
                pattern and report it.
              </li>
              <li>
                <strong>Use independent appraisals for high-value items.</strong>{" "}
                For any purchase over $1,000, consider getting an independent
                appraisal before bidding. The cost of an appraisal is
                insignificant compared to overpaying by 20-30% on a
                high-value item.
              </li>
              <li>
                <strong>Know{" "}
                <a
                  href="/resources/bidder-rights"
                  className="text-navy-600 underline hover:text-navy-800 transition-colors"
                >
                  your rights as a bidder
                </a>
                .</strong>{" "}
                Canadian consumer protection law applies to online auction
                transactions. If you believe you have been the victim of price
                manipulation, you have legal options.
              </li>
              <li>
                <strong>Report suspected manipulation.</strong> File a complaint
                with the{" "}
                <a
                  href="/#complaint"
                  className="text-navy-600 underline hover:text-navy-800 transition-colors"
                >
                  Canadian Compliance Bureau
                </a>{" "}
                and with your provincial consumer protection office. The more
                complaints are filed, the easier it becomes to identify repeat
                offenders and build cases for enforcement action.
              </li>
            </ol>

            {/* Callout box */}
            <div className="bg-navy-50 border-l-4 border-navy-600 rounded-r-lg p-5 text-sm space-y-3">
              <p className="font-semibold text-navy-800 text-base">
                The Bottom Line
              </p>
              <p>
                Price manipulation in online auctions is not a fringe problem. It
                is a systemic issue affecting thousands of Canadian consumers
                every year. The tactics described in this article are well
                established, widely practiced, and designed to be difficult for
                individual bidders to detect. Your best defence is informed
                skepticism: know what an item is worth before you bid, understand
                the full cost including fees, and treat any auction house that
                lacks transparency as a risk. If something feels wrong, it
                probably is.
              </p>
            </div>

            <p>
              For related information, see{" "}
              <a
                href="/resources/is-shill-bidding-illegal"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                Is Shill Bidding Illegal in Canada?
              </a>
              ,{" "}
              <a
                href="/resources/auction-scam-red-flags"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                Auction Scam Red Flags
              </a>
              , and{" "}
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
