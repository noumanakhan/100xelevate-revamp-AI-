import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Shopify App Setup and App Optimization - 100xelevate",
  description: "Shopify app setup and optimization to improve store speed, performance, tracking, and scalability with audits, clean installs, and support.",
  path: "/services/shopify-app-setup-optimization/",
});

export default function Page() {
  return <main>{/* TODO: implement /services/shopify-app-setup-optimization/ */}</main>;
}
