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

const FORM_URL = "https://formsubmit.co/ajax/nicholas.hammond0@gmail.com";

export function ComplaintForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [refNumber, setRefNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const ref = `CCB-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000) + 1000}`;
    formData.append("_reference", ref);

    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setRefNumber(ref);
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          form.reset();
        }, 5000);
      } else {
        setError("Submission failed. Please email investigations@canadiancompliancebureau.ca directly.");
      }
    } catch {
      setError("Network error. Please email investigations@canadiancompliancebureau.ca directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white border-b border-warm-200" id="complaint">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-serif text-[34px] font-bold text-navy-900 leading-tight tracking-tight mb-3">
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
                  <label htmlFor="complaint-name" className="text-xs font-semibold text-warm-600 tracking-wide">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="complaint-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="complaint-email" className="text-xs font-semibold text-warm-600 tracking-wide">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="complaint-email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="complaint-phone" className="text-xs font-semibold text-warm-600 tracking-wide">
                    Phone Number
                  </label>
                  <input
                    id="complaint-phone"
                    type="tel"
                    name="phone"
                    placeholder="(xxx) xxx-xxxx"
                    className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="complaint-province" className="text-xs font-semibold text-warm-600 tracking-wide">
                    Province <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="complaint-province"
                    name="province"
                    required
                    defaultValue=""
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
                <label htmlFor="complaint-auction-house" className="text-xs font-semibold text-warm-600 tracking-wide">
                  Auction House / Platform Name{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="complaint-auction-house"
                  type="text"
                  name="auction_house"
                  required
                  placeholder="Name of the auction house or platform"
                  className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="complaint-url" className="text-xs font-semibold text-warm-600 tracking-wide">
                  Platform URL
                </label>
                <input
                  id="complaint-url"
                  type="url"
                  name="platform_url"
                  placeholder="https://www.example.com"
                  className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="complaint-type" className="text-xs font-semibold text-warm-600 tracking-wide">
                  Nature of Complaint{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="complaint-type"
                  name="complaint_type"
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
                <label htmlFor="complaint-description" className="text-xs font-semibold text-warm-600 tracking-wide">
                  Description of Complaint{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="complaint-description"
                  name="description"
                  required
                  rows={4}
                  placeholder="Please provide a detailed description of the issue, including dates, item descriptions, and any other relevant information."
                  className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all resize-y min-h-[110px] focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="complaint-evidence" className="text-xs font-semibold text-warm-600 tracking-wide">
                  Supporting Evidence
                </label>
                <textarea
                  id="complaint-evidence"
                  name="evidence"
                  rows={3}
                  placeholder="Links to relevant auction listings, marketplace profiles, screenshots, or other evidence. You may also email evidence directly to investigations@canadiancompliancebureau.ca"
                  className="text-sm text-warm-700 px-3.5 py-2.5 border border-warm-200 rounded-md bg-white outline-none transition-all resize-y focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
                />
              </div>

              <p className="text-xs text-warm-400 leading-normal pt-4 mt-4 border-t border-warm-200">
                By submitting this form, you confirm that the information
                provided is accurate to the best of your knowledge. The CCB
                treats all submissions as confidential and will not disclose your
                identity without your express consent. Ref: CCB-CP-2026
              </p>

              {error && (
                <p className="text-sm text-red-600 mt-2">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitted || submitting}
                className={`w-full flex items-center justify-center gap-2 text-[15px] font-semibold text-white py-3.5 px-7 rounded-md transition-all mt-5 ${
                  submitted
                    ? "bg-green-800 cursor-default"
                    : submitting
                      ? "bg-red-400 cursor-wait"
                      : "bg-red-600 hover:bg-red-700 shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
                }`}
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    Complaint Submitted &mdash; Reference: {refNumber}
                  </>
                ) : submitting ? (
                  "Submitting..."
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
