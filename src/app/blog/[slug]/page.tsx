import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BLOG_POSTS,
  formatPostDate,
  getPost,
  relatedPosts,
  type BlogBlock,
} from "@/lib/blog";
import { getProduct } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 text-2xl font-semibold tracking-display sm:text-3xl">
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[17px] leading-relaxed text-ink/75">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <figure className="my-10 border-l-2 border-ember pl-6">
          <blockquote className="text-xl font-medium leading-relaxed tracking-display sm:text-2xl">
            “{block.text}”
          </blockquote>
          {block.attribution && (
            <figcaption className="mt-3 text-sm text-ink/50">
              — {block.attribution}
            </figcaption>
          )}
        </figure>
      );
    default:
      return (
        <p className="mt-6 text-[17px] leading-relaxed text-ink/75">{block.text}</p>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = relatedPosts(post);
  const gear = post.productSlugs
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author, jobTitle: post.authorRole },
    publisher: {
      "@type": "Organization",
      name: "HEMPAC Sport",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/hempac-logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    articleSection: post.category,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink/50 transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          All articles
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-flame px-3 py-1 font-semibold uppercase tracking-wide text-white">
            {post.category}
          </span>
          <span className="text-ink/50">{post.readTime}</span>
          <span className="text-ink/30">·</span>
          <time dateTime={post.date} className="text-ink/50">
            {formatPostDate(post.date)}
          </time>
        </div>

        <h1 className="mt-5 text-4xl font-semibold tracking-display sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink/60">{post.excerpt}</p>

        <div className="mt-8 flex items-center gap-3 border-y border-line py-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-flame text-sm font-bold text-white">
            {initials(post.author)}
          </span>
          <span>
            <span className="block text-sm font-semibold">{post.author}</span>
            <span className="block text-xs text-ink/50">{post.authorRole}</span>
          </span>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-mist">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-4 pt-12 sm:px-6 lg:px-8">
        {post.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      {/* Gear from this article */}
      {gear.length > 0 && (
        <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-mist px-6 py-12 sm:px-12">
            <h2 className="text-2xl font-semibold tracking-display sm:text-3xl">
              Gear from this <span className="text-flame">article</span>
            </h2>
            <p className="mt-2 text-sm text-ink/60">
              Everything mentioned above, in stock and ready to ship.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
              {gear.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-ink px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-2xl font-semibold tracking-display">
            Enjoyed this? Get the next one.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
            One useful email a month — reviews, guides and member-only deals. No spam.
          </p>
          <NewsletterForm variant="flame" className="mx-auto mt-8 max-w-md" />
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-display sm:text-4xl">
          Keep <span className="text-flame">reading.</span>
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((other) => (
            <Link key={other.slug} href={`/blog/${other.slug}`} className="group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-mist">
                <Image
                  src={other.image}
                  alt={other.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-ember">
                {other.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:underline">
                {other.title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ink/50">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
