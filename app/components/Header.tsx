"use client";

import { useState } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Our Work" },
  { href: "#resources", label: "Resources" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-900 text-navy-200 text-xs tracking-wide py-1.5 border-b border-white/[0.08] hidden md:block">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <span>
            Mandate: Fair and transparent auction practices across Canadian
            marketplaces
          </span>
          <a
            href="#complaint"
            className="text-navy-200 no-underline hover:text-white transition-colors"
          >
            Report a Concern
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-warm-200 sticky top-0 z-50 shadow-[0_1px_3px_rgba(12,26,46,0.04)]">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px] md:h-[72px]">
          <Logo />

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span className="block w-[22px] h-0.5 bg-navy-800 mb-[5px] rounded-sm" />
            <span className="block w-[22px] h-0.5 bg-navy-800 mb-[5px] rounded-sm" />
            <span className="block w-[22px] h-0.5 bg-navy-800 rounded-sm" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-warm-600 no-underline px-4 py-2 rounded-md hover:text-navy-700 hover:bg-navy-50 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#complaint"
              className="text-sm font-semibold text-white no-underline bg-red-600 px-5 py-2 rounded-md ml-2 hover:bg-red-700 transition-all"
            >
              File a Complaint
            </a>
          </nav>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden bg-white border-b border-warm-200 px-3 pb-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-warm-600 no-underline px-4 py-3 rounded-md hover:text-navy-700 hover:bg-navy-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#complaint"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-semibold text-white no-underline bg-red-600 px-4 py-3 rounded-md mt-1 text-center hover:bg-red-700"
            >
              File a Complaint
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
