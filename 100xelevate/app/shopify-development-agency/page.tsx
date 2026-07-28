import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Shopify development agency - 100xelevate",
  description: "Partner with 100xelevate, a leading Shopify development agency, for custom store design, seamless checkout, and conversion-focused solutions.",
  path: "/shopify-development-agency/",
});

export default function Page() {
  return <main>{/* TODO: implement /shopify-development-agency/ */}</main>;
}
