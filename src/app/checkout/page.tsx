"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { getProductById } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { ArrowRight, TruckIcon, CheckIcon } from "@/components/icons";

const FREE_SHIPPING_THRESHOLD = 75;

type PaymentMethod = "online" | "cod";

const FIELDS = [
  { name: "email", label: "Email", type: "email", span: 2, autoComplete: "email" },
  { name: "firstName", label: "First name", type: "text", span: 1, autoComplete: "given-name" },
  { name: "lastName", label: "Last name", type: "text", span: 1, autoComplete: "family-name" },
  { name: "address", label: "Street address", type: "text", span: 2, autoComplete: "street-address" },
  { name: "city", label: "City", type: "text", span: 1, autoComplete: "address-level2" },
  { name: "postalCode", label: "Postal code", type: "text", span: 1, autoComplete: "postal-code" },
  { name: "country", label: "Country", type: "text", span: 2, autoComplete: "country-name" },
] as const;

type FieldName = (typeof FIELDS)[number]["name"];

export default function CheckoutPage() {
  const { cart, hydrated, cartSubtotal, clearCart } = useStore();
  const router = useRouter();
  const [form, setForm] = useState<Record<FieldName, string>>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [card, setCard] = useState({ number: "", expiry: "", cvc: "" });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("online");
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const lines = cart
    .map((line) => ({ line, product: getProductById(line.productId) }))
    .filter((x): x is { line: (typeof cart)[number]; product: NonNullable<ReturnType<typeof getProductById>> } =>
      Boolean(x.product)
    );

  const shipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD || cartSubtotal === 0 ? 0 : 9.99;
  const total = cartSubtotal + shipping;

  const validate = () => {
    const next: Partial<Record<string, string>> = {};
    for (const field of FIELDS) {
      if (!form[field.name].trim()) next[field.name] = `${field.label} is required`;
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }
    if (paymentMethod === "online") {
      if (!/^\d{13,19}$/.test(card.number.replace(/\s/g, ""))) {
        next.cardNumber = "Enter a valid card number";
      }
      if (!/^(0[1-9]|1[0-2])\s*\/\s*\d{2}$/.test(card.expiry)) {
        next.cardExpiry = "Use MM/YY format";
      }
      if (!/^\d{3,4}$/.test(card.cvc)) {
        next.cardCvc = "3–4 digits";
      }
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map(({ productId, quantity, size, color }) => ({
            productId,
            quantity,
            size,
            color,
          })),
          customer: form,
          paymentMethod,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      clearCart();
      const params = new URLSearchParams({
        order: data.orderNumber,
        total: String(data.total),
        delivery: data.estimatedDelivery,
        payment: paymentMethod,
      });
      router.push(`/checkout/success?${params.toString()}`);
    } catch {
      setServerError("Network error — please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!hydrated) {
    return <div className="mx-auto max-w-7xl px-4 py-24" aria-busy="true" />;
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center">
        <h1 className="text-3xl font-semibold tracking-display">Nothing to check out</h1>
        <p className="mt-3 text-sm text-ink/50">Your cart is empty.</p>
        <Link
          href="/shop"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white hover:bg-black"
        >
          Back to the Shop <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  const inputClass = (error?: string) =>
    `w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink/30 focus:border-ink ${
      error ? "border-red-400" : "border-line"
    }`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-display sm:text-6xl">
        Check<span className="text-flame">out</span>
      </h1>

      <form onSubmit={submit} noValidate className="mt-10 grid gap-12 lg:grid-cols-[1fr_420px]">
        <div className="space-y-10">
          <section>
            <h2 className="text-lg font-semibold">1. Contact &amp; Shipping</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {FIELDS.map((field) => (
                <label
                  key={field.name}
                  className={field.span === 2 ? "sm:col-span-2" : undefined}
                >
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink/50">
                    {field.label}
                  </span>
                  <input
                    type={field.type}
                    autoComplete={field.autoComplete}
                    value={form[field.name]}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [field.name]: e.target.value }))
                    }
                    className={inputClass(errors[field.name])}
                    placeholder={field.label}
                  />
                  {errors[field.name] && (
                    <span className="mt-1 block text-xs text-red-500">
                      {errors[field.name]}
                    </span>
                  )}
                </label>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">2. Payment</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {(
                [
                  {
                    id: "online" as const,
                    title: "Pay Online",
                    desc: "Secure card payment",
                    icon: <CheckIcon className="h-4 w-4" />,
                  },
                  {
                    id: "cod" as const,
                    title: "Cash on Delivery",
                    desc: "Pay when your order arrives",
                    icon: <TruckIcon className="h-4 w-4" />,
                  },
                ]
              ).map((opt) => {
                const active = paymentMethod === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPaymentMethod(opt.id)}
                    className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition-colors ${
                      active ? "border-ink bg-mist" : "border-line hover:border-ink/40"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        active ? "bg-flame text-white" : "bg-mist text-ink/50"
                      }`}
                    >
                      {opt.icon}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{opt.title}</span>
                      <span className="block text-xs text-ink/50">{opt.desc}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {paymentMethod === "online" ? (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink/50">
                    Card number
                  </span>
                  <input
                    inputMode="numeric"
                    autoComplete="cc-number"
                    placeholder="4242 4242 4242 4242"
                    value={card.number}
                    onChange={(e) => setCard((c) => ({ ...c, number: e.target.value }))}
                    className={inputClass(errors.cardNumber)}
                  />
                  {errors.cardNumber && (
                    <span className="mt-1 block text-xs text-red-500">{errors.cardNumber}</span>
                  )}
                </label>
                <label>
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink/50">
                    Expiry
                  </span>
                  <input
                    autoComplete="cc-exp"
                    placeholder="MM/YY"
                    value={card.expiry}
                    onChange={(e) => setCard((c) => ({ ...c, expiry: e.target.value }))}
                    className={inputClass(errors.cardExpiry)}
                  />
                  {errors.cardExpiry && (
                    <span className="mt-1 block text-xs text-red-500">{errors.cardExpiry}</span>
                  )}
                </label>
                <label>
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink/50">
                    CVC
                  </span>
                  <input
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    placeholder="123"
                    value={card.cvc}
                    onChange={(e) => setCard((c) => ({ ...c, cvc: e.target.value }))}
                    className={inputClass(errors.cardCvc)}
                  />
                  {errors.cardCvc && (
                    <span className="mt-1 block text-xs text-red-500">{errors.cardCvc}</span>
                  )}
                </label>
                <p className="text-xs text-ink/40 sm:col-span-2">
                  Demo checkout — no real payment is processed.
                </p>
              </div>
            ) : (
              <div className="mt-5 rounded-2xl bg-mist p-5 text-sm leading-relaxed text-ink/70">
                Pay in cash when your order is delivered. Our team will call to
                confirm your order and arrange a delivery time. Please have the
                exact total ready for the driver.
              </div>
            )}
          </section>
        </div>

        <aside className="h-fit rounded-3xl bg-mist p-8">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <ul className="mt-5 space-y-4">
            {lines.map(({ line, product }) => (
              <li
                key={`${line.productId}-${line.size}-${line.color}`}
                className="flex items-center gap-4"
              >
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white">
                  <Image src={product.image} alt="" fill sizes="56px" className="object-cover" />
                </span>
                <span className="flex-1 text-sm">
                  <span className="block font-medium leading-snug">{product.name}</span>
                  <span className="text-xs text-ink/50">
                    Qty {line.quantity}
                    {line.size ? ` · ${line.size}` : ""}
                  </span>
                </span>
                <span className="text-sm font-semibold">
                  {formatPrice(product.price * line.quantity)}
                </span>
              </li>
            ))}
          </ul>
          <dl className="mt-6 space-y-3 border-t border-ink/10 pt-5 text-sm">
            <div className="flex justify-between">
              <dt className="text-ink/60">Subtotal</dt>
              <dd className="font-medium">{formatPrice(cartSubtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-ink/60">Shipping</dt>
              <dd className="font-medium">{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
            </div>
            <div className="flex justify-between border-t border-ink/10 pt-3 text-base">
              <dt className="font-semibold">Total</dt>
              <dd className="font-semibold">{formatPrice(total)}</dd>
            </div>
          </dl>

          {serverError && (
            <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {serverError}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-black disabled:opacity-50"
          >
            {submitting
              ? "Placing order…"
              : paymentMethod === "cod"
                ? `Place Order · ${formatPrice(total)}`
                : `Pay ${formatPrice(total)}`}
            {!submitting && (
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            )}
          </button>
          <p className="mt-4 text-center text-xs text-ink/40">
            {paymentMethod === "cod"
              ? "Pay in cash on delivery · 30-day returns"
              : "256-bit encrypted · 30-day money-back guarantee"}
          </p>
        </aside>
      </form>
    </div>
  );
}
