import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  accent,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
      <Reveal>
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-widest text-ink/40">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-display sm:text-6xl">
          {title} {accent && <span className="text-flame">{accent}</span>}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/60 sm:text-lg">
            {subtitle}
          </p>
        )}
      </Reveal>
    </div>
  );
}
