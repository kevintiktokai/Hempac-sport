import { Suspense } from "react";
import type { Metadata } from "next";
import ShopClient from "@/components/shop/ShopClient";

export const metadata: Metadata = {
  title: "Shop All Gear",
  description:
    "Browse the full HEMPAC collection — rackets, footwear, training equipment, combat gear and more.",
};

export default function ShopPage() {
  return (
    <Suspense>
      <ShopClient />
    </Suspense>
  );
}
