import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions - 100xelevate",
  description: "Read the Terms & Conditions of 100xelevate to understand our policies, user responsibilities, and guidelines for using our website.",
  path: "/terms-conditions/",
});

export default function Page() {
  return <main>{/* TODO: implement /terms-conditions/ */}</main>;
}
