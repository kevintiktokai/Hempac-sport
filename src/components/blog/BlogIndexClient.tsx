"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BLOG_CATEGORIES, BLOG_POSTS, formatPostDate } from "@/lib/blog";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";

export default function BlogIndexClient() {
  const [active, setActive] = useState("All");

  const posts =
    active === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === active);

  const [featured, ...rest] = posts;

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Article categories">
        {BLOG_CATEGORIES.map((category) => {
          const count =
            category === "All"
              ? BLOG_POSTS.length
              : BLOG_POSTS.filter((p) => p.category === category).length;
          const selected = active === category;
          return (
            <button
              key={category}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                selected
                  ? "border-ink bg-ink text-white"
                  : "border-line text-ink/60 hover:border-ink hover:text-ink"
              }`}
            >
              {category}
              <span className={selected ? "ml-2 text-white/50" : "ml-2 text-ink/30"}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {featured && (
        <Reveal className="mt-10 block">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-line transition-colors hover:border-ink lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-flame px-3 py-1 font-semibold uppercase tracking-wide text-white">
                  {featured.category}
                </span>
                <span className="text-ink/50">{featured.readTime}</span>
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-display sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm">
                <span className="font-medium">{featured.author}</span>
                <span className="text-ink/40">·</span>
                <span className="text-ink/50">{formatPostDate(featured.date)}</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ember">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      )}

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 3) * 90}>
            <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-mist">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs">
                <span className="font-semibold uppercase tracking-wide text-ember">
                  {post.category}
                </span>
                <span className="text-ink/40">{post.readTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:underline">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs text-ink/50">
                <span className="font-medium text-ink/70">{post.author}</span>
                <span>·</span>
                <span>{formatPostDate(post.date)}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
