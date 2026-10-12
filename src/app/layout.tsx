import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AICopilotDrawer from "@/components/AICopilotDrawer";
import MobileEmergencyBar from "@/components/MobileEmergencyBar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Kiran Singh Foundation | "A Journey from struggle to Enlightenment"',
  description:
    'Kiran Singh Foundation is a registered trust under the Indian Trust Act of 1882 (191/C, Tilak Nagar Allahpur Prayagraj 211006). Established in sacred memory of Late Kiran Singh ji (Ph.D. in Apex Felid Ethology; AAZP Vandalur Analyst). Sponsoring 40 scholars, sheltering 34 rescued street dogs, and operating a 24/7 emergency mutual-aid grid.',
  keywords: [
    "Kiran Singh Foundation",
    "Trust registered under Indian Trust Act of 1882",
    "A Journey from struggle to Enlightenment",
    "Working Towards Change",
    "191/C Tilak Nagar Allahpur Prayagraj 211006",
    "Late Kiran Singh ji",
    "Apex Felid Ethology",
    "AAZP Vandalur Analyst",
    "Tamil Nadu Zoo Authority",
    "Chief Minister J Jayalalithaa alignment",
    "Student Welfare Wing 40 Scholars",
    "Dog Care Centre 34 Rescued Dogs",
    "kiransinghfoundation@gmail.com",
    "Emergency Mutual Aid Grid",
  ],
  icons: {
    icon: "/images/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Kiran Singh Foundation",
  legalName: "Kiran Singh Foundation (Trust registered under Indian Trust Act of 1882)",
  slogan: "A Journey from struggle to Enlightenment",
  alternateName: "Working Towards Change",
  description:
    "Registered trust under the Indian Trust Act of 1882 established in sacred memory of Late Kiran Singh ji. Operates Student Welfare Wing (40 scholars), Dog Care Centre (34 rescued dogs), and 24/7 emergency mutual-aid grid.",
  url: "https://kiransinghfoundation.org",
  logo: "https://kiransinghfoundation.org/images/logo.png",
  email: "kiransinghfoundation@gmail.com",
  telephone: "+91-9670970750",
  address: {
    "@type": "PostalAddress",
    streetAddress: "191/C, Tilak Nagar Allahpur",
    addressLocality: "Prayagraj",
    postalCode: "211006",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9670970750",
      contactType: "emergency dispatch and primary helpline",
      availableLanguage: ["English", "Hindi", "Tamil"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-8115141378",
      contactType: "coordinator line",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9450630310",
      contactType: "coordinator line",
      availableLanguage: ["English", "Hindi"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-porcelain text-obsidian antialiased selection:bg-lion-gold/20 selection:text-obsidian flex flex-col justify-between">
        <div className="archival-grain" />
        <Navbar />
        <main className="flex-grow pt-24 pb-16 md:pb-0">{children}</main>
        <Footer />
        <AICopilotDrawer />
        <MobileEmergencyBar />
      </body>
    </html>
  );
}
