import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "For AI - 100xelevate",
  description: "",
  path: "/for-ai/",
});

export default function Page() {
  return <main>{/* TODO: implement /for-ai/ */}</main>;
}
