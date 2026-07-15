import type { Metadata } from "next";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blog";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Training tips, equipment reviews, buying guides and customer success stories from the HEMPAC Sport team.",
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <PageHeader
        eyebrow="The HEMPAC Journal"
        title="Train smarter,"
        accent="lift heavier."
        subtitle="Equipment reviews, training tips, buying guides and real customer stories from the team that knows the gear inside out."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        {/* Featured */}
        <Reveal>
          <article className="group grid overflow-hidden rounded-3xl border border-line lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.title}
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
                <span className="text-ink/50">{formatDate(featured.date)}</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ember">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </article>
        </Reveal>

        {/* Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-mist">
                  <Image
                    src={post.image}
                    alt={post.title}
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
                <h3 className="mt-3 text-lg font-semibold leading-snug">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-ink/50">
                  <span className="font-medium text-ink/70">{post.author}</span>
                  <span>·</span>
                  <span>{formatDate(post.date)}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 rounded-3xl bg-ink px-6 py-14 text-center text-white sm:px-12">
          <h2 className="text-2xl font-semibold tracking-display sm:text-3xl">
            Get training tips in your inbox
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
            One useful email a month — reviews, guides and member-only deals. No spam.
          </p>
          <form className="mx-auto mt-8 flex max-w-md items-center rounded-full border border-white/20 p-1.5">
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email for newsletter"
              className="w-full bg-transparent px-4 text-sm outline-none placeholder:text-white/40"
            />
            <button
              type="button"
              className="shrink-0 rounded-full bg-flame px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
