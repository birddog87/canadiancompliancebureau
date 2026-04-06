import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { NoticeBar } from "./components/NoticeBar";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ComplaintForm } from "./components/ComplaintForm";
import { Resources } from "./components/Resources";
import { FaqSection } from "./components/FaqSection";
import { EmailCapture } from "./components/EmailCapture";
import { CtaBanner } from "./components/CtaBanner";
import { Footer } from "./components/Footer";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Canadian Compliance Bureau",
    alternateName: "CCB",
    url: "https://canadiancompliancebureau.com",
    description:
      "An independent compliance and consumer advocacy organization monitoring online auction platforms and marketplaces across Canada.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "investigations@canadiancompliancebureau.ca",
        contactType: "complaints",
        areaServed: "CA",
        availableLanguage: ["English", "French"],
      },
      {
        "@type": "ContactPoint",
        email: "director@canadiancompliancebureau.ca",
        contactType: "executive",
        areaServed: "CA",
      },
    ],
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Canadian Compliance Bureau",
    url: "https://canadiancompliancebureau.com",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Canadian Compliance Bureau?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Canadian Compliance Bureau (CCB) is an independent compliance and consumer advocacy organization that monitors online auction platforms and marketplaces across Canada. We investigate complaints about unfair practices including shill bidding, employee self-dealing, and inventory diversion.",
        },
      },
      {
        "@type": "Question",
        name: "How do I file a complaint about an online auction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can file a complaint directly through our website using the complaint form. Provide details about the platform, the type of issue (shill bidding, employee self-dealing, price manipulation, etc.), and any supporting documentation. Each complaint receives a reference number and is reviewed by our investigations team.",
        },
      },
      {
        "@type": "Question",
        name: "What is shill bidding and how do I spot it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shill bidding occurs when fake bids are placed on auction items to artificially inflate the price. Red flags include: bidders who consistently bid on the same seller's items but never win, sudden bid jumps near the end of auctions, bidder accounts with little history, and patterns of bids that always push the price just above the previous bid without significantly exceeding it.",
        },
      },
      {
        "@type": "Question",
        name: "Are online auction houses regulated in Canada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Online auction platforms in Canada are subject to the Competition Act (federal), provincial consumer protection legislation such as the Ontario Consumer Protection Act, and general commercial law. The Competition Bureau can investigate deceptive marketplace practices. Provincial consumer protection offices handle complaints about specific transactions.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after I file a complaint with the CCB?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After filing, your complaint receives a reference number and enters our review process. We assess the evidence, identify patterns across complaints, and determine whether the matter warrants a formal investigation. Substantiated cases may result in direct engagement with the platform, public advisories, or referral to regulatory authorities such as the Competition Bureau or provincial consumer protection offices.",
        },
      },
      {
        "@type": "Question",
        name: "What is employee self-dealing in online auctions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Employee self-dealing occurs when auction house employees exploit their position to purchase consigned items at below-market prices, manipulate lot assignments, suppress competitive bidding, or divert desirable inventory for personal gain. The CCB has documented a 40% increase in confirmed self-dealing cases in the Greater Toronto and Hamilton Area.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <Header />
      <Hero />
      <NoticeBar />
      <About />
      <Services />
      <ComplaintForm />
      <Resources />
      <FaqSection />
      <EmailCapture />
      <CtaBanner />
      <Footer />
    </>
  );
}
