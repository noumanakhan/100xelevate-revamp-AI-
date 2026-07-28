"use client";

import React, { useState } from "react";
import Image from "next/image";
import ShopifyPlusVerticalSlider from "../ShopifyPlusVerticalSlider";

const AUDIT_IMAGES = [
  { src: "/images/2025/10/audit-5_1024x1024.webp", alt: "Lander" },
  { src: "/images/2025/10/audit-4_1024x1024.webp", alt: "Lander" },
  { src: "/images/2025/10/audit-8_1024x1024.webp", alt: "Lander" },
  { src: "/images/2025/10/audit-7_1024x1024.webp", alt: "Lander" },
  { src: "/images/2025/10/audit-6_1024x1024.webp", alt: "Lander" },
  { src: "/images/2025/10/audit-1_1024x1024.webp", alt: "Lander" },
  { src: "/images/2025/10/audit-9_1024x1024.webp", alt: "Lander" },
];

const labelClass =
  "block text-[14px] font-[500] text-black mb-2 leading-[20px]";
const inputClass =
  "hover:scale-x-[1.02] w-full border border-transparent border-b border-b-black bg-transparent py-[8px] px-[16px] text-[14px] text-[#707070] placeholder-gray-400 focus:outline-none focus:border focus:border-[2px] focus:border-gray-100 focus:border-b-gray-500 focus:bg-white transition-all duration-150";
const inputClassError =
  "border-b-red-600 focus:border-b-red-600 focus:border-gray-100";

function inputPropsClass(hasError: boolean) {
  return hasError ? `${inputClass} ${inputClassError}` : inputClass;
}

export const BoostShopify = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Partial<typeof form>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validate = (data: typeof form) => {
    const errs: Partial<typeof form> = {};
    if (!data.firstName.trim()) errs.firstName = "First name is required.";
    if (!data.lastName.trim()) errs.lastName = "Last name is required.";
    if (!data.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!data.website.trim()) {
      errs.website = "Website URL is required.";
    } else {
      try {
        new URL(data.website);
      } catch {
        errs.website = "Please enter a valid URL (e.g. https://example.com).";
      }
    }
    if (!data.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Form submitted:", form);
    // e.preventDefault();
    // const errs = validate(form);
    // if (Object.keys(errs).length > 0) {
    //     setFieldErrors(errs);
    //     return;
    // }
    // setSubmitting(true);
    // setError(null);
    // try {
    //     const res = await fetch("/api/contact", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //             name: `${form.firstName} ${form.lastName}`.trim(),
    //             email: form.email,
    //             company: form.website,
    //             phone: "",
    //             budget: "",
    //             service: "Shopify Store Speed",
    //             howFound: "",
    //             message: form.message,
    //         }),
    //     });
    //     if (!res.ok) throw new Error("Submission failed");
    //     setSuccess(true);
    //     setForm({ firstName: "", lastName: "", email: "", website: "", message: "" });
    //     setFieldErrors({});
    // } catch {
    //     setError("Something went wrong. Please try again.");
    // } finally {
    //     setSubmitting(false);
    // }
  };

  return (
    <section className="w-full md:px-8 px-4 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col wmd:flex-row lg:items-start md:py-[86px] py-[32px] xl:gap-[74px] lg:gap-[64px] md:gap-[32px] gap-[16px]">
        {/* ── Left column: heading + form ── */}
        <div className="flex-1 flex flex-col md:gap-6 gap-4 min-w-0">
          <h3 className="wmd:text-[22px] wmd:leading-[27px] text-[16px] leading-[22px] font-semibold text-black ">
            🚀 Boost Your Shopify Store Speed
          </h3>

          <h1 className="md:mb-0 mb-4 xl:text-[52px] md:text-[44px] text-[36px] font-semibold xl:leading-[58px] md:leading-[46px] leading-[39px] text-black max-md:max-w-[300px]">
            Do You Feel the Need? The Need for{" "}
            <span className="hcolor2">Speed?</span>
          </h1>

          {success ? (
            <p className="text-green-600 font-medium">
              Thank you! We&apos;ll be in touch shortly.
            </p>
          ) : (
            <div className="p-5 bg-[#F7F7F7] max-w-[550px]">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col "
              >
                <div className="flex flex-wrap gap-4">
                  {/* First Name */}
                  <div className="flex-1 md:min-w-[45%] min-w-full">
                    <label htmlFor="speed-firstName" className={labelClass}>
                      First Name
                    </label>
                    <input
                      id="speed-firstName"
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className={inputPropsClass(!!fieldErrors.firstName)}
                      aria-invalid={fieldErrors.firstName ? true : undefined}
                      aria-describedby={
                        fieldErrors.firstName
                          ? "speed-firstName-error"
                          : undefined
                      }
                    />
                    {fieldErrors.firstName && (
                      <p
                        id="speed-firstName-error"
                        role="alert"
                        className="mt-1 text-sm text-red-600"
                      >
                        {fieldErrors.firstName}
                      </p>
                    )}
                  </div>
                  {/* Last Name */}
                  <div className="flex-1 md:min-w-[45%] min-w-full">
                    <label htmlFor="speed-lastName" className={labelClass}>
                      Last Name
                    </label>
                    <input
                      id="speed-lastName"
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className={inputPropsClass(!!fieldErrors.lastName)}
                      aria-invalid={fieldErrors.lastName ? true : undefined}
                      aria-describedby={
                        fieldErrors.lastName
                          ? "speed-lastName-error"
                          : undefined
                      }
                    />
                    {fieldErrors.lastName && (
                      <p
                        id="speed-lastName-error"
                        role="alert"
                        className="mt-1 text-sm text-red-600"
                      >
                        {fieldErrors.lastName}
                      </p>
                    )}
                  </div>
                  {/* Email */}
                  <div className="flex-1 md:min-w-[45%] min-w-full">
                    <label htmlFor="speed-email" className={labelClass}>
                      Your email address
                    </label>
                    <input
                      id="speed-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane.smith@email.com"
                      className={inputPropsClass(!!fieldErrors.email)}
                      aria-invalid={fieldErrors.email ? true : undefined}
                      aria-describedby={
                        fieldErrors.email ? "speed-email-error" : undefined
                      }
                    />
                    {fieldErrors.email && (
                      <p
                        id="speed-email-error"
                        role="alert"
                        className="mt-1 text-sm text-red-600"
                      >
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                  {/* Website URL */}
                  <div className="flex-1 md:min-w-[45%] min-w-full">
                    <label htmlFor="speed-website" className={labelClass}>
                      Website Address (URL)
                    </label>
                    <input
                      id="speed-website"
                      type="url"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      placeholder="https://100xelevate.com/"
                      className={inputPropsClass(!!fieldErrors.website)}
                      aria-invalid={fieldErrors.website ? true : undefined}
                      aria-describedby={
                        fieldErrors.website ? "speed-website-error" : undefined
                      }
                    />
                    {fieldErrors.website && (
                      <p
                        id="speed-website-error"
                        role="alert"
                        className="mt-1 text-sm text-red-600"
                      >
                        {fieldErrors.website}
                      </p>
                    )}
                  </div>
                  {/* Message */}
                  <div className="w-full mb-4">
                    <label htmlFor="speed-message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="speed-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="How can we help you?"
                      className={`w-full border border-transparent border-b bg-transparent py-[8px] px-[16px] text-[14px] text-[#707070] placeholder-gray-400 focus:outline-none focus:border focus:border-[2px] focus:border-gray-100 focus:bg-white transition-all duration-150 resize-none ${fieldErrors.message ? "border-b-red-600 focus:border-b-red-600" : "border-b-black focus:border-b-gray-500"}`}
                      aria-invalid={fieldErrors.message ? true : undefined}
                      aria-describedby={
                        fieldErrors.message ? "speed-message-error" : undefined
                      }
                    />
                    {fieldErrors.message && (
                      <p
                        id="speed-message-error"
                        role="alert"
                        className="mt-1 text-sm text-red-600"
                      >
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  // type="submit"
                  disabled={submitting}
                  className="self-start bg-black text-white text-[15px] font-medium px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-colors disabled:opacity-60"
                >
                  {submitting ? "Submitting…" : "Submit"}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* ── Right column: image collage + vertical slider ── */}
        <ShopifyPlusVerticalSlider />
      </div>
    </section>
  );
};
