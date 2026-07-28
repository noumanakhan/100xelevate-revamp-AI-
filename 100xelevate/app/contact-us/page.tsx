import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { LetsTalk } from "@/components/core/contact-us/LetsTalk";
import { ContactForm } from "@/components/core/contact-us/ContactForm";
import ShopifyExpert from "@/components/core/contact-us/ShopifyExpert";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us - 100xelevate",
  description: "Get in touch with 100xElevate your Shopify development partner. Contact us to discuss and start building a high-converting store.",
  path: "/contact-us/",
});

export default function Page() {
  return <main>
    <LetsTalk />
    <ContactForm />
    <ShopifyExpert />
    <AskAISection />
    
  </main>;
}
