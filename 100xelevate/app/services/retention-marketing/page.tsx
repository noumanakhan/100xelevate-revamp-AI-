import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Retention Marketing - 100xelevate",
  description: "Boost customer loyalty and lifetime value with 100xElevate's retention marketing data-driven Shopify strategies that drive repeat sales.",
  path: "/services/retention-marketing/",
});

export default function Page() {
  return <main>{/* TODO: implement /services/retention-marketing/ */}</main>;
}
