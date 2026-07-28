export type ProcessItemData = {
  title: string;
  description: string;
};

export const SHOPIFY_APP_DEVELOPMENT_PROCESS_ITEMS: readonly ProcessItemData[] =
  [
    {
      title: "1. Discovery & Planning",
      description:
        "We start by identifying your goals, integrations, and workflow challenges. Then we map out a scalable solution and clear project timeline.",
    },
    {
      title: "2. Architecture & UX Design",
      description:
        "Our design-first approach ensures your app feels intuitive for your team and customers. Built with Shopify Polaris for a consistent experience.",
    },
    {
      title: "3. Development & Integration",
      description:
        "Using Node.js, React, and Laravel, we build robust, future-proof Shopify apps that integrate flawlessly with your existing store setup.",
    },
    {
      title: "4. Testing, QA & Security",
      description:
        "Rigorous QA ensures your app performs under scale with secure code, data validation, and performance benchmarks.",
    },
    {
      title: "5. Launch & Maintenance",
      description:
        "Once live, we monitor usage, resolve feedback quickly, and enhance features for long-term value.",
    },
  ] as const;

export const SHOPIFY_APP_FEATURES_ITEMS: readonly {
  title: string;
  description: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}[] = [
  {
    title: "Shopify Experts, Not Generalists",
    description:
      "Our developers have built over 100 custom Shopify apps for leading global and US based DTC brands, from automation systems to advanced analytics tools.",
    image: "/images/2025/02/Step_1.svg.png",
    alt: "Shopify experts icon",
    width: 60,
    height: 61,
  },
  {
    title: "Performance-Driven Architecture",
    description:
      "We optimize for speed, scalability, and conversion, ensuring your app enhances store performance rather than slowing it down.",
    image: "/images/2025/02/Step_2.svg.png",
    alt: "Performance architecture icon",
    width: 60,
    height: 61,
  },
  {
    title: "Data & CRO-Backed Development",
    description:
      "Every app we build aligns with your conversion and AOV goals, integrating insights from analytics, heatmaps, and user behavior data.",
    image: "/images/2025/02/Step_3.svg.png",
    alt: "Data driven development icon",
    width: 60,
    height: 61,
  },
  {
    title: "Full Lifecycle Support",
    description:
      "From idea validation to App Store submission and maintenance, our team manages your entire app journey end to end.",
    image: "/images/2025/02/Step_3.svg.png",
    alt: "Lifecycle support icon",
    width: 60,
    height: 61,
  },
] as const;
