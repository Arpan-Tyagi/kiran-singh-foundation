import React from "react";
import { fetchDogs } from "@/lib/supabase";
import DogsDeskClient from "@/components/admin/DogsDeskClient";

export const revalidate = 0;

export default async function AdminDogsPage() {
  const dogs = await fetchDogs();

  return <DogsDeskClient dogs={dogs} />;
}
