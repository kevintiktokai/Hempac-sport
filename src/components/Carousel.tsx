"use client";

import { useRef, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

/** Horizontal scroll-snap carousel with prev/next arrows. */
export default function Carousel({
  children,
  className = "",
  itemClassName = "",
  ariaLabel,
}: {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  ariaLabel?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth"
      >
        {children.map((child, i) => (
          <div key={i} className={`snap-start ${itemClassName}`}>
            {child}
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Previous items"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-ink hover:bg-ink hover:text-white"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Next items"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-ink hover:bg-ink hover:text-white"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
