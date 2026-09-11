# HEMPAC Sport

Premium fitness equipment storefront — **"Built for performance. Built to
last."**

The 62-product catalog (names, prices, SKUs, descriptions, specifications,
features, ratings, stock levels) and its categories — Strength Training,
Cardio Equipment, Accessories, Recovery Equipment, Swimming, Storage and
Martial Arts — are imported from the original
`kevinunlocked/Hempac-website` repository. That repo referenced product
image paths without shipping the image files (they 404 on its live
deployment as well); its few real photos (ankle guard, gym gloves, quad
bike) are used directly, and every other product carries a hand-matched,
visually verified stock photo until real product photography is available.

A full-stack e-commerce experience built with Next.js (App Router), TypeScript
and Tailwind CSS. The design language is typography-led: oversized grotesque
headlines with a signature flame-gradient accent, alternating white and
near-black sections, pill buttons, and large editorial photography.

## Features

- **Home** (`/`) — hero with watermark photography, marquee ticker, dark
  value-props band, featured collection with category tabs and carousel,
  shop-by-sport grid, Beginner/Professional banners, gear-quiz banner, athlete
  testimonials, latest journal articles, and a closing CTA.
- **Shop** (`/shop`) — category, level and price filtering, sorting, and
  free-text search, all URL-driven and shareable.
- **Product pages** (`/shop/[slug]`) — statically generated for all products,
  with image gallery, color/size/quantity selection, specs, related items and
  `Product` + `BreadcrumbList` structured data.
- **Cart** — persistent (localStorage), quantity management, free-shipping
  progress meter.
- **Wishlist** — save products from any card, persistent across visits.
- **Checkout** (`/checkout`) — validated contact/shipping/payment form that
  posts to `/api/orders` (server-side validation and totals; card or cash on
  delivery) and lands on an order-confirmation page.
- **Find My Gear quiz** (`/quiz`) — three-step sport/level/budget quiz with
  scored product recommendations.
- **Journal** (`/blog`, `/blog/[slug]`) — six full long-form articles with
  category filtering, author bylines, a "gear from this article" product rail,
  related posts and `BlogPosting` structured data.
- **Support** — `/faq` (accordion, `FAQPage` structured data),
  `/shipping-returns` and `/warranty`.
- **Legal** — `/privacy` and `/terms`.
- **Company** — `/about` and `/membership` (HEMPAC Rewards tiers).
- **Contact** (`/contact`) — WhatsApp/phone/email/showroom cards plus a
  validated enquiry form that posts to `/api/contact`.
- **Newsletter** — shared sign-up form in the footer, on the blog index and at
  the foot of every article, posting to `/api/newsletter`.

## SEO & resilience

- `metadataBase`, per-page canonicals, Open Graph and Twitter cards, plus a
  generated OG image (`src/app/opengraph-image.tsx`).
- `sitemap.xml` (static pages, category views, all products, all articles) and
  `robots.txt`, both generated at build time.
- JSON-LD: `Organization` + `WebSite` site-wide, `Product` +
  `BreadcrumbList` on product pages, `BlogPosting` on articles, `FAQPage` on
  the FAQ.
- `error.tsx` / `global-error.tsx` boundaries, a skeleton fallback for the
  shop, a skip-to-content link, and `noindex` on the order-confirmation page.

## Development

```bash
npm install
npm run dev     # start dev server
npm run build   # production build
npm start       # serve production build
npm run lint    # eslint
```

### Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used for metadata, the sitemap and JSON-LD. Falls back to `VERCEL_PROJECT_PRODUCTION_URL`, then `https://hempacsport.com`. |

## Structure

- `src/lib/` — product catalog, blog content, FAQ content, site constants,
  types, cart/wishlist store (React context), image helpers.
- `src/components/` — design-system pieces (pills, icons, carousel, cards),
  page-level client components, and shared support/blog components.
- `src/app/` — App Router pages, metadata routes (`sitemap.ts`, `robots.ts`,
  `opengraph-image.tsx`) and the `/api/orders`, `/api/contact` and
  `/api/newsletter` route handlers.

Product and hero imagery is served from Unsplash. The API routes validate and
acknowledge submissions but do not persist them — swap in a real payment
provider, database, email provider and CRM for production use. The review
counts and ratings shown on product pages come from the imported catalog data;
there is no review-collection flow yet.
