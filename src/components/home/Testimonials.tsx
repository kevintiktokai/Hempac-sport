"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/lib/products";
import Carousel from "@/components/Carousel";
import RatingStars from "@/components/RatingStars";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <h2 className="max-w-3xl text-4xl font-semibold tracking-display sm:text-5xl">
        What <span className="text-flame">Athletes</span> Say About HEMPAC
      </h2>

      <Carousel
        className="mt-12"
        itemClassName="w-[80%] sm:w-[46%] lg:w-[calc(33.333%-16px)] shrink-0"
        ariaLabel="Athlete testimonials"
      >
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-ink"
          >
            <Image
              src={t.image}
              alt={t.name}
              fill
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 46vw, 30vw"
              className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6">
              <RatingStars rating={5} />
              <blockquote className="mt-3 text-[15px] font-medium leading-snug text-white">
                “{t.quote}”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-white/60">{t.title}</p>
            </figcaption>
          </figure>
        ))}
      </Carousel>
    </section>
  );
}
