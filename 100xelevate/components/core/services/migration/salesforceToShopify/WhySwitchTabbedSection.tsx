"use client";

import React, { useState } from "react";
import { TabButtons } from "@/components/shared/TabButtons";
import { ButtonLink } from "@/components/shared/ButtonLink";

const checkoutCapabilities = [
  "Shipping",
  "Bundles",
  "Taxes",
  "Subscriptions",
  "Duties",
  "Loyalty",
  "Payments",
  "Compliance",
  "Markets",
  "Pre-orders",
  "Wallets",
  "Flash selling",
  "Address completion",
  "Local delivery",
  "Buy online pickup in-store",
  "Oversell protection",
];

export default function WhySwitchTabbedSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Higher Conversion" },
    { label: "Lower Total Cost" },
    { label: "Innovation" },
    { label: "Usability" },
  ];

  return (
    <section className="bg-[#f7f7f7] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-[800px] mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Why Brands are switching from Salesforce to Shopify
          </h2>
        </div>

        <div className="mb-12">
          <TabButtons
            tabs={tabs}
            activeTab={activeTab}
            onChange={(index) => setActiveTab(index)}
          />
        </div>

        {/* Tab 1: Higher Conversion */}
        {activeTab === 0 && (
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6">
              Shopify converts better — World&apos;s best checkout with highest conversion rates
            </h3>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#f7f7f7] p-6 rounded-2xl border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">36%</div>
                <p className="text-sm text-gray-600">
                  Shopify checkout converts up to 36% better than Salesforce Commerce Cloud
                </p>
              </div>
              <div className="bg-[#f7f7f7] p-6 rounded-2xl border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">5%</div>
                <p className="text-sm text-gray-600">
                  Shop Pay&apos;s one-click checkout delivers a measurable lift in lower-funnel conversions
                </p>
              </div>
              <div className="bg-[#f7f7f7] p-6 rounded-2xl border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">50%</div>
                <p className="text-sm text-gray-600">
                  Brands using Shop Pay see conversion gains of up to 50%
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Shopify Checkout Is Built for Speed and Conversion
              </h4>
              <p className="text-gray-600 leading-relaxed text-base">
                Shopify continuously ships platform-level checkout improvements, performance updates, and security compliance directly to your storefront without requiring custom developer maintenance.
              </p>
            </div>

            {/* Enterprise checkout capability tags */}
            <div className="mb-12">
              <h5 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
                Enterprise Checkout Capabilities
              </h5>
              <div className="flex flex-wrap gap-2">
                {checkoutCapabilities.map((cap, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* 4 Stat Callouts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center bg-[#f7f7f7] p-6 rounded-2xl">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">91%</div>
                <div className="text-xs text-gray-500 mt-1">Higher Mobile Conversion</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">56%</div>
                <div className="text-xs text-gray-500 mt-1">Higher Desktop Conversion</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">4X</div>
                <div className="text-xs text-gray-500 mt-1">Faster Checkout</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">36%</div>
                <div className="text-xs text-gray-500 mt-1">Higher CVR vs SFCC</div>
              </div>
            </div>

            {/* 7 Feature blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <h5 className="font-semibold text-gray-900 text-base mb-2">1. All the flexibility you need</h5>
                <p className="text-sm text-gray-600">Checkout is extensible, measurable, and adapts seamlessly as your business grows.</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <h5 className="font-semibold text-gray-900 text-base mb-2">2. Buyers trust Shopify checkout</h5>
                <p className="text-sm text-gray-600">Familiar, predictable, and trusted checkout flow recognized worldwide.</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <h5 className="font-semibold text-gray-900 text-base mb-2">3. Integrate digital wallets in clicks</h5>
                <p className="text-sm text-gray-600">Instant Apple Pay & Google Pay setup vs long, complex Salesforce development cycles.</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <h5 className="font-semibold text-gray-900 text-base mb-2">4. Customize how your checkout looks</h5>
                <p className="text-sm text-gray-600">Control typography, color, borders, and brand elements with advanced Checkout Branding APIs.</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <h5 className="font-semibold text-gray-900 text-base mb-2">5. Change how your checkout works</h5>
                <p className="text-sm text-gray-600">Build UI extensions, post-purchase logic, discounts, and tracking pixels easily.</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                <h5 className="font-semibold text-gray-900 text-base mb-2">6. Extend or replace the backend</h5>
                <p className="text-sm text-gray-600">Leverage Shopify Functions for custom pricing rules, cart validations, and delivery workflows.</p>
              </div>
              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 lg:col-span-3">
                <h5 className="font-semibold text-gray-900 text-base mb-2">7. Collect rich customer data</h5>
                <p className="text-sm text-gray-600">Custom pixels and structured compliant data pipelines for accurate attribution.</p>
              </div>
            </div>

            <div className="text-center">
              <ButtonLink href="/book-a-demo" variant="solid">
                Get started
              </ButtonLink>
            </div>
          </div>
        )}

        {/* Tab 2: Lower Total Cost */}
        {activeTab === 1 && (
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
              Lower TCO — Reduce Total Cost of Ownership
            </h3>
            <p className="text-gray-600 mb-8 text-base leading-relaxed">
              Salesforce Commerce Cloud demands a high long-term investment with licensing tied to GMV (1–3%) and large ongoing developer budgets. Brands moving to Shopify significantly lower licensing, dev, and maintenance costs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h5 className="font-semibold text-gray-900 text-lg mb-2">Lower, More Predictable Licensing Costs</h5>
                <p className="text-sm text-gray-600">Shopify Plus offers flat, predictable pricing vs Salesforce&apos;s GMV-based percentage fees.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h5 className="font-semibold text-gray-900 text-lg mb-2">Developers Are Easier to Find and Cost Less</h5>
                <p className="text-sm text-gray-600">Business teams can self-serve daily catalog & promotional changes with far less reliance on specialized devs.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h5 className="font-semibold text-gray-900 text-lg mb-2">Cut Implementation Time in Half</h5>
                <p className="text-sm text-gray-600">Reduce launch timelines from months to weeks. Statistically &lt; 6 months for enterprise migrations.</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-2xl mb-10 text-center">
              <p className="text-lg md:text-xl">
                Salesforce brands can migrate to Shopify in as little as <strong className="text-green-400 font-bold">92 days</strong> including data migration, integrations, testing, and launch.
              </p>
            </div>

            <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              Higher ROI — See a Stronger Return on Your Platform
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-[#f7f7f7] p-6 rounded-2xl flex items-center gap-6">
                <div className="text-4xl font-bold text-gray-900">15%</div>
                <div className="text-sm text-gray-600">Average ROI increase across enterprise replatforms</div>
              </div>
              <div className="bg-[#f7f7f7] p-6 rounded-2xl flex items-center gap-6">
                <div className="text-4xl font-bold text-gray-900">22%</div>
                <div className="text-sm text-gray-600">Average revenue growth after migration to Shopify</div>
              </div>
            </div>

            <div className="text-center">
              <ButtonLink href="/book-a-demo" variant="solid">
                Book a free consultation
              </ButtonLink>
            </div>
          </div>
        )}

        {/* Tab 3: Innovation */}
        {activeTab === 2 && (
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6">
              Innovate at the speed of commerce
            </h3>

            {/* Stat Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-center bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">$1.7B</div>
                <div className="text-xs text-gray-500 mt-1">Invested in R&D in 2023</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">200+</div>
                <div className="text-xs text-gray-500 mt-1">New & updated features in 2023</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">100%</div>
                <div className="text-xs text-gray-500 mt-1">Focused on commerce, not CRM</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">200%</div>
                <div className="text-xs text-gray-500 mt-1">Product updates YoY</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 bg-[#f7f7f7] rounded-2xl">
                <h5 className="font-semibold text-gray-900 text-lg mb-2">Innovate Ahead of Your Competitors</h5>
                <p className="text-sm text-gray-600">Enjoy faster release cycles compared to Salesforce&apos;s slower update schedule.</p>
              </div>
              <div className="p-6 bg-[#f7f7f7] rounded-2xl">
                <h5 className="font-semibold text-gray-900 text-lg mb-2">Reach Modern Shoppers</h5>
                <p className="text-sm text-gray-600">Native tools for social commerce, AR product previews, and AI shopping assistants.</p>
              </div>
              <div className="p-6 bg-[#f7f7f7] rounded-2xl">
                <h5 className="font-semibold text-gray-900 text-lg mb-2">A Platform That Keeps Moving</h5>
                <p className="text-sm text-gray-600">100% commerce-only focus vs Salesforce&apos;s broader CRM and enterprise cloud priorities.</p>
              </div>
            </div>

            <div className="bg-[#f7f7f7] p-8 rounded-2xl mb-10">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                All in on commerce — Shouldn&apos;t Your Commerce Partner Be Fully Focused on Commerce?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
                <div>
                  <strong className="text-gray-900 block mb-1">Built for Commerce, Not Assembled:</strong>
                  Shopify core stack is unified natively, whereas Salesforce Commerce Cloud consists of acquired legacy platforms.
                </div>
                <div>
                  <strong className="text-gray-900 block mb-1">Deep Investment in the Future:</strong>
                  Over $1.7B annual R&D commitment ensuring your tech stack is always cutting edge.
                </div>
              </div>
            </div>

            <div className="text-center">
              <ButtonLink href="/book-a-demo" variant="solid">
                Book a free consultation
              </ButtonLink>
            </div>
          </div>
        )}

        {/* Tab 4: Usability */}
        {activeTab === 3 && (
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6">
              Where Simplicity Meets Technical Depth
            </h3>

            {/* Unmatched scale stat row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-center bg-gray-900 text-white p-6 rounded-2xl">
              <div>
                <div className="text-3xl font-bold text-green-400">99.99%</div>
                <div className="text-xs text-gray-300 mt-1">Platform Uptime</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white mt-1">Unthrottled APIs</div>
                <div className="text-xs text-gray-300">High-burst GraphQL endpoints</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white mt-1">Powerful Optionality</div>
                <div className="text-xs text-gray-300">Monolithic, Liquid 2.0, or Headless</div>
              </div>
            </div>

            {/* 5 Feature blocks with Eyebrows */}
            <div className="space-y-6 mb-10">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">USER FRIENDLINESS</span>
                <h5 className="text-lg font-semibold text-gray-900 mt-1 mb-1">Move Teams Faster</h5>
                <p className="text-sm text-gray-600">Intuitive admin dashboard empowers marketing and ops teams to launch campaigns without writing code.</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">CUSTOMIZATION AT EVERY LEVEL</span>
                <h5 className="text-lg font-semibold text-gray-900 mt-1 mb-1">Get Efficient Composability</h5>
                <p className="text-sm text-gray-600">Pick and choose best-of-breed apps or custom microservices without maintaining heavy legacy middleware.</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">INCREASED AGILITY</span>
                <h5 className="text-lg font-semibold text-gray-900 mt-1 mb-1">Move Quickly, Without Friction</h5>
                <p className="text-sm text-gray-600">Deploy theme updates and custom app logic in minutes, not multi-week release sprints.</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">REDUCED DEPENDENCY ON DEVELOPERS</span>
                <h5 className="text-lg font-semibold text-gray-900 mt-1 mb-1">Accessible, Affordable Development</h5>
                <p className="text-sm text-gray-600">Vast global talent pool for Liquid, React, and GraphQL developers at flexible price points.</p>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <span className="text-xs font-bold text-gray-400 tracking-wider uppercase">DEVELOPER FOCUS</span>
                <h5 className="text-lg font-semibold text-gray-900 mt-1 mb-1">Engineering That Pays Off</h5>
                <p className="text-sm text-gray-600">Modern tooling, CLI, Oxygen hosting, and Hydrogen framework built natively for developers.</p>
              </div>
            </div>

            {/* Stat Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="p-4 bg-[#f7f7f7] rounded-xl text-center text-sm font-semibold text-gray-800">
                Shopify powers 73% of the top 800 global DTC brands
              </div>
              <div className="p-4 bg-[#f7f7f7] rounded-xl text-center text-sm font-semibold text-gray-800">
                83% of fast-growing apparel brands run on Shopify (2PM)
              </div>
            </div>

            <div className="text-center">
              <ButtonLink href="/book-a-demo" variant="solid">
                Book a free consultation
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
