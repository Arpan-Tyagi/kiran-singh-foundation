import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Donate & Claim Section 80G Tax Exemption | Kiran Singh Foundation",
  description:
    "Make 100% direct impact donations to Kiran Singh Foundation (PAN: AAGTK3961N, CSR: CSR00110895, URN: AAGTK3961NE20261). Support 34 rescued street dogs and 40 sponsored scholars. Instant 80G tax receipt generation via UPI or HDFC Bank.",
  keywords: [
    "donate to animal shelter prayagraj 80G",
    "sponsor stray dog food medicine india",
    "section 80G tax exemption donation UP",
    "sponsor student scholarship prayagraj",
    "ngo donation prayagraj",
    "Kiran Singh Foundation donation",
    "csr partner animal welfare uttar pradesh",
    "80G receipt download online ngo",
  ],
  alternates: {
    canonical: "https://kiransinghfoundation.org/donate",
  },
  openGraph: {
    title: "Donate with Section 80G Tax Exemption | Kiran Singh Foundation",
    description:
      "Support 34 rescued street dogs and 40 scholars in Prayagraj. 50% tax-exempt under Section 80G. UPI & instant official receipt generator.",
    url: "https://kiransinghfoundation.org/donate",
    type: "website",
    images: [
      {
        url: "/images/dispatches/village-development-community-aid.jpg",
        alt: "Kiran Singh Foundation Philanthropic Endowment",
      },
    ],
  },
};

const donateJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Kiran Singh Foundation",
  legalName: "Kiran Singh Foundation (Trust registered under Indian Trust Act of 1882)",
  url: "https://kiransinghfoundation.org/donate",
  telephone: "+91-9670970750",
  email: "kiransinghfoundationindia@gmail.com",
  taxID: "AAGTK3961N",
  address: {
    "@type": "PostalAddress",
    streetAddress: "191/C, Tilak Nagar Allahpur",
    addressLocality: "Prayagraj",
    postalCode: "211006",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  potentialAction: {
    "@type": "DonateAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://kiransinghfoundation.org/donate",
      inLanguage: "en-IN",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    recipient: {
      "@type": "NGO",
      name: "Kiran Singh Foundation",
    },
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donateJsonLd) }}
      />
      {children}
    </>
  );
}
