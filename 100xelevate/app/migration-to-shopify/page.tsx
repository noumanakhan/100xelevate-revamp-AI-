import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Migration Services - 100xelevate",
  description: "Reliable Migration to Shopify with safe data transfer, updated setup, and a smooth transition that keeps your store stable and ready to grow.",
  path: "/migration-to-shopify/",
});

export default function Page() {
  return <main>{/* TODO: implement /migration-to-shopify/ */}</main>;
}
