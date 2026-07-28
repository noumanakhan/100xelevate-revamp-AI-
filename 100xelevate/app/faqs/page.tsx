import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "FAQs - 100xelevate",
  description: "Explore the Frequently Asked Questions (FAQs) at 100xelevate to get answers on Shopify design, development, audits, CRO, and more.",
  path: "/faqs/",
});

export default function Page() {
  return <main>{/* TODO: implement /faqs/ */}</main>;
}
