import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000,
} as const;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const read = (key: keyof typeof LIMITS) =>
    typeof body?.[key] === "string" ? (body[key] as string).trim() : "";

  const name = read("name");
  const email = read("email");
  const subject = read("subject");
  const message = read("message");

  if (!name) {
    return NextResponse.json({ error: "Please enter your name" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: "Please enter a message" }, { status: 400 });
  }
  for (const [field, max] of Object.entries(LIMITS)) {
    if (read(field as keyof typeof LIMITS).length > max) {
      return NextResponse.json(
        { error: `${field} must be ${max} characters or fewer` },
        { status: 400 }
      );
    }
  }

  // Demo storefront: enquiries are validated and acknowledged, not delivered.
  // Swap in your transactional email provider or CRM here.
  const reference = `HE-${Date.now().toString(36).toUpperCase()}`;

  return NextResponse.json(
    { received: true, reference, subject: subject || "General enquiry" },
    { status: 201 }
  );
}
