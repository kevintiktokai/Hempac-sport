import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

/** Shared layout for the policy and support pages. */
export function PolicySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal className="border-t border-line pt-8">
      <h2 className="text-2xl font-semibold tracking-display sm:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink/70">
        {children}
      </div>
    </Reveal>
  );
}

export function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PolicyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="max-w-3xl space-y-12">{children}</div>
    </div>
  );
}
