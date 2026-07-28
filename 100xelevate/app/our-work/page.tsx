import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import OurWorkListingHeader from "@/components/core/work/OurWorkListingHeader";
import WorkListing from "@/components/core/work/WorkListing";

export const metadata: Metadata = buildMetadata({
  title: "Our Shopify Store Case Studies - Elevated Brands",
  description: "Explore Shopify store case studies that highlight real results in ecommerce growth, innovative design, and technology.",
  path: "/our-work/",
});

export default function Page() {
  return (
    <main className="w-full">
      <section className="mx-auto w-full">
        <OurWorkListingHeader />
        <WorkListing />
      </section>
    </main>
  );
}
