import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Request a free audit - 100xelevate",
  description: "Request a free audit from 100xelevate to reveal growth issues, find opportunities, and get clear recommendations to lift performance.",
  path: "/request-a-free-audit/",
});

export default function Page() {
  return <main>{/* TODO: implement /request-a-free-audit/ */}</main>;
}
