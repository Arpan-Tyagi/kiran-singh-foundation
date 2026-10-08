import React from "react";
import { fetchDogs } from "@/lib/supabase";
import DogsRosterClient from "@/components/wings/DogsRosterClient";

export const revalidate = 60;

export const metadata = {
  title: "Dog Care Centre | 34 Rescued Canines | Kiran Singh Foundation",
  description:
    "Authoritative directory of 34 resident rescued street dogs across 3 sanctuary zones with 100% rabies vaccination and booster compliance.",
};

export default async function DogsWingPage() {
  const dogs = await fetchDogs();

  return <DogsRosterClient dogs={dogs} />;
}
