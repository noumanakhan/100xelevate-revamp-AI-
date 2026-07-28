import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Guides - 100xelevate",
  description: "In-depth guides for Shopify growth, performance, conversions, and store systems to help you scale efficiently.",
  path: "/guides/",
});

export default function Page() {
  return <main>{/* TODO: implement /guides/ */}</main>;
}
