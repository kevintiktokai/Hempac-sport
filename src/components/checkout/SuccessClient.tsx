"use client";

import { useSearchParams } from "next/navigation";
import { formatPrice } from "@/lib/format";
import { PillLink } from "@/components/Pill";
import { CheckIcon } from "@/components/icons";

export default function SuccessClient() {
  const params = useSearchParams();
  const order = params.get("order");
  const total = Number(params.get("total") ?? 0);
  const delivery = params.get("delivery");
  const payment = params.get("payment");
  const isCod = payment === "cod";

  const deliveryLabel = delivery
    ? new Date(`${delivery}T00:00:00`).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:py-32">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-flame text-white">
        <CheckIcon className="h-7 w-7" />
      </span>
      <h1 className="mt-8 text-4xl font-semibold tracking-display sm:text-5xl">
        Order <span className="text-flame">confirmed.</span>
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/60">
        Thanks for gearing up with HEMPAC. A confirmation email is on its way.
        {isCod
          ? " Our team will call to confirm your order and arrange delivery — have your cash payment ready for the driver."
          : " Your equipment is being prepped for dispatch."}
      </p>

      <dl className="mt-10 w-full max-w-sm space-y-3 rounded-3xl bg-mist p-8 text-left text-sm">
        {order && (
          <div className="flex justify-between">
            <dt className="text-ink/60">Order number</dt>
            <dd className="font-semibold">{order}</dd>
          </div>
        )}
        <div className="flex justify-between">
          <dt className="text-ink/60">Payment</dt>
          <dd className="font-semibold">{isCod ? "Cash on Delivery" : "Paid Online"}</dd>
        </div>
        {total > 0 && (
          <div className="flex justify-between">
            <dt className="text-ink/60">{isCod ? "Amount due" : "Total paid"}</dt>
            <dd className="font-semibold">{formatPrice(total)}</dd>
          </div>
        )}
        {deliveryLabel && (
          <div className="flex justify-between">
            <dt className="text-ink/60">Estimated delivery</dt>
            <dd className="font-semibold">{deliveryLabel}</dd>
          </div>
        )}
      </dl>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <PillLink href="/shop">Continue Shopping</PillLink>
        <PillLink href="/" variant="outline">
          Back to Home
        </PillLink>
      </div>
    </div>
  );
}
