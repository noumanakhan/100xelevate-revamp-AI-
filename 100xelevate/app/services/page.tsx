import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import ServicesListHeader from "@/components/core/services/ServicesListHeader";
import ServicesListCard from "@/components/core/services/ServicesListCard";
import type { ServicesListCardData } from "@/components/core/services/ServicesListCard";

export const metadata: Metadata = buildMetadata({
  title: "Shopify Services - 100xelevate",
  description:
    "Get expert Shopify Services for design, development, optimization, migrations, audits, and ongoing support to strengthen your store.",
  path: "/services/",
});

const items: ServicesListCardData[] = [
  {
    id: "01",
    title: "Build a New Shopify Store",
    description:
      "We design and develop custom Shopify stores for DTC and B2B brands, optimized for performance, scalability, and conversions from day one.",
    slug: "build-a-new-shopify-store",
    options: [
      {
        label: "Custom Shopify store development",
        description:
          "End-to-end Shopify store development aligned with your brand, product catalog complexity, and operational requirements.",
        slug: "custom-shopify-store-development",
      },
      {
        label: "Shopify theme development & customization",
        description:
          "Custom Shopify theme development and customization focused on clean code, flexibility, performance, and consistent cross-device experiences.",
        slug: "shopify-theme-development-and-customization",
      },
      {
        label: "Shopify 2.0 development",
        description:
          "Modern Shopify 2.0 development enabling modular sections, improved performance, easier content management, and scalability.",
        slug: "shopify-2-0-development",
      },
      {
        label: "Shopify integration services",
        description:
          "Secure integrations with payment gateways, shipping tools, CRMs, ERPs, and third-party platforms supporting daily operations.",
        slug: "shopify-integration-services",
      },
      {
        label: "Launch readiness & quality assurance",
        description:
          "Comprehensive Shopify QA testing across devices, browsers, checkout flows, integrations, and critical customer journeys.",
        slug: "launch-readiness-and-quality-assurance",
      },
    ],
  },
  {
    id: "02",
    title: "Shopify UX and UI Design",
    description:
      "We design conversion-focused Shopify user experiences that reduce friction, build trust, and guide customers toward confident purchases.",
    slug: "services/shopify-ux-and-ui-design",
    options: [
      {
        label: "UX Research & Shopify Store Audits",
        description:
          "UX research identifying usability issues, friction points, and conversion blockers using behavioral data and real user interactions.",
      },
      {
        label: "Conversion-Focused UI Design",
        description:
          "UI design that prioritizes clarity, hierarchy, and trust signals to improve Shopify conversion rates.",
      },
      {
        label: "Mobile-First Shopify Design",
        description:
          "Mobile-first Shopify design ensuring fast interactions, intuitive navigation, and seamless shopping experiences on all devices.",
      },
      {
        label: "Shopify Landing Page Design",
        description:
          "High-converting Shopify landing page design for paid traffic, launches, collections, and product-focused campaigns.",
      },
      {
        label: "Product & Collection Page Design",
        description:
          "Optimized product and collection page layouts that highlight value, reduce hesitation, and increase add-to-cart rates.",
      },
      {
        label: "Cart & Checkout UX Optimization",
        description:
          "Shopify cart and checkout UX improvements reducing abandonment and improving purchase completion.",
      },
    ],
  },
  {
    id: "03",
    title: "Shopify Plus Development",
    description:
      "Advanced Shopify Plus development services for high-volume brands requiring performance, flexibility, automation, and enterprise scalability.",
    slug: "/services/shopify-plus-development",
    options: [
      {
        label: "Shopify Plus Store Setup",
        description:
          "Shopify Plus configuration for complex catalogs, high traffic volumes, and advanced operational workflows.",
      },
      {
        label: "Shopify Plus Checkout Customization",
        description:
          "Checkout customization using Shopify Plus capabilities to improve usability and reduce friction.",
      },
      {
        label: "Shopify Flow Automation",
        description:
          "Automation using Shopify Flow to streamline fulfillment, inventory, customer management, and internal processes.",
      },
      {
        label: "B2B on Shopify Plus",
        description:
          "Shopify Plus B2B solutions with wholesale pricing, gated access, and business-focused purchasing workflows.",
      },
      {
        label: "Headless Performance Scaling",
        description:
          "Performance optimization for headless and traditional Shopify Plus builds handling peak traffic, large catalogs, and high-conversion campaigns.",
        slug: "/headless-shopify",
      },

    ],
  },
  {
    id: "04",
    title: "Shopify Conversion Rate Optimization (CRO)",
    description:
      "We improve Shopify conversion rates through data-driven analysis, structured testing, and continuous optimization.",
    slug: "best-shopify-cro-agency",
    options: [
      {
        label: "Shopify Conversion Audits",
        description:
          "In-depth CRO audits identifying revenue leaks across product pages, funnels, cart, and checkout.",
      },
      {
        label: "Funnel Optimization",
        description:
          "Optimization of Shopify landing pages, product pages, cart, and checkout to improve purchase completion rates.",
      },
      {
        label: "Behavioral Analysis",
        description:
          "Heatmaps, session recordings, and analytics insights reveal how shoppers interact with your Shopify store.",
      },
      {
        label: "Offer & Messaging Optimization",
        description:
          "Refinement of value propositions, messaging, and calls-to-action influencing purchasing decisions.",
      },
      {
        label: "CRO Testing Roadmaps",
        description:
          "Prioritized CRO roadmaps focused on high-impact improvements aligned with business goals.",
      },
    ],
  },
  {
    id: "05",
    title: "Shopify Store Speed Optimization",
    description:
      "We optimize Shopify store speed to deliver faster load times, smoother interactions, and improved conversion performance.",
    slug: "shopify-2-0-development",
    options: [
      {
        label: "Shopify Performance Audits",
        description:
          "Detailed analysis identifying scripts, assets, and structural issues impacting Shopify performance.",
      },
      {
        label: "Asset Optimization",
        description:
          "Image, font, and script optimization improving load speed without compromising design quality.",
      },
      {
        label: "App & Code Cleanup",
        description:
          "Removal of unnecessary Shopify apps and redundant code reducing bloat and improving performance.",
      },
      {
        label: "Core Web Vitals Optimization",
        description:
          "Shopify speed optimizations aligned with Google Core Web Vitals performance standards.",
      },
      {
        label: "Ongoing Performance Monitoring",
        description:
          "Continuous monitoring to maintain Shopify speed as themes, apps, and content evolve.",
      },
    ],
  },
  {
    id: "06",
    title: "Shopify Audit",
    description:
      "A comprehensive Shopify audit uncovering issues affecting performance, usability, SEO, and conversions.",
    slug: "shopify-app-setup-optimization",
    options: [
      {
        label: "UX & Conversion Review",
        description:
          "Evaluation of Shopify user experience and conversion paths affecting trust and engagement.",
      },
      {
        label: "Performance & Speed Analysis",
        description:
          "Technical analysis identifying Shopify front-end and structural performance bottlenecks.",
      },
      {
        label: "Theme & Code Review",
        description:
          "Review of Shopify theme structure, code quality, and long-term maintainability.",
      },
      {
        label: "App Stack Evaluation",
        description:
          "Assessment of installed Shopify apps to identify conflicts, redundancies, and optimization opportunities.",
      },
      {
        label: "Actionable Audit Recommendations",
        description:
          "Clear, prioritized recommendations focused on impact, effort, and measurable business outcomes.",
      },
    ],
  },
  {
    id: "07",
    title: "Shopify SEO Services",
    description:
      "We improve Shopify organic visibility through technical SEO, content optimization, and site structure improvements that drive qualified traffic and revenue.",
    slug: "/services/shopify-seo-services",
    options: [
      {
        label: "Technical Shopify SEO",
        description:
          "Technical Shopify SEO focused on crawlability, indexing, site structure, page speed, and resolving issues impacting search engine visibility.",
      },
      {
        label: "On-Page Optimization",
        description:
          "On-page updates to meta titles, descriptions, headings, and product copy so pages align with target keywords, search intent, and conversions.",
      },
      {
        label: "Content SEO Strategy",
        description:
          "Content-driven Shopify SEO strategy targeting buyer-intent keywords through collections, product descriptions, blogs, and supporting pages.",
      },
      {
        label: "Site Structure Optimization",
        description:
          "Improving Shopify site architecture, navigation, and internal linking to strengthen topical relevance and distribute ranking authority.",
      },
      {
        label: "SEO Performance Tracking",
        description:
          "Ongoing Shopify SEO tracking, reporting, and optimization based on rankings, traffic quality, conversions, and revenue impact.",
      },
    ],
  },
  {
    id: "08",
    title: "A/B Testing for Shopify",
    description:
      "Structured A/B testing to validate changes and optimize Shopify experiences based on real customer behavior.",
    slug: "shopify-analytics-tracking-setup",
    options: [
      {
        label: "Test Hypothesis Development",
        description:
          "Data-backed test hypotheses built from analytics insights, CRO findings, and user behavior.",
      },
      {
        label: "A/B Test Setup & Execution",
        description:
          "Accurate A/B testing implementation without disrupting Shopify store performance or experience.",
      },
      {
        label: "Variant Design & Development",
        description:
          "Design and development of test variants aligned with Shopify UX standards and brand guidelines.",
      },
      {
        label: "Test Result Analysis",
        description:
          "Clear analysis explaining test outcomes, confidence levels, and conversion impact.",
      },
      {
        label: "Iteration & Continuous Optimization",
        description:
          "Applying winning variations and planning follow-up tests for sustained Shopify growth.",
      },
    ],
  },
  {
    id: "09",
    title: "Klaviyo Email & SMS Marketing for Shopify",
    description:
      "Retention marketing systems designed to increase repeat purchases and customer lifetime value.",
    slug: "klaviyo-email-sms-marketing-agency",
    options: [
      {
        label: "Klaviyo Account Setup & Integration",
        description:
          "Proper Klaviyo setup integrated seamlessly with Shopify customer and order data.",
      },
      {
        label: "Email & SMS Flow Strategy",
        description:
          "Automated Klaviyo flows including welcome, abandoned cart, post-purchase, and re-engagement sequences.",
      },
      {
        label: "Campaign Management",
        description:
          "Strategic campaign planning and execution driven by customer behavior and segmentation.",
      },
      {
        label: "Segmentation & Personalization",
        description:
          "Advanced segmentation enabling relevant, personalized email and SMS messaging.",
      },
      {
        label: "Performance Tracking & Optimization",
        description:
          "Ongoing optimization based on revenue contribution, engagement, and conversion performance.",
      },
    ],
  },
  {
    id: "10",
    title: "Shopify Migration Services",
    description:
      "Secure Shopify migrations completed without data loss, downtime, or negative SEO impact.",
    slug: "services/migration",
    options: [
      {
        label: "Platform-to-Shopify Migration",
        description:
          "Migration from Magento, WooCommerce, BigCommerce, or custom platforms to Shopify.",
      },
      {
        label: "Shopify Data Migration",
        description:
          "Accurate migration of products, customers, orders, and historical data.",
      },
      {
        label: "SEO & URL Structure Preservation",
        description:
          "Redirect mapping and URL preservation protecting organic search rankings.",
      },
      {
        label: "Theme Recreation & Improvement",
        description:
          "Rebuilding designs with improved Shopify UX, performance, and scalability.",
      },
      {
        label: "Post-Migration Quality Assurance",
        description:
          "Validation of data accuracy, functionality, and performance after migration.",
      },
    ],
  },
  {
    id: "11",
    title: "B2B Commerce on Shopify",
    description:
      "Shopify-powered B2B solutions built for wholesale workflows, custom pricing, and business purchasing needs.",
    slug: "b2b",
    options: [
      {
        label: "B2B Store Setup",
        description:
          "Dedicated or blended Shopify B2B storefronts designed for business buyers.",
      },
      {
        label: "Custom Pricing & Catalog Management",
        description:
          "Customer-specific pricing rules and controlled product visibility.",
      },
      {
        label: "Account & Role Management",
        description:
          "Multiple buyer accounts, permissions, and approval workflows.",
      },
      {
        label: "Wholesale Ordering & Reordering",
        description:
          "Simplified bulk ordering and repeat purchasing for B2B customers.",
      },
      {
        label: "ERP & System Integrations",
        description:
          "Integration with ERP, inventory, accounting, and fulfillment systems.",
      },
    ],
  },
  {
    id: "12",
    title: "Shopify Analytics and Tracking",
    description:
      "Accurate Shopify analytics setups delivering reliable data for confident growth decisions.",
    slug: "services/shopify-analytics-tracking-setup",
    options: [
      {
        label: "GA4 Setup & Configuration for Shopify",
        description:
          "Google Analytics 4 implementation capturing Shopify ecommerce events accurately.",
      },
      {
        label: "Server-Side Tracking",
        description:
          "Server-side tracking improving data accuracy and attribution reliability.",
      },
      {
        label: "Conversion & Funnel Tracking",
        description:
          "Visibility into Shopify customer journeys and revenue-driving touchpoints.",
      },
      {
        label: "Custom Analytics Dashboards",
        description:
          "Actionable dashboards for marketing, ecommerce, and leadership teams.",
      },
      {
        label: "Tracking Validation & QA",
        description:
          "Ongoing verification ensuring analytics accuracy after updates and changes.",
      },
    ],
  },
  {
    id: "13",
    title: "Shopify Maintenance and Support",
    description:
      "Shopify-powered B2B solutions built for wholesale workflows, custom pricing, and business purchasing needs.",
    slug: "services/shopify-maintenance-and-support",
    options: [
      {
        label: "Monthly Shopify Support Plans",
        description:
          "Dedicated support hours for updates, fixes, and enhancements.",
      },
      {
        label: "Emergency Shopify Issue Resolution",
        description:
          "Rapid response to critical Shopify issues affecting revenue or store availability.",
      },
      {
        label: "Theme & App Maintenance",
        description:
          "Ongoing updates maintaining compatibility, security, and performance.",
      },
      {
        label: "Performance & Stability Monitoring",
        description:
          "Proactive monitoring preventing issues before they impact customers.",
      },
      {
        label: "Feature Updates & Enhancements",
        description:
          "Continuous Shopify improvements aligned with evolving business needs.",
      },
    ],
  },
];

export default function Page() {
  return (
    <main>
      <ServicesListHeader />
      {items.map((item, index) => (
        <ServicesListCard
          key={item.id}
          className={index % 2 === 0 ? "bg-white" : "bg-[#F7F7F7]"}
          data={item}
        />
      ))}
    </main>
  );
}
