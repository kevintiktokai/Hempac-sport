import Image from "next/image";
import Link from "next/link";
import { img, PHOTOS } from "@/lib/images";
import { CATEGORIES } from "@/lib/products";
import { PillLink } from "@/components/Pill";
import Reveal from "@/components/Reveal";
import { BoltIcon, ShieldIcon, TargetIcon } from "@/components/icons";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import Testimonials from "@/components/home/Testimonials";

const MARQUEE_ITEMS = [
  "Free shipping over $75",
  "Pro-grade equipment",
  "30-day returns",
  "2-year warranty",
  "Trusted by 40,000+ athletes",
];

export default function HomePage() {
  return (
    <>
      {/* ————— Hero ————— */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <Reveal>
          <h1 className="max-w-4xl text-[44px] font-semibold leading-[1.02] tracking-display sm:text-6xl lg:text-7xl">
            Built for performance.{" "}
            <span className="text-flame">Built to last.</span>
          </h1>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60">
            Commercial-grade gym equipment for athletes and studios — from
            racks and rigs to treadmills, mats and everything in between.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
            <PillLink href="/shop" size="lg">
              Explore Collections
            </PillLink>
            <PillLink href="/quiz" size="lg" variant="outline">
              Find My Gear
            </PillLink>
          </div>
        </Reveal>
      </section>

      <section className="relative mt-12 sm:mt-16">
        <div className="relative h-[52vw] max-h-[620px] min-h-[320px] w-full overflow-hidden">
          <Image
            src={img(PHOTOS.gymInterior, 2200, 1200)}
            alt="Commercial gym floor lined with strength equipment"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_60%]"
          />
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden pb-[4vw]">
            <p className="watermark text-[12vw]">Train Hard. Win.</p>
          </div>
        </div>
      </section>

      {/* ————— Marquee ————— */}
      <section className="overflow-hidden border-y border-line bg-white py-4">
        <div className="marquee-track flex w-max items-center gap-10">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap text-sm font-medium uppercase tracking-widest text-ink/50"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-flame" />
            </span>
          ))}
        </div>
      </section>

      {/* ————— Dark value props ————— */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:order-first">
            <Image
              src={img(PHOTOS.plates, 1400, 1050)}
              alt="Olympic barbell loaded with steel plates"
              fill
              sizes="(max-width: 1024px) 92vw, 45vw"
              className="object-cover"
            />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-3xl font-semibold leading-tight tracking-display sm:text-5xl">
                Whether you&apos;re training for competition or pushing your
                personal limits,{" "}
                <span className="text-white/50">
                  the right gear makes all the difference.
                </span>
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {[
                {
                  icon: <BoltIcon className="h-5 w-5" />,
                  title: "Commercial Grade",
                  copy: "Heavy-duty steel builds rated for daily studio use.",
                },
                {
                  icon: <ShieldIcon className="h-5 w-5" />,
                  title: "Trusted by Gyms",
                  copy: "Equipping commercial gyms, studios and serious home setups.",
                },
                {
                  icon: <TargetIcon className="h-5 w-5" />,
                  title: "Gear for Every Goal",
                  copy: "From strength and cardio to recovery, we have you covered.",
                },
              ].map((f, i) => (
                <Reveal key={f.title} delay={i * 120}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-amber-glow">
                    {f.icon}
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50">{f.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ————— Featured collection ————— */}
      <FeaturedCollection />

      {/* ————— Shop by category ————— */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-display sm:text-5xl">
          Shop by <span className="text-flame">Category</span>
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 100}>
              <Link
                href={`/shop?category=${c.id}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-ink sm:aspect-[3/3.4]"
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 1024px) 45vw, 30vw"
                  className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <p className="text-lg font-semibold text-white sm:text-2xl">{c.name}</p>
                  <p className="mt-1 hidden text-sm text-white/60 sm:block">{c.tagline}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ————— Beginner / Professional split ————— */}
      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          {[
            {
              title: "Home Gym",
              copy: "Compact, affordable gear to train where you live.",
              image: img(PHOTOS.yogaPink, 1400, 900),
              href: "/shop?level=beginner",
              cta: "Shop Home Gym Gear",
            },
            {
              title: "Commercial Grade",
              copy: "Built for studios, clubs and daily punishment.",
              image: img(PHOTOS.pullups, 1400, 900),
              href: "/shop?level=pro",
              cta: "Shop Commercial Gear",
            },
          ].map((banner) => (
            <Reveal key={banner.title}>
              <div className="group relative aspect-[16/11] overflow-hidden rounded-3xl bg-ink sm:aspect-[16/9]">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  sizes="(max-width: 1024px) 92vw, 45vw"
                  className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-3xl font-semibold text-white sm:text-4xl">{banner.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{banner.copy}</p>
                  <PillLink href={banner.href} variant="light" className="mt-6">
                    {banner.cta}
                  </PillLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Not sure? quiz banner */}
        <Reveal>
          <div className="group relative mt-4 aspect-[16/9] overflow-hidden rounded-3xl bg-ink sm:mt-6 sm:aspect-[21/8]">
            <Image
              src={img(PHOTOS.matTrainer, 2000, 800)}
              alt="Trainer coaching an athlete through a mat workout"
              fill
              sizes="92vw"
              className="object-cover object-[50%_30%] opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-3xl font-semibold text-white sm:text-5xl">Not sure?</h3>
              <p className="mt-2 text-sm text-white/80">Take our quiz to find the perfect fit!</p>
              <PillLink href="/quiz" variant="light" className="mt-6">
                Find My Gear
              </PillLink>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ————— Testimonials ————— */}
      <Testimonials />

      {/* ————— CTA ————— */}
      <section className="relative overflow-hidden bg-ink">
        <Image
          src={img(PHOTOS.battleRopeDark, 2200, 900)}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-orange-900/40" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-36 lg:px-8">
          <Reveal>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-display text-white sm:text-6xl">
              Take Your Game to the <span className="text-flame">Next Level</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
              Join the gyms, studios and home athletes who trust HEMPAC for
              equipment that performs. Gear up once, train for years.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <PillLink href="/shop" variant="light" size="lg">
                Shop the Collection
              </PillLink>
              <PillLink href="/quiz" variant="flame" size="lg">
                Take the Quiz
              </PillLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
