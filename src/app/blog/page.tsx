import type { Metadata } from "next";
import BlogIndexClient from "@/components/blog/BlogIndexClient";
import NewsletterForm from "@/components/NewsletterForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Training tips, equipment reviews, buying guides and customer success stories from the HEMPAC Sport team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="The HEMPAC Journal"
        title="Train smarter,"
        accent="lift heavier."
        subtitle="Equipment reviews, training tips, buying guides and real customer stories from the team that knows the gear inside out."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <BlogIndexClient />

        {/* Newsletter */}
        <div className="mt-20 rounded-3xl bg-ink px-6 py-14 text-center text-white sm:px-12">
          <h2 className="text-2xl font-semibold tracking-display sm:text-3xl">
            Get training tips in your inbox
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
            One useful email a month — reviews, guides and member-only deals. No spam.
          </p>
          <NewsletterForm variant="flame" className="mx-auto mt-8 max-w-md" />
        </div>
      </section>
    </>
  );
}
