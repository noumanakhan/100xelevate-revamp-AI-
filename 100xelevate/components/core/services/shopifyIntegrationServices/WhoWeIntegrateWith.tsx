"use client";

import { useState } from "react";
import Image from "next/image";
import { TabButtons } from "@/components/shared/TabButtons";

type IntegrationLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

type IntegrationTab = {
  label: string;
  logos: IntegrationLogo[];
};

const tabs: IntegrationTab[] = [
  {
    label: "ERP, Accounting & CRM Systems",
    logos: [
      { name: "Zoho", src: "/images/2025/12/Zoho.png", width: 250, height: 80 },
      {
        name: "Salesforce",
        src: "/images/2025/12/Salesforce.png",
        width: 120,
        height: 80,
      },
      {
        name: "Oracle Netsuite",
        src: "/images/2025/12/Oracle-Netsuite.png",
        width: 250,
        height: 80,
      },
      {
        name: "Microsoft Dynamics 365",
        src: "/images/2025/12/Microsoft-Dynamics-365.png",
        width: 250,
        height: 80,
      },
    ],
  },
  {
    label: "3PL, WMS & Shipping Providers",
    logos: [
      { name: "USPS", src: "/images/2025/12/USPS.png", width: 250, height: 80 },
      {
        name: "ShipStation",
        src: "/images/2025/12/ShipStation.png",
        width: 250,
        height: 80,
      },
      {
        name: "Shippo",
        src: "/images/2025/12/Shippo.png",
        width: 250,
        height: 80,
      },
      {
        name: "ShippingEasy",
        src: "/images/2025/12/ShippingEasy.png",
        width: 250,
        height: 80,
      },
      {
        name: "ShipperHQ",
        src: "/images/2025/12/ShipperHQ.png",
        width: 250,
        height: 80,
      },
      {
        name: "ShipHawk",
        src: "/images/2025/12/ShipHawk.png",
        width: 250,
        height: 80,
      },
      {
        name: "Quickbooks",
        src: "/images/2025/12/Quickbooks.png",
        width: 250,
        height: 80,
      },
      {
        name: "FedEx",
        src: "/images/2025/12/FedEx.png",
        width: 250,
        height: 80,
      },
    ],
  },
  {
    label: "Marketplaces & Sales Channels",
    logos: [
      {
        name: "Walmart",
        src: "/images/2025/12/Wallmart.png",
        width: 250,
        height: 80,
      },
      {
        name: "ShareASale",
        src: "/images/2025/12/ShareASale.png",
        width: 250,
        height: 80,
      },
      {
        name: "Rakuten",
        src: "/images/2025/12/Rakuten.png",
        width: 250,
        height: 80,
      },
      { name: "eBay", src: "/images/2025/12/ebay.png", width: 250, height: 80 },
      {
        name: "Amazon Marketplace",
        src: "/images/2025/12/Amazon-Marketplace.png",
        width: 250,
        height: 80,
      },
    ],
  },
  {
    label: "Marketing & Customer Data Platforms",
    logos: [
      {
        name: "Stripe",
        src: "/images/2025/12/Stripe.png",
        width: 250,
        height: 80,
      },
      {
        name: "Shopify",
        src: "/images/2025/12/Shopify.png",
        width: 250,
        height: 80,
      },
      { name: "Sage", src: "/images/2025/12/Sage.png", width: 250, height: 80 },
      {
        name: "Authorize.Net",
        src: "/images/2025/12/Authorize-Net.png",
        width: 250,
        height: 80,
      },
      {
        name: "PayPal",
        src: "/images/2025/12/PayPal.png",
        width: 250,
        height: 80,
      },
    ],
  },
];

const WhoWeIntegrateWith = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeLogos = tabs[activeTab].logos;

  return (
    <section className="w-full bg-[#F7F7F7] px-2.5 py-[42px] md:py-[106px]">
      <div className="mx-auto flex wmd:gap-5 md:gap-16 gap-8 w-full max-w-[1420px] flex-col items-center xl:px-0 md:px-8 px-4">
        <h2 className="w-full text-[32px] font-semibold leading-[38px] text-center text-black md:text-[40px] md:leading-[46px] wmd:text-[48px] wmd:leading-[58px]">
          Who We Integrate With
        </h2>

        <p className="w-full max-w-[839px] text-[14px] text-center font-normal leading-[22px] text-[#707070] md:text-[16px] md:leading-5">
          These platforms represent the systems most commonly used by Shopify
          and Shopify Plus brands to manage inventory, fulfillment, finance, and
          customer data.
        </p>

        <div className="w-full min-w-0">
          <div className="w-full min-w-0 md:mt-[40px]">
            <TabButtons
              tabs={tabs}
              activeTab={activeTab}
              onChange={setActiveTab}
              buttonColor="bg-white"
            />
          </div>

          <div
            key={activeTab}
            className="mt-[53px] grid w-full gap-5 grid-cols-2 md:grid-cols-4 "
          >
            {activeLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex flex-1 items-center justify-center bg-white  py-10 "
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto w-full md:max-w-[100px] max-w-[80px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeIntegrateWith;
