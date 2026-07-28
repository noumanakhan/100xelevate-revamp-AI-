export type ShopifyFaqItem = {
  question: string;
  answer: string;
};


export const SHOPIFY_BIGCOMMERCE_TO_SHOPIFY_FAQS: readonly ShopifyFaqItem[] = [
  {
    question: "1. How long does it take to migrate from BigCommerce to Shopify?",
    answer:
      "A standard BigCommerce to Shopify migration typically takes 2–6 weeks, depending on product volume, custom features, integrations, and SEO requirements.",
  },
  {
    question: "2. Will I lose SEO rankings when migrating from BigCommerce to Shopify?",
    answer:
      "No, rankings can be preserved with proper URL redirects, metadata migration, sitemap handling, and technical SEO checks. A structured migration prevents traffic loss and often improves performance post-launch.",
  },
  {
    question: "3. What data can be migrated from BigCommerce to Shopify?",
    answer:
      "Products, variants, customers, order history, categories, content pages, images, and redirects can all be migrated. Custom functionality and integrations are recreated natively or through Shopify apps.",
  },
  {
    question: "4. Is Shopify better than BigCommerce for growing brands?",
    answer:
      "Yes. Shopify offers faster storefront performance, stronger checkout conversion, a deeper app ecosystem, and lower long-term operational overhead, making it better suited for brands focused on scale and optimization.",
  },
  {
    question: "5. Can I migrate from BigCommerce to Shopify Plus?",
    answer:
      "Yes. Many high-revenue brands migrate directly to Shopify Plus to gain advanced checkout control, automation, B2B features, and higher API limits while maintaining performance and reliability at scale.",
  },
  {
    question: "6. Will my store experience downtime during the migration?",
    answer:
      "No. The migration is completed on a separate Shopify instance while your BigCommerce store remains live. Traffic switches only after full testing, ensuring no downtime or lost sales.",
  },
  {
    question: "7. How much does it cost to migrate from BigCommerce to Shopify?",
    answer:
      "Migration cost depends on store complexity, custom features, data volume, and SEO requirements. Pricing typically reflects one-time setup plus optional post-launch optimization, not just data transfer.",
  },
] as const;