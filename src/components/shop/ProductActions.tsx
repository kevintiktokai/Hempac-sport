"use client";

import { useState } from "react";
import type { Product } from "@/lib/types";
import { useStore } from "@/lib/store";
import { CartIcon, HeartIcon } from "@/components/icons";

export default function ProductActions({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted, pushToast, hydrated } = useStore();
  const [size, setSize] = useState(product.sizes?.[0]);
  const [color, setColor] = useState(product.colors?.[0]);
  const [quantity, setQuantity] = useState(1);
  const wishlisted = hydrated && isWishlisted(product.id);

  const add = () => {
    addToCart({ productId: product.id, quantity, size, color });
    pushToast(`${product.name} added to cart`, "/cart", "View cart");
  };

  return (
    <div className="mt-8 space-y-6">
      {product.colors && (
        <div>
          <p className="text-sm font-semibold">
            Color: <span className="font-normal text-ink/60">{color}</span>
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  color === c ? "border-ink bg-ink text-white" : "border-line hover:border-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.sizes && (
        <div>
          <p className="text-sm font-semibold">
            Size: <span className="font-normal text-ink/60">{size}</span>
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  size === s ? "border-ink bg-ink text-white" : "border-line hover:border-ink"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center rounded-full border border-line">
          <button
            onClick={() => setQuantity((n) => Math.max(1, n - 1))}
            aria-label="Decrease quantity"
            className="h-12 w-12 text-lg hover:text-ember"
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-semibold" aria-live="polite">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((n) => Math.min(product.stock, n + 1))}
            aria-label="Increase quantity"
            className="h-12 w-12 text-lg hover:text-ember"
          >
            +
          </button>
        </div>

        <button
          onClick={add}
          className="group flex flex-1 items-center justify-center gap-3 rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black sm:flex-none sm:min-w-56"
        >
          <CartIcon className="h-4 w-4" />
          Add to Cart
        </button>

        <button
          onClick={() => {
            toggleWishlist(product.id);
            pushToast(
              wishlisted
                ? `${product.name} removed from wishlist`
                : `${product.name} saved to wishlist`,
              "/wishlist",
              "View wishlist"
            );
          }}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
            wishlisted
              ? "border-ink bg-ink text-white"
              : "border-line hover:border-ink"
          }`}
        >
          <HeartIcon className="h-5 w-5" filled={wishlisted} />
        </button>
      </div>

      <p className="text-sm text-ink/50">
        {product.stock > 20
          ? "In stock — ships within 24 hours"
          : `Only ${product.stock} left in stock`}
      </p>
    </div>
  );
}
