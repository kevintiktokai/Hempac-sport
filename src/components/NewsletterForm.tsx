"use client";

import { useState } from "react";

/**
 * Newsletter sign-up. Two visual treatments share one behaviour:
 * "dark" sits on the near-black bands, "flame" on the blog CTA panel.
 */
export default function NewsletterForm({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "flame";
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }
      setStatus("done");
      setEmail("");
    } catch {
      setError("Network error — please try again.");
      setStatus("idle");
    }
  };

  if (status === "done") {
    return (
      <p className={`text-sm text-white/70 ${className}`} role="status">
        You&apos;re on the list — look out for our next edition.
      </p>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={submit}
        noValidate
        className="flex items-center rounded-full border border-white/20 p-1.5"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          aria-label="Email for newsletter"
          aria-invalid={Boolean(error)}
          className="w-full bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/40"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50 ${
            variant === "flame" ? "bg-flame text-white" : "bg-white text-ink"
          }`}
        >
          {status === "sending" ? "Sending…" : "Subscribe"}
        </button>
      </form>
      {error && (
        <p className="mt-2 px-4 text-xs text-blaze" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
