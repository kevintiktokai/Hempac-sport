import { StarIcon } from "./icons";

export default function RatingStars({
  rating,
  className = "h-3.5 w-3.5",
}: {
  rating: number;
  className?: string;
}) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          className={`${className} ${i <= Math.round(rating) ? "text-amber-glow" : "text-line"}`}
        />
      ))}
    </span>
  );
}
