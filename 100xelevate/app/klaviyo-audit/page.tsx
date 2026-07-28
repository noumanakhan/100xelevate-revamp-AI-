import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Klaviyo Audit - 100xelevate",
  description: "Get a free Klaviyo audit to uncover missed email and SMS revenue. We review flows, campaigns, segmentation, deliverability, and automation gaps for Shopify brands doing $50K+ per month.",
  path: "/klaviyo-audit/",
});

export default function Page() {
  return <main>{/* TODO: implement /klaviyo-audit/ */}</main>;
}
