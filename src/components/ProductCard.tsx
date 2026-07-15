"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { useStore } from "@/lib/store";
import { CartIcon, HeartIcon } from "./icons";
import RatingStars from "./RatingStars";

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const { addToCart, toggleWishlist, isWishlisted, pushToast, hydrated } = useStore();
  const wishlisted = hydrated && isWishlisted(product.id);

  const quickAdd = () => {
    addToCart({
      productId: product.id,
      quantity: 1,
      size: product.sizes?.[0],
      color: product.colors?.[0],
    });
    pushToast(`${product.name} added to cart`, "/cart", "View cart");
  };

  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-mist">
        <Link href={`/shop/${product.slug}`} className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>
        {product.badge && (
          <span
            className={`pointer-events-none absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
              product.badge === "Sale"
                ? "bg-flame text-white"
                : "bg-white/90 text-ink backdrop-blur"
            }`}
          >
            {product.badge}
          </span>
        )}
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
          className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur transition-colors ${
            wishlisted
              ? "bg-ink text-white"
              : "bg-white/90 text-ink hover:bg-ink hover:text-white"
          }`}
        >
          <HeartIcon className="h-4 w-4" filled={wishlisted} />
        </button>
        <button
          onClick={quickAdd}
          className="absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-center gap-2 rounded-full bg-ink py-3 text-sm font-medium text-white opacity-0 transition-all duration-300 hover:bg-black group-hover:translate-y-0 group-hover:opacity-100"
        >
          <CartIcon className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <RatingStars rating={product.rating} />
          <span className="text-xs text-ink/50">{product.reviewCount} reviews</span>
        </div>
        <Link
          href={`/shop/${product.slug}`}
          className="text-[15px] font-medium leading-snug hover:underline"
        >
          {product.name}
        </Link>
        <div className="flex items-baseline gap-2">
          <span className="text-[15px] font-semibold">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-ink/40 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
