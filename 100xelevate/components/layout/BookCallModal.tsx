"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

interface BookCallModalProps {
  onClose: () => void;
}

export default function BookCallModal({ onClose }: BookCallModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) onClose();
  }

  return (
    <>
      <Script src="https://app.cal.com/embed/embed.js" strategy="lazyOnload" />

      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Book a call"
      >
        <div className="relative w-full max-w-2xl bg-brand-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <p className="text-sm font-semibold text-brand-black">Book a call</p>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1 text-brand-gray hover:text-brand-black transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 20L4 4M20 4L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Cal.com inline embed */}
          <div
            id="my-cal-inline-modal"
            style={{ width: "100%", height: "600px", overflow: "scroll" }}
          />

          <Script id="cal-init-modal" strategy="lazyOnload">{`
            (function () {
              if (typeof Cal === "undefined") return;
              Cal("init", "30min", { origin: "https://cal.com" });
              Cal("inline", {
                elementOrSelector: "#my-cal-inline-modal",
                calLink: "100xelevate/30min",
                layout: "month_view",
              });
            })();
          `}</Script>
        </div>
      </div>
    </>
  );
}
