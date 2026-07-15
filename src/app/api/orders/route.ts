import { NextResponse } from "next/server";
import { getProductById } from "@/lib/products";
import type { OrderPayload } from "@/lib/types";

const FREE_SHIPPING_THRESHOLD = 75;
const SHIPPING_FLAT = 9.99;

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

export async function POST(request: Request) {
  let payload: OrderPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { items, customer } = payload ?? {};

  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: "Your cart is empty" }, { status: 400 });
  }

  for (const field of [
    "email",
    "firstName",
    "lastName",
    "address",
    "city",
    "postalCode",
    "country",
  ] as const) {
    if (!isNonEmptyString(customer?.[field])) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  let subtotal = 0;
  for (const item of items) {
    const product = getProductById(item.productId);
    if (!product) {
      return NextResponse.json(
        { error: `Unknown product: ${item.productId}` },
        { status: 400 }
      );
    }
    if (!Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 99) {
      return NextResponse.json(
        { error: `Invalid quantity for ${product.name}` },
        { status: 400 }
      );
    }
    subtotal += product.price * item.quantity;
  }

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT;
  const total = Math.round((subtotal + shipping) * 100) / 100;

  // Demo storefront: orders are acknowledged, not persisted. Swap in a real
  // payment provider + database here for production.
  const orderNumber = `HP-${Date.now().toString(36).toUpperCase()}-${Math.floor(
    1000 + Math.random() * 9000
  )}`;

  return NextResponse.json(
    {
      orderNumber,
      subtotal: Math.round(subtotal * 100) / 100,
      shipping,
      total,
      estimatedDelivery: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10),
    },
    { status: 201 }
  );
}
