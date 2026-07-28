import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Store Insights and Blogs - Gain Valuable Insights",
  description: "Discover store insights and blogs from 100xElevate. Get expert tips, strategies, and case studies on Shopify development and eCommerce growth.",
  path: "/insights/",
});

export default function Page() {
  return <main>{/* TODO: implement /insights/ */}</main>;
}
