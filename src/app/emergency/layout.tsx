import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "24/7 Stray Dog Rescue Helpline Prayagraj | Emergency Triage | Kiran Singh Foundation",
  description:
    "24/7 emergency rescue helpline and ambulance triage for injured, sick, or accident-struck street dogs in Prayagraj (Allahabad). Direct WhatsApp dispatch: +91 9670970750. Shelter for 34 rescued canines.",
  keywords: [
    "dog rescue helpline prayagraj",
    "injured stray dog emergency allahabad",
    "animal rescue prayagraj",
    "animal ambulance number allahabad",
    "street dog medical emergency prayagraj",
    "free animal helpline prayagraj",
    "animal shelter prayagraj",
    "Kiran Singh Foundation emergency dispatch",
  ],
  alternates: {
    canonical: "https://kiransinghfoundation.org/emergency",
  },
  openGraph: {
    title: "24/7 Stray Dog Rescue Helpline Prayagraj | Kiran Singh Foundation",
    description:
      "Rapid emergency medical response and sanctuary admission for injured street animals in Prayagraj. Call or WhatsApp +91 9670970750.",
    url: "https://kiransinghfoundation.org/emergency",
    type: "website",
    images: [
      {
        url: "/images/dispatches/felid-ethology-archive.jpg",
        alt: "Kiran Singh Foundation Emergency Animal Rescue Grid Prayagraj",
      },
    ],
  },
};

const emergencyJsonLd = {
  "@context": "https://schema.org",
  "@type": "EmergencyService",
  name: "Kiran Singh Foundation 24/7 Canine Emergency Rescue Grid",
  description: "Rapid medical rescue and sanctuary care for injured street dogs across Prayagraj.",
  telephone: "+91-9670970750",
  url: "https://kiransinghfoundation.org/emergency",
  areaServed: {
    "@type": "City",
    name: "Prayagraj",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "191/C, Tilak Nagar Allahpur",
    addressLocality: "Prayagraj",
    postalCode: "211006",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function EmergencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencyJsonLd) }}
      />
      {children}
    </>
  );
}
