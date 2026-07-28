"use client";

import React, { useState, useRef } from "react";
import {
  validateContactFields,
  validateOptionalAttachments,
  type ContactFieldErrors,
  type ContactPayload,
  type AttachmentMeta,
} from "@/lib/contact-validation";

const DropdownArrow = () => (
  <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current text-[#707070]">
    <path d="M128 192l128 128 128-128z" />
  </svg>
);

const labelClass =
  "block text-[14px] font-[500] text-black mb-2 leading-[20px]";
const inputClass =
  "hover:scale-x-[1.02] w-full border border-transparent border-b border-b-black bg-transparent py-[8px] px-[16px] text-[14px] text-[#707070] placeholder-gray-400 focus:outline-none focus:border focus:border-[2px] focus:border-gray-100 focus:border-b-gray-500 focus:bg-white transition-all duration-150";
const inputClassError =
  "border-b-red-600 focus:border-b-red-600 focus:border-gray-100";
const selectWrapperClass = "relative w-full";
const selectClass =
  "hover:scale-[1.02] w-full appearance-none border border-transparent border-b border-b-black bg-transparent py-[8px] px-[16px] text-[14px] text-[#707070] focus:outline-none focus:border focus:border-gray-100 focus:border-b-gray-500 focus:bg-white transition-all duration-150 cursor-pointer pr-6";

function inputPropsClass(hasError: boolean) {
  return hasError ? `${inputClass} ${inputClassError}` : inputClass;
}

const EMPTY_CONTACT: ContactPayload = {
  name: "",
  email: "",
  company: "",
  phone: "",
  budget: "",
  service: "",
  howFound: "",
  message: "",
};

/** Posts to `/api/contact`. On success: resets fields/file input and shows inline confirmation (no separate thank-you screen). */
export const ContactForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("No file chosen");
  const [formData, setFormData] = useState<ContactPayload>(() => ({
    ...EMPTY_CONTACT,
  }));
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const clearFieldError = (name: keyof ContactPayload) => {
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const name = e.target.name as keyof ContactPayload;
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
    clearFieldError(name);
    setSubmitError(null);
    setSuccessMessage(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFileError(null);
    setSubmitError(null);
    setSuccessMessage(null);
    if (files && files.length > 0) {
      setFileName(
        files.length === 1 ? files[0].name : `${files.length} files selected`,
      );
    } else {
      setFileName("No file chosen");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    let attachments: AttachmentMeta[] = [];
    const files = fileInputRef.current?.files;
    if (files && files.length > 0) {
      attachments = Array.from(files).map((f) => ({
        name: f.name,
        size: f.size,
      }));
      const attachErr = validateOptionalAttachments(attachments);
      if (attachErr) {
        setFileError(attachErr);
        return;
      }
    }

    const validation = validateContactFields(formData);
    if (!validation.ok || !validation.data) {
      setErrors(validation.errors);
      setFileError(null);
      return;
    }

    setErrors({});
    setFileError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...validation.data,
          ...(attachments.length ? { attachments } : {}),
        }),
      });

      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
        errors?: ContactFieldErrors;
      };

      if (!res.ok) {
        if (
          res.status === 422 &&
          json.errors &&
          Object.keys(json.errors).length > 0
        ) {
          setErrors(json.errors);
          setSubmitError(null);
          return;
        }
        setSubmitError(
          typeof json.error === "string"
            ? json.error
            : "Something went wrong. Please try again.",
        );
        return;
      }

      setFormData({ ...EMPTY_CONTACT });
      setErrors({});
      setFileError(null);
      setSubmitError(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setFileName("No file chosen");
      setSuccessMessage("Your submission was successful.");
    } catch {
      setSubmitError(
        "Could not reach the server. Check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <section id="contact" className="w-full px-4 md:px-8">
        <div className="mx-auto md:pb-[86px] pb-[54px]  max-w-[1460px] gap-5 items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:mt-[30px] md:mt-[60px] mt-[20px] ">
            {/* Name */}
            <div className="mb-[32px] md:px-[30px]">
              <label htmlFor="cf-name" className={labelClass}>
                What is your name?
              </label>
              <input
                id="cf-name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputPropsClass(!!errors.name)}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "cf-name-error" : undefined}
              />
              {errors.name ? (
                <p id="cf-name-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.name}
                </p>
              ) : null}
            </div>

            {/* Email */}
            <div className="mb-[32px] md:px-[30px]">
              <label htmlFor="cf-email" className={labelClass}>
                Your email address
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                placeholder="jane.smith@email.com"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputPropsClass(!!errors.email)}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "cf-email-error" : undefined}
              />
              {errors.email ? (
                <p id="cf-email-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              ) : null}
            </div>

            {/* Company */}
            <div className="mb-[32px] md:px-[30px]">
              <label htmlFor="cf-company" className={labelClass}>
                Company name
              </label>
              <input
                id="cf-company"
                name="company"
                type="text"
                placeholder="ABC Company"
                autoComplete="organization"
                required
                value={formData.company}
                onChange={handleChange}
                className={inputPropsClass(!!errors.company)}
                aria-invalid={errors.company ? true : undefined}
                aria-describedby={errors.company ? "cf-company-error" : undefined}
              />
              {errors.company ? (
                <p id="cf-company-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.company}
                </p>
              ) : null}
            </div>

            {/* Phone */}
            <div className="mb-[32px] md:px-[30px]">
              <label htmlFor="cf-phone" className={labelClass}>
                Phone
              </label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                autoComplete="tel"
                required
                pattern="[0-9()#&+*\-=.]+"
                title="Only numbers and phone characters (#, -, *, etc) are accepted."
                value={formData.phone}
                onChange={handleChange}
                className={inputPropsClass(!!errors.phone)}
                aria-invalid={errors.phone ? true : undefined}
                aria-describedby={errors.phone ? "cf-phone-error" : undefined}
              />
              {errors.phone ? (
                <p id="cf-phone-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.phone}
                </p>
              ) : null}
            </div>

            {/* Budget */}
            <div className="mb-[32px] md:px-[30px]">
              <label htmlFor="cf-budget" className={labelClass}>
                Budget
              </label>
              <div className={selectWrapperClass}>
                <select
                  id="cf-budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className={`${selectClass} ${errors.budget ? inputClassError : ""}`}
                  aria-invalid={errors.budget ? true : undefined}
                  aria-describedby={errors.budget ? "cf-budget-error" : undefined}
                >
                  <option value="">Please Select</option>
                  <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                  <option value="$20,000 - $50,000">$20,000 - $50,000</option>
                  <option value="$50,000+">$50,000+</option>
                </select>
                <span className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-black">
                  <DropdownArrow />
                </span>
              </div>
              {errors.budget ? (
                <p id="cf-budget-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.budget}
                </p>
              ) : null}
            </div>

            {/* Service Of Interest */}
            <div className="mb-[32px] md:px-[30px]">
              <label htmlFor="cf-service" className={labelClass}>
                Service Of Interest
              </label>
              <div className={selectWrapperClass}>
                <select
                  id="cf-service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className={`${selectClass} ${errors.service ? inputClassError : ""}`}
                  aria-invalid={errors.service ? true : undefined}
                  aria-describedby={errors.service ? "cf-service-error" : undefined}
                >
                  <option value="">Please Select</option>
                  <option value="E-commerce Store UI/UX Design">
                    E-commerce Store UI/UX Design
                  </option>
                  <option value="Custom Shopify Development">
                    Custom Shopify Development
                  </option>
                  <option value="Klaviyo Email & SMS Marketing">
                    Klaviyo Email &amp; SMS Marketing
                  </option>
                  <option value="Conversion Rate Optimization (CRO) & Revenue Strategy">
                    Conversion Rate Optimization (CRO) &amp; Revenue Strategy
                  </option>
                  <option value="Ecommerce SEO Strategy">
                    Ecommerce SEO Strategy
                  </option>
                  <option value="Shopify Migration Services">
                    Shopify Migration Services
                  </option>
                  <option value="Monthly Retainer / Growth Partnership">
                    Monthly Retainer / Growth Partnership
                  </option>
                </select>
                <span className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-black">
                  <DropdownArrow />
                </span>
              </div>
              {errors.service ? (
                <p id="cf-service-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.service}
                </p>
              ) : null}
            </div>

            {/* How did you find us — full width */}
            <div className="md:col-span-2 mb-[32px] md:px-[30px]">
              <label htmlFor="cf-how" className={labelClass}>
                How did you find us
              </label>
              <div className={selectWrapperClass}>
                <select
                  id="cf-how"
                  name="howFound"
                  required
                  value={formData.howFound}
                  onChange={handleChange}
                  className={`${selectClass} ${errors.howFound ? inputClassError : ""}`}
                  aria-invalid={errors.howFound ? true : undefined}
                  aria-describedby={errors.howFound ? "cf-how-error" : undefined}
                >
                  <option value="">Please Select</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Facebook / Instagram">
                    Facebook / Instagram
                  </option>
                  <option value="Referred">Referred</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Chat GPT / AI">Chat GPT / AI</option>
                  <option value="Other">Other</option>
                </select>
                <span className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-black">
                  <DropdownArrow />
                </span>
              </div>
              {errors.howFound ? (
                <p id="cf-how-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.howFound}
                </p>
              ) : null}
            </div>

            {/* Project details — full width */}
            <div className="md:col-span-2 mb-[32px] md:px-[30px]">
              <label htmlFor="cf-message" className={labelClass}>
                Project details
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={4}
                placeholder="Looking to build the next game-changer. Let's make magic happen!"
                required
                value={formData.message}
                onChange={handleChange}
                className={`w-full border border-transparent border-b bg-transparent py-2 px-2 text-sm text-black placeholder-gray-400 focus:outline-none focus:border focus:border-gray-100 focus:border-b-gray-500 focus:bg-white transition-all duration-150 resize-y ${errors.message ? `border-b-red-600 ${inputClassError}` : "border-b-black"}`}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? "cf-message-error" : undefined}
              />
              {errors.message ? (
                <p id="cf-message-error" role="alert" className="mt-1 text-sm text-red-600">
                  {errors.message}
                </p>
              ) : null}
            </div>

            {/* File upload — full width */}
            <div className="md:col-span-2 mb-[32px] md:px-[30px]">
              <label htmlFor="cf-file" className={labelClass}>
                Attach files (optional)
              </label>
              <div className="flex flex-wrap items-center gap-3 mt-1">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1 border border-gray-400 rounded-[2px] bg-gray-100 text-sm text-black hover:bg-gray-200 transition-colors duration-150 cursor-pointer"
                >
                  Choose Files
                </button>
                <span className="text-sm text-gray-500">{fileName}</span>
                <input
                  ref={fileInputRef}
                  id="cf-file"
                  type="file"
                  name="files"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  aria-invalid={fileError ? true : undefined}
                  aria-describedby={fileError ? "cf-file-error" : undefined}
                />
              </div>
              {fileError ? (
                <p id="cf-file-error" role="alert" className="mt-1 text-sm text-red-600">
                  {fileError}
                </p>
              ) : null}
            </div>

            {/* Submit — full width */}
            <div className="md:col-span-2 mb-[32px] md:px-[30px]">
              {submitError ? (
                <p role="alert" className="mb-3 text-sm text-red-600">
                  {submitError}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center px-[20px] py-3 h-[43px] rounded-full border-[2px] border-black  text-sm font-medium text-black hover:bg-black hover:text-white transition-colors duration-200 disabled:opacity-60 cursor-pointer"
              >
                {submitting ? "Sending…" : "Submit"}
              </button>
              {successMessage ? (
                <p role="status" className="mt-3 text-sm text-black">
                  {successMessage}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};
