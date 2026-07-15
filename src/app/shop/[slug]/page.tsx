import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, getProduct, PRODUCTS, relatedProducts } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import Gallery from "@/components/shop/Gallery";
import ProductActions from "@/components/shop/ProductActions";
import ProductCard from "@/components/ProductCard";
import RatingStars from "@/components/RatingStars";
import { CheckIcon, TruckIcon, ShieldIcon } from "@/components/icons";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = relatedProducts(product);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <nav className="text-sm text-ink/50" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-ink">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-ink">Shop</Link>
        <span className="mx-2">/</span>
        <Link href={`/shop?category=${product.category}`} className="hover:text-ink">
          {category?.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <Gallery images={product.gallery} name={product.name} />

        <div>
          {product.badge && (
            <span
              className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                product.badge === "Sale" ? "bg-flame text-white" : "bg-mist text-ink"
              }`}
            >
              {product.badge}
            </span>
          )}
          <h1 className="mt-3 text-3xl font-semibold tracking-display sm:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <RatingStars rating={product.rating} />
            <span className="text-sm text-ink/50">
              {product.rating} · {product.reviewCount} reviews
            </span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-semibold">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-lg text-ink/40 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink/60">
            {product.description}
          </p>

          <ProductActions product={product} />

          <ul className="mt-8 space-y-3 border-t border-line pt-8">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-ink/70">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mist text-ember">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 rounded-2xl bg-mist p-4">
              <TruckIcon className="h-5 w-5 shrink-0 text-ember" />
              <p className="text-xs leading-snug text-ink/70">
                Free shipping on orders over $75
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-mist p-4">
              <ShieldIcon className="h-5 w-5 shrink-0 text-ember" />
              <p className="text-xs leading-snug text-ink/70">
                2-year warranty &amp; 30-day returns
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Specs */}
      <section className="mt-20 rounded-3xl bg-mist p-8 sm:p-12">
        <h2 className="text-2xl font-semibold tracking-display sm:text-3xl">
          Technical <span className="text-flame">Specifications</span>
        </h2>
        <dl className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {product.specs.map((spec) => (
            <div key={spec.label} className="border-t border-ink/10 pt-4">
              <dt className="text-xs font-medium uppercase tracking-wider text-ink/40">
                {spec.label}
              </dt>
              <dd className="mt-1 text-[15px] font-semibold">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Related */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold tracking-display sm:text-4xl">
          You Might <span className="text-flame">Also Like</span>
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
