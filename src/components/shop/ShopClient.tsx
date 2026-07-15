"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES, LEVELS, PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { CloseIcon } from "@/components/icons";

const SORTS = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
] as const;

const PRICE_BANDS = [
  { id: "0-50", label: "Under $50", min: 0, max: 50 },
  { id: "50-300", label: "$50 – $300", min: 50, max: 300 },
  { id: "300-1000", label: "$300 – $1,000", min: 300, max: 1000 },
  { id: "1000+", label: "$1,000+", min: 1000, max: Infinity },
];

export default function ShopClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") ?? "";
  const level = searchParams.get("level") ?? "";
  const price = searchParams.get("price") ?? "";
  const sort = searchParams.get("sort") ?? "featured";
  const q = searchParams.get("q") ?? "";

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    router.replace(`${pathname}?${next.toString()}`, { scroll: false });
  };

  const products = useMemo(() => {
    let list = [...PRODUCTS];
    if (category) list = list.filter((p) => p.category === category);
    if (level) list = list.filter((p) => p.level === level);
    if (price) {
      const band = PRICE_BANDS.find((b) => b.id === price);
      if (band) list = list.filter((p) => p.price >= band.min && p.price < band.max);
    }
    if (q) {
      const needle = q.toLowerCase();
      list = list.filter((p) =>
        `${p.name} ${p.category} ${p.shortDescription} ${p.sports.join(" ")}`
          .toLowerCase()
          .includes(needle)
      );
    }
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        list.sort((a, b) => Number(Boolean(b.badge)) - Number(Boolean(a.badge)));
    }
    return list;
  }, [category, level, price, sort, q]);

  const activeCategory = CATEGORIES.find((c) => c.id === category);
  const hasFilters = Boolean(category || level || price || q);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header>
        <p className="text-sm font-medium uppercase tracking-widest text-ink/40">
          {products.length} {products.length === 1 ? "product" : "products"}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-display sm:text-6xl">
          {q ? (
            <>Results for “{q}”</>
          ) : activeCategory ? (
            <>
              {activeCategory.name.split(" ")[0]}{" "}
              <span className="text-flame">
                {activeCategory.name.split(" ").slice(1).join(" ") || "Gear"}
              </span>
            </>
          ) : (
            <>
              Shop <span className="text-flame">All Gear</span>
            </>
          )}
        </h1>
        {activeCategory && (
          <p className="mt-3 text-[15px] text-ink/50">{activeCategory.tagline}</p>
        )}
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr]">
        {/* Filters */}
        <aside className="space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-ink/40">
              Category
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                <button
                  onClick={() => setParam("category", "")}
                  className={`w-full rounded-full px-4 py-2 text-left text-sm transition-colors ${
                    !category ? "bg-ink font-medium text-white" : "hover:bg-mist"
                  }`}
                >
                  All Products
                </button>
              </li>
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => setParam("category", c.id === category ? "" : c.id)}
                    className={`w-full rounded-full px-4 py-2 text-left text-sm transition-colors ${
                      category === c.id ? "bg-ink font-medium text-white" : "hover:bg-mist"
                    }`}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-ink/40">
              Level
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {LEVELS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setParam("level", l.id === level ? "" : l.id)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    level === l.id
                      ? "border-ink bg-ink text-white"
                      : "border-line hover:border-ink"
                  }`}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-ink/40">
              Price
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {PRICE_BANDS.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setParam("price", b.id === price ? "" : b.id)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    price === b.id
                      ? "border-ink bg-ink text-white"
                      : "border-line hover:border-ink"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {hasFilters && (
            <button
              onClick={() => router.replace(pathname, { scroll: false })}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 underline underline-offset-4 hover:text-ink"
            >
              <CloseIcon className="h-4 w-4" />
              Clear all filters
            </button>
          )}
        </aside>

        {/* Grid */}
        <div>
          <div className="flex items-center justify-between gap-4">
            <div className="no-scrollbar flex gap-2 overflow-x-auto">
              {q && (
                <button
                  onClick={() => setParam("q", "")}
                  className="flex shrink-0 items-center gap-2 rounded-full bg-mist px-4 py-2 text-sm"
                >
                  “{q}” <CloseIcon className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <label className="flex shrink-0 items-center gap-2 text-sm text-ink/60">
              Sort by
              <select
                value={sort}
                onChange={(e) => setParam("sort", e.target.value)}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink outline-none transition-colors hover:border-ink"
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {products.length === 0 ? (
            <div className="mt-16 rounded-3xl bg-mist p-12 text-center">
              <p className="text-xl font-semibold">No products found</p>
              <p className="mt-2 text-sm text-ink/50">
                Try clearing filters or searching for something else.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 xl:grid-cols-3">
              {products.map((p, i) => (
                <ProductCard key={p.id} product={p} priority={i < 3} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
