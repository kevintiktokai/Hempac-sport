"use client";

import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { getProductById } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { PillLink } from "@/components/Pill";
import { TrashIcon } from "@/components/icons";

const FREE_SHIPPING_THRESHOLD = 75;

export default function CartPage() {
  const { cart, hydrated, cartSubtotal, updateQuantity, removeFromCart } = useStore();

  const lines = cart
    .map((line) => ({ line, product: getProductById(line.productId) }))
    .filter((x): x is { line: (typeof cart)[number]; product: NonNullable<ReturnType<typeof getProductById>> } =>
      Boolean(x.product)
    );

  const shipping = cartSubtotal >= FREE_SHIPPING_THRESHOLD || cartSubtotal === 0 ? 0 : 9.99;
  const total = cartSubtotal + shipping;
  const remaining = FREE_SHIPPING_THRESHOLD - cartSubtotal;

  if (!hydrated) {
    return <div className="mx-auto max-w-7xl px-4 py-24" aria-busy="true" />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-display sm:text-6xl">
        Your <span className="text-flame">Cart</span>
      </h1>

      {lines.length === 0 ? (
        <div className="mt-12 rounded-3xl bg-mist p-14 text-center">
          <p className="text-xl font-semibold">Your cart is empty</p>
          <p className="mt-2 text-sm text-ink/50">
            Gear up — champions don&apos;t wait.
          </p>
          <div className="mt-8 flex justify-center">
            <PillLink href="/shop">Explore Collections</PillLink>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_380px]">
          <ul className="divide-y divide-line">
            {lines.map(({ line, product }) => (
              <li
                key={`${line.productId}-${line.size}-${line.color}`}
                className="flex gap-5 py-6"
              >
                <Link
                  href={`/shop/${product.slug}`}
                  className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-mist"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        href={`/shop/${product.slug}`}
                        className="font-medium leading-snug hover:underline"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-1 text-xs text-ink/50">
                        {[line.color, line.size].filter(Boolean).join(" · ")}
                      </p>
                    </div>
                    <p className="font-semibold">
                      {formatPrice(product.price * line.quantity)}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="flex items-center rounded-full border border-line">
                      <button
                        onClick={() =>
                          updateQuantity(line.productId, line.quantity - 1, line.size, line.color)
                        }
                        aria-label="Decrease quantity"
                        className="h-9 w-9 hover:text-ember"
                      >
                        −
                      </button>
                      <span className="w-7 text-center text-sm font-semibold">
                        {line.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(line.productId, line.quantity + 1, line.size, line.color)
                        }
                        aria-label="Increase quantity"
                        className="h-9 w-9 hover:text-ember"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(line.productId, line.size, line.color)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/50 hover:text-ember"
                    >
                      <TrashIcon className="h-3.5 w-3.5" />
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-3xl bg-mist p-8">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            {remaining > 0 && (
              <div className="mt-4 rounded-2xl bg-white p-4">
                <p className="text-xs text-ink/60">
                  Add <span className="font-semibold">{formatPrice(remaining)}</span> more
                  for free shipping
                </p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full rounded-full bg-flame transition-all"
                    style={{
                      width: `${Math.min(100, (cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            )}
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-ink/60">Subtotal</dt>
                <dd className="font-medium">{formatPrice(cartSubtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/60">Shipping</dt>
                <dd className="font-medium">
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </dd>
              </div>
              <div className="flex justify-between border-t border-ink/10 pt-3 text-base">
                <dt className="font-semibold">Total</dt>
                <dd className="font-semibold">{formatPrice(total)}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <PillLink href="/checkout" className="w-full justify-center">
                Proceed to Checkout
              </PillLink>
            </div>
            <p className="mt-4 text-center text-xs text-ink/40">
              Secure checkout · 30-day returns
            </p>
          </aside>
        </div>
      )}
    </div>
  );
}
