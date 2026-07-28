import React from "react";
import { DevelopmentProcess } from "../DevelopmentProcess";
import { SHOPIFY_INTEGRATION_PROCESS_ITEMS } from "@/constants/services/shopifyIntegrationService.constants";

const ShopifyIntegrationSetupProcess = () => {
  return (
    <div>
      <DevelopmentProcess
        heading="Our Shopify Integration Process"
        processItems={SHOPIFY_INTEGRATION_PROCESS_ITEMS}
        bgColor="bg-white"
        description="We can audit your systems and recommend the most efficient setup"
        button={{
          text: "Book a call",
          link: "/book-a-demo",
        }}
      />
    </div>
  );
};

export default ShopifyIntegrationSetupProcess;
