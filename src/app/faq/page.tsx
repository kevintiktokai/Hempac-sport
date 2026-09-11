import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { PillLink } from "@/components/Pill";
import Accordion from "@/components/support/Accordion";
import { ALL_FAQS, FAQ_GROUPS } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers on payment, delivery, installation, warranty, returns and choosing the right equipment from HEMPAC Sport.",
  alternates: { canonical: "/faq" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="Support"
        title="Frequently"
        accent="asked."
        subtitle="Payment, delivery, installation, warranty and how to pick the right gear — the questions our team answers every day."
      />

      <section className="mx-auto max-w-7xl space-y-14 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        {FAQ_GROUPS.map((group, i) => (
          <Reveal key={group.title} className="max-w-3xl" delay={i * 60}>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-ink/40">
              {group.title}
            </h2>
            <Accordion items={group.items} />
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-mist px-6 py-14 text-center">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-display sm:text-3xl">
            Still not answered?
          </h2>
          <p className="max-w-md text-sm text-ink/60">
            Our team replies to WhatsApp within minutes during opening hours, and to
            email within one business day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PillLink href="/contact">Contact Us</PillLink>
            <PillLink href="/quiz" variant="outline">
              Find My Gear
            </PillLink>
          </div>
        </div>
      </section>
    </>
  );
}
