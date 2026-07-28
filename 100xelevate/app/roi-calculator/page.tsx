import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "ROI Calculator for Your Business Growth - 100xelevate",
  description: "Calculate your Shopify ROI with 100xElevate's free ROI Calculator. See how our strategies can boost revenue, conversions, & business growth.",
  path: "/roi-calculator/",
});

export default function Page() {
  return <main>{/* TODO: implement /roi-calculator/ */}</main>;
}
