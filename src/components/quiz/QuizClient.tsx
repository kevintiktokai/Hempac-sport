"use client";

import { useMemo, useState } from "react";
import { PRODUCTS } from "@/lib/products";
import type { Category, Level, Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import { PillButton, PillLink } from "@/components/Pill";
import { ArrowLeft } from "@/components/icons";

interface SportOption {
  id: string;
  label: string;
  emoji: string;
  categories: Category[];
}

const SPORTS: SportOption[] = [
  { id: "racquet", label: "Racquet & Paddle", emoji: "🎾", categories: ["racquet", "footwear"] },
  { id: "running", label: "Running", emoji: "🏃", categories: ["footwear", "accessories"] },
  { id: "gym", label: "Gym & Strength", emoji: "🏋️", categories: ["training", "accessories"] },
  { id: "combat", label: "Combat Sports", emoji: "🥊", categories: ["combat", "training"] },
  { id: "team", label: "Team Sports", emoji: "🏀", categories: ["team", "footwear"] },
  { id: "everything", label: "A Bit of Everything", emoji: "⚡", categories: [] },
];

const LEVEL_OPTIONS: { id: Level; label: string; copy: string }[] = [
  { id: "beginner", label: "Beginner", copy: "Learn, improve, and have fun." },
  { id: "intermediate", label: "Intermediate", copy: "Competing and levelling up." },
  { id: "pro", label: "Professional", copy: "Power, precision, and performance." },
];

const BUDGETS = [
  { id: "under-75", label: "Under $75", min: 0, max: 75 },
  { id: "75-200", label: "$75 – $200", min: 75, max: 200 },
  { id: "200-plus", label: "$200+", min: 200, max: Infinity },
  { id: "no-limit", label: "Show Me the Best", min: 0, max: Infinity },
];

function recommend(
  sport: SportOption,
  level: Level,
  budget: (typeof BUDGETS)[number]
): Product[] {
  const inCategory = (p: Product) =>
    sport.categories.length === 0 || sport.categories.includes(p.category);
  const inBudget = (p: Product) => p.price >= budget.min && p.price <= budget.max;

  const score = (p: Product) => {
    let s = p.rating;
    if (p.level === level) s += 3;
    else if (
      (level === "intermediate" && p.level !== "pro") ||
      (level === "pro" && p.level === "intermediate")
    )
      s += 1;
    if (p.category === sport.categories[0]) s += 2;
    if (p.badge) s += 0.5;
    return s;
  };

  let pool = PRODUCTS.filter((p) => inCategory(p) && inBudget(p));
  if (pool.length < 3) pool = PRODUCTS.filter(inCategory);
  if (pool.length < 3) pool = [...PRODUCTS];

  return pool.sort((a, b) => score(b) - score(a)).slice(0, 4);
}

export default function QuizClient() {
  const [step, setStep] = useState(0);
  const [sport, setSport] = useState<SportOption | null>(null);
  const [level, setLevel] = useState<Level | null>(null);
  const [budget, setBudget] = useState<(typeof BUDGETS)[number] | null>(null);

  const results = useMemo(
    () => (sport && level && budget ? recommend(sport, level, budget) : []),
    [sport, level, budget]
  );

  const restart = () => {
    setStep(0);
    setSport(null);
    setLevel(null);
    setBudget(null);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      {step < 3 ? (
        <>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium uppercase tracking-widest text-ink/40">
              Find My Gear · Step {step + 1} of 3
            </p>
            {step > 0 && (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 hover:text-ink"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            )}
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-mist">
            <div
              className="h-full rounded-full bg-flame transition-all duration-500"
              style={{ width: `${((step + 1) / 4) * 100}%` }}
            />
          </div>
        </>
      ) : null}

      {step === 0 && (
        <section className="mt-10">
          <h1 className="text-4xl font-semibold tracking-display sm:text-6xl">
            What&apos;s your <span className="text-flame">game?</span>
          </h1>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SPORTS.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setSport(s);
                  setStep(1);
                }}
                className={`group rounded-3xl border p-8 text-left transition-all hover:-translate-y-1 hover:border-ink hover:shadow-lg ${
                  sport?.id === s.id ? "border-ink" : "border-line"
                }`}
              >
                <span className="text-3xl">{s.emoji}</span>
                <p className="mt-4 text-lg font-semibold">{s.label}</p>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 1 && (
        <section className="mt-10">
          <h1 className="text-4xl font-semibold tracking-display sm:text-6xl">
            What&apos;s your <span className="text-flame">level?</span>
          </h1>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {LEVEL_OPTIONS.map((l) => (
              <button
                key={l.id}
                onClick={() => {
                  setLevel(l.id);
                  setStep(2);
                }}
                className={`rounded-3xl border p-8 text-left transition-all hover:-translate-y-1 hover:border-ink hover:shadow-lg ${
                  level === l.id ? "border-ink" : "border-line"
                }`}
              >
                <p className="text-lg font-semibold">{l.label}</p>
                <p className="mt-2 text-sm text-ink/50">{l.copy}</p>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="mt-10">
          <h1 className="text-4xl font-semibold tracking-display sm:text-6xl">
            What&apos;s your <span className="text-flame">budget?</span>
          </h1>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BUDGETS.map((b) => (
              <button
                key={b.id}
                onClick={() => {
                  setBudget(b);
                  setStep(3);
                }}
                className="rounded-3xl border border-line p-8 text-left transition-all hover:-translate-y-1 hover:border-ink hover:shadow-lg"
              >
                <p className="text-lg font-semibold">{b.label}</p>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 3 && sport && level && budget && (
        <section>
          <p className="text-sm font-medium uppercase tracking-widest text-ink/40">
            {sport.label} · {LEVEL_OPTIONS.find((l) => l.id === level)?.label} · {budget.label}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-display sm:text-6xl">
            Your perfect <span className="text-flame">match.</span>
          </h1>
          <p className="mt-4 max-w-lg text-[15px] text-ink/60">
            Hand-picked from our collection based on your game, level and
            budget. Every piece is backed by our 2-year warranty.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-4">
            <PillLink href="/shop">Browse Everything</PillLink>
            <PillButton variant="outline" arrow={false} onClick={restart}>
              Retake the Quiz
            </PillButton>
          </div>
        </section>
      )}
    </div>
  );
}
