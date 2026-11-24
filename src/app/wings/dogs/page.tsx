import React from "react";
import { fetchDogs } from "@/lib/supabase";
import DogsRosterClient from "@/components/wings/DogsRosterClient";

export const revalidate = 60;

export const metadata = {
  title: "Dog Care Centre Prayagraj | 34 Rescued Canines Sanctuary | Kiran Singh Foundation",
  description:
    "Authoritative directory of 34 resident rescued street dogs across 3 sanctuary zones in Prayagraj. 100% rabies vaccination, emergency medical care, and lifelong rehabilitation.",
  keywords: [
    "animal shelter prayagraj",
    "dog care centre allahabad",
    "street dog sanctuary prayagraj",
    "adopt stray dog prayagraj",
    "dog rescue shelter uttar pradesh",
    "Kiran Singh Foundation dog wing",
  ],
  alternates: {
    canonical: "https://kiransinghfoundation.org/wings/dogs",
  },
};

export default async function DogsWingPage() {
  const dogs = await fetchDogs();

  return <DogsRosterClient dogs={dogs} />;
}
