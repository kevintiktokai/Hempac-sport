"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { CheckIcon, CloseIcon } from "./icons";

export default function Toasts() {
  const { toasts, dismissToast } = useStore();

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-[80] flex w-full max-w-sm -translate-x-1/2 flex-col items-center gap-2 px-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="toast-enter pointer-events-auto flex w-full items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-sm text-white shadow-2xl"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flame">
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          <span className="flex-1 leading-snug">{toast.message}</span>
          {toast.href && (
            <Link
              href={toast.href}
              onClick={() => dismissToast(toast.id)}
              className="shrink-0 font-semibold underline underline-offset-4 hover:opacity-80"
            >
              {toast.linkLabel ?? "View"}
            </Link>
          )}
          <button
            onClick={() => dismissToast(toast.id)}
            aria-label="Dismiss notification"
            className="shrink-0 opacity-60 hover:opacity-100"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
