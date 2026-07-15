"use client";

import { useState } from "react";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import type { Category } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import Carousel from "@/components/Carousel";
import { PillLink } from "@/components/Pill";

const TABS: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All Products" },
  ...CATEGORIES.map((c) => ({ id: c.id, label: c.name })),
];

export default function FeaturedCollection() {
  const [tab, setTab] = useState<Category | "all">("all");

  const products =
    tab === "all"
      ? PRODUCTS.filter((p) => p.badge).concat(PRODUCTS.filter((p) => !p.badge)).slice(0, 8)
      : PRODUCTS.filter((p) => p.category === tab).slice(0, 8);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-4xl font-semibold tracking-display sm:text-5xl">
          Our <span className="text-flame">Featured</span> Collection
        </h2>
        <PillLink href="/shop" variant="outline">
          View All
        </PillLink>
      </div>

      <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-1">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              tab === t.id
                ? "bg-ink text-white"
                : "bg-mist text-ink/70 hover:bg-line hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <Carousel
        className="mt-10"
        itemClassName="w-[75%] sm:w-[45%] lg:w-[calc(25%-18px)] shrink-0"
        ariaLabel="Featured products"
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Carousel>
    </section>
  );
}
