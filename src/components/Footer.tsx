import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/products";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3" aria-label="HEMPAC Sport home">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                <Image
                  src="/hempac-logo.png"
                  alt=""
                  width={668}
                  height={572}
                  className="h-8 w-auto"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-2xl font-bold tracking-tight">HEMPAC</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blaze">
                  Sport
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Commercial-grade fitness equipment, built for performance and
              built to last. From strength and cardio to recovery, we equip
              gyms, studios and home athletes.
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-white/40">
              One useful email a month
            </p>
            <NewsletterForm className="mt-3 max-w-sm" />
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
                <li><Link href="/about" className="text-white/70 hover:text-white">About HEMPAC</Link></li>
                <li><Link href="/membership" className="text-white/70 hover:text-white">Membership</Link></li>
                <li><Link href="/blog" className="text-white/70 hover:text-white">Blog</Link></li>
                <li><Link href="/quiz" className="text-white/70 hover:text-white">Gear Finder</Link></li>
                <li><Link href="/shop" className="text-white/70 hover:text-white">All Products</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
                Support
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link href="/contact" className="text-white/70 hover:text-white">Contact Us</Link></li>
                <li><Link href="/faq" className="text-white/70 hover:text-white">FAQ</Link></li>
                <li><Link href="/shipping-returns" className="text-white/70 hover:text-white">Shipping &amp; Returns</Link></li>
                <li><Link href="/warranty" className="text-white/70 hover:text-white">2-Year Warranty</Link></li>
                <li><Link href="/wishlist" className="text-white/70 hover:text-white">Wishlist</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} HEMPAC Sport. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Legal">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <span>Free shipping over $75 · 30-day returns</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
