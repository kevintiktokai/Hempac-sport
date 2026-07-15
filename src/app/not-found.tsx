import { PillLink } from "@/components/Pill";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-32 text-center">
      <p className="text-7xl font-semibold tracking-display">
        4<span className="text-flame">0</span>4
      </p>
      <h1 className="mt-4 text-2xl font-semibold">This page is out of bounds</h1>
      <p className="mt-2 max-w-sm text-sm text-ink/50">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <PillLink href="/shop" className="mt-8">
        Back to the Shop
      </PillLink>
    </div>
  );
}
