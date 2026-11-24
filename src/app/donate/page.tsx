import React from "react";
import DonateHubClient from "@/components/donate/DonateHubClient";

export const revalidate = 60;

export default function DonatePage() {
  return <DonateHubClient />;
}
