import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Health, Wellness & Fitness - 100xelevate",
  description: "We build and optimize Shopify stores for health, wellness & fitness brands—premium design, smooth checkout, and growth-focused strategies.",
  path: "/health-wellness-fitness/",
});

export default function Page() {
  return <main>{/* TODO: implement /health-wellness-fitness/ */}</main>;
}
