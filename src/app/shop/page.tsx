import { Suspense } from "react";
import type { Metadata } from "next";
import ShopClient from "@/components/shop/ShopClient";

export const metadata: Metadata = {
  title: "Shop All Gear",
  description:
    "Browse the full HEMPAC collection — strength, cardio, recovery, accessories, storage, swimming and martial arts equipment.",
  alternates: { canonical: "/shop" },
};

function ShopSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-busy="true">
      <div className="h-4 w-28 rounded-full bg-mist" />
      <div className="mt-4 h-12 w-72 rounded-2xl bg-mist" />
      <div className="mt-8 flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-10 w-28 rounded-full bg-mist" />
        ))}
      </div>
      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i}>
            <div className="aspect-square rounded-2xl bg-mist" />
            <div className="mt-4 h-4 w-3/4 rounded-full bg-mist" />
            <div className="mt-2 h-4 w-1/3 rounded-full bg-mist" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopSkeleton />}>
      <ShopClient />
    </Suspense>
  );
}
