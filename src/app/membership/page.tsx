import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { PillLink } from "@/components/Pill";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Earn points on every purchase and unlock Bronze, Silver and Gold rewards — discounts, free shipping, early access and more with HEMPAC Rewards.",
  alternates: { canonical: "/membership" },
};

const TIERS = [
  {
    name: "Bronze",
    points: "From 0 points",
    highlight: false,
    accent: "text-[#b45309]",
    ring: "border-line",
    benefits: [
      "5% discount on all purchases",
      "Free shipping on orders over $300",
      "Monthly fitness newsletter",
      "Birthday discount (10%)",
    ],
  },
  {
    name: "Silver",
    points: "From 1,000 points",
    highlight: true,
    accent: "text-ink",
    ring: "border-ink",
    benefits: [
      "10% discount on all purchases",
      "Free shipping on orders over $200",
      "Early access to new products (48 hours)",
      "Priority customer support",
      "Monthly workout plans",
    ],
  },
  {
    name: "Gold",
    points: "From 3,000 points",
    highlight: false,
    accent: "text-flame",
    ring: "border-ember/40",
    benefits: [
      "20% discount on all purchases",
      "Free shipping on all orders",
      "Early access to new products (72 hours)",
      "VIP customer support hotline",
      "Weekly personalised workout plans",
      "Exclusive member-only products",
      "Birthday discount (25%)",
      "Free annual equipment maintenance",
    ],
  },
];

const STEPS = [
  { n: "1", title: "Join free", copy: "Create an account at checkout — membership is free and automatic." },
  { n: "2", title: "Earn points", copy: "Collect 1 point for every $1 you spend, plus bonuses on reviews and referrals." },
  { n: "3", title: "Unlock tiers", copy: "Climb from Bronze to Gold as your points grow — rewards stack as you go." },
];

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="HEMPAC Rewards"
        title="Every rep earns"
        accent="rewards."
        subtitle="Our free loyalty programme rewards you for gearing up. Earn points on every order and unlock bigger discounts, free shipping and members-only perks."
      />

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="rounded-3xl bg-mist p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-flame text-lg font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tiers */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border-2 p-8 ${tier.ring} ${
                  tier.highlight ? "bg-ink text-white" : "bg-white"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute right-6 top-6 rounded-full bg-flame px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}
                <p
                  className={`text-2xl font-bold tracking-tight ${
                    tier.highlight ? "text-white" : tier.accent
                  }`}
                >
                  {tier.name}
                </p>
                <p
                  className={`mt-1 text-sm ${
                    tier.highlight ? "text-white/60" : "text-ink/50"
                  }`}
                >
                  {tier.points}
                </p>
                <ul className="mt-8 space-y-3">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          tier.highlight ? "bg-white/10 text-blaze" : "bg-mist text-ember"
                        }`}
                      >
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span className={tier.highlight ? "text-white/80" : "text-ink/70"}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-flame px-6 py-16 text-center text-white">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-display sm:text-4xl">
            Start earning on your first order
          </h2>
          <p className="max-w-md text-sm text-white/80">
            Membership is free — your points start adding up the moment you check out.
          </p>
          <PillLink href="/shop" variant="light">
            Shop &amp; Earn Points
          </PillLink>
        </div>
      </section>
    </>
  );
}
