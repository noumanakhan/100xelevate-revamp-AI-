"use client";

import React, { useState } from "react";
import Link from "next/link";
import statesData from "@/content/states.json";

interface City {
  name: string;
  state: string;
  slug: string;
}

interface StateEntry {
  id: string;
  name: string;
  serviceSlug: string;
  serviceName: string;
  cities: City[];
}

// Exact column order as displayed on the live site
const STATE_ORDER = [
  // Column 1
  "alabama",
  "california",
  "florida",
  "illinois",
  "louisiana",
  "michigan",
  "montana",
  "new-jersey",
  "north-dakota",
  "pennsylvania",
  "tennessee",
  "virginia",
  // Column 2
  "alaska",
  "colorado",
  "georgia",
  "indiana",
  "maine",
  "minnesota",
  "nebraska",
  "new-mexico",
  "ohio",
  "rhode",
  "texas",
  "washington",
  // Column 3
  "arizona",
  "connecticut",
  "hawaii",
  "iowa",
  "maryland",
  "mississippi",
  "nevada",
  "new-york",
  "oklahoma",
  "south-carolina",
  "utah",
  "wisconsin",
  // Column 4
  "arkansas",
  "delaware",
  "idaho",
  "kansas",
  "massachusetts",
  "missouri",
  "new-hampshire",
  "north-carolina",
  "oregon",
  "south-dakota",
  "vermont",
  "wyoming",
];

// Chevron icons for outer accordion
const ChevronUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-4 h-4 fill-white"
    aria-hidden="true"
  >
    <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
  </svg>
);

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-4 h-4 fill-white"
    aria-hidden="true"
  >
    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
  </svg>
);

// Angle icons for inner state accordions
const AngleUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-[10px] h-3 fill-white"
    aria-hidden="true"
  >
    <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
  </svg>
);

const AngleDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-[10px] h-3 fill-white"
    aria-hidden="true"
  >
    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
  </svg>
);

// Inner state accordion component
const StateAccordion = ({
  state,
  baseUrl,
  baseText,
}: {
  state: StateEntry;
  baseUrl: string;
  baseText: string;
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-[3px] border">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center gap-[10px] px-[10px] "
        aria-expanded={open}
      >
        <span className="text-white text-[16px] font-[300]">{state.name}</span>
        {open ? <AngleUp /> : <AngleDown />}
      </button>
      {open && (
        <ul className="bg-black p-[10px]">
          {state.cities.map((city) => (
            <li key={city.slug}>
              <Link
                href={`/${baseUrl}/${city.slug.toLowerCase().replace(/-state$/, "")}/`}
                className="block  text-[14px] text-white leading-[28px] font-[300]"
              >
                {baseText} {city.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const LocationsSection = ({
  baseUrl = "shopify-app-development-agency",
  baseText = "Shopify App Agency in",
}: {
  baseUrl?: string;
  baseText?: string;
}) => {
  const [locationsOpen, setLocationsOpen] = useState(false);

  const locationData =
    (statesData as Record<string, Record<string, StateEntry>>)[baseUrl] ?? {};
  const statesArray = STATE_ORDER.map((id) => locationData[id]).filter(Boolean);
  const COLUMN_SIZE = Math.ceil(statesArray.length / 4);
  const columns = [
    statesArray.slice(0, COLUMN_SIZE),
    statesArray.slice(COLUMN_SIZE, COLUMN_SIZE * 2),
    statesArray.slice(COLUMN_SIZE * 2, COLUMN_SIZE * 3),
    statesArray.slice(COLUMN_SIZE * 3),
  ];

  return (
    <section className="w-full px-[10px]">
      <div className="max-w-[1400px] w-full mx-auto pb-[50px] gap-5">
        {/* Outer accordion header */}
        <button
          onClick={() => setLocationsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between p-5 bg-black cursor-pointer "
          aria-expanded={locationsOpen}
        >
          <span className="text-white text-base ">Locations</span>
          {locationsOpen ? <ChevronUp /> : <ChevronDown />}
        </button>

        {/* Outer accordion content */}
        {locationsOpen && (
          <div className="-mt-[10px] bg-black">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
              {columns.map((col, colIndex) => (
                <div
                  key={colIndex}
                  className="md:p-[10px] py-[10px] px-[20px] "
                >
                  {col.map((state) => (
                    <StateAccordion
                      key={state.id}
                      state={state}
                      baseUrl={baseUrl}
                      baseText={baseText}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
