import { ButtonLink } from "@/components/shared/ButtonLink";

const processSteps = [
  {
    step: "Step 01",
    title: "1. Discovery & Planning",
    description:
      "Full review of your current Salesforce Commerce Cloud platform, architecture, data schemas, integrations, and business requirements to build a clear roadmap.",
  },
  {
    step: "Step 02",
    title: "2. Data Migration",
    description:
      "Secure, validated transfer of product catalogs, customer profiles, order history, blog posts, and custom metafield records with zero data loss.",
  },
  {
    step: "Step 03",
    title: "3. Design & Development",
    description:
      "Tailored frontend storefront build using Shopify 2.0 theme best practices, custom Liquid/Hydrogen components, and optimized UX.",
  },
  {
    step: "Step 04",
    title: "4. Testing & Quality Assurance",
    description:
      "Rigorous end-to-end functionality testing, mobile responsiveness, performance audits, checkout validation, and edge-case testing.",
  },
  {
    step: "Step 05",
    title: "5. Launch & Ongoing Support",
    description:
      "Controlled DNS cutover with 100% 301 URL redirect preservation for SEO, followed by hands-on post-launch monitoring and optimization.",
  },
];

export default function HowToMigrateSalesforce() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Our Proven Migration Process
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            A structured, 5-step enterprise migration methodology designed to protect your data, SEO, and revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {processSteps.slice(0, 3).map((item, index) => (
            <div key={index} className="bg-[#f7f7f7] p-6 rounded-2xl border border-gray-100">
              <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">{item.step}</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {processSteps.slice(3, 5).map((item, index) => (
            <div key={index} className="bg-[#f7f7f7] p-6 rounded-2xl border border-gray-100">
              <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">{item.step}</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <ButtonLink href="/book-a-demo" variant="solid">
            Book a free consultation
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
