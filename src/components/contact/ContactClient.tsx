"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { PillButton, PillLink } from "@/components/Pill";
import { CheckIcon } from "@/components/icons";
import { FAQ_GROUPS } from "@/lib/faq";

const WHATSAPP = "263784712881";

const CONTACT_METHODS = [
  {
    label: "WhatsApp",
    value: "+263 78 471 2881",
    href: `https://wa.me/${WHATSAPP}`,
    note: "Fastest reply — browse our catalog & order",
  },
  {
    label: "Call / Phone",
    value: "+263 76 471 2881",
    href: "tel:+263764712881",
    note: "Mon–Sat, 8:00–17:00",
  },
  {
    label: "Email",
    value: "sales@hempac.co.zw",
    href: "mailto:sales@hempac.co.zw",
    note: "We reply within one business day",
  },
  {
    label: "Showroom",
    value: "Harare, Zimbabwe",
    href: undefined,
    note: "Visit to test equipment before you buy",
  },
];

// A taster of the full FAQ — the rest lives on /faq.
const FAQS = [
  FAQ_GROUPS[2].items[0],
  FAQ_GROUPS[0].items[0],
  FAQ_GROUPS[1].items[2],
];

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState<{ reference: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Please enter a message";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSent({ reference: data.reference });
    } catch {
      setServerError("Network error — please try again, or message us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (error?: string) =>
    `w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/30 focus:border-ink ${
      error ? "border-red-400" : "border-line"
    }`;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's get you"
        accent="geared up."
        subtitle="Questions about a product, delivery, or building out a full gym? Reach us however suits you — WhatsApp is fastest."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Methods */}
          <div className="space-y-4">
            {CONTACT_METHODS.map((m) => {
              const inner = (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">
                    {m.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold">{m.value}</p>
                  <p className="mt-1 text-sm text-ink/50">{m.note}</p>
                </>
              );
              return m.href ? (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="block rounded-3xl border border-line p-6 transition-colors hover:border-ink"
                >
                  {inner}
                </a>
              ) : (
                <div key={m.label} className="rounded-3xl border border-line p-6">
                  {inner}
                </div>
              );
            })}
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-mist p-8 sm:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-flame text-white">
                  <CheckIcon className="h-7 w-7" />
                </span>
                <h2 className="mt-6 text-2xl font-semibold tracking-display">
                  Message sent
                </h2>
                <p className="mt-2 max-w-xs text-sm text-ink/60">
                  Thanks {form.name.split(" ")[0]} — we&apos;ll be in touch within one
                  business day. For anything urgent, message us on WhatsApp.
                </p>
                <p className="mt-4 text-xs uppercase tracking-wider text-ink/40">
                  Reference {sent.reference}
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-display">Send an enquiry</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label>
                    <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink/50">
                      Name
                    </span>
                    <input
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className={inputClass(errors.name)}
                      placeholder="Your name"
                    />
                    {errors.name && <span className="mt-1 block text-xs text-red-500">{errors.name}</span>}
                  </label>
                  <label>
                    <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink/50">
                      Email
                    </span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className={inputClass(errors.email)}
                      placeholder="you@email.com"
                    />
                    {errors.email && <span className="mt-1 block text-xs text-red-500">{errors.email}</span>}
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink/50">
                    Subject
                  </span>
                  <input
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    className={inputClass()}
                    placeholder="What's this about?"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink/50">
                    Message
                  </span>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className={`${inputClass(errors.message)} resize-none`}
                    placeholder="Tell us what you're looking for…"
                  />
                  {errors.message && <span className="mt-1 block text-xs text-red-500">{errors.message}</span>}
                </label>
                {serverError && (
                  <p className="rounded-2xl bg-ember/10 px-4 py-3 text-sm text-ember" role="alert">
                    {serverError}
                  </p>
                )}
                <PillButton
                  type="submit"
                  disabled={submitting}
                  className="w-full justify-center"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </PillButton>
              </form>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold tracking-display sm:text-4xl">
            Frequently <span className="text-flame">asked.</span>
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-3xl border border-line p-6">
                <p className="font-semibold">{f.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <PillLink href="/faq" variant="outline">
              See all questions
            </PillLink>
          </div>
        </div>
      </section>
    </>
  );
}
