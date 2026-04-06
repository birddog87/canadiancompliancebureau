import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Shill Bidding Illegal in Canada?",
  description:
    "A clear guide to the legality of shill bidding in Canadian auctions, relevant federal and provincial laws, penalties, and how to report suspected shill bidding activity.",
  openGraph: {
    type: "article",
    title: "Is Shill Bidding Illegal in Canada?",
    description:
      "A clear guide to the legality of shill bidding in Canadian auctions, relevant federal and provincial laws, penalties, and how to report suspected shill bidding activity.",
    url: "https://canadiancompliancebureau.com/resources/is-shill-bidding-illegal",
    publishedTime: "2026-03-20T00:00:00Z",
    authors: ["CCB Research Division"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Shill Bidding Illegal in Canada?",
    description:
      "A clear guide to the legality of shill bidding in Canadian auctions, relevant federal and provincial laws, and penalties.",
  },
  alternates: {
    canonical:
      "https://canadiancompliancebureau.com/resources/is-shill-bidding-illegal",
  },
};

export default function IsShillBiddingIllegal() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Is Shill Bidding Illegal in Canada?",
    datePublished: "2026-03-20",
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
      "A clear guide to the legality of shill bidding in Canadian auctions, relevant federal and provincial laws, penalties, and how to report suspected shill bidding activity.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://canadiancompliancebureau.com/resources/is-shill-bidding-illegal",
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
        name: "Is Shill Bidding Illegal in Canada?",
        item: "https://canadiancompliancebureau.com/resources/is-shill-bidding-illegal",
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
              <span className="text-warm-600">Shill Bidding Legality</span>
            </nav>
          </div>
        </div>

        {/* Article */}
        <article className="max-w-[760px] mx-auto px-6 py-12 md:py-16">
          {/* Meta */}
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-red-600 mb-3">
              CCB Guidance Paper
            </p>
            <h1 className="font-serif text-3xl md:text-[2.5rem] md:leading-[1.18] font-bold text-navy-900 mb-4">
              Is Shill Bidding Illegal in Canada?
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-warm-400">
              <span>Published March 20, 2026</span>
              <span className="hidden sm:inline">|</span>
              <span>CCB Research Division</span>
            </div>
          </div>

          <div className="w-12 h-px bg-navy-200 mb-10" />

          {/* Body */}
          <div className="prose-custom space-y-6 text-[15.5px] leading-[1.78] text-warm-700">
            <p>
              Shill bidding is one of the most pervasive forms of auction fraud
              in Canada, and yet many bidders remain unsure whether it is
              actually illegal. The short answer is yes. Shill bidding violates
              federal law under both the <em>Competition Act</em> and the{" "}
              <em>Criminal Code of Canada</em>, and it may also breach
              provincial consumer protection statutes depending on where the
              auction takes place. This guide explains what shill bidding is, why
              it is illegal, which laws apply, what penalties offenders face, and
              what you can do if you suspect it is happening.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              What Is Shill Bidding?
            </h2>
            <p>
              Shill bidding occurs when a person places bids on an auction item
              without any genuine intention to purchase it, solely to
              artificially inflate the price. The shill bidder is typically the
              seller themselves, an employee of the auction house, or someone
              acting in coordination with the seller. The purpose is to create
              the false impression of competitive demand, driving legitimate
              bidders to pay more than they otherwise would.
            </p>
            <p>
              Shill bidding can take several forms. The most common involves
              the seller operating a second bidder account under a different
              name, often registered to a spouse, relative, or friend. In
              more sophisticated operations, auction house employees place
              bids on lots consigned by the house or by preferred sellers,
              using accounts that cannot easily be traced back to the
              business. In online auctions, shill bidding may also involve
              automated bid-bot software programmed to place incremental bids
              that keep pace with legitimate bidders until the price reaches a
              target threshold.
            </p>
            <p>
              The Canadian Compliance Bureau documented 142 confirmed or
              probable instances of shill bidding across Canadian online auction
              platforms during the 2025-2026 reporting period, representing a
              34% increase over the prior year. The estimated aggregate
              financial harm to affected buyers exceeded $218,000. For a
              detailed breakdown, see our{" "}
              <a
                href="/resources/compliance-report-2025"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                2025-2026 Marketplace Compliance Report
              </a>
              .
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Is Shill Bidding Illegal in Canada?
            </h2>
            <p>
              Yes. Shill bidding is illegal in Canada under multiple federal
              statutes and may also violate provincial consumer protection
              legislation. There is no ambiguity on this point. Canadian law
              treats the auction process as a marketplace that must operate
              free from manipulation, and placing fraudulent bids to inflate
              prices constitutes a criminal and regulatory offence.
            </p>
            <p>
              The illegality of shill bidding rests on two primary legal
              foundations. First, Section 47 of the <em>Competition Act</em>{" "}
              (R.S.C., 1985, c. C-34) prohibits bid-rigging, which
              encompasses any agreement or arrangement between parties to
              manipulate the bidding process. Second, the general fraud
              provisions of the <em>Criminal Code</em> (R.S.C., 1985, c.
              C-46) apply to any scheme that uses deception to deprive
              another person of property or money. Shill bidding satisfies
              both criteria: it involves coordinated manipulation of bids,
              and it uses deception to extract higher payments from
              unsuspecting buyers.
            </p>
            <p>
              The fact that an auction takes place online rather than in a
              physical auction hall does not diminish the legal exposure.
              Canadian courts have consistently held that fraud and competition
              offences apply equally to digital transactions. The Competition
              Bureau of Canada has specifically identified online auction
              manipulation as a priority enforcement area.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Federal Laws That Apply
            </h2>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Competition Act, Section 47 (Bid-Rigging)
            </h3>
            <p>
              Section 47 of the <em>Competition Act</em> makes it a criminal
              offence for any person to agree or arrange with another person
              to withdraw a bid, to submit a bid arrived at by agreement
              between bidders, or to otherwise manipulate the bidding process.
              The provision was originally drafted to address bid-rigging in
              government procurement, but its language is broad enough to
              encompass any auction or competitive bidding environment.
            </p>
            <p>
              Critically, Section 47 does not require proof that the
              manipulation actually succeeded in increasing the final price. The
              offence is the agreement or arrangement itself. If a seller
              arranges for a friend to place fake bids, both the seller and the
              friend have committed an offence under Section 47 regardless of
              whether the item ultimately sold for more than it would have
              without the shill bids.
            </p>
            <p>
              Bid-rigging under Section 47 is an indictable offence punishable
              by a fine at the discretion of the court and imprisonment for up
              to 14 years. There is no maximum cap on the fine, and the court
              may impose both a fine and imprisonment simultaneously.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Criminal Code, Section 380 (Fraud)
            </h3>
            <p>
              Section 380 of the <em>Criminal Code</em> establishes the
              general offence of fraud. It provides that every person who, by
              deceit, falsehood, or other fraudulent means, defrauds the
              public or any person of any property, money, or valuable
              security is guilty of an offence. Shill bidding constitutes
              fraud because the shill bid is a falsehood: it represents
              itself as a genuine offer to purchase when it is nothing of the
              kind. The legitimate bidders who increase their bids in
              response are being deceived into paying more than the market
              would otherwise dictate.
            </p>
            <p>
              Where the value of the fraud exceeds $5,000, the offence is
              indictable and carries a maximum sentence of 14 years
              imprisonment. Where the value is $5,000 or under, the offence
              may be prosecuted as a summary conviction offence with a maximum
              sentence of two years less a day. In the context of auction
              fraud, the value is typically calculated as the aggregate
              overpayment across all affected transactions, which can quickly
              exceed the $5,000 threshold when multiple lots are involved.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Criminal Code, Section 400 (False Prospectus)
            </h3>
            <p>
              In certain cases, shill bidding may also engage Section 400 of
              the <em>Criminal Code</em>, which prohibits making or
              publishing false statements intended to induce others to
              participate in commercial transactions. While less commonly
              applied to auction fraud than Sections 380 and 47, it provides
              an additional basis for prosecution where auction houses
              publish bid counts or bidding activity as a marketing tool to
              attract new bidders.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Provincial Consumer Protection Laws
            </h2>
            <p>
              In addition to federal criminal and competition law, shill
              bidding may violate provincial consumer protection statutes.
              These statutes generally prohibit unfair business practices,
              false or misleading representations, and unconscionable conduct
              in consumer transactions. While the specific language varies by
              province, the core principles are consistent: consumers are
              entitled to honest dealings, and businesses that use deceptive
              practices face regulatory sanctions.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Ontario: Consumer Protection Act, 2002
            </h3>
            <p>
              Ontario&apos;s <em>Consumer Protection Act, 2002</em> (S.O.
              2002, c. 30, Sch. A) prohibits unfair practices in consumer
              transactions. Section 14 defines an unfair practice as any
              false, misleading, or deceptive representation, or any
              unconscionable representation. Shill bidding qualifies as a
              false and misleading representation because it creates the
              impression of genuine competitive demand where none exists. The
              Act applies to online transactions and provides consumers with
              remedies including rescission of the contract and damages. The
              Ontario Ministry of Public and Business Service Delivery may
              also investigate and issue compliance orders.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              British Columbia: Business Practices and Consumer Protection Act
            </h3>
            <p>
              British Columbia&apos;s{" "}
              <em>Business Practices and Consumer Protection Act</em> (S.B.C.
              2004, c. 2) prohibits deceptive acts or practices in connection
              with consumer transactions. Section 4 provides a broad
              definition of deceptive practices that includes any
              representation that has the tendency to mislead. An auction
              house that employs shill bidding is making a deceptive
              representation about the level of demand for its lots.
              Consumer Protection BC has enforcement authority and may pursue
              administrative penalties, issue compliance orders, or refer
              matters for prosecution.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Alberta: Fair Trading Act
            </h3>
            <p>
              Alberta&apos;s <em>Fair Trading Act</em> (R.S.A. 2000, c.
              F-2) prohibits unfair practices in consumer transactions,
              including any representation that has the effect of deceiving or
              misleading a consumer. Section 6 specifically addresses false or
              misleading representations about the nature of goods, services,
              or transactions. Service Alberta may investigate complaints and
              impose administrative penalties. The Act also provides consumers
              with a private right of action to recover losses caused by
              unfair practices.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Other Provinces
            </h3>
            <p>
              Quebec&apos;s <em>Consumer Protection Act</em> (C.Q.L.R., c.
              P-40.1) contains some of the strongest consumer protection
              provisions in the country, prohibiting any business practice
              that is misleading or constitutes a false representation.
              Saskatchewan&apos;s <em>Consumer Protection and Business
              Practices Act</em>, Manitoba&apos;s{" "}
              <em>Consumer Protection Act</em>, and the consumer protection
              legislation of the Atlantic provinces all contain similar
              prohibitions on deceptive business practices that would
              encompass shill bidding.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Penalties for Shill Bidding
            </h2>
            <p>
              The penalties for shill bidding in Canada are substantial and
              can be imposed concurrently under multiple statutes. An
              individual or organization convicted of shill bidding may face
              criminal penalties, regulatory sanctions, and civil liability
              simultaneously.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Criminal penalties under the Competition Act:</strong>{" "}
                Bid-rigging under Section 47 carries a maximum sentence of 14
                years imprisonment and an unlimited fine. The court has
                discretion to impose both. Organizations convicted of
                bid-rigging face fines proportional to the scale of the
                offence, and individual directors or officers who directed or
                authorized the conduct may be personally liable.
              </li>
              <li>
                <strong>Criminal penalties under the Criminal Code:</strong>{" "}
                Fraud over $5,000 carries a maximum sentence of 14 years
                imprisonment. Fraud under $5,000 carries a maximum of two
                years less a day. Courts may also order restitution to victims
                as part of the sentence.
              </li>
              <li>
                <strong>Provincial regulatory penalties:</strong> Provincial
                consumer protection authorities may issue compliance orders,
                impose administrative monetary penalties (which vary by
                province but can reach $100,000 or more per violation in some
                jurisdictions), suspend or revoke business licences, and
                publish the names of offenders.
              </li>
              <li>
                <strong>Civil liability:</strong> Victims of shill bidding
                may pursue civil claims for damages, including the
                overpayment on the affected transactions, consequential
                losses, and in some cases punitive damages. Class actions are
                also possible where multiple bidders are affected by the same
                shill bidding operation.
              </li>
              <li>
                <strong>Platform sanctions:</strong> Major online auction
                platforms including HiBid, Proxibid, and AuctionZip prohibit
                shill bidding in their terms of service. Violations can result
                in account suspension, permanent bans, forfeiture of
                transaction proceeds, and referral to law enforcement.
              </li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              How to Spot Shill Bidding
            </h2>
            <p>
              Shill bidding is designed to be invisible to legitimate bidders,
              but it leaves identifiable patterns. The CCB recommends watching
              for the following red flags, particularly when multiple
              indicators appear together:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Recurring bidders who never win.</strong> A bidder
                account that places bids on many lots from the same seller or
                auction house but rarely or never wins is a classic shill
                indicator. The shill&apos;s purpose is to push prices up, not
                to actually purchase. Review the bid history of competing
                bidders if the platform makes this information available.
              </li>
              <li>
                <strong>Bids placed at unusual times.</strong> Shill bids are
                often placed late in the auction, timed to trigger a response
                from the leading legitimate bidder. Watch for bids placed in
                the final minutes or seconds that are just enough to outbid
                you by the minimum increment.
              </li>
              <li>
                <strong>Bidder accounts with minimal history.</strong> Newly
                created accounts with no purchase history that suddenly appear
                as active bidders on high-value lots deserve scrutiny. Shill
                accounts are often disposable, created for a specific auction
                cycle and abandoned afterward.
              </li>
              <li>
                <strong>Consistent pattern of small increments.</strong> A
                bidder who always bids exactly one increment above the
                current high bid, across multiple lots and multiple auctions,
                may be a shill operating to a predetermined price target
                rather than bidding based on genuine interest.
              </li>
              <li>
                <strong>
                  Final prices that cluster near estimated retail value.
                </strong>{" "}
                When lots consistently sell for prices that are suspiciously
                close to retail or estimated value, with bidding histories
                showing aggressive last-minute competition, it may indicate
                that a shill is pushing prices to a target. Genuine auction
                results are more variable.
              </li>
              <li>
                <strong>Same bidder across many lots from one seller.</strong>{" "}
                A bidder who appears as the second-place bidder on a
                disproportionate number of lots from the same seller, across
                multiple auctions, is exhibiting a pattern consistent with
                shill bidding. Legitimate bidders tend to focus on specific
                items, not systematically bid on everything a single seller
                offers.
              </li>
              <li>
                <strong>Bidding that stops at a round number.</strong> When
                the shill is working toward a reserve or target price, the
                fake bids often stop once that threshold is reached. If you
                notice that competing bids consistently drop away once the
                price hits a round number or approximate retail value, the
                pattern is suspicious.
              </li>
            </ul>
            <p>
              No single red flag is conclusive proof. However, when several of
              these indicators appear together, particularly across multiple
              auctions by the same seller, the pattern becomes significant.
              For guidance on what constitutes adequate documentation, see our
              guide on{" "}
              <a
                href="/resources/employee-self-dealing"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                Understanding Employee Self-Dealing in Online Auctions
              </a>
              , which covers documentation practices that apply equally to
              shill bidding complaints.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              How to Report Shill Bidding
            </h2>
            <p>
              If you believe you have been the victim of shill bidding or have
              observed shill bidding activity on a Canadian auction platform,
              there are several avenues for reporting.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Competition Bureau of Canada
            </h3>
            <p>
              The Competition Bureau is the federal authority responsible for
              enforcing the bid-rigging provisions of the{" "}
              <em>Competition Act</em>. You can file a complaint through the
              Bureau&apos;s online complaint portal at competitionbureau.gc.ca
              or by calling 1-800-348-5358. The Bureau investigates bid-rigging
              complaints and can refer cases to the Public Prosecution Service
              of Canada for criminal prosecution. When filing, include as much
              detail as possible: screenshots of bid histories, bidder
              usernames, auction lot numbers, dates, and any patterns you have
              observed.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Provincial Consumer Protection Offices
            </h3>
            <p>
              Each province has a consumer protection authority that can
              investigate unfair or deceptive business practices. In Ontario,
              complaints are handled by the Ministry of Public and Business
              Service Delivery. In British Columbia, contact Consumer
              Protection BC. In Alberta, contact Service Alberta. In Quebec,
              contact the Office de la protection du consommateur. These
              offices can issue compliance orders, impose administrative
              penalties, and in some cases refer matters for prosecution.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Canadian Compliance Bureau (CCB)
            </h3>
            <p>
              The CCB accepts complaints related to all forms of auction fraud,
              including shill bidding. You may{" "}
              <a
                href="/#complaint"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                file a complaint through our secure online form
              </a>
              . All submissions are reviewed by our investigations team. Where
              the evidence supports it, the CCB coordinates with provincial
              consumer protection authorities, the Competition Bureau, and law
              enforcement agencies. The CCB also maintains a database of
              reported shill bidding patterns that helps identify repeat
              offenders and systemic practices.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              The Auction Platform
            </h3>
            <p>
              While reporting to the auction platform alone is unlikely to
              result in legal consequences for the offender, most platforms
              have internal investigation procedures and can take immediate
              action including suspending accounts, reversing transactions, and
              banning sellers. Filing a platform complaint also creates a
              record that may be useful if the matter is later referred to
              regulatory authorities.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              What Happens After You Report
            </h2>
            <p>
              The outcome depends on which authority you report to and the
              strength of the evidence. The Competition Bureau typically
              conducts a preliminary assessment within 30 to 60 days to
              determine whether the complaint warrants a formal investigation.
              If it does, the investigation may take several months to over a
              year, particularly if it involves obtaining records from auction
              platforms or coordinating with international partners. The
              Bureau has the power to obtain production orders compelling
              auction platforms to disclose account information, IP addresses,
              and transaction records.
            </p>
            <p>
              Provincial consumer protection investigations generally move
              more quickly. In Ontario, the Ministry typically acknowledges
              complaints within 10 business days and may contact the auction
              house for a response within 30 days. However, the scope of
              provincial investigations is limited to the consumer protection
              framework and does not extend to criminal prosecution.
            </p>
            <p>
              The CCB reviews all complaints within 5 business days of
              receipt and provides an initial assessment to the complainant.
              Where warranted, the CCB initiates its own investigation, which
              may include analysis of bid patterns, identification of
              related accounts, and outreach to the auction house. Cases with
              sufficient evidence are referred to the appropriate regulatory
              or law enforcement authority. The CCB maintains the
              complainant&apos;s confidentiality throughout the process.
            </p>
            <p>
              Regardless of which avenue you pursue, the quality of your
              documentation will significantly influence the outcome.
              Screenshots, bid histories, timestamps, and written
              communications are the foundation of any successful complaint.
              For a comprehensive guide to building a strong case, see{" "}
              <a
                href="/resources/bidder-rights"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                Your Rights as an Online Auction Bidder in Canada
              </a>
              , which includes detailed guidance on evidence preservation and
              complaint procedures.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Related Resources
            </h2>
            <p>
              For further reading on auction fraud and your rights as a
              Canadian consumer, see the following CCB publications:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a
                  href="/resources/bidder-rights"
                  className="text-navy-600 underline hover:text-navy-800 transition-colors"
                >
                  Your Rights as an Online Auction Bidder in Canada
                </a>{" "}
                &mdash; A comprehensive overview of the legal protections
                available to auction bidders under federal and provincial law.
              </li>
              <li>
                <a
                  href="/resources/employee-self-dealing"
                  className="text-navy-600 underline hover:text-navy-800 transition-colors"
                >
                  Understanding Employee Self-Dealing in Online Auctions
                </a>{" "}
                &mdash; How auction house employees exploit insider access
                for personal gain, and what to do about it.
              </li>
              <li>
                <a
                  href="/resources/compliance-report-2025"
                  className="text-navy-600 underline hover:text-navy-800 transition-colors"
                >
                  2025-2026 Marketplace Compliance Report
                </a>{" "}
                &mdash; Annual findings on auction fraud trends, enforcement
                outcomes, and CCB recommendations.
              </li>
              <li>
                <a
                  href="/#complaint"
                  className="text-navy-600 underline hover:text-navy-800 transition-colors"
                >
                  File a Complaint with the CCB
                </a>{" "}
                &mdash; Report suspected auction fraud through our secure
                online complaint form.
              </li>
            </ul>
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
