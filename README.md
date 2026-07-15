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

- **Home** — hero with watermark photography, marquee ticker, dark value-props
  band, featured collection with category tabs and carousel, shop-by-sport
  grid, Beginner/Professional banners, gear-quiz banner, athlete testimonials,
  and a closing CTA.
- **Shop** (`/shop`) — category, level and price filtering, sorting, and
  free-text search, all URL-driven and shareable.
- **Product pages** (`/shop/[slug]`) — statically generated for all products,
  with image gallery, color/size/quantity selection, specs and related items.
- **Cart** — persistent (localStorage), quantity management, free-shipping
  progress meter.
- **Wishlist** — save products from any card, persistent across visits.
- **Checkout** (`/checkout`) — validated contact/shipping/payment form that
  posts to `/api/orders` (server-side validation and totals; demo payment) and
  lands on an order-confirmation page.
- **Find My Gear quiz** (`/quiz`) — three-step sport/level/budget quiz with
  scored product recommendations.

## Development

```bash
npm install
npm run dev     # start dev server
npm run build   # production build
npm start       # serve production build
```

## Structure

- `src/lib/` — product catalog, types, cart/wishlist store (React context),
  image helpers.
- `src/components/` — design-system pieces (pills, icons, carousel, cards) and
  page-level client components.
- `src/app/` — App Router pages and the `/api/orders` route handler.

Product and hero imagery is served from Unsplash. Orders are validated and
acknowledged by the API route but not persisted — swap in a real payment
provider and database for production use.
