import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Public Review - 100xelevate",
  description: "Submit your public review for 100xelevate and share your experience with our Shopify development and CRO team.",
  path: "/public-review/",
});

export default function Page() {
  return <main>{/* TODO: implement /public-review/ */}</main>;
}
