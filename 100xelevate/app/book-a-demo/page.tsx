import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { LetsChat } from "@/components/core/book-a-demo/LetsChat";
import { TrustedBy } from "@/components/core/book-a-demo/TrustedBy";
import TestimonialsSection from "@/components/core/home/TestimonialsSection";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Book a Demo - 100xelevate",
  description: "Book a demo with 100xElevate to explore tailored growth strategies, expert insights, and solutions designed to scale your business.",
  path: "/book-a-demo/",
});

export default function Page() {
  return <main>
    <LetsChat />
    <TrustedBy />
    <TestimonialsSection />
    <AskAISection />
  </main>;
}
