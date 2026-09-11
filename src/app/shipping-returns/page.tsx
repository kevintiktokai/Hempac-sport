import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { PillLink } from "@/components/Pill";
import {
  PolicyLayout,
  PolicyList,
  PolicySection,
} from "@/components/support/Prose";
import { TruckIcon, ShieldIcon, BoltIcon, TargetIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "How HEMPAC Sport delivers and installs your equipment, what it costs, how long it takes, and how to return an item within 30 days.",
  alternates: { canonical: "/shipping-returns" },
};

const HIGHLIGHTS = [
  {
    icon: <TruckIcon className="h-5 w-5" />,
    title: "Free over $75",
    copy: "Standard delivery is free on orders over $75. Below that it is a $9.99 flat rate.",
  },
  {
    icon: <BoltIcon className="h-5 w-5" />,
    title: "2–5 working days",
    copy: "Most in-stock orders leave the warehouse within one working day.",
  },
  {
    icon: <TargetIcon className="h-5 w-5" />,
    title: "Installation available",
    copy: "Professional assembly for large machines, including a usage walkthrough.",
  },
  {
    icon: <ShieldIcon className="h-5 w-5" />,
    title: "30-day returns",
    copy: "Unused items in original packaging can be returned within 30 days.",
  },
];

export default function ShippingReturnsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Shipping &"
        accent="returns."
        subtitle="What it costs, how long it takes, who carries it up the stairs, and what happens if the gear is not right for you."
      />

      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="rounded-3xl bg-mist p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ember">
                {h.icon}
              </span>
              <p className="mt-4 font-semibold">{h.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{h.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <PolicyLayout>
        <PolicySection title="Delivery options and cost">
          <p>
            Standard delivery is free on every order over $75. Orders under that
            threshold carry a $9.99 flat rate, shown in your cart before you check
            out — the cart meter tells you exactly how much more you need to add to
            qualify.
          </p>
          <PolicyList
            items={[
              "Harare metro — 1 to 2 working days, free on orders over $75.",
              "Nationwide — 2 to 5 working days depending on the route.",
              "Regional (neighbouring countries) — quoted per order; contact us before checkout.",
              "Large or heavy items (racks, multi-station gyms, treadmills) are delivered by our own crew or a specialist freight partner and scheduled by phone.",
            ]}
          />
        </PolicySection>

        <PolicySection title="Processing and tracking">
          <p>
            In-stock orders placed before 2pm on a working day are usually picked
            and dispatched the same day, otherwise the next. You will receive an
            order confirmation with your order number immediately, and a delivery
            window by phone or WhatsApp once the consignment is booked.
          </p>
          <p>
            Made-to-order and special-order items — commercial rigs and some
            machines — take longer, and the lead time is confirmed in writing before
            we take payment.
          </p>
        </PolicySection>

        <PolicySection title="Installation and assembly">
          <p>
            Most accessories, benches and small equipment arrive ready to use or
            need only basic assembly, with tools and instructions in the box.
          </p>
          <p>
            For treadmills, multi-station gyms, racks and cable machines we offer
            professional installation from $50 to $150 depending on complexity. The
            crew assembles the equipment, checks it under load, and walks you
            through safe operation and routine maintenance before leaving.
          </p>
        </PolicySection>

        <PolicySection title="Returns">
          <p>
            If a product is not right for you, you have 30 days from delivery to
            return it. Items must be unused, in resalable condition and in their
            original packaging with all fittings and documentation.
          </p>
          <PolicyList
            items={[
              "Contact us with your order number to start a return and receive return instructions.",
              "Return shipping is paid by the customer unless the item is faulty, damaged in transit or incorrectly supplied.",
              "Refunds are issued to the original payment method within 5 working days of the item arriving and passing inspection.",
              "Large items collected by our crew carry a collection fee equal to the original delivery cost.",
              "Hygiene items — including mouthguards, bandages and swimming goggles — cannot be returned once opened, unless faulty.",
            ]}
          />
        </PolicySection>

        <PolicySection title="Damaged or incorrect items">
          <p>
            Inspect your delivery before signing for it where you can. If anything
            arrives damaged or the wrong item has been supplied, tell us within 48
            hours with photographs and we will arrange a replacement or a full
            refund at no cost to you, including collection.
          </p>
        </PolicySection>

        <PolicySection title="Cancellations">
          <p>
            Orders can be cancelled free of charge any time before dispatch. Once an
            order has shipped, cancelling becomes a return and the terms above
            apply. Special-order and made-to-order commercial equipment cannot be
            cancelled once production has started.
          </p>
        </PolicySection>
      </PolicyLayout>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-flame px-6 py-14 text-center text-white">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-display sm:text-3xl">
            Question about a delivery?
          </h2>
          <p className="max-w-md text-sm text-white/80">
            Have your order number handy and our team will track it down — WhatsApp
            is fastest.
          </p>
          <PillLink href="/contact" variant="light">
            Contact Support
          </PillLink>
        </div>
      </section>
    </>
  );
}
