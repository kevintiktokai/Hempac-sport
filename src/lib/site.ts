/**
 * Canonical origin for absolute URLs (metadata, sitemap, JSON-LD).
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment; Vercel's
 * VERCEL_PROJECT_PRODUCTION_URL is used as a fallback for preview builds.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "https://hempacsport.com";
}

export const SITE_URL = resolveSiteUrl();

export const SITE = {
  name: "HEMPAC Sport",
  tagline: "Built for performance. Built to last.",
  description:
    "Commercial-grade gym equipment for athletes and studios. Strength, cardio, recovery and accessories — built for performance, built to last.",
  email: "sales@hempac.co.zw",
  phone: "+263 76 471 2881",
  whatsapp: "263784712881",
  address: {
    locality: "Harare",
    country: "ZW",
  },
  freeShippingThreshold: 75,
  flatShipping: 9.99,
  returnDays: 30,
  warrantyYears: 2,
} as const;
