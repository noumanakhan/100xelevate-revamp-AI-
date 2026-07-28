import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import BuildNewShopifyStoreBanner from "@/components/core/services/buildNewShopifyStore/BuildNewShopifyStoreBanner";
import ServiceImageTextSection from "@/components/core/services/buildNewShopifyStore/ServiceImageTextSection";
import ServiceImageTextCardSection from "@/components/core/services/buildNewShopifyStore/ServiceImageTextCardSection";
import ValuedPartnersGridSection from "@/components/core/services/ValuedPartnersGridSection";
import { LogosSection } from "@/components/core/services/buildNewShopifyStore/LogosSection";
import RecentShopifyStoresSlider from "@/components/core/services/buildNewShopifyStore/RecentShopifyStoresSlider";
import AskAISection from "@/components/core/home/AskAISection";

export const metadata: Metadata = buildMetadata({
  title: "Build a New Shopify Store - 100xelevate",
  description:
    "Custom Shopify store development by 100xelevate. Fast, scalable builds with ERP, POS, and B2B integrations.",
  path: "/build-a-new-shopify-store/",
});

const strategicDiscoveryImage = {
  src: "https://100xelevate.com/wp-content/uploads/2025/10/Group-3.webp",
  alt: "Shopify project planning meeting via Slack and Google Meet video call",
  width: 982,
  height: 1352,
} as const;

const strategicDiscoveryDescription =
  "At 100xelevate, from day one, you'll have a dedicated Slack channel where we're right beside you, not hidden behind emails or tickets. We kick things off with weekly strategy calls to keep everyone in sync and moving fast. Together, we'll map out every layer of your project, from system architecture and UX/UI to integrations and performance, all custom-built around how your business actually works. This is where strategy meets execution, and growth gets real.";

export default function Page() {
  return (
    <main>
      <BuildNewShopifyStoreBanner />
      <LogosSection />
      <ServiceImageTextSection
        imageAlign="left"
        heading="Strategic Discovery & Planning"
        subheading="Welcome to a partnership where your vision and business needs lead the way."
        description={strategicDiscoveryDescription}
        image={strategicDiscoveryImage}
      />
      <ServiceImageTextSection
        imageAlign="right"
        heading="Bespoke Design & System Integration"
        // subheading="Welcome to a partnership where your vision and business needs lead the way."
        description={
          "Your brand deserves more than a template, it needs a store that works as hard as you do. Our team crafts designs that blend perfectly with your identity while boosting performance at every level. From custom hybrid Shopify builds and private apps to seamless ERP, warehouse, POS, D2C, and B2B integrations, every solution is engineered for efficiency, scalability, and a flawless user experience across all devices."
        }
        image={{
          src: "/images/2025/10/image-76-1.webp",
          alt: "Bespoke design and system integration",
          width: 1000,
          height: 1000,
        }}
      />
      <ServiceImageTextSection
        imageAlign="left"
        heading="Seamless Integrations & Advanced Configurations"
        // subheading="Welcome to a partnership where your vision and business needs lead the way."
        description={
          "We make the complex feel effortless. Our team connects everything: your ERP, warehouse systems, and POS, so your entire operation runs like clockwork. Whether you’re selling D2C or B2B, we’ll configure your Shopify setup to move faster, work smarter, and scale without friction. It’s integration done right, clean, powerful, and built to grow with you."
        }
        image={{
          src: "/images/2025/10/image-77.webp",
          alt: "Seamless integrations and advanced configurations",
          width: 1000,
          height: 1000,
          className: "rounded-[20px]! overflow-hidden",
        }}
      />
      <ServiceImageTextCardSection
        imageAlign="right"
        heading={`
            Custom Development & <br className='md:hidden' /> Meticulous Implementation
          `}
        description="During development, we engineer every detail for performance. From advanced payment setups and shipping automation to compliance-ready systems, everything is crafted to fit your store perfectly. Our devs design custom apps and hybrid Shopify solutions that push your store's speed, functionality, and scalability to the next level, built for real growth, not just launch day."
        image={{
          src: "/images/2025/10/Group-4.webp",
          alt: "Shopify developer coding custom features and apps for high-performance eCommerce store",
          width: 2564,
          height: 2385,
        }}
      />
      <ServiceImageTextCardSection
        imageAlign="left"
        heading={`
            Rigorous Testing & <br className='md:hidden' /> Optimization
          `}
        description="Before launch, we put your Shopify store through a full-on performance bootcamp. Every feature,  from checkout flows to system integrations, is tested, refined, and stress-proofed to make sure everything runs flawlessly. We fine-tune for speed, SEO, and user experience, so your store loads fast, ranks high, and feels effortless for every visitor."
        image={{
          src: "/images/2025/10/Group-5.webp",
          alt: "Shopify developer coding custom features and apps for high-performance eCommerce store",
          width: 2564,
          height: 2385,
        }}
        cta={{
          text: "Test drive our services for free",
          href: "/request-a-free-audit",
        }}
      />
      <ServiceImageTextSection
        imageAlign="right"
        heading="Dedicated Launch & <br className='md:hidden' /> Post-Launch <br className='md:hidden' /> Enhancements"
        // subheading="Welcome to a partnership where your vision and business needs lead the way."
        description={
          "When your store goes live, we’re right there with you, every step of the way. Expect daily check-ins and instant access through your private Slack channel so any hiccup gets handled fast. Once you’re live, we don’t disappear, we double down. Our commitment to your success continues with ongoing enhancements and optimizations based on your feedback and performance metrics."
        }
        image={{
          src: "/images/2025/10/image-81.webp",
          alt: "Dedicated launch and post-launch enhancements",
          width: 1000,
          height: 1000,
        }}
      />
      <ServiceImageTextSection
        imageAlign="left"
        heading="Continued Growth & <br className='md:hidden' />  Strategic  <br className='md:hidden' /> Enhancements"
        subheading="After launch, we remain dedicated to your store's ongoing success."
        description={
          "Our team stays locked in, tracking your store’s performance and user behavior to keep things sharp, fast, and ahead of the curve. We roll out data-driven improvements, fresh features, and smart strategy updates so your Shopify store doesn’t just keep up, it leads the pack in eCommerce innovation."
        }
        image={{
          src: "/images/2025/10/Group-6.webp",
          alt: "Continued growth and strategic enhancements",
          width: 1000,
          height: 1000,
        }}
      />
      <ServiceImageTextSection
        imageAlign="right"
        heading="Choose 100xelevate for Unmatched Expertise"
        // subheading="Welcome to a partnership where your vision and business needs lead the way."
        description={
          "With 100xelevate, you’re choosing more than a Shopify developer; you’re selecting a partner committed to excellence. Our proven track recordand detailed attention to every aspect of your store’s development and launch ensure that you receive a premier eCommerce experience tailored to your business needs."
        }
        image={{
          src: "/images/2025/10/image-83.webp",
          alt: "Choose 100xelevate for unmatched expertise",
          width: 1000,
          height: 1000,
          className: "rounded-[20px]! overflow-hidden",
        }}
      />
      <RecentShopifyStoresSlider />
      <ValuedPartnersGridSection />
      <AskAISection/>
    </main>
  );
}
