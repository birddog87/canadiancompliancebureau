"use client";

import { useState } from "react";
import { Send, Check } from "./Icons";

const provinces = [
  "Alberta", "British Columbia", "Manitoba", "New Brunswick",
  "Newfoundland and Labrador", "Nova Scotia", "Northwest Territories",
  "Nunavut", "Ontario", "Prince Edward Island", "Quebec",
  "Saskatchewan", "Yukon",
];

const complaintTypes = [
  { value: "employee_self_dealing", label: "Employee Self-Dealing" },
  { value: "shill_bidding", label: "Shill Bidding" },
  { value: "price_manipulation", label: "Price Manipulation" },
  { value: "inventory_diversion", label: "Inventory Diversion" },
  { value: "misrepresentation", label: "Item Misrepresentation" },
  { value: "tos_violation", label: "Terms of Service Violation" },
  { value: "other", label: "Other" },
];

export function ComplaintForm() {
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `CCB-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000) + 1000}`;
    setRefNumber(ref);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };

  return (
    <section className="py-20 bg-white border-b border-warm-200" id="complaint">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-navy-500 mb-3">
          File a Complaint
        </p>
        <h2 className="font-serif text-[34px] font-bold text-navy-900 leading-tight tracking-tight mb-4">
          Report Unfair Auction Practices
        </h2>
        <p className="text-base text-warm-500 leading-relaxed max-w-[600px]">
          If you have experienced or witnessed unfair practices at a Canadian
          online auction, we want to hear from you.
        </p>

        <div className="grid lg:grid-cols-[1fr_480px] gap-15 mt-12 items-start">
          {/* Left - Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-navy-800 mb-4">
              How Our Process Works
            </h3>
            <p className="text-[15px] text-warm-500 leading-relaxed mb-6">
              Every complaint we receive is reviewed by our investigations team.
              Where patterns emerge or where evidence supports formal action, we
              initiate a structured investigation.
            </p>

            <div className="process-steps my-8">
              {[
                {
                  title: "Submit Your Complaint",
                  desc: "Provide details of the auction house, the nature of your concern, and any supporting evidence you may have.",
                },
                {
                  title: "Initial Review",
                  desc: "Our team reviews your submission for completeness and assesses whether it falls within our investigative mandate.",
                },
                {
                  title: "Investigation",
                  desc: "If warranted, we open a formal investigation, cross-referencing platform data, marketplace activity, and other complaint records.",
                },
                {
                  title: "Resolution & Action",
                  desc: "We pursue corrective action through direct engagement with the auction operator, platform notification, regulatory referral, or public reporting.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className={`process-step flex gap-4 py-4 ${
                    i < 3 ? "border-b border-warm-100" : ""
                  }`}
                >
                  <div>
                    <h4 className="text-sm font-semibold text-navy-800 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-[13px] text-warm-500 leading-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-serif text-xl font-semibold text-navy-800 mb-4 mt-8">
              What Constitutes a Valid Complaint
            </h3>
            <p className="text-[15px] text-warm-500 leading-relaxed">
              We investigate concerns including but not limited to: employee
              self-dealing, shill bidding, undisclosed item condition, bid
              manipulation, price inflation by insiders, inventory diversion
              prior to auction, and violations of platform terms of service.
            </p>
          </div>

          {/* Right - Form */}
          <div className="bg-warm-50 border border-warm-200 rounded-xl p-9">
            <h3 className="font-serif text-lg font-semibold text-navy-800 mb-1.5">
              Complaint Submission Form
            </h3>
            <p className="text-[13px] text-warm-400 mb-7 pb-5 border-b border-warm-200">
              All submissions are confidential. Fields marked with * are
              required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12.5px] font-semibold text-warm-600 tracking-wide">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12.5px] font-semibold text-warm-600 tracking-wide">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12.5px] font-semibold text-warm-600 tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(xxx) xxx-xxxx"
                    className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12.5px] font-semibold text-warm-600 tracking-wide">
                    Province <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    defaultValue="Ontario"
                    className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                  >
                    <option value="">Select province</option>
                    {provinces.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-semibold text-warm-600 tracking-wide">
                  Auction House / Platform Name{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Name of the auction house or platform"
                  className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-semibold text-warm-600 tracking-wide">
                  Platform URL
                </label>
                <input
                  type="url"
                  placeholder="https://www.example.com"
                  className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-semibold text-warm-600 tracking-wide">
                  Nature of Complaint{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                >
                  <option value="">Select complaint type</option>
                  {complaintTypes.map((ct) => (
                    <option key={ct.value} value={ct.value}>
                      {ct.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-semibold text-warm-600 tracking-wide">
                  Description of Complaint{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Please provide a detailed description of the issue, including dates, item descriptions, and any other relevant information."
                  className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all resize-y min-h-[110px] focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12.5px] font-semibold text-warm-600 tracking-wide">
                  Supporting Evidence
                </label>
                <textarea
                  rows={3}
                  placeholder="Links to relevant auction listings, marketplace profiles, screenshots, or other evidence. You may also email evidence directly to investigations@canadiancompliancebureau.ca"
                  className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all resize-y focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                />
              </div>

              <p className="text-[11.5px] text-warm-400 leading-normal pt-4 mt-4 border-t border-warm-200">
                By submitting this form, you confirm that the information
                provided is accurate to the best of your knowledge. The CCB
                treats all submissions as confidential and will not disclose your
                identity without your express consent. Ref: CCB-CP-2026
              </p>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full flex items-center justify-center gap-2 text-[15px] font-semibold text-white py-3.5 px-7 rounded-md transition-all mt-5 ${
                  submitted
                    ? "bg-green-800 cursor-default"
                    : "bg-red-600 hover:bg-red-700 shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
                }`}
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    Complaint Submitted &mdash; Reference: {refNumber}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Complaint
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
