"use client";

import Link from "next/link";
import { useState } from "react";

type StateCity = {
  name: string;
  state: string;
  slug: string;
};

type StateMenuItem = {
  id: string;
  name: string;
  serviceSlug: string;
  serviceName: string;
  cities: StateCity[];
};

type StatesMenuProps = {
  activemenuuData: Record<string, StateMenuItem> | null;
  activeSubMenu: string | null;
};

function buildLocalizedHref(state: StateMenuItem, city: StateCity) {
  const normalizedSlug = city.slug.toLowerCase();

  if (normalizedSlug.endsWith("-state")) {
    return `/${state.serviceSlug}/${state.id}/`;
  }

  return `/${state.serviceSlug}/${normalizedSlug}/`;
}

export default function StatesMenu({
  activemenuuData,
  activeSubMenu,
}: StatesMenuProps) {
  const [activeStates, setActiveStates] = useState<Record<string, boolean>>({});

  const handleToggleSelectState = (id: string) => {
    setActiveStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const stateKeys = Object.keys(activemenuuData || {});
  const columnsCount = 4;
  const chunkSize = Math.ceil(stateKeys.length / columnsCount) || 1;

  const columns = Array.from({ length: columnsCount }, (_, index) =>
    stateKeys.slice(index * chunkSize, (index + 1) * chunkSize),
  );

  const renderState = (state: StateMenuItem) => {
    const isActive = !!activeStates[state.id];

    return (
      <div key={state.id} className="flex flex-col items-start px-[10px]">
        <button
          type="button"
          onClick={() => handleToggleSelectState(state.id)}
          className="flex w-full items-center justify-start gap-2 text-[16px] leading-[32px] font-light text-white  cursor-pointer"
        >
          <span>{state.name}</span>
          <span
            className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <div
          className={`grid w-full overflow-hidden transition-all duration-300 ease-in-out ${
            isActive ? "grid-rows-[1fr] py-[10px] opacity-100" : "grid-rows-[0fr] pt-0 opacity-0"
          }`}
        >
          <ul className="min-h-0 flex flex-col gap-1">
            {state.cities.map((city) => (
              <li
                key={`${state.id}-${city.slug}`}
                className="text-[14px] leading-[28px] font-light font-inter text-white hover:underline"
              >
                <Link href={buildLocalizedHref(state, city)}>
                  {state.serviceName} in {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`w-full grid grid-cols-1 xl:grid-cols-4 text-white transition-all duration-300 ${
        activeSubMenu ? "opacity-100" : "opacity-0"
      }`}
    >
      {columns.map((colKeys, index) => (
        <div key={index} className="flex flex-col">
          {colKeys.map((key) => {
            const state = activemenuuData?.[key];
            return state ? renderState(state) : null;
          })}
        </div>
      ))}
    </div>
  );
}
