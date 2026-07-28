"use client";

import React, { useState } from "react";
import { CRODoctorModal } from "./CRODoctorModal";

const StarIcon = () => (
  <svg
    aria-hidden="true"
    className="w-4 h-4 mr-[2px] fill-black shrink-0"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
  </svg>
);

const urlRegex = /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;

export const ScanWebPage = () => {
  const [url, setUrl] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [modalUrl, setModalUrl] = useState<string | null>(null);

  const isValid = urlRegex.test(url.trim());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) {
      setShowTooltip(true);
      return;
    }
    const fullUrl = /^https?:\/\//i.test(url.trim())
      ? url.trim()
      : `https://${url.trim()}`;
    setModalUrl(fullUrl);
  };

  return (
    <>
      {modalUrl && (
        <CRODoctorModal
          websiteUrl={modalUrl}
          onClose={() => setModalUrl(null)}
        />
      )}
      <section className="w-full md:px-[32px] px-[16px]">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center md:pt-[86px] py-[32px] md:pb-16 md:gap-5 gap-4">
          {/* Stars + subtitle */}
          <div className="flex flex-wrap items-center justify-center gap-[10px]">
            <div
              className="flex items-center "
              itemScope
              itemType="https://schema.org/Rating"
              itemProp="reviewRating"
              role="img"
              aria-label="Rated 5 out of 5"
            >
              <meta itemProp="worstRating" content="0" />
              <meta itemProp="bestRating" content="5" />
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="md:text-base md:leading-[20px] leading-[22px] text-sm text-[#707070]">
              180+ Shopify brands increased revenue by 27% on average
            </p>
          </div>

          {/* Heading */}
          <h1 className="xl:text-[52px] xl:leading-[58px] md:text-[44px] md:leading-[46px] text-[39px] leading-[39px] font-semibold text-center text-black md:max-w-[620px]">
            Stop Losing Sales.
            <br />
            <span className="text-[#6F6F6F]">Quickly </span>
            Identify &amp; Fix Hidden{" "}
            <span className="text-[#6F6F6F]">Revenue Leaks.</span>
          </h1>

          {/* URL Form */}
          <form
            id="CRO_doctor"
            name="New Form"
            aria-label="New Form"
            onSubmit={handleSubmit}
            className="w-full md:max-w-2xl md:py-[10px]"
            noValidate
          >
            <div className="flex w-full md:flex-row flex-col items-center gap-[10px]">
              <div className="flex items-stretch rounded-[10px] w-full border border-[#B1B1B1] h-[40px]">
                {/* https:// prefix */}
                <span className="flex items-center px-4 bg-gray-50 border-r rounded-l-[10px] border-[#B1B1B1] text-gray-500 text-sm whitespace-nowrap select-none h-full">
                  https://
                </span>

                {/* URL input */}
                <div className="flex-1 min-w-0 h-full ">
                  <input
                    type="text"
                    id="form-field-field_1cc3ad5"
                    name="form_fields[field_1cc3ad5]"
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                      setShowTooltip(false);
                    }}
                    placeholder="www.example.com"
                    required
                    className="w-full h-full px-4 py-2 mb-[10px] text-sm outline-none text-[#707070] bg-white rounded-r-[10px]"
                    aria-describedby="url-tooltip"
                    aria-invalid={!isValid && url.length > 0}
                  />
                  {showTooltip && (
                    <div
                      id="url-tooltip"
                      role="tooltip"
                      className="flex justify-center text-[#FF0000] text-[12px]"
                    >
                      Please enter a valid URL like example.com
                    </div>
                  )}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="CRO-btn"
                onMouseEnter={() => {
                  if (!isValid) setShowTooltip(true);
                }}
                onMouseLeave={() => setShowTooltip(false)}
                className="
        px-9 h-[40px] max-md:w-full
        bg-black border text-white text-sm font-medium
        disabled:opacity-40 disabled:cursor-not-allowed
        rounded-full whitespace-nowrap
        transition-all duration-300 ease-in-out
        hover:text-[15px]
    "
                aria-disabled={!isValid}
              >
                Scan URL
              </button>
            </div>
          </form>

          {/* Description */}
          <p className="md:text-[16px] text-sm text-[#707070] text-center max-w-[837px] leading-[22px] md:leading-[20px]">
            See what&apos;s secretly draining money from your Shopify store. Our
            proven process has helped store owners recover millions in lost
            revenue, and now it&apos;s your turn.
          </p>
        </div>
      </section>
    </>
  );
};
