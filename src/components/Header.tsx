"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PRODUCTS } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";
import {
  CartIcon,
  CloseIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "./icons";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=racquet", label: "Racquet" },
  { href: "/shop?category=footwear", label: "Footwear" },
  { href: "/shop?category=training", label: "Training" },
  { href: "/quiz", label: "Find My Gear" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="HEMPAC home">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-flame">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" className="h-4.5 w-4.5">
          <path d="M5 4v16M19 4v16M5 12h14" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight">HEMPAC</span>
    </Link>
  );
}

export default function Header() {
  const { cartCount, wishlist, hydrated } = useStore();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = searchOpen || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen, menuOpen]);

  const results = query.trim()
    ? PRODUCTS.filter((p) =>
        `${p.name} ${p.category} ${p.sports.join(" ")}`
          .toLowerCase()
          .includes(query.trim().toLowerCase())
      ).slice(0, 6)
    : [];

  const submitSearch = () => {
    if (!query.trim()) return;
    const q = query.trim();
    closeSearch();
    router.push(`/shop?q=${encodeURIComponent(q)}`);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-mist"
            >
              <MenuIcon />
            </button>
          </div>

          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-mist"
            >
              <SearchIcon />
            </button>
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative hidden h-10 w-10 items-center justify-center rounded-full hover:bg-mist sm:flex"
            >
              <HeartIcon />
              {hydrated && wishlist.length > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-flame text-[10px] font-bold text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              href="/checkout"
              aria-label="Account"
              className="hidden h-10 w-10 items-center justify-center rounded-full hover:bg-mist sm:flex"
            >
              <UserIcon />
            </Link>
            <Link
              href="/cart"
              aria-label={`Cart, ${cartCount} items`}
              className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-mist"
            >
              <CartIcon />
              {hydrated && cartCount > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-flame text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm" onClick={closeSearch}>
          <div
            className="mx-auto mt-24 w-[92%] max-w-2xl rounded-3xl bg-white p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 rounded-full border border-line px-5 py-3">
              <SearchIcon className="h-5 w-5 text-ink/40" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submitSearch()}
                placeholder="Search rackets, shoes, gear…"
                className="w-full bg-transparent text-[15px] outline-none placeholder:text-ink/40"
                aria-label="Search products"
              />
              <button onClick={closeSearch} aria-label="Close search">
                <CloseIcon className="h-5 w-5 text-ink/40 hover:text-ink" />
              </button>
            </div>
            {results.length > 0 && (
              <ul className="mt-3 divide-y divide-line">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/shop/${p.slug}`}
                      onClick={closeSearch}
                      className="flex items-center gap-4 rounded-2xl px-3 py-3 hover:bg-mist"
                    >
                      <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-mist">
                        <Image src={p.image} alt="" fill sizes="48px" className="object-cover" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-medium">{p.name}</span>
                        <span className="block text-xs capitalize text-ink/50">{p.category}</span>
                      </span>
                      <span className="text-sm font-semibold">{formatPrice(p.price)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {query.trim() && results.length === 0 && (
              <p className="px-4 py-6 text-sm text-ink/50">
                No matches for “{query}”. Try “racket”, “shoes” or “gloves”.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm lg:hidden" onClick={() => setMenuOpen(false)}>
          <div
            className="flex h-full w-72 flex-col bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <CloseIcon />
              </button>
            </div>
            <nav className="mt-10 flex flex-col gap-5" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/wishlist" className="text-lg font-medium" onClick={() => setMenuOpen(false)}>
                Wishlist
              </Link>
              <Link href="/cart" className="text-lg font-medium" onClick={() => setMenuOpen(false)}>
                Cart
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
