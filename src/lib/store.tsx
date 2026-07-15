"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { CartItem } from "./types";
import { getProductById } from "./products";

interface Toast {
  id: number;
  message: string;
  href?: string;
  linkLabel?: string;
}

interface StoreState {
  cart: CartItem[];
  wishlist: string[];
  toasts: Toast[];
  hydrated: boolean;
  cartCount: number;
  cartSubtotal: number;
  addToCart: (item: CartItem) => void;
  updateQuantity: (productId: string, quantity: number, size?: string, color?: string) => void;
  removeFromCart: (productId: string, size?: string, color?: string) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  pushToast: (message: string, href?: string, linkLabel?: string) => void;
  dismissToast: (id: number) => void;
}

const StoreContext = createContext<StoreState | null>(null);

const CART_KEY = "hempac.cart.v1";
const WISHLIST_KEY = "hempac.wishlist.v1";

function sameLine(a: CartItem, b: CartItem) {
  return a.productId === b.productId && a.size === b.size && a.color === b.color;
}

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const stored = localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback; // corrupted storage — start fresh
  }
}

const emptySubscribe = () => () => {};

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => readStorage(CART_KEY, []));
  const [wishlist, setWishlist] = useState<string[]>(() =>
    readStorage(WISHLIST_KEY, [])
  );
  const [toasts, setToasts] = useState<Toast[]>([]);
  // False during SSR and the hydration render, true right after — lets the UI
  // defer storage-dependent bits so server and client markup stay in sync.
  const hydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const toastId = useRef(0);

  useEffect(() => {
    if (hydrated) localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const pushToast = useCallback((message: string, href?: string, linkLabel?: string) => {
    const id = ++toastId.current;
    setToasts((t) => [...t, { id, message, href, linkLabel }]);
    setTimeout(() => {
      setToasts((t) => t.filter((toast) => toast.id !== id));
    }, 4000);
  }, []);

  const dismissToast = useCallback((id: number) => {
    setToasts((t) => t.filter((toast) => toast.id !== id));
  }, []);

  const addToCart = useCallback((item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((line) => sameLine(line, item));
      if (existing) {
        return prev.map((line) =>
          sameLine(line, item)
            ? { ...line, quantity: line.quantity + item.quantity }
            : line
        );
      }
      return [...prev, item];
    });
  }, []);

  const updateQuantity = useCallback(
    (productId: string, quantity: number, size?: string, color?: string) => {
      const target: CartItem = { productId, quantity, size, color };
      setCart((prev) =>
        quantity <= 0
          ? prev.filter((line) => !sameLine(line, target))
          : prev.map((line) => (sameLine(line, target) ? { ...line, quantity } : line))
      );
    },
    []
  );

  const removeFromCart = useCallback(
    (productId: string, size?: string, color?: string) => {
      const target: CartItem = { productId, quantity: 0, size, color };
      setCart((prev) => prev.filter((line) => !sameLine(line, target)));
    },
    []
  );

  const clearCart = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  }, []);

  const isWishlisted = useCallback(
    (productId: string) => wishlist.includes(productId),
    [wishlist]
  );

  const { cartCount, cartSubtotal } = useMemo(() => {
    let count = 0;
    let subtotal = 0;
    for (const line of cart) {
      const product = getProductById(line.productId);
      if (!product) continue;
      count += line.quantity;
      subtotal += product.price * line.quantity;
    }
    return { cartCount: count, cartSubtotal: subtotal };
  }, [cart]);

  const value: StoreState = {
    cart,
    wishlist,
    toasts,
    hydrated,
    cartCount,
    cartSubtotal,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    toggleWishlist,
    isWishlisted,
    pushToast,
    dismissToast,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreState {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
