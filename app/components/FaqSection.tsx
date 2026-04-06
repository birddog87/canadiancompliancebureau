"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the Canadian Compliance Bureau?",
    answer:
      "The Canadian Compliance Bureau (CCB) is an independent compliance and consumer advocacy organization that monitors online auction platforms and marketplaces across Canada. We investigate complaints about unfair practices including shill bidding, employee self-dealing, and inventory diversion.",
  },
  {
    question: "How do I file a complaint about an online auction?",
    answer:
      "You can file a complaint directly through our website using the complaint form above. Provide details about the platform, the type of issue, and any supporting documentation. Each complaint receives a reference number and is reviewed by our investigations team.",
  },
  {
    question: "What is shill bidding and how do I spot it?",
    answer:
      "Shill bidding occurs when fake bids are placed on auction items to artificially inflate the price. Red flags include: bidders who consistently bid on the same seller's items but never win, sudden bid jumps near the end of auctions, bidder accounts with little history, and patterns of bids that always push the price just above the previous bid.",
  },
  {
    question: "Are online auction houses regulated in Canada?",
    answer:
      "Yes. Online auction platforms in Canada are subject to the Competition Act (federal), provincial consumer protection legislation such as the Ontario Consumer Protection Act, and general commercial law. The Competition Bureau can investigate deceptive marketplace practices.",
  },
  {
    question: "What happens after I file a complaint?",
    answer:
      "After filing, your complaint receives a reference number and enters our review process. We assess the evidence, identify patterns across complaints, and determine whether the matter warrants a formal investigation. Substantiated cases may result in direct engagement with the platform, public advisories, or referral to regulatory authorities.",
  },
  {
    question: "What is employee self-dealing in online auctions?",
    answer:
      "Employee self-dealing occurs when auction house employees exploit their position to purchase consigned items at below-market prices, manipulate lot assignments, suppress competitive bidding, or divert desirable inventory for personal gain. The CCB has documented a 40% increase in confirmed self-dealing cases in the Greater Toronto and Hamilton Area.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-warm-50 py-16 md:py-20" id="faq">
      <div className="max-w-[760px] mx-auto px-6">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-800 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-warm-500 text-sm mb-10">
          Common questions about auction compliance, your rights, and our
          investigation process.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-warm-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-warm-50 transition-colors"
              >
                <span className="font-medium text-navy-800 text-[15px]">
                  {faq.question}
                </span>
                <span className="text-navy-400 text-lg flex-shrink-0" aria-hidden="true">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className="px-5 pb-4 text-warm-600 text-[14.5px] leading-relaxed border-t border-warm-100 pt-3"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
