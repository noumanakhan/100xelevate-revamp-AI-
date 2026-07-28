import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Comparisons - 100xelevate",
  description: "Clear Shopify comparisons to help you choose the right platform, plan, or architecture with confidence today.",
  path: "/comparisons/",
});

export default function Page() {
  return <main>{/* TODO: implement /comparisons/ */}</main>;
}
