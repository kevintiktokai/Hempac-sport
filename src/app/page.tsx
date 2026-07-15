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
            Premium sports gear engineered for{" "}
            <span className="text-flame">champions.</span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
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
            src={img(PHOTOS.tennisAction, 2200, 1200)}
            alt="Tennis player mid-rally on an outdoor court"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_20%]"
          />
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden pb-[4vw]">
            <p className="watermark text-[13vw]">Play Hard. Win.</p>
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
              src={img(PHOTOS.shoeRed, 1400, 1050)}
              alt="Velocity Elite running shoe"
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
                  title: "Engineered for Speed",
                  copy: "Designed for speed, power, and precision.",
                },
                {
                  icon: <ShieldIcon className="h-5 w-5" />,
                  title: "Trusted by Athletes",
                  copy: "Used by professionals and serious competitors worldwide.",
                },
                {
                  icon: <TargetIcon className="h-5 w-5" />,
                  title: "Gear for Every Sport",
                  copy: "From racquet sports to fitness, we have you covered.",
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

      {/* ————— Shop by sport ————— */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-display sm:text-5xl">
          Shop by <span className="text-flame">Sport</span>
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
              title: "Beginner",
              copy: "Learn, improve, and have fun.",
              image: img(PHOTOS.yogaPink, 1400, 900),
              href: "/shop?level=beginner",
              cta: "Shop Beginner Gear",
            },
            {
              title: "Professional",
              copy: "Power, precision, and performance.",
              image: img(PHOTOS.boxerDark, 1400, 900),
              href: "/shop?level=pro",
              cta: "Shop Pro Gear",
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
              src={img(PHOTOS.volleyball, 2000, 800)}
              alt="Group of athletes playing volleyball"
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
          src={img(PHOTOS.tennisBallDark, 2200, 900)}
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
              Join thousands of athletes who trust HEMPAC for match-day
              performance. Gear up once, win all season.
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
