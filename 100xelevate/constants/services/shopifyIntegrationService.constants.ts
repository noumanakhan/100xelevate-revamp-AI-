
export type ShopifyIntegrationServicesItem = {
  title: string;
  description: string;
};

export const SHOPIFY_INTEGRATION_SERVICES_ACCORDION_LABEL = "Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys";

export const SHOPIFY_INTEGRATION_ITEMS: readonly ShopifyIntegrationServicesItem[] = [
  {
    title: "ERP Integrations",
    description:
      "Connect Shopify with ERP platforms to sync orders, inventory, and financials, eliminating manual updates and operational delays.",
  },
  {
    title: "CRM Integrations",
    description:
      "Link customer profiles, purchase history, and marketing data to improve segmentation, personalization, and lifecycle retention.",
  },
  {
    title: "3PL, Shipping and Fulfillment Integrations",
    description:
      "Sync Shopify with warehouses and carriers for automated order routing, accurate tracking, and faster fulfillment workflows.",
  },
  {
    title: "Accounting and Finance Integrations",
    description:
      "Send orders, payouts, and tax data directly to accounting tools to prevent reconciliation errors and keep records consistent.",
  },
  {
    title: "Marketing & Analytics Integrations",
    description:
      "Integrate Shopify with analytics platforms and marketing tools to improve tracking accuracy and campaign performance.",
  },
  {
    title: "Payment & Subscription Integrations",
    description:
      "Integrate payment gateways and subscription systems for stable billing, flexible checkout options, and reliable renewals.",
  },
  {
    title: "Inventory, Product Information & PIM Integrations",
    description:
      "Centralize product attributes and inventory data across systems to keep listings accurate and updates consistent at scale.",
  },
  {
    title: "POS & Retail System Integrations",
    description:
      "Unify in-store and online sales by syncing POS inventory, orders, and customers for consistent, real-time retail operations.",
  },
  {
    title: "Multi-Warehouse Order Routing",
    description:
      "Apply automated routing rules to send orders to the right warehouse based on stock levels, location, and fulfillment speed.",
  },
  {
    title: "Marketplace Integrations (Amazon, eBay, Walmart)",
    description:
      "Connect Shopify with major marketplaces to sync listings, inventory, and orders, supporting multi-channel sales growth.",
  },
  {
    title: "Headless Commerce Integrations",
    description:
      "Integrate Shopify with headless front-ends to deliver faster storefronts, flexible architectures, and advanced customization.",
  },
  {
    title: "Custom API and Middleware Development",
    description:
      "Build custom API connections for systems without native apps to automate workflows and support complex business logic.",
  },
] as const;

export const SHOPIFY_INTEGRATION_SERVICES_IMAGE = {
  src: "/images/2025/10/image-Photoroom-17-2-1.png",
  alt: "Shopify mobile analytics dashboard showing performance and conversion rate metrics",
  width: 2564,
  height: 2489,
} as const;

export type ProcessItemData = {
  title: string;
  description: string;
};

export const SHOPIFY_INTEGRATION_PROCESS_ITEMS: readonly ProcessItemData[] = [
  {
    title: "1. Store Audit and Technical Planning",
    description:
      "We review your theme, apps, and structure to create a stable and scalable plan for your Shopify 2.0 upgrade, protecting your live store throughout.",
  },
  {
    title: "2. Information Architecture Setup",
    description:
      "We organize templates, sections, and metafields to create a clean, consistent structure that simplifies content management across your entire store.",
  },
  {
    title: "3. Shopify 2.0 Theme Build or Migration",
    description:
      "We develop or upgrade your theme with clean code and flexible layouts, creating a stable Shopify 2.0 foundation built for performance and growth.",
  },
  {
    title: "4. Content, Layout, and UX Integration",
    description:
      "We refine layouts and apply content across templates to improve clarity, mobile experience, and overall shopping flow throughout your store.",
  },
  {
    title: "5. Testing, Optimization, and Launch",
    description:
      "We test across devices, optimize performance, and ensure all features run smoothly before launching your Shopify 2.0 theme with full support.",
  },
] as const;

export type ShopifyFaqItem = {
  question: string;
  answer: string;
};


export const SHOPIFY_INTEGRATION_FAQS: readonly ShopifyFaqItem[] = [
  {
    question: "1. What is a Shopify integration and why do brands need it?",
    answer:
      "A Shopify integration links your store with systems like ERP, CRM, WMS, accounting, and marketing tools. It automates data flow for orders, inventory, customers, and fulfillment. This reduces manual work, prevents errors, improves speed, and supports scalable operations as your brand grows.",
  },
  {
    question: "2. What systems can be integrated with Shopify?",
    answer:
      "Shopify connects with ERP platforms, CRMs, WMS and 3PLs, accounting tools, POS systems, marketplaces, analytics platforms, and custom internal software. We integrate systems like NetSuite, SAP, Odoo, ShipBob, ShipStation, HubSpot, Klaviyo, QuickBooks, and Amazon to centralize your entire workflow.",
  },
  {
    question: "3. How long does a Shopify integration usually take?",
    answer:
      "Most integrations take two to six weeks depending on system complexity, data structure, order volume, and any custom workflow requirements. Projects involving ERPs, multi-warehouse setups, or custom APIs may take longer. Every integration timeline begins with a clear technical scope and data mapping plan.",
  },
  {
    question: "4. Do I need Shopify Plus for advanced integrations?",
    answer:
      "Many integrations work on standard Shopify. Shopify Plus becomes valuable when your brand manages high order volume, complex automation, custom checkout logic, or multi-system workflows. We assess your operational needs and recommend the right approach based on scale, data flow, and system limitations.",
  },
  {
    question: "5. Will integrations slow down my Shopify store or affect performance?",
    answer:
      "No. Integrations operate through APIs and webhooks independent of your storefront theme. When designed correctly, they have no impact on site speed. We use optimized data handling, queueing, and error management to ensure stable performance even during peak traffic or high-volume sales periods.",
  },
  {
    question: "6. Can you build custom workflows if off-the-shelf apps don’t fit our needs?",
    answer:
      "Yes. We build custom API connectors and middleware when apps cannot support your business rules. This includes custom order routing, inventory allocation, pricing logic, bundling rules, and multi-warehouse flows. Custom development ensures your integration matches your operational structure without compromise.",
  },
  {
    question: "7. Can you fix or replace an existing broken Shopify integration?",
    answer:
      "Yes. We audit your current setup, identify the root cause of sync failures, rebuild mapping, and stabilize the entire workflow. This includes correcting API limits, webhook issues, data conflicts, and warehouse or ERP logic. Our goal is to restore accuracy and long-term reliability.",
  },
  {
    question: "8. Will data sync in real time after integration?",
    answer:
      "Most integrations support real-time sync using Shopify webhooks for orders, customers, and inventory. Some systems only allow scheduled syncs based on API rules. We design the best approach for your platform to ensure accurate, timely updates across all connected systems.",
  },
  {
    question: "9. Can you integrate multiple warehouses or fulfillment partners with Shopify?",
    answer:
      "Pricing depends on store size, installed apps, custom features, and required support volume. Most brands choose a monthly plan that covers ongoing monitoring, updates, and optimisation. This is usually morYes. We set up multi-warehouse routing, real-time stock updates, 3PL connections, and custom logic for split shipments or location-based fulfillment. Integrations support partners like ShipBob, Deliverr, Amazon FBA, and custom WMS platforms to ensure fast, accurate order handling at scale.e cost-effective than paying emergency development fees after issues appear.",
  },
  {
    question: "10. Do you provide ongoing support after the integration goes live?",
    answer:
      "Yes. We offer ongoing monitoring, troubleshooting, API update management, workflow enhancements, and system expansion as your brand grows. Support ensures your integrations stay stable through Shopify updates, new channels, volume changes, and backend upgrades.",
  },
] as const;