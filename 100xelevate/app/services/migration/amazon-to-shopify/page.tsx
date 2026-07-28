import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Amazon to Shopify - 100xelevate",
  description: "Migrate from Amazon to Shopify with a structured, secure process. 100xelevate handle products, data, UX, and performance so you launch a scalable Shopify store.",
  path: "/services/migration/amazon-to-shopify/",
});

export default function Page() {
  return <main>{/* TODO: implement /services/migration/amazon-to-shopify/ */}</main>;
}
