"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const { error } = await supabase
      .from("subscribers")
      .insert({ email: email.trim().toLowerCase(), source: "website" });

    if (error) {
      if (error.code === "23505") {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
      }
    } else {
      setStatus("success");
    }

    if (status !== "error") {
      setEmail("");
    }
  };

  return (
    <section className="bg-navy-800 py-14" id="newsletter">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <h2 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">
          Stay Informed
        </h2>
        <p className="text-navy-300 text-sm mb-6">
          Get updates on enforcement actions, regulatory changes, and consumer
          protection developments affecting Canadian auction markets.
        </p>

        {status === "success" ? (
          <p className="text-green-400 text-sm font-medium py-3">
            You&apos;re subscribed. We&apos;ll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-[440px] mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 text-sm px-4 py-2.5 rounded-md bg-navy-700 border border-navy-600 text-white placeholder:text-navy-400 outline-none focus:border-navy-400 focus:ring-[3px] focus:ring-navy-400/10"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="text-sm font-semibold text-navy-900 bg-white px-5 py-2.5 rounded-md hover:bg-warm-100 transition-colors disabled:opacity-50"
            >
              {status === "submitting" ? "..." : "Subscribe"}
            </button>
          </form>
        )}

        {errorMsg && (
          <p className="text-red-400 text-xs mt-2">{errorMsg}</p>
        )}

        <p className="text-navy-500 text-[11px] mt-4">
          No spam. Unsubscribe anytime. See our{" "}
          <a href="/privacy" className="text-navy-400 underline hover:text-navy-300">
            privacy policy
          </a>.
        </p>
      </div>
    </section>
  );
}
