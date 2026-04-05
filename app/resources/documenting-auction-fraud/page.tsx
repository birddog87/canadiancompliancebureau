import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Document Auction Fraud for a Legal Complaint",
  description:
    "A practical guide to collecting, organizing, and preserving evidence of online auction fraud for complaints to consumer protection authorities, law enforcement, or court proceedings in Canada.",
  openGraph: {
    type: "article",
    title: "How to Document Auction Fraud for a Legal Complaint",
    description:
      "A practical guide to collecting, organizing, and preserving evidence of online auction fraud for complaints to consumer protection authorities, law enforcement, or court proceedings in Canada.",
    url: "https://canadiancompliancebureau.com/resources/documenting-auction-fraud",
    publishedTime: "2025-10-18T00:00:00Z",
    authors: ["CCB Research Division"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Document Auction Fraud for a Legal Complaint",
    description:
      "A practical guide to collecting, organizing, and preserving evidence of online auction fraud for complaints to consumer protection authorities, law enforcement, or court proceedings in Canada.",
  },
  alternates: {
    canonical:
      "https://canadiancompliancebureau.com/resources/documenting-auction-fraud",
  },
};

export default function DocumentingAuctionFraud() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Document Auction Fraud for a Legal Complaint",
    datePublished: "2025-10-18",
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
      "A practical guide to collecting, organizing, and preserving evidence of online auction fraud for complaints to consumer protection authorities, law enforcement, or court proceedings in Canada.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://canadiancompliancebureau.com/resources/documenting-auction-fraud",
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
        name: "Documenting Auction Fraud",
        item: "https://canadiancompliancebureau.com/resources/documenting-auction-fraud",
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
              <span className="text-warm-600">Documenting Auction Fraud</span>
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
              How to Document Auction Fraud for a Legal Complaint
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-warm-400">
              <span>Published October 18, 2025</span>
              <span className="hidden sm:inline">|</span>
              <span>CCB Research Division</span>
            </div>
          </div>

          <div className="w-12 h-px bg-navy-200 mb-10" />

          {/* Body */}
          <div className="prose-custom space-y-6 text-[15.5px] leading-[1.78] text-warm-700">
            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Why Documentation Matters
            </h2>
            <p>
              The single most common reason that auction fraud complaints fail
              to result in enforcement action is insufficient documentation.
              Consumer protection agencies, law enforcement, and courts all
              require clear, well-organized evidence before they can act on a
              complaint. When a victim contacts the Canadian Compliance Bureau
              with a general description of what happened but no supporting
              records, the complaint is difficult to investigate and nearly
              impossible to escalate to regulatory or legal proceedings.
            </p>
            <p>
              Conversely, complaints that arrive with a chronological timeline,
              screenshots, payment records, and preserved communications are
              far more likely to be taken seriously and to result in meaningful
              outcomes. In the CCB&apos;s experience, well-documented
              complaints are approximately three times more likely to result in
              an enforcement referral than complaints with minimal supporting
              evidence. This guide explains exactly what evidence to collect,
              how to preserve it, and how to organize it into a package that
              consumer protection authorities, police, and courts can use.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              What Constitutes Evidence of Auction Fraud?
            </h2>
            <p>
              Evidence of auction fraud falls into several categories, each of
              which serves a different purpose in building a case. At the
              highest level, you need to establish three things: that you
              entered into a transaction based on certain representations; that
              those representations were false or misleading; and that you
              suffered a financial loss as a result.
            </p>
            <p>
              The types of evidence that support these elements include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Listing evidence:</strong> The original auction
                listing, including all photographs, descriptions, condition
                reports, and stated terms. This establishes what was
                represented to you.
              </li>
              <li>
                <strong>Transaction evidence:</strong> Payment confirmations,
                invoices, receipts, and shipping records. This establishes
                that a transaction occurred and what you paid.
              </li>
              <li>
                <strong>Discrepancy evidence:</strong> Photographs of the item
                as received, independent appraisals, expert opinions, or other
                documentation showing that what you received differs materially
                from what was represented. This establishes the fraud.
              </li>
              <li>
                <strong>Communication evidence:</strong> All messages between
                you and the seller or auction house, including emails, chat
                logs, text messages, and notes from phone calls. This
                establishes the context and any admissions or contradictions.
              </li>
              <li>
                <strong>Pattern evidence:</strong> Records showing that the
                same seller or auction house has engaged in similar conduct
                with other buyers. This strengthens the case that the conduct
                was intentional rather than an honest mistake.
              </li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Digital Evidence: What to Capture
            </h2>
            <p>
              Most online auction fraud leaves a digital trail, but that trail
              can disappear quickly. Auction listings are taken down after they
              close. Seller profiles are deleted. Platform pages are updated.
              If you suspect fraud, you should begin capturing digital evidence
              immediately, before anything changes or is removed.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Screenshots
            </h3>
            <p>
              Screenshots are your most basic and most important tool. For
              every piece of digital evidence, take a full-page screenshot
              that includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The complete URL visible in the browser address bar
              </li>
              <li>
                The date and time (visible on your device&apos;s clock or
                status bar)
              </li>
              <li>
                The full content of the page, scrolling down to capture
                everything if the page is longer than one screen
              </li>
            </ul>
            <p>
              On Windows, use the Snipping Tool in full-screen mode or press
              Windows+Shift+S to capture the entire screen. On Mac, press
              Command+Shift+3 for a full screen capture. On mobile devices,
              use the built-in screenshot function. Save all screenshots with
              descriptive file names that include the date, such as{" "}
              <code className="bg-warm-100 px-1.5 py-0.5 rounded text-sm">
                2025-10-15_auction-listing-lot-247.png
              </code>
              .
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              URLs and Timestamps
            </h3>
            <p>
              Record the exact URL of every relevant page. Do not rely on
              shortened URLs or links from email notifications, as these may
              redirect and the original page content may change. Copy the full
              URL from your browser&apos;s address bar and paste it into a
              text document alongside the date and time you accessed the page.
              If the auction platform shows bid histories with timestamps,
              capture those as well. Bid timestamps can be critical for
              demonstrating shill bidding patterns.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Bid Histories
            </h3>
            <p>
              Many auction platforms display the bid history for each lot,
              showing the bidder username, bid amount, and timestamp for each
              bid. This information is invaluable for identifying shill bidding
              patterns, such as bids placed by the same user across multiple
              lots at suspicious intervals, or bids that always appear just
              below the winning bid to drive up the final price. Screenshot
              the complete bid history for any lot involved in your complaint.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Cached Pages
            </h3>
            <p>
              If a listing or seller profile has already been removed by the
              time you begin documenting, you may be able to retrieve it from
              Google&apos;s cache or from the Wayback Machine at{" "}
              <code className="bg-warm-100 px-1.5 py-0.5 rounded text-sm">
                web.archive.org
              </code>
              . Search for the original URL in Google and click the cached
              version link if available. On the Wayback Machine, paste the URL
              into the search bar to see if any snapshots were captured. Save
              and screenshot whatever you find, noting that it is a cached
              copy and recording the cache date.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Financial Records: Building Your Paper Trail
            </h2>
            <p>
              Financial records are the foundation of any fraud complaint
              because they prove that money changed hands and establish the
              amount of your loss. Collect and organize the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Payment confirmation:</strong> The receipt or
                confirmation page from the auction platform showing the amount
                paid, the date, and the payment method. Screenshot this
                immediately after payment.
              </li>
              <li>
                <strong>Credit card or bank statement:</strong> The line item
                on your credit card or bank statement showing the charge. This
                provides independent verification of the payment amount and
                date. Highlight the relevant transaction and redact unrelated
                personal information.
              </li>
              <li>
                <strong>Invoices:</strong> Any invoice issued by the auction
                house, including the buyer&apos;s premium, taxes, and shipping
                charges. These often contain the auction house&apos;s legal
                name and business number, which are useful for regulatory
                complaints.
              </li>
              <li>
                <strong>E-transfer or wire transfer confirmations:</strong> If
                you paid by Interac e-Transfer, save the confirmation email
                and the transaction details from your online banking portal.
                For wire transfers, retain the wire transfer receipt from your
                bank, which will include the receiving account information.
              </li>
              <li>
                <strong>Shipping receipts:</strong> If you paid for shipping,
                retain the receipt and tracking number. If the item was not
                delivered, the tracking information will demonstrate
                non-delivery. If the item was delivered but was not as
                described, the shipping receipt establishes the timeline.
              </li>
              <li>
                <strong>Refund request records:</strong> If you requested a
                refund and were denied, document the request and the denial.
                This is relevant to complaints about auction houses that refuse
                to honour their own return policies. For guidance on refund
                processes, see our{" "}
                <a
                  href="/resources/auction-house-refund-guide"
                  className="text-navy-600 underline hover:text-navy-800 transition-colors"
                >
                  auction house refund guide
                </a>
                .
              </li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Communication Records
            </h2>
            <p>
              Every communication between you and the seller or auction house
              is potentially relevant evidence. The key principle is to
              preserve communications in their original format whenever
              possible, rather than summarizing or paraphrasing them.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Emails
            </h3>
            <p>
              Do not delete any emails related to the transaction, even if
              they seem unimportant. Forward a copy of each relevant email to
              a dedicated email folder or to a separate email address that
              you control. If you need to submit emails as evidence, export
              them as PDF files or EML files from your email client. PDF
              exports preserve the formatting and headers, including the
              sender address, recipient address, date, and subject line.
              Forwarded copies may have altered header information and are
              generally less authoritative as evidence.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Chat Logs and Platform Messages
            </h3>
            <p>
              If you communicated with the seller through the auction
              platform&apos;s messaging system, screenshot the entire
              conversation thread. Make sure the screenshots show the
              platform interface, the usernames of both parties, and the
              timestamps of each message. If the platform allows you to
              export the conversation, do so. Be aware that sellers who
              are planning to commit fraud may delete their accounts, which
              can cause message histories to disappear. Screenshot early.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Phone Call Notes
            </h3>
            <p>
              If you spoke with the seller or auction house by phone, create
              a written record of the call as soon as it ends. Include the
              date and time of the call, the phone number you called or that
              called you, the name of the person you spoke with, and a
              summary of what was discussed. Note any specific promises,
              admissions, or statements that contradict the auction listing.
              While phone call notes are not as strong as written
              communications, they can provide useful context and corroborate
              other evidence.
            </p>
            <p>
              Note: In Canada, it is legal to record a phone call if at least
              one party to the call consents to the recording (one-party
              consent). If you anticipate that a phone call may produce
              important evidence, you may record it. However, recording laws
              differ in some contexts and it is advisable to consult legal
              counsel if you are uncertain.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              How to Preserve Digital Evidence
            </h2>
            <p>
              Collecting evidence is only useful if it is preserved in a way
              that maintains its integrity and credibility. Digital evidence
              can be easily altered, and any suggestion that evidence has been
              tampered with can undermine your complaint. The following
              preservation methods are recommended.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Web Archives
            </h3>
            <p>
              Submit important web pages to the Wayback Machine at{" "}
              <code className="bg-warm-100 px-1.5 py-0.5 rounded text-sm">
                web.archive.org/save
              </code>{" "}
              as soon as possible. The Wayback Machine creates an independent,
              timestamped snapshot of the page that is hosted by a third party
              (the Internet Archive). This is significantly more credible than
              a personal screenshot because it cannot be edited after the fact.
              The archived URL serves as a permanent, verifiable reference
              that you can include in your complaint.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Notarized Screenshots
            </h3>
            <p>
              For high-value disputes or cases you anticipate may proceed to
              court, consider having your screenshots and evidence package
              notarized. A notary public can certify that a document existed
              in a particular form on a specific date. Some online services
              now offer digital notarization for screenshots and web pages.
              While notarization is not required for regulatory complaints,
              it strengthens the evidentiary value of your documentation
              considerably if the matter proceeds to litigation.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Metadata Preservation
            </h3>
            <p>
              Digital files contain metadata that records when they were
              created, modified, and by whom. When saving screenshots and
              documents, avoid editing or resaving them in ways that alter
              the original metadata. Store evidence files in a dedicated
              folder that you do not modify. If you need to annotate a
              screenshot (for example, to highlight a relevant section),
              create a copy and annotate the copy, preserving the original
              unchanged. The original file&apos;s creation date metadata
              can help establish when the evidence was captured.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Organizing Your Evidence Package
            </h2>
            <p>
              A well-organized evidence package makes the difference between
              a complaint that gets acted on and one that sits in a queue.
              Investigators and adjudicators review hundreds of complaints;
              making yours easy to understand and navigate significantly
              increases its chances of receiving attention.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Chronological Timeline
            </h3>
            <p>
              Start with a chronological timeline of events, beginning from
              the date you first encountered the auction listing through to
              the present. Each entry should include the date, a brief
              description of what happened, and a reference to the supporting
              evidence (for example, &quot;See Exhibit A: screenshot of
              original listing&quot;). The timeline should be factual and
              dispassionate. Avoid editorializing or expressing anger. Focus
              on what happened and when.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Summary Document
            </h3>
            <p>
              Write a one- to two-page summary document that explains the
              situation in plain language. This summary should answer the
              following questions: Who is the seller or auction house? What
              did you purchase and for how much? What was represented to you?
              What did you actually receive (or not receive)? What steps
              have you taken to resolve the issue directly? What outcome are
              you seeking? The summary document serves as the cover page for
              your evidence package and is often the first (and sometimes
              only) thing that a reviewer reads carefully.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Supporting Exhibits
            </h3>
            <p>
              Organize your evidence into numbered exhibits, referenced in
              both the timeline and the summary document. A typical evidence
              package might include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Exhibit A: Original auction listing (screenshots)</li>
              <li>Exhibit B: Bid history (screenshots)</li>
              <li>Exhibit C: Payment confirmation and invoice</li>
              <li>
                Exhibit D: Photographs of item as received (if applicable)
              </li>
              <li>Exhibit E: Communication records (emails, messages)</li>
              <li>Exhibit F: Refund request and denial</li>
              <li>Exhibit G: Independent appraisal or expert opinion</li>
              <li>
                Exhibit H: Archived web pages (Wayback Machine URLs)
              </li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Template: Fraud Complaint Summary Document
            </h2>
            <p>
              Use the following template as a starting point for your
              complaint summary. Fill in the bracketed fields with your
              specific information.
            </p>

            <div className="bg-warm-50 border border-warm-200 rounded-lg p-6 my-6 text-sm leading-relaxed">
              <p className="font-semibold text-navy-800 mb-4">
                AUCTION FRAUD COMPLAINT SUMMARY
              </p>
              <p className="mb-3">
                <strong>Date of complaint:</strong> [Date]
              </p>
              <p className="mb-3">
                <strong>Complainant name:</strong> [Your full legal name]
              </p>
              <p className="mb-3">
                <strong>Complainant contact:</strong> [Email, phone number,
                mailing address]
              </p>
              <p className="mb-3">
                <strong>Subject of complaint:</strong> [Name of auction house
                or seller]
              </p>
              <p className="mb-3">
                <strong>Platform:</strong> [Name of the auction platform where
                the transaction occurred]
              </p>
              <p className="mb-3">
                <strong>Date of auction:</strong> [Date the auction closed]
              </p>
              <p className="mb-3">
                <strong>Lot number(s):</strong> [If applicable]
              </p>
              <p className="mb-3">
                <strong>Item description:</strong> [Brief description of what
                was purchased]
              </p>
              <p className="mb-3">
                <strong>Amount paid:</strong> [$X.XX, including buyer&apos;s
                premium, taxes, and shipping]
              </p>
              <p className="mb-3">
                <strong>Payment method:</strong> [Credit card, e-transfer,
                etc.]
              </p>
              <p className="mb-3">
                <strong>Nature of fraud:</strong> [Non-delivery /
                Misrepresentation / Shill bidding / Undisclosed fees / Other]
              </p>
              <p className="mb-4">
                <strong>Summary of events:</strong>
              </p>
              <p className="mb-3 pl-4 border-l-2 border-warm-300">
                [Describe in 2-4 paragraphs what happened, in chronological
                order. Include key dates and reference your supporting
                exhibits. Example: &quot;On [date], I placed a bid on
                [item] listed as [description] on [platform]. The listing
                stated [specific representation]. I won the auction at a
                final price of [$amount] and paid via [method] on [date].
                The item was delivered on [date]. Upon inspection, I
                discovered [specific discrepancy]. See Exhibit D for
                photographs. I contacted the auction house on [date] to
                request [resolution]. See Exhibit E for email
                correspondence. The auction house responded on [date]
                stating [response]. No resolution has been reached.&quot;]
              </p>
              <p className="mb-3">
                <strong>Resolution sought:</strong> [Full refund / Partial
                refund / Replacement / Investigation and enforcement action]
              </p>
              <p className="mb-3">
                <strong>Supporting exhibits attached:</strong> [List your
                exhibits A through H or as applicable]
              </p>
              <p>
                <strong>Other agencies notified:</strong> [List any other
                agencies you have contacted, such as the Competition Bureau,
                provincial consumer protection, or police]
              </p>
            </div>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              What NOT to Do
            </h2>
            <p>
              When you discover that you may have been the victim of auction
              fraud, it is natural to feel angry and to want to take immediate
              action. However, several common reactions can actually harm your
              case. Avoid the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Do not confront the seller directly.</strong> Angry
                messages, threats, or public accusations can give the seller
                grounds to block you, delete your communications, or claim
                harassment. Keep all communications professional, factual,
                and focused on resolution. If you do contact the seller,
                do so in writing (not by phone) so that there is a record.
              </li>
              <li>
                <strong>Do not delete anything.</strong> Even if a
                communication seems irrelevant or embarrassing, do not delete
                it. Investigators may find significance in details that you
                overlooked. Deleting evidence, even selectively, can raise
                questions about the completeness of your documentation.
              </li>
              <li>
                <strong>Do not wait too long.</strong> Digital evidence
                disappears quickly. Auction listings are taken down. Seller
                accounts are deleted. Platform policies on data retention vary,
                but most do not retain detailed transaction records
                indefinitely. Begin documenting as soon as you suspect
                something is wrong, even if you are not yet certain that
                fraud has occurred. It is far better to have documentation
                you do not need than to need documentation you do not have.
              </li>
              <li>
                <strong>Do not edit or alter evidence.</strong> If you need
                to highlight something in a screenshot, annotate a copy and
                keep the original unchanged. Submitting altered evidence,
                even if the alteration is innocent (such as cropping), can
                raise credibility concerns.
              </li>
              <li>
                <strong>Do not post about the fraud on social media.</strong>{" "}
                While it may feel satisfying to warn others publicly, social
                media posts can compromise an investigation, expose you to
                defamation claims if your allegations are not proven, and
                alert the fraudster to the fact that a complaint is being
                prepared. Consult with the investigating authority before
                making any public statements.
              </li>
              <li>
                <strong>
                  Do not accept a partial resolution without documenting
                  it.
                </strong>{" "}
                If the seller offers a partial refund or replacement, get the
                offer in writing and document your acceptance or rejection.
                Verbal agreements are difficult to enforce if the seller later
                reneges.
              </li>
            </ul>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Submitting Your Evidence
            </h2>
            <p>
              Once your evidence package is organized, you are ready to submit
              it to the appropriate authorities. Depending on the nature and
              severity of the fraud, you may wish to file with one or more of
              the following bodies.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Canadian Compliance Bureau
            </h3>
            <p>
              The CCB accepts complaints related to all forms of online auction
              fraud in Canada. You can submit your complaint and evidence
              package through our{" "}
              <a
                href="/#complaint"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                secure complaint form
              </a>
              . The CCB reviews all complaints, maintains a database for
              pattern analysis, and refers cases to the appropriate regulatory
              or law enforcement agencies where warranted. For a complete
              walkthrough of the reporting process, see our guide on{" "}
              <a
                href="/resources/how-to-report-auction-fraud"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                how to report auction fraud in Canada
              </a>
              .
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Competition Bureau of Canada
            </h3>
            <p>
              The Competition Bureau investigates deceptive marketing practices
              under the <em>Competition Act</em>, which includes false or
              misleading representations in auction listings. Complaints can
              be filed online through the Bureau&apos;s website. The Bureau
              prioritizes cases that involve multiple victims, significant
              financial losses, or systemic patterns of fraud. Including your
              organized evidence package with your complaint significantly
              increases the likelihood of investigative action.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Provincial Consumer Protection Authorities
            </h3>
            <p>
              Each province maintains a consumer protection agency that handles
              complaints about businesses operating within its jurisdiction. In
              Ontario, complaints are handled by the Ministry of Public and
              Business Service Delivery. In British Columbia, contact Consumer
              Protection BC. In Alberta, contact Service Alberta. File your
              complaint in the province where the auction house is based, not
              necessarily the province where you live. For more on your
              provincial rights, see our{" "}
              <a
                href="/resources/bidder-rights"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                guide to bidder rights in Canada
              </a>
              .
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Local Police
            </h3>
            <p>
              If the fraud involves theft (non-delivery after payment),
              forgery (fabricated provenance documents), or identity fraud
              (seller operating under a false identity), you should also
              file a report with your local police service. Many police
              services now accept online reports for fraud under a certain
              dollar threshold. For larger amounts, attend your local police
              station in person with a printed copy of your evidence package.
              Obtain a file number, which you can reference in complaints
              to other agencies.
            </p>

            <h2 className="font-serif text-xl font-bold text-navy-800 pt-4">
              Evidence Standards for Small Claims Court vs. Criminal
              Complaints
            </h2>
            <p>
              The type of evidence you need and the standard to which it
              will be held depends on the forum in which you pursue your
              complaint. Understanding these differences will help you
              prepare appropriately.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Small Claims Court
            </h3>
            <p>
              Small claims court operates on a &quot;balance of
              probabilities&quot; standard, meaning you need to show that it
              is more likely than not that the fraud occurred. The monetary
              limit varies by province: $35,000 in Ontario, $35,000 in
              British Columbia, and $50,000 in Alberta. Small claims court
              is designed to be accessible to self-represented litigants,
              and the rules of evidence are relaxed compared to higher
              courts. Screenshots, printed emails, and personal testimony
              are generally admissible. However, the more organized and
              professional your evidence package, the more credible your
              case will appear to the adjudicator.
            </p>
            <p>
              Key requirements for small claims court include: proof of the
              transaction (payment records), proof of the representation
              (listing screenshots), proof of the discrepancy (photographs,
              expert opinion), and proof that you attempted to resolve the
              matter directly (communication records). Your chronological
              timeline and summary document serve as your statement of claim.
            </p>

            <h3 className="font-serif text-lg font-semibold text-navy-700 pt-2">
              Criminal Complaints
            </h3>
            <p>
              Criminal fraud charges require proof &quot;beyond a reasonable
              doubt,&quot; which is a significantly higher standard. Criminal
              investigations are conducted by police and prosecuted by Crown
              attorneys. Your role as the complainant is to provide the
              initial evidence that triggers the investigation. The strength
              and organization of your evidence package directly affects
              whether police will devote investigative resources to your case.
            </p>
            <p>
              For criminal complaints, evidence preservation is particularly
              important. The chain of custody matters: investigators need to
              be confident that the evidence has not been altered. Original
              files with intact metadata, Wayback Machine archives, and
              notarized screenshots carry more weight than edited or
              re-saved documents. If the amount of the fraud exceeds $5,000,
              the offence is an indictable crime under Section 380 of the{" "}
              <em>Criminal Code</em>, which carries more serious penalties
              and is more likely to attract investigative attention.
            </p>
            <p>
              Regardless of the forum you choose, thorough documentation
              is the foundation of an effective complaint. The time you invest
              in collecting, preserving, and organizing your evidence directly
              correlates with the likelihood of a favourable outcome. If you
              need assistance preparing your complaint, the CCB is available
              to provide guidance through our{" "}
              <a
                href="/#complaint"
                className="text-navy-600 underline hover:text-navy-800 transition-colors"
              >
                complaint intake process
              </a>
              .
            </p>

            {/* Related Resources */}
            <div className="mt-10 pt-8 border-t border-warm-200">
              <h2 className="font-serif text-xl font-bold text-navy-800 mb-4">
                Related Resources
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    href="/resources/how-to-report-auction-fraud"
                    className="text-navy-600 underline hover:text-navy-800 transition-colors"
                  >
                    How to Report Auction Fraud in Canada
                  </a>
                </li>
                <li>
                  <a
                    href="/resources/auction-house-refund-guide"
                    className="text-navy-600 underline hover:text-navy-800 transition-colors"
                  >
                    Auction House Refund Guide
                  </a>
                </li>
                <li>
                  <a
                    href="/resources/bidder-rights"
                    className="text-navy-600 underline hover:text-navy-800 transition-colors"
                  >
                    Your Rights as an Online Auction Bidder in Canada
                  </a>
                </li>
              </ul>
            </div>
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
