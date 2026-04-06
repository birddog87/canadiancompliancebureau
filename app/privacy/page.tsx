import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "The Canadian Compliance Bureau's privacy policy — how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://canadiancompliancebureau.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-warm-50 border-b border-warm-200">
          <div className="max-w-[760px] mx-auto px-6 py-3">
            <nav className="text-xs text-warm-400 flex items-center gap-1.5">
              <a href="/" className="text-warm-400 no-underline hover:text-navy-600 transition-colors">Home</a>
              <span>/</span>
              <span className="text-navy-600">Privacy Policy</span>
            </nav>
          </div>
        </div>

        <article className="max-w-[760px] mx-auto px-6 py-12 md:py-16">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-warm-500 text-sm mb-10">
            Last updated: April 5, 2026
          </p>

          <div className="prose prose-warm max-w-none text-warm-700 leading-relaxed space-y-6">
            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              Overview
            </h2>
            <p>
              The Canadian Compliance Bureau (&quot;CCB,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              is committed to protecting the privacy of individuals who visit our website at
              canadiancompliancebureau.com and use our services. This Privacy Policy explains what
              information we collect, how we use it, and your rights regarding your personal information.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              Information We Collect
            </h2>
            <h3 className="font-serif text-xl font-semibold text-navy-700 mt-8 mb-3">
              Complaint Form Submissions
            </h3>
            <p>When you submit a complaint through our website, we collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your full name</li>
              <li>Email address</li>
              <li>Phone number (optional)</li>
              <li>Province or territory of residence</li>
              <li>The name and URL of the auction house or platform</li>
              <li>The nature and description of your complaint</li>
              <li>Any supporting evidence you provide</li>
            </ul>

            <h3 className="font-serif text-xl font-semibold text-navy-700 mt-8 mb-3">
              Email Subscriptions
            </h3>
            <p>
              When you subscribe to our updates, we collect your email address. We use this solely to
              send you information about enforcement actions, regulatory changes, and consumer protection
              developments related to Canadian auction markets.
            </p>

            <h3 className="font-serif text-xl font-semibold text-navy-700 mt-8 mb-3">
              Automatically Collected Information
            </h3>
            <p>
              We use Google Analytics 4 to understand how visitors use our website. Google Analytics
              collects information such as pages visited, time spent on pages, and how you arrived
              at our site. This service uses cookies (small text files stored on your device) to
              distinguish between visitors. The cookies used include <code>_ga</code> and{" "}
              <code>_ga_*</code>, which expire after 2 years and 24 hours respectively.
            </p>
            <p>
              Google Analytics data is aggregated and anonymized. We do not use this data to
              identify individual visitors. You can opt out of Google Analytics by installing
              the Google Analytics Opt-out Browser Add-on. Basic server logs maintained by
              our hosting provider (Vercel) may also record your IP address, browser type,
              and pages visited.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Review and investigate complaints about auction platform practices</li>
              <li>Identify patterns of misconduct across platforms and operators</li>
              <li>Prepare reports and advisories for public benefit</li>
              <li>Refer substantiated complaints to regulatory authorities when appropriate</li>
              <li>Send you updates if you have subscribed to our mailing list</li>
              <li>Respond to your inquiries</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              How We Protect Your Information
            </h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access,
              disclosure, alteration, or destruction. Complaint submissions are treated as confidential.
              We will not disclose your identity to the auction house or platform that is the subject of
              your complaint without your express consent, unless required by law.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              Information Sharing
            </h2>
            <p>We do not sell, rent, or trade your personal information. We may share your information in the following limited circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Regulatory referrals:</strong> With your consent, we may share complaint details with regulatory authorities such as the Competition Bureau of Canada or provincial consumer protection offices.</li>
              <li><strong>Legal requirements:</strong> We may disclose information if required by law, court order, or government regulation.</li>
              <li><strong>Aggregated data:</strong> We may publish aggregated, anonymized data about complaint trends and patterns. This data does not identify individual complainants.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              Data Retention
            </h2>
            <p>
              We retain complaint data for as long as necessary to fulfill the purposes described in this
              policy, including ongoing pattern analysis and regulatory referrals. Email subscription data
              is retained until you unsubscribe.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              Your Rights
            </h2>
            <p>Under Canadian privacy law, including the Personal Information Protection and Electronic Documents Act (PIPEDA), you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw your consent to the collection or use of your information</li>
              <li>Unsubscribe from our mailing list at any time</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:director@canadiancompliancebureau.ca" className="text-navy-600 underline hover:text-navy-800">
                director@canadiancompliancebureau.ca
              </a>.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              Third-Party Services
            </h2>
            <p>
              Our website is hosted on Vercel. Complaint form submissions are processed through
              FormSubmit. Email subscription data is stored in Supabase. These services may process your
              data in accordance with their own privacy policies.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated revision date. Your continued use of our website after changes are posted
              constitutes acceptance of the revised policy.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, contact us at:{" "}
              <a href="mailto:director@canadiancompliancebureau.ca" className="text-navy-600 underline hover:text-navy-800">
                director@canadiancompliancebureau.ca
              </a>
            </p>
          </div>

          <div className="mt-12">
            <a href="/" className="text-sm text-warm-400 no-underline hover:text-navy-600 transition-colors">
              &larr; Back to Home
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
