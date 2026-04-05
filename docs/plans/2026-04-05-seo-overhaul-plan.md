# SEO Overhaul — Canadian Compliance Bureau

## Context

This is a Next.js 16 site (App Router) for the Canadian Compliance Bureau, a consumer advocacy org monitoring online auction platforms in Canada. The site is live at **https://canadiancompliancebureau.com** (deployed on Vercel).

**Goal:** Maximum search visibility — rank in Google AND look authoritative. The owner wants to monetize later and needs traffic first.

**Current state:** Good content and semantic HTML, but zero SEO infrastructure beyond basic `<title>` and `<meta description>` tags.

---

## Project Structure

```
app/
├── layout.tsx                              ← Root layout (metadata lives here)
├── page.tsx                                ← Homepage
├── globals.css
├── components/
│   ├── Header.tsx                          ← Logo link points to "#" (BUG)
│   ├── Logo.tsx                            ← Logo `<a href="#">` (BUG — should be "/")
│   ├── Hero.tsx
│   ├── NoticeBar.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── ComplaintForm.tsx                   ← "use client" component
│   ├── Resources.tsx
│   ├── CtaBanner.tsx
│   ├── Footer.tsx                          ← Multiple dead links (href="#")
│   └── Icons.tsx
├── resources/
│   ├── employee-self-dealing/page.tsx      ← Published March 14, 2025
│   ├── bidder-rights/page.tsx              ← Published January 22, 2025
│   └── compliance-report-2025/page.tsx     ← Published February 1, 2026
```

---

## Task 1: Add `metadataBase` and OpenGraph/Twitter to Root Layout

**File:** `app/layout.tsx`

Replace the existing `metadata` export with:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://canadiancompliancebureau.com"),
  title: {
    default: "Canadian Compliance Bureau | Protecting Marketplace Integrity",
    template: "%s | Canadian Compliance Bureau",
  },
  description:
    "The Canadian Compliance Bureau monitors auction platforms and marketplaces to ensure fair practices, protect consumers, and uphold industry standards across Canada.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://canadiancompliancebureau.com",
    siteName: "Canadian Compliance Bureau",
    title: "Canadian Compliance Bureau | Protecting Marketplace Integrity",
    description:
      "Independent compliance monitoring for Canadian online auction platforms. Protecting bidders, consignors, and marketplace integrity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canadian Compliance Bureau | Protecting Marketplace Integrity",
    description:
      "Independent compliance monitoring for Canadian online auction platforms. Protecting bidders, consignors, and marketplace integrity.",
  },
  alternates: {
    canonical: "https://canadiancompliancebureau.com",
  },
  other: {
    "theme-color": "#132440",
  },
};
```

Also change `<html lang="en">` to `<html lang="en-CA">`.

---

## Task 2: Add OpenGraph/Twitter Overrides to Resource Pages

Each resource page already has a `metadata` export. Extend each one with OG and Twitter fields.

### `app/resources/employee-self-dealing/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Understanding Employee Self-Dealing in Online Auctions",
  description:
    "A comprehensive guide to identifying and documenting employee self-dealing in online auction houses, including common schemes, red flags, and enforcement options.",
  openGraph: {
    type: "article",
    title: "Understanding Employee Self-Dealing in Online Auctions",
    description:
      "A comprehensive guide to identifying and documenting employee self-dealing in online auction houses, including common schemes, red flags, and enforcement options.",
    url: "https://canadiancompliancebureau.com/resources/employee-self-dealing",
    publishedTime: "2025-03-14T00:00:00Z",
    authors: ["CCB Research Division"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding Employee Self-Dealing in Online Auctions",
    description:
      "A comprehensive guide to identifying and documenting employee self-dealing in online auction houses.",
  },
  alternates: {
    canonical: "https://canadiancompliancebureau.com/resources/employee-self-dealing",
  },
};
```

### `app/resources/bidder-rights/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Rights as an Online Auction Bidder in Canada",
  description:
    "A comprehensive guide to the legal protections, complaint procedures, and enforcement options available to online auction bidders under Canadian federal and provincial law.",
  openGraph: {
    type: "article",
    title: "Your Rights as an Online Auction Bidder in Canada",
    description:
      "A comprehensive guide to the legal protections, complaint procedures, and enforcement options available to online auction bidders under Canadian federal and provincial law.",
    url: "https://canadiancompliancebureau.com/resources/bidder-rights",
    publishedTime: "2025-01-22T00:00:00Z",
    authors: ["CCB Research Division"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Rights as an Online Auction Bidder in Canada",
    description:
      "Legal protections, complaint procedures, and enforcement options for online auction bidders in Canada.",
  },
  alternates: {
    canonical: "https://canadiancompliancebureau.com/resources/bidder-rights",
  },
};
```

### `app/resources/compliance-report-2025/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "2025-2026 Marketplace Compliance Report: GTA Region",
  description:
    "Annual compliance monitoring report covering online auction and marketplace practices in the Greater Toronto Area, including key findings on employee self-dealing, shill bidding, and inventory diversion.",
  openGraph: {
    type: "article",
    title: "2025-2026 Marketplace Compliance Report: GTA Region",
    description:
      "Annual compliance monitoring report covering online auction and marketplace practices in the Greater Toronto Area, including key findings on employee self-dealing, shill bidding, and inventory diversion.",
    url: "https://canadiancompliancebureau.com/resources/compliance-report-2025",
    publishedTime: "2026-02-01T00:00:00Z",
    authors: ["CCB Research Division"],
  },
  twitter: {
    card: "summary_large_image",
    title: "2025-2026 Marketplace Compliance Report: GTA Region",
    description:
      "Annual compliance report on GTA online auction practices — employee self-dealing, shill bidding, and inventory diversion findings.",
  },
  alternates: {
    canonical: "https://canadiancompliancebureau.com/resources/compliance-report-2025",
  },
};
```

**Note:** Because the root layout now uses `title.template: "%s | Canadian Compliance Bureau"`, these page titles will automatically get the suffix appended. So use just the page title (no `| Canadian Compliance Bureau` suffix).

---

## Task 3: Create `app/sitemap.ts`

Create a new file `app/sitemap.ts`:

```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://canadiancompliancebureau.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-05"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/resources/employee-self-dealing`,
      lastModified: new Date("2025-03-14"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/bidder-rights`,
      lastModified: new Date("2025-01-22"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/compliance-report-2025`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
```

---

## Task 4: Create `app/robots.ts`

Create a new file `app/robots.ts`:

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://canadiancompliancebureau.com/sitemap.xml",
  };
}
```

---

## Task 5: JSON-LD Structured Data

### 5A: Organization + WebSite schema on homepage

In `app/page.tsx`, add a `<script type="application/ld+json">` tag inside the JSX, before `<Header />`.

```tsx
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
      <Header />
      <Hero />
      <NoticeBar />
      <About />
      <Services />
      <ComplaintForm />
      <Resources />
      <FaqSection />
      <CtaBanner />
      <Footer />
    </>
  );
}
```

### 5B: Article + BreadcrumbList schema on EACH resource page

Add this pattern to **each** of the 3 resource pages. Below is the employee-self-dealing example — adapt the values for the other two.

In `app/resources/employee-self-dealing/page.tsx`, add before the return JSX:

```tsx
export default function EmployeeSelfDealing() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Understanding Employee Self-Dealing in Online Auctions",
    datePublished: "2025-03-14",
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
      "A comprehensive guide to identifying and documenting employee self-dealing in online auction houses, including common schemes, red flags, and enforcement options.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://canadiancompliancebureau.com/resources/employee-self-dealing",
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
        name: "Employee Self-Dealing",
        item: "https://canadiancompliancebureau.com/resources/employee-self-dealing",
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
      {/* ... rest of page ... */}
    </>
  );
}
```

**Bidder Rights** — same pattern, but:
- headline: "Your Rights as an Online Auction Bidder in Canada"
- datePublished: "2025-01-22"
- description: use the existing meta description
- URLs: `/resources/bidder-rights`
- Breadcrumb position 3 name: "Bidder Rights"

**Compliance Report** — same pattern, but:
- headline: "2025-2026 Marketplace Compliance Report: GTA Region"
- datePublished: "2026-02-01"
- description: use the existing meta description
- URLs: `/resources/compliance-report-2025`
- Breadcrumb position 3 name: "Compliance Report 2025-2026"

---

## Task 6: Create FAQ Section Component

Create a new file `app/components/FaqSection.tsx`:

```tsx
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
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-warm-50 transition-colors"
              >
                <span className="font-medium text-navy-800 text-[15px]">
                  {faq.question}
                </span>
                <span className="text-navy-400 text-lg flex-shrink-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-warm-600 text-[14.5px] leading-relaxed border-t border-warm-100 pt-3">
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
```

Then import and use it in `app/page.tsx` (already shown in Task 5A — placed between `<Resources />` and `<CtaBanner />`).

---

## Task 7: Fix Broken Links

### 7A: Fix Logo link

**File:** `app/components/Logo.tsx` line 90

Change `<a href="#">` to `<a href="/">`.

### 7B: Clean up Footer dead links

**File:** `app/components/Footer.tsx`

Update the link arrays at the top of the file:

```typescript
const orgLinks = [
  { href: "#about", label: "About the CCB" },
  { href: "#services", label: "Our Work" },
  { href: "#resources", label: "Publications" },
];

const consumerLinks = [
  { href: "#complaint", label: "File a Complaint" },
  { href: "/resources/bidder-rights", label: "Know Your Rights" },
  { href: "#faq", label: "Frequently Asked Questions" },
];
```

Remove "Annual Report", "Media Inquiries", and "Complaint Status" — they're dead links.

Also update the footer legal links (lines 99-111). Remove the ones that are dead:

```tsx
<div className="flex gap-5">
  <a href="#" className="text-navy-500 no-underline hover:text-navy-300 transition-colors">
    Privacy Policy
  </a>
  <a href="#" className="text-navy-500 no-underline hover:text-navy-300 transition-colors">
    Disclaimer
  </a>
</div>
```

Keep Privacy Policy and Disclaimer (even as `#` for now — they're expected). Remove Terms of Use and Accessibility (unused, no content).

### 7C: Fix the media email in Footer

Line 85 — the media email `<a href="#">` should be `<a href="mailto:media@canadiancompliancebureau.ca">`.

---

## Task 8: Add "Resources" nav link to header (optional but good for SEO)

In `app/components/Header.tsx`, the nav already has `{ href: "#resources", label: "Resources" }` which links to the homepage resources section. This is fine — no change needed.

However, add the FAQ link to the nav. Update the `navLinks` array:

```typescript
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Our Work" },
  { href: "#resources", label: "Resources" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];
```

---

## Verification

After all changes, run:

```bash
npm run build
```

Then verify:
1. `curl https://canadiancompliancebureau.com/sitemap.xml` returns valid XML with all 4 URLs
2. `curl https://canadiancompliancebureau.com/robots.txt` returns allow rules + sitemap pointer
3. View page source on homepage — confirm `<script type="application/ld+json">` blocks exist (Organization, WebSite, FAQPage)
4. View page source on any resource page — confirm Article + BreadcrumbList schemas
5. Check `<html lang="en-CA">`
6. Check `<meta property="og:title">`, `<meta property="og:description">`, etc. exist
7. Logo clicks go to `/` not `#`
8. No more dead `href="#"` links in footer
9. FAQ section renders and toggles open/closed
10. Test with Google Rich Results Test: https://search.google.com/test/rich-results (paste each URL)

---

## File Change Summary

| File | Action |
|------|--------|
| `app/layout.tsx` | Edit — add metadataBase, OG, Twitter, canonical, lang="en-CA" |
| `app/page.tsx` | Edit — add JSON-LD schemas, import + render FaqSection |
| `app/sitemap.ts` | **Create** |
| `app/robots.ts` | **Create** |
| `app/components/FaqSection.tsx` | **Create** |
| `app/components/Logo.tsx` | Edit — fix href="#" to "/" |
| `app/components/Footer.tsx` | Edit — remove dead links, fix media email |
| `app/components/Header.tsx` | Edit — add FAQ nav link |
| `app/resources/employee-self-dealing/page.tsx` | Edit — add OG, Twitter, canonical, JSON-LD |
| `app/resources/bidder-rights/page.tsx` | Edit — add OG, Twitter, canonical, JSON-LD |
| `app/resources/compliance-report-2025/page.tsx` | Edit — add OG, Twitter, canonical, JSON-LD |
