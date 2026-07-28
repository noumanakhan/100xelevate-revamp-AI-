/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function CalComponent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });

      cal("ui", {
        hideEventTypeDetails: true,
        hideBranding: true,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace="30min"
      calLink="100xelevate/30min"
      calOrigin="https://app.cal.com"
      style={{ width: "100%", height: "100%" }}
      config={{
        layout: "month_view",
        hideEventTypeDetails: true,
        hideBranding: true,
      }}
    />
  );
}
