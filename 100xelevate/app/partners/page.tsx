import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Partners - 100xelevate",
  description: "Learn about 100xelevate's Shopify ecosystem partners and the tools we use to improve performance, retention, and scalable brand growth.",
  path: "/partners/",
});

export default function Page() {
  return <main>{/* TODO: implement /partners/ */}</main>;
}
