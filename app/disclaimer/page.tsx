import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Legal disclaimer for the Canadian Compliance Bureau website — limitations of information provided and scope of services.",
  alternates: {
    canonical: "https://canadiancompliancebureau.com/disclaimer",
  },
};

export default function Disclaimer() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-warm-50 border-b border-warm-200">
          <div className="max-w-[760px] mx-auto px-6 py-3">
            <nav className="text-xs text-warm-400 flex items-center gap-1.5">
              <a href="/" className="text-warm-400 no-underline hover:text-navy-600 transition-colors">Home</a>
              <span>/</span>
              <span className="text-navy-600">Disclaimer</span>
            </nav>
          </div>
        </div>

        <article className="max-w-[760px] mx-auto px-6 py-12 md:py-16">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-800 leading-tight mb-4">
            Disclaimer
          </h1>
          <p className="text-warm-500 text-sm mb-10">
            Last updated: April 5, 2026
          </p>

          <div className="prose prose-warm max-w-none text-warm-700 leading-relaxed space-y-6">
            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              Not Legal Advice
            </h2>
            <p>
              The information provided on this website is for general informational and educational
              purposes only. It does not constitute legal advice, and should not be relied upon as a
              substitute for professional legal counsel. The Canadian Compliance Bureau is not a law
              firm and does not provide legal representation.
            </p>
            <p>
              If you require legal advice regarding a specific situation involving online auction fraud,
              consumer protection, or any other legal matter, you should consult with a qualified lawyer
              licensed to practise in your jurisdiction.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              Not a Government Agency
            </h2>
            <p>
              The Canadian Compliance Bureau is an independent compliance and consumer advocacy
              organization. We are not a government agency, regulatory body, or law enforcement
              organization. We do not have the authority to impose fines, issue orders, or prosecute
              violations of law.
            </p>
            <p>
              Where our investigations identify conduct that may violate federal or provincial
              legislation, we may refer matters to the appropriate regulatory authorities, including
              the Competition Bureau of Canada and provincial consumer protection offices.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              Accuracy of Information
            </h2>
            <p>
              We make reasonable efforts to ensure the accuracy of the information published on this
              website, including references to legislation, regulatory processes, and complaint
              procedures. However, laws and regulations change, and we cannot guarantee that all
              information is current at the time you read it.
            </p>
            <p>
              References to specific legislation (such as the Competition Act, the Ontario Consumer
              Protection Act, or other provincial statutes) are provided for informational purposes.
              For the authoritative text of any statute, consult the official government source or a
              qualified legal professional.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              Complaint Outcomes
            </h2>
            <p>
              Filing a complaint with the CCB does not guarantee any specific outcome, including
              investigation, enforcement action, or financial recovery. The CCB reviews all complaints
              and exercises discretion in determining which matters to investigate and which to refer
              to regulatory authorities.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              External Links
            </h2>
            <p>
              This website may contain links to external websites operated by third parties, including
              government agencies, legal resources, and news organizations. We do not control these
              websites and are not responsible for their content, privacy practices, or availability.
              Inclusion of a link does not imply endorsement.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, the Canadian Compliance Bureau, its officers,
              directors, employees, and agents shall not be liable for any direct, indirect,
              incidental, consequential, or punitive damages arising from your use of this website,
              reliance on information provided herein, or any action taken based on the content of
              this website.
            </p>

            <h2 className="font-serif text-2xl font-bold text-navy-800 mt-10 mb-4">
              Contact
            </h2>
            <p>
              If you have questions about this disclaimer, contact us at:{" "}
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
