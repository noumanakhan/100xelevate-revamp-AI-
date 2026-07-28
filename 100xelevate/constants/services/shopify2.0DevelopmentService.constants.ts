
export type ShopifyIntegrationServicesItem = {
  title: string;
  description: string;
};

export const SHOPIFY_2_0_SERVICES_ACCORDION_LABEL = "Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys";

export const SHOPIFY_2_0_SERVICES_ITEMS: readonly ShopifyIntegrationServicesItem[] = [
  {
    title: "Full Shopify 2.0 Store Build",
    description:
      "A complete Shopify 2.0 store built with clean code, flexible sections, and a modern structure designed for performance and long-term growth.",
  },
  {
    title: "Shopify 1.0 to 2.0 Migration",
    description:
      "We upgrade outdated themes to Shopify 2.0, improving structure, adding reusable sections, and optimizing performance without affecting your live store.",
  },
  {
    title: "Custom Sections & Blocks",
    description:
      "Reusable 2.0 sections and blocks that let your team update pages easily and create new layouts without relying on development support.",
  },
  {
    title: "Modular Landing Page Systems",
    description:
      "Flexible landing page systems built with 2.0 sections so your marketing team can launch high-impact pages faster and manage campaigns independently.",
  },
  {
    title: "Conversion-Focused Templates",
    description:
      "Optimized product, collection, and landing page templates designed to improve clarity, reduce friction, and guide visitors toward faster decisions.",
  },
  {
    title: "App Block Integrations",
    description:
      "Cleaner, more stable app installations using Shopify 2.0 App Blocks, reducing theme conflicts and helping maintain strong store performance.",
  },
  {
    title: "Metafields & Dynamic Content Setup",
    description:
      "Structured metafields that organize product, collection, and page content, making your store easier to maintain and ready to scale with new features.",
  },
  {
    title: "Speed & Performance Optimization",
    description:
      "Code cleanup, asset refinement, and script optimization that improve load times, enhance stability, and support stronger conversion performance.",
  },
] as const;

export const SHOPIFY_2_0_SERVICES_IMAGE = {
  src: "/images/2025/11/main_banner_landscape-1-1.webp",
  alt: "Shopify mobile analytics dashboard showing performance and conversion rate metrics",
  width: 2564,
  height: 2489,
} as const;

export type ProcessItemData = {
  title: string;
  description: string;
};

export const SHOPIFY_2_0_SERVICES_PROCESS_ITEMS: readonly ProcessItemData[] = [
  {
    title: "1. Systems Audit",
    description:
      "We review your tech stack, workflows and data gaps to understand what Shopify must connect with and what problems the integration must solve.",
  },
  {
    title: "2. Data Mapping",
    description:
      "We outline how orders, inventory, customers and financial data should move between systems to ensure clean structure and reliable performance.",
  },
  {
    title: "3. Build & Configure",
    description:
      "We set up integrations or develop custom API connections so Shopify syncs smoothly with ERPs, CRMs, 3PLs and other core business systems.",
  },
  {
    title: "4. Test & Validate",
    description:
      "We test real order flows, stock updates and customer syncs to confirm everything stays accurate, fast and consistent under daily operations.",
  },
  {
    title: "5. Go Live",
    description:
      "We launch the integration, monitor early activity and verify that all data syncs, routing rules and automations work the way they should.",
  },
  {
    title: "6. Ongoing Support",
    description:
      "We maintain the integration, handle updates, fix data issues and optimize workflows so your operations scale smoothly with growth.",
  },
] as const;

export type ShopifyFaqItem = {
  question: string;
  answer: string;
};


export const SHOPIFY_2_0_SERVICES_FAQS: readonly ShopifyFaqItem[] = [
  {
    question: "1. What is Shopify Online Store 2.0?",
    answer:
      "Shopify Online Store 2.0 is Shopify’s updated theme framework that offers faster performance, sections on every page, improved metafields, and cleaner development. It allows brands to build more flexible layouts, manage content easily, and run stores that are faster, more stable, and easier to scale.",
  },
  {
    question: "2. Do I need a full redesign to upgrade to Shopify 2.0?",
    answer:
      "A redesign is not required. Many stores keep their current design and upgrade only the underlying structure. If you need UX or layout improvements, we can redesign during the upgrade, but it remains optional.",
  },
  {
    question: "3. Will upgrading to Shopify 2.0 affect my live store?",
    answer:
      "No. All development happens in a separate theme environment, so your live store stays unaffected. We test every template, feature, and app before publishing the new theme.",
  },
  {
    question: "4. How long does a Shopify 2.0 migration take?",
    answer:
      "Most upgrades take one to three weeks, depending on your theme complexity, number of templates, and custom features. Heavier stores may need additional planning, but timelines are always clear upfront.",
  },
  {
    question: "5. Will my existing apps work after moving to Shopify 2.0?",
    answer:
      "Most modern apps support Shopify 2.0 and install through App Blocks. We test each integration, remove old scripts, and ensure performance stays clean and stable.",
  },
  {
    question: "6. Can my team manage pages more easily after upgrading to 2.0?",
    answer:
      "Yes. Shopify 2.0 gives you flexible sections and structured metafields that make page updates, layouts, and campaigns much easier—without needing a developer.",
  },
  {
    question: "7. Does Shopify 2.0 improve store speed and SEO?",
    answer:
      "Yes. Shopify 2.0 improves performance through cleaner code, lighter templates, and optimized rendering. Faster load times support better SEO and provide a smoother customer experience.",
  },
  {
    question: "8. Can you add new features during the Shopify 2.0 upgrade?",
    answer:
      "Yes. Shopify 2.0 supports modular development, making it easier to add custom features, filters, bundles, and unique layouts without affecting stability.",
  },
  {
    question: "9. Is any data lost when moving to Shopify 2.0?",
    answer:
      "No. Upgrading does not affect your products, customers, orders, or store data. The process focuses on theme architecture, not backend content.",
  },
  {
    question: "10. How much does a Shopify 2.0 upgrade or rebuild cost?",
    answer:
      "Costs vary based on your theme, custom features, and number of templates. Simple upgrades cost less, while custom builds take more time. We provide a clear estimate after reviewing your store.",
  },
] as const;