import { Suspense } from "react";
import type { Metadata } from "next";
import SuccessClient from "@/components/checkout/SuccessClient";

export const metadata: Metadata = {
  title: "Order Confirmed",
};

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessClient />
    </Suspense>
  );
}
