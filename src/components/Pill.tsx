import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./icons";

type Variant = "dark" | "light" | "outline" | "flame";

const styles: Record<Variant, string> = {
  dark: "bg-ink text-white hover:bg-black",
  light: "bg-white text-ink hover:bg-mist",
  outline:
    "border border-ink/20 text-ink hover:border-ink bg-transparent",
  flame: "bg-flame text-white hover:opacity-90",
};

const base =
  "group inline-flex items-center gap-3 rounded-full text-sm font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50";

const sizes = {
  md: "px-6 py-3",
  lg: "px-8 py-4 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

export function PillLink({
  href,
  variant = "dark",
  size = "md",
  arrow = true,
  className = "",
  children,
}: CommonProps & { href: string }) {
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${sizes[size]} ${className}`}>
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

export function PillButton({
  variant = "dark",
  size = "md",
  arrow = true,
  className = "",
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${styles[variant]} ${sizes[size]} ${className}`} {...props}>
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}
