export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  budget: string;
  service: string;
  howFound: string;
  message: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactPayload, string>>;

export const ALLOWED_BUDGETS = [
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "$20,000 - $50,000",
  "$50,000+",
] as const;

export const ALLOWED_SERVICES = [
  "E-commerce Store UI/UX Design",
  "Custom Shopify Development",
  "Klaviyo Email & SMS Marketing",
  "Conversion Rate Optimization (CRO) & Revenue Strategy",
  "Ecommerce SEO Strategy",
  "Shopify Migration Services",
  "Monthly Retainer / Growth Partnership",
] as const;

export const ALLOWED_HOW_FOUND = [
  "Google Search",
  "Facebook / Instagram",
  "Referred",
  "LinkedIn",
  "Chat GPT / AI",
  "Other",
] as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MESSAGE_MIN_LENGTH = 15;
export const PHONE_MIN_DIGITS = 10;

/** Combined size limit for optional uploads (10 MB). */
export const MAX_TOTAL_FILE_BYTES = 10 * 1024 * 1024;

const ALLOWED_FILE_EXT =
  /\.(pdf|doc|docx|png|jpg|jpeg|gif|webp|zip|txt|csv)$/i;

export function countPhoneDigits(value: string): number {
  return value.replace(/\D/g, "").length;
}

export type AttachmentMeta = { name: string; size: number };

export function validateOptionalAttachments(
  items: AttachmentMeta[],
): string | null {
  if (!items.length) return null;
  let total = 0;
  for (const f of items) {
    total += f.size;
    if (!ALLOWED_FILE_EXT.test(f.name)) {
      return `File type not allowed: ${f.name}`;
    }
  }
  if (total > MAX_TOTAL_FILE_BYTES) {
    return "Combined file size must be 10 MB or less.";
  }
  return null;
}

export function validateContactFields(input: ContactPayload): {
  ok: boolean;
  data?: ContactPayload;
  errors: ContactFieldErrors;
} {
  const errors: ContactFieldErrors = {};

  const name = input.name.trim();
  if (!name) errors.name = "Please enter your name.";

  const email = input.email.trim().toLowerCase();
  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_REGEX.test(email))
    errors.email = "Please enter a valid email address.";

  const company = input.company.trim();
  if (!company) errors.company = "Please enter your company name.";

  const phone = input.phone.trim();
  if (!phone) errors.phone = "Please enter your phone number.";
  else if (countPhoneDigits(phone) < PHONE_MIN_DIGITS)
    errors.phone =
      "Enter a phone number with at least 10 digits.";

  const budget = input.budget.trim();
  if (!budget || !ALLOWED_BUDGETS.includes(budget as (typeof ALLOWED_BUDGETS)[number]))
    errors.budget = "Please select a budget range.";

  const service = input.service.trim();
  if (
    !service ||
    !ALLOWED_SERVICES.includes(service as (typeof ALLOWED_SERVICES)[number])
  )
    errors.service = "Please select a service.";

  const howFound = input.howFound.trim();
  if (
    !howFound ||
    !ALLOWED_HOW_FOUND.includes(howFound as (typeof ALLOWED_HOW_FOUND)[number])
  )
    errors.howFound = "Please tell us how you found us.";

  const message = input.message.trim();
  if (!message) errors.message = "Please describe your project.";
  else if (message.length < MESSAGE_MIN_LENGTH)
    errors.message = `Please enter at least ${MESSAGE_MIN_LENGTH} characters.`;

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      company,
      phone,
      budget,
      service,
      howFound,
      message,
    },
    errors: {},
  };
}
