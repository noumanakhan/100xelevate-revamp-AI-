
export type ShopifyMaintenanceServicesItem = {
  title: string;
  description: string;
};

export const SHOPIFY_MAINTENANCE_SERVICES_ACCORDION_LABEL = "Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys";

export const SHOPIFY_MAINTENANCE_ITEMS: readonly ShopifyMaintenanceServicesItem[] = [
  {
    title: "Theme Updates and Compatibility",
    description:
      "We update themes and ensure compatibility with Shopify releases so custom layouts, sections, and functionality continue working correctly.",
  },
  {
    title: "App Monitoring and Fixes",
    description:
      "We review installed apps, remove unused ones, and resolve conflicts to prevent errors that interrupt browsing or purchasing activity.",
  },
  {
    title: "Speed and Performance Checks",
    description:
      "We monitor page loading, resource usage, and performance metrics to maintain fast browsing and protect conversion as your store grows.",
  },
  {
    title: "Checkout and Payment Support",
    description:
      "We ensure checkout steps, payment methods, and validation scripts remain secure and functional across updates and peak activity periods.",
  },
  {
    title: "Security and Data Protection",
    description:
      "We apply security patches and perform safety checks to protect customer data, prevent vulnerabilities, and reduce operational risk.",
  },
  {
    title: "Bug Fixing and Troubleshooting",
    description:
      "We identify layout issues, functional errors, and display problems on any device and resolve them before shoppers encounter disruption.",
  },
  {
    title: "Backup and Rollback Safety",
    description:
      "We keep safe backups of your store and code so updates can be rolled back if needed, reducing risk during version or feature changes.",
  },
  {
    title: "Ongoing UX Improvements",
    description:
      "We review product pages, navigation, and key journeys and apply small refinements that protect conversion without redesigning the store.",
  },
] as const;

export const SHOPIFY_MAINTENANCE_SERVICES_IMAGE = {
  src: "/images/2025/10/image-Photoroom-17-2-1.png",
  alt: "Shopify mobile analytics dashboard showing performance and conversion rate metrics",
  width: 2564,
  height: 2489,
} as const;

export type ProcessItemData = {
  title: string;
  description: string;
};

export const SHOPIFY_MAINTENANCE_PROCESS_ITEMS: readonly ProcessItemData[] = [
  {
    title: "1. Initial Store Review",
    description:
      "We review your theme, apps, code, and performance to understand where risks exist and what needs regular attention as your store continues to grow.",
  },
  {
    title: "2. Maintenance Plan Setup",
    description:
      "We set schedules for updates, security checks, backups, and monitoring, making sure your store receives ongoing care instead of occasional fixes.",
  },
  {
    title: "3. Regular Updates and Monitoring",
    description:
      "We apply updates, monitor apps, and track performance so your store stays compatible, fast, and dependable as Shopify and integrations change.",
  },
  {
    title: "4. Issue Resolution and Optimization",
    description:
      "If something breaks or slows down, we fix it quickly and apply improvements that protect the checkout experience and prevent revenue loss.",
  },
  {
    title: "5. Reporting and Continuous Support",
    description:
      "We share regular status updates and assist with new needs, so you always know your store is maintained, secure, and ready for continued growth.",
  },
] as const;

export type ShopifyFaqItem = {
  question: string;
  answer: string;
};


export const SHOPIFY_MAINTENANCE_FAQS: readonly ShopifyFaqItem[] = [
  {
    question: "1. What is included in Shopify maintenance services?",
    answer:
      "Shopify maintenance covers theme and app updates, performance checks, compatibility fixes, bug troubleshooting, security updates, and ongoing monitoring. The goal is to keep your store secure, stable, fast, and functional as Shopify releases changes or integrations evolve.",
  },
  {
    question: "2. How often should Shopify maintenance be done?",
    answer:
      "Most stores require monthly maintenance to stay compatible with Shopify updates and new app releases. High-volume or international stores usually need weekly checks for performance, speed, and checkout stability. The goal is to prevent issues rather than reacting after something breaks.",
  },
  {
    question: "3. Will theme or app updates remove my custom code?",
    answer:
      "Custom code should not be affected when updates are handled correctly. We review every update, test compatibility, and create backups before applying changes. If needed, we reapply important custom work or roll back safely without disrupting design, sections, or functionality.",
  },
  {
    question: "4. Do you manage third-party apps and integrations? ",
    answer:
      "Yes. We review installed apps, remove unused ones, fix conflicts, and ensure compatibility with your theme. Most Shopify issues come from apps, so continuous monitoring prevents broken layouts, checkout issues, and performance slowdowns caused by newly released versions or feature updates.",
  },
  {
    question: "5. Will Shopify maintenance improve my store's speed?",
    answer:
      "Speed improves as unused scripts, outdated apps, and heavy media are removed or optimized. Ongoing checks maintain fast loading times and protect conversion rates. Performance is an important part of Shopify maintenance because stores slow down naturally as products, apps, and traffic increase.",
  },
  {
    question: "6. Can Shopify maintenance help conversions?",
    answer:
      "Yes. Maintaining fast loading, reliable checkout, and mobile performance protects conversion rates, especially during campaigns. Many conversions are lost because of slow pages, broken apps, or checkout interruptions that only appear after updates. Continuous maintenance prevents these issues early.",
  },
  {
    question: "7. Do you support Shopify Plus stores?",
    answer:
      "Yes. We manage Shopify Plus, custom themes, international setups, and high-traffic stores. We also work with custom integrations, advanced apps, and scaling performance needs, which are common for Plus brands. Maintenance ensures stability across multiple markets and internal teams.",
  },
  {
    question: "8. Do you provide emergency or high-priority fixes?",
    answer:
      "Yes. Critical issues such as checkout errors, broken payment steps, or app conflicts can be handled urgently. We prioritise revenue-impacting problems first and apply temporary or permanent fixes depending on urgency. Most emergency issues are prevented through regular monitoring and updates.",
  },
  {
    question: "9. How much does Shopify maintenance cost?",
    answer:
      "Pricing depends on store size, installed apps, custom features, and required support volume. Most brands choose a monthly plan that covers ongoing monitoring, updates, and optimisation. This is usually more cost-effective than paying emergency development fees after issues appear.",
  },
  {
    question: "10. Can you work with my current theme and setup?",
    answer:
      "Yes. We work with any Shopify theme and keep your existing custom work intact. Maintenance includes compatibility checks, app monitoring, and performance improvements based on your current design, layout, and integrations without forcing a rebuild or redesign unless requested.",
  },
] as const;