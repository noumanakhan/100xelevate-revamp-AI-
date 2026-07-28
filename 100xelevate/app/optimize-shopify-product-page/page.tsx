import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "How to Optimize a Shopify Product Page - 100xelevate",
  description: "Optimize your Shopify product page to increase add-to-cart rates, improve mobile performance, and reduce hesitation with proven UX and CRO strategies.",
  path: "/optimize-shopify-product-page/",
});

export default function Page() {
  return <main>{/* TODO: implement /optimize-shopify-product-page/ */}</main>;
}
