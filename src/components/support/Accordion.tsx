"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq";

export default function Accordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => {
        const expanded = open === item.q;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(expanded ? null : item.q)}
                aria-expanded={expanded}
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span className="text-[15px] font-medium sm:text-base">{item.q}</span>
                <span
                  aria-hidden
                  className={`mt-1 shrink-0 text-xl leading-none text-ember transition-transform duration-300 ${
                    expanded ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            {expanded && (
              <p className="-mt-1 pb-6 pr-10 text-sm leading-relaxed text-ink/60">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
