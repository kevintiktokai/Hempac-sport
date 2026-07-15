import Link from "next/link";
import { CATEGORIES } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-2xl font-bold tracking-tight">HEMPAC</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Commercial-grade fitness equipment, built for performance and
              built to last. From strength and cardio to recovery, we equip
              gyms, studios and home athletes.
            </p>
            <form className="mt-8 flex max-w-sm items-center rounded-full border border-white/20 p-1.5">
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="w-full bg-transparent px-4 text-sm outline-none placeholder:text-white/40"
              />
              <button
                type="button"
                className="shrink-0 rounded-full bg-white px-5 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
                Shop
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {CATEGORIES.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={`/shop?category=${c.id}`}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
                Company
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="/" className="text-white/70 hover:text-white">About HEMPAC</Link></li>
                <li><Link href="/quiz" className="text-white/70 hover:text-white">Gear Finder</Link></li>
                <li><Link href="/shop" className="text-white/70 hover:text-white">All Products</Link></li>
                <li><Link href="/wishlist" className="text-white/70 hover:text-white">Wishlist</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
                Support
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li><span className="text-white/70">Shipping &amp; Returns</span></li>
                <li><span className="text-white/70">Warranty</span></li>
                <li><span className="text-white/70">Size Guides</span></li>
                <li><span className="text-white/70">Contact Us</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} HEMPAC Sport. All rights reserved.</p>
          <p>Free shipping over $75 · 30-day returns · 2-year warranty</p>
        </div>
      </div>
    </footer>
  );
}
