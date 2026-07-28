import { NextResponse } from "next/server";
import {
  validateContactFields,
  validateOptionalAttachments,
  type AttachmentMeta,
  type ContactPayload,
} from "@/lib/contact-validation";

type ContactRequestBody = ContactPayload & {
  attachments?: AttachmentMeta[];
};

/** Escape &, <, > so Slack does not mis-parse mrkdwn/plain segments. */
function slackEscape(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildSlackText(data: ContactPayload, attachments?: AttachmentMeta[]) {
  const lines = [
    "*New contact form submission*",
    `*Name:* ${slackEscape(data.name)}`,
    `*Email:* ${slackEscape(data.email)}`,
    `*Company:* ${slackEscape(data.company)}`,
    `*Phone:* ${slackEscape(data.phone)}`,
    `*Budget:* ${slackEscape(data.budget)}`,
    `*Service:* ${slackEscape(data.service)}`,
    `*How they found us:* ${slackEscape(data.howFound)}`,
    `*Project details:* ${slackEscape(data.message)}`,
  ];
  if (attachments?.length) {
    const names = attachments
      .map(
        (a) =>
          `${slackEscape(a.name)} (${Math.round(a.size / 1024)} KB)`,
      )
      .join(", ");
    lines.push(`*Attachments:* ${names}`);
  }
  return lines.join("\n");
}

export async function POST(request: Request) {
  const webhookUrl = "https://hooks.slack.com/services/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";
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Contact submission is temporarily unavailable." },
      { status: 503 },
    );
  }

  let body: ContactRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload: ContactPayload = {
    name: typeof body.name === "string" ? body.name : "",
    email: typeof body.email === "string" ? body.email : "",
    company: typeof body.company === "string" ? body.company : "",
    phone: typeof body.phone === "string" ? body.phone : "",
    budget: typeof body.budget === "string" ? body.budget : "",
    service: typeof body.service === "string" ? body.service : "",
    howFound: typeof body.howFound === "string" ? body.howFound : "",
    message: typeof body.message === "string" ? body.message : "",
  };

  const { ok, data, errors } = validateContactFields(payload);
  if (!ok || !data) {
    return NextResponse.json({ error: "Validation failed.", errors }, { status: 422 });
  }

  let attachments: AttachmentMeta[] | undefined;
  if (body.attachments !== undefined) {
    if (!Array.isArray(body.attachments)) {
      return NextResponse.json(
        { error: "Invalid attachments format." },
        { status: 400 },
      );
    }
    attachments = [];
    for (const item of body.attachments) {
      if (
        !item ||
        typeof item !== "object" ||
        typeof item.name !== "string" ||
        typeof item.size !== "number" ||
        item.size < 0 ||
        !Number.isFinite(item.size)
      ) {
        return NextResponse.json(
          { error: "Invalid attachment metadata." },
          { status: 400 },
        );
      }
      attachments.push({ name: item.name, size: item.size });
    }
    const attachErr = validateOptionalAttachments(attachments);
    if (attachErr) {
      return NextResponse.json({ error: attachErr }, { status: 422 });
    }
  }

  const text = buildSlackText(data, attachments);

  try {
    const slackRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    if (!slackRes.ok) {
      return NextResponse.json(
        { error: "Could not deliver your message. Please try again later." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Could not deliver your message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
