export type ShopifyFaqItem = {
  question: string;
  answer: string;
};

export const SHOPIFY_SALESFORCE_TO_SHOPIFY_FAQS: readonly ShopifyFaqItem[] = [
  {
    question: "1. How long does it take to migrate from Salesforce Commerce Cloud to Shopify?",
    answer:
      "Most Salesforce to Shopify migrations take 2–4 months depending on store size, customizations, and third-party integrations. The exact timeframe is finalized after a comprehensive technical audit.",
  },
  {
    question: "2. Will I lose data when migrating from Salesforce to Shopify?",
    answer:
      "No. With proper data mapping, validation scripts, and pre-launch testing, products, customer records, order history, and metafields are transferred without loss.",
  },
  {
    question: "3. Does migrating to Shopify affect SEO rankings?",
    answer:
      "No, provided it is handled correctly. Comprehensive 301 URL redirects, metadata preservation, structured data mapping, and post-launch audits protect your search rankings and organic traffic.",
  },
  {
    question: "4. Is Shopify suitable for enterprise and high-volume brands?",
    answer:
      "Yes. Shopify Plus supports enterprise-level traffic spikes, complex product catalogs, B2B wholesale portals, multi-store setups, and high-volume checkout without crashing.",
  },
  {
    question: "5. Why do brands move from Salesforce Commerce Cloud to Shopify?",
    answer:
      "Brands switch to lower their Total Cost of Ownership (TCO), speed up marketing iteration, simplify day-to-day store management, achieve higher checkout conversion rates, and reduce dependency on costly specialized developers.",
  },
  {
    question: "6. Can Shopify support B2B, wholesale, and international selling?",
    answer:
      "Yes. Shopify Markets and B2B on Shopify Plus support custom buyer price lists, wholesale terms, multi-currency, localized tax rules, and international storefronts from a single admin dashboard.",
  },
  {
    question: "7. What are the risks of migrating from Salesforce to Shopify?",
    answer:
      "Common risks include data mismatches, SEO ranking drops, and integration gaps. Working with experienced enterprise migration specialists mitigates these risks through structured audits, phased testing, and zero-downtime launches.",
  },
] as const;
