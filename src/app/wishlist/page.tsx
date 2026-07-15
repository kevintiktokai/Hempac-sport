"use client";

import { useStore } from "@/lib/store";
import { getProductById } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { PillLink } from "@/components/Pill";

export default function WishlistPage() {
  const { wishlist, hydrated } = useStore();

  const products = wishlist
    .map((id) => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (!hydrated) {
    return <div className="mx-auto max-w-7xl px-4 py-24" aria-busy="true" />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-display sm:text-6xl">
        Your <span className="text-flame">Wishlist</span>
      </h1>

      {products.length === 0 ? (
        <div className="mt-12 rounded-3xl bg-mist p-14 text-center">
          <p className="text-xl font-semibold">Nothing saved yet</p>
          <p className="mt-2 text-sm text-ink/50">
            Tap the heart on any product to keep it here.
          </p>
          <div className="mt-8 flex justify-center">
            <PillLink href="/shop">Browse the Collection</PillLink>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
