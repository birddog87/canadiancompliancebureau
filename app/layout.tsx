import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
