import { ButtonLink } from "@/components/shared/ButtonLink";
import Image from "next/image";

const BASE = "https://100xelevate.com/wp-content/uploads/2025/10";

const SERVICES = [
  {
    image: `${BASE}/services-1_1024x1024.webp`,
    alt: "Circular progress chart showing forty-nine percent Shopify speed improvement",
    title: "Analyze Performance Metrics Regularly",
    description:
      "We believe in crafting solutions that exceed the expectations of our clients. Our unwavering commitment to customer satisfaction drives us to create truly awe-inspiring eCommerce experiences that bring success to our Shopify merchants.",
  },
  {
    image: `${BASE}/services-1_1024x1024-1.webp`,
    alt: "Circular progress chart showing forty-nine percent Shopify speed improvement",
    title: "Optimize Images and Videos",
    description:
      "Utilize tools like Google Page Speed Insights, GTmetrix and Shopify's Online Store Speed report to continuously monitor and identify performance bottlenecks. Pay special attention to changes after updates or modifications to your site.",
  },
  {
    image: `${BASE}/services-2_1024x1024.webp`,
    alt: "Bar chart comparing previous and current Shopify desktop performance scores",
    title: "App Review and Optimization",
    description:
      "Utilize tools like Google Page Speed Insights, GTmetrix and Shopify's Online Store Speed report to continuously monitor and identify performance bottlenecks. Pay special attention to changes after updates or modifications to your site.",
  },
  {
    image: `${BASE}/services-3_1024x1024.webp`,
    alt: "Shopify admin panel showing restore theme option and support chat",
    title: "Theme Customization Review",
    description:
      "Conduct monthly audits of installed apps to identify and remove those that are unnecessary or not used, replacing them with more efficient alternatives when possible.",
  },
  {
    image: `${BASE}/services-4_1024x1024.webp`,
    alt: "Shopify Dawn theme dashboard showing version update and release notes",
    title: "Keep Your Theme and Apps Updated",
    description:
      "Monthly checks for unnecessary custom JavaScript or CSS within your theme, removing or optimizing it to avoid slowdowns. Consider migrating to a more performance-optimized theme if needed.",
  },
  {
    image: `${BASE}/services-5_1024x1024.webp`,
    alt: "Cloud network diagram showing CDN distributing content to multiple users",
    title: "Maximize CDN Utilization",
    description:
      "Ensure the Shopify Plus CDN is correctly configured for your store to enhance global content delivery speeds.",
  },
  {
    image: `${BASE}/services-6_1024x1024.webp`,
    alt: "Shopify checkout screen with express payment options and simplified form layout",
    title: "Checkout Process Optimization",
    description:
      "Streamline the checkout experience by minimizing form fields and unnecessary steps to reduce potential slowdowns.",
  },
  {
    image: `${BASE}/services-7_1024x1024.webp`,
    alt: "Laptop illustration showing Shopify database and performance optimization dashboard",
    title: "Database Management and Cleanup",
    description:
      "Periodically archive or delete old orders, products, and customer data to maintain a lean and efficient database structure.",
  },
  {
    image: `${BASE}/services-8_1024x1024.webp`,
    alt: "Workflow diagram showing application writing data to cache and database",
    title: "Caching Strategy Implementation",
    description:
      "Leverage browser and server caching to minimize load times for repeat visitors. Explore custom caching solutions beyond Shopify Plus's automatic handling for further optimization.",
  },
  {
    image: `${BASE}/services-9_1024x1024.webp`,
    alt: "Illustration showing redirect loop between two Shopify URLs X and Y",
    title: "Redirect Management",
    description:
      "Regularly audit and manage redirects to minimize their impact on site speed, keeping them to only those that are absolutely necessary.",
  },
  {
    image: `${BASE}/services-10_1024x1024.webp`,
    alt: "Shopify mobile site performance chart showing forty-nine percent overall improvement",
    title: "Mobile Performance Optimization",
    description:
      "Given the predominance of mobile traffic, ensure your site is fully optimized for mobile devices, focusing on responsive design and quick load times.",
  },
  {
    image: `${BASE}/services-11_1024x1024.webp`,
    alt: "Line graph showing Shopify store performance spikes and dips during February analysis",
    title: "Performance Budgeting",
    description:
      "Establish and adhere to performance budgets for page size and load times, regularly reviewing site performance against these benchmarks.",
  },
  {
    image: `${BASE}/services-12_1024x1024.webp`,
    alt: "Two browser windows illustrating Shopify analytics and performance monitoring process",
    title: "Analytics and Tracking Code Optimization",
    description:
      "Review and optimize the integration of analytics and tracking codes to ensure they do not adversely affect site speed. Reintegrate or optimize as necessary to maintain efficient data flow.",
  },
  {
    image: `${BASE}/services-13_1024x1024.webp`,
    alt: "Shopify performance comparison chart showing monthly improvements across site metrics",
    title: "Advanced Performance Analysis",
    description:
      "Utilize more advanced tools and techniques for in-depth analysis, such as web vitals and user behavior analysis, to pinpoint and address less obvious performance issues.",
  },
  {
    image: `${BASE}/services-14_1024x1024.webp`,
    alt: "Code analysis illustration showing magnifying glass and growth graph for optimization",
    title: "Custom Code Audits",
    description:
      "Regular audits of any custom code (Liquid, JavaScript, CSS) for efficiency and necessity, ensuring that only optimized code is running on your site.",
  },
];

export const StatsFlipGrid = () => {
  return (
    <section className="bg-[#F7F7F7] md:px-8 px-4 w-full mx-auto">
      <div
        className="w-full mx-auto md:py-24 py-8 flex flex-col gap-5"
        style={{ maxWidth: "1400px" }}
      >
        {/* Section heading */}
        <h2 className="wmd:text-10xl wmd:leading-14.5 w-full mx-auto md:text-[40px] md:leading-11.5 text-[32px] leading-9.5 max-w-210.5 font-semibold text-black text-center">
          Here are the Monthly Site Speed Services we will run:
        </h2>

        {/* Flip-card grid — 4 cols desktop, 2 tablet, 1 mobile, table-style borders */}
        <div className="grid grid-cols-1  md:grid-cols-4 md:p-[10px] md:gap-0 gap-5">
          {SERVICES.map((service) => (
            /* Card wrapper: perspective lives here; no overflow-hidden to preserve 3D */
            <div
              key={service.title}
              tabIndex={0}
              className="group/flip border border-[#0000001A] bg-white outline-none"
              style={{ perspective: "1000px" }}
            >
              {/* Rotating scene */}
              <div
                className="relative w-full transition-transform duration-700 ease-in-out
                  group-hover/flip:transform-[rotateY(180deg)]
                  group-focus-within/flip:transform-[rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* ── Front face — normal flow, sets card height ── */}
                <div
                  style={{ backfaceVisibility: "hidden" }}
                  className="p-[30px]"
                >
                  {/* Image area with light blue-gray background */}
                  <div className="relative bg-[#E8EBF5] aspect-560/416 mb-[6px]">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                      className="object-contain "
                    />
                  </div>
                  {/* Title below image */}
                  <div className="mt-2 mb-4 ">
                    <h3 className="text-black text-[16px] leading-[22px] font-semibold">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* ── Back face — absolutely overlays the full card ── */}
                <div
                  className="absolute inset-0 bg-white flex flex-col justify-start p-[30px] overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="text-black text-[16px] font-semibold leading-snug mb-5">
                    {service.title}
                  </h3>
                  <p className="text-[#707070] text-[14px] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="border border-[#0000001A] bg-white flex items-center justify-center flex-col gap-5 min-h-80 md:min-h-0">
            <h2 className="wmd:text-[22px] wmd:leading-[27px] max-w-[228px] w-full mx-auto text-center font-semibold md:text-[18px] md:leading-[27px] text-[22px] leading-[30px]">
              Site Speed & Optimization Service
            </h2>
            <ButtonLink href="/book-a-demo">Book a call today!</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};
