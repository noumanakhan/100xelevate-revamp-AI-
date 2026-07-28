/**
 * Content and configuration for the Shopify Plus Development service page.
 */

export type ProcessItemData = {
  title: string;
  description: string;
};

export const SHOPIFY_PLUS_DEVELOPMENT_PROCESS_ITEMS: readonly ProcessItemData[] = [
  {
    title: "1. Discovery and Requirements",
    description:
      "We review your goals, current challenges and operational workflows. This helps us understand where your store stands today and define a clear Shopify Plus direction that supports long-term growth.",
  },
  {
    title: "2. Strategy and Technical Planning",
    description:
      "A structured plan is created that covers layouts, custom features, integrations, automation logic, and performance targets. This roadmap guides the entire build and keeps every step organized and predictable.",
  },
  {
    title: "3. Design and Experience Architecture",
    description:
      "We shape a responsive, consistent design system that reflects your brand and supports smooth customer journeys. Every layout, component and interaction is designed to improve clarity, speed and purchasing flow.",
  },
  {
    title: "4. Shopify Plus Development",
    description:
      "We build a strong Shopify Plus foundation with clean Liquid, optimized scripts and scalable structures. Custom features, integrations and Plus-exclusive capabilities are implemented with precision and stability in mind.",
  },
  {
    title: "5. Testing and Quality Review",
    description:
      "Your store is tested across devices, browsers and workflows. We check speed, accuracy, reliability and integration behaviour to ensure the entire system performs as expected under real-world conditions.",
  },
  {
    title: "6. Launch and Ongoing Support",
    description:
      "Your store goes live with full monitoring and assistance. We handle refinements, updates and performance improvements, helping your team settle confidently into the new structure and operate without uncertainty.",
  },
] as const;

/**
 * Content and configuration for the Shopify Plus Development "Solutions" section.
 */

export type ShopifyPlusSolutionItem = {
  title: string;
  description: string;
};

export const SHOPIFY_PLUS_SOLUTIONS_ACCORDION_LABEL = "Shopify Plus solution details";

export const SHOPIFY_PLUS_SOLUTIONS_ITEMS: readonly ShopifyPlusSolutionItem[] = [
  {
    title: "Custom Shopify Plus Development",
    description:
      "Full custom builds shaped for scale, strong performance and clear user flow, giving high-volume brands a reliable foundation for growth.",
  },
  {
    title: "Shopify Plus Theme Design",
    description:
      "Custom themes built with a structured UX, consistent UI and clean code so your store loads quickly and supports long-term expansion.",
  },
  {
    title: "Shopify Plus Migration",
    description:
      "Smooth migration from Magento, WooCommerce, BigCommerce or custom systems with accurate data transfer and preserved SEO structure.",
  },
  {
    title: "Shopify Plus B2B Development",
    description:
      "Trade and wholesale storefronts with custom pricing rules, account controls and workflows that support complex purchasing needs.",
  },
  {
    title: "Advanced Checkout Enhancements",
    description:
      "Refined checkout logic, helpful scripts and simplified steps that reduce friction and guide customers through a clearer path to purchase.",
  },
  {
    title: "Shopify Plus App Development",
    description:
      "Custom apps that extend your store's capabilities without slowing performance, built to match real operational and customer needs.",
  },
  {
    title: "Integrations and Workflow Automation",
    description:
      "ERP, CRM and fulfilment integrations paired with automated processes that improve accuracy, reduce manual tasks and support daily operations.",
  },
  {
    title: "Performance and Speed Optimization",
    description:
      "Code cleanup, script reduction and asset refinement that strengthen load times, improve stability and keep the store responsive across devices.",
  },
  {
    title: "Custom Feature Development",
    description:
      "App-free features built directly into the theme to keep the store lighter, faster and easier to maintain as your needs grow over time.",
  },
  {
    title: "Shopify Plus Maintenance and Support",
    description:
      "Ongoing updates, fixes and performance checks that help your Shopify Plus store remain secure, stable and ready for continued growth.",
  },
] as const;

export const SHOPIFY_PLUS_SOLUTIONS_IMAGE = {
  src: "/images/2025/11/Group-1000004263.webp",
  alt: "Shopify developer coding custom features and apps for high-performance eCommerce store",
  width: 2564,
  height: 2489,
} as const;

export type ShopifyPlusFaqItem = {
  question: string;
  answer: string;
};

export const SHOPIFY_PLUS_DEVELOPMENT_FAQS: readonly ShopifyPlusFaqItem[] = [
  {
    question: "1. What is Shopify Plus, and how is it different from Shopify?",
    answer:
      "Shopify Plus is Shopify's enterprise platform designed for high-volume brands. It offers advanced APIs, full checkout customization, unlimited staff accounts, automation tools, and priority support. Unlike standard Shopify, Plus provides the scalability, performance, and flexibility needed for fast-growing eCommerce businesses.",
  },
  {
    question: "2. When should a business upgrade to Shopify Plus?",
    answer:
      "Brands upgrade to Shopify Plus when they need stronger performance, custom checkout control, large-scale automation, multi-store management, or advanced integrations. It's ideal for high-traffic DTC brands, B2B retailers, and companies expanding internationally or outgrowing the limits of standard Shopify plans.",
  },
  {
    question: "3. Can Shopify Plus handle high-volume traffic and large sales events?",
    answer:
      "Yes. Shopify Plus can process thousands of transactions per minute and maintain reliable uptime during heavy traffic, flash sales, and product drops. Its cloud-based architecture supports large spikes without performance issues, making it ideal for fast-growing DTC and enterprise retailers.",
  },
  {
    question: "4. How much does Shopify Plus cost each month?",
    answer:
      "Shopify Plus typically starts at $2,300-$2,500 per month, with pricing tied to store revenue. There are no hosting or security fees, and Shopify Payments removes transaction costs. The cost varies based on sales volume, custom features, and enterprise requirements.",
  },
  {
    question: "5. Can Shopify Plus integrate with ERP, CRM, and other enterprise systems?",
    answer:
      "Yes. Shopify Plus supports deep integrations with ERP, CRM, OMS, WMS, subscription tools, and analytics platforms. Its robust APIs allow seamless data syncing across inventory, orders, customers, and fulfillment systems, giving brands unified operations and real-time visibility.",
  },
  {
    question: "6. What automation tools come with Shopify Plus?",
    answer:
      "Shopify Plus includes Shopify Flow, Launchpad, and Shopify Scripts. These tools automate workflows, promotions, inventory alerts, customer tagging, and checkout logic. Automation reduces manual tasks, improves accuracy, and streamlines operations for brands managing multiple markets or complex processes.",
  },
  {
    question: "7. Can Shopify Plus support global eCommerce expansion?",
    answer:
      "Yes. Shopify Plus enables multi-currency, multi-language, and multi-store setups from a single dashboard. Brands can localize pricing, content, checkout, and tax rules for each region, making international growth smoother and more manageable across global markets.",
  },
  {
    question: "8. How long does it take to build or migrate to Shopify Plus?",
    answer:
      "A standard Shopify Plus build takes 4-8 weeks. Complex stores with custom development, integrations, or large migrations often require 3-6 months. Agencies handle data transfer, SEO preservation, and technical setup to ensure a smooth launch without downtime.",
  },
  {
    question: "9. How customizable is the Shopify Plus checkout?",
    answer:
      "Shopify Plus offers full checkout customization through checkout.liquid and Shopify Scripts. Brands can modify layouts, apply dynamic pricing rules, add custom validations, personalize discounts, and optimize payment flows. This flexibility helps improve conversions and align checkout with brand identity.",
  },
  {
    question: "10. What ongoing support does Shopify Plus include?",
    answer:
      "Shopify Plus provides priority support, a Merchant Success Program, platform guidance, and 24/7 technical help. Brands also gain access to Shopify Plus Academy, exclusive tools, and dedicated partner resources. Many businesses pair this with a Shopify Plus agency for ongoing optimization.",
  },
] as const;
