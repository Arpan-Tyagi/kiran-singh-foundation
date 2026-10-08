import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AICopilotDrawer from "@/components/AICopilotDrawer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kiran Singh Foundation | Working towards Change",
  description:
    "Institutional memorial foundation established in sacred memory of Late Kiran Singh ji (Ph.D. Apex Felid Ethology, AAZP Vandalur Analyst). Dedicated to Student Welfare (40 Scholars), Dog Care Centre (34 Rescued Canines), and active Mutual-Aid Crisis Response.",
  keywords: [
    "Kiran Singh Foundation",
    "Late Kiran Singh ji",
    "Apex Felid Ethology",
    "AAZP Vandalur",
    "Student Welfare Wing",
    "Dog Care Centre",
    "Animal Welfare Chennai",
    "Working towards Change",
  ],
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-obsidian text-parchment antialiased selection:bg-lion-gold selection:text-obsidian flex flex-col justify-between">
        <div className="archival-grain" />
        <Navbar />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
        <AICopilotDrawer />
      </body>
    </html>
  );
}
