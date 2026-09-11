"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-32 text-center">
      <p className="text-7xl font-semibold tracking-display">
        <span className="text-flame">Oops.</span>
      </p>
      <h1 className="mt-4 text-2xl font-semibold">Something went wrong</h1>
      <p className="mt-2 max-w-sm text-sm text-ink/50">
        That page failed to load. Try again — if it keeps happening, our team would
        like to hear about it.
      </p>
      {error.digest && (
        <p className="mt-3 text-xs uppercase tracking-wider text-ink/30">
          Reference {error.digest}
        </p>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => unstable_retry()}
          className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black"
        >
          Try again
        </button>
        <Link
          href="/contact"
          className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
        >
          Contact support
        </Link>
      </div>
    </div>
  );
}
