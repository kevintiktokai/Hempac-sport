import type { Metadata } from "next";
import Image from "next/image";
import { img, PHOTOS } from "@/lib/images";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { PillLink } from "@/components/Pill";
import { BoltIcon, ShieldIcon, TargetIcon, TruckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "HEMPAC Sport was founded to make premium fitness equipment accessible across Zimbabwe. Meet the team and story behind the brand.",
};

const VALUES = [
  {
    icon: <ShieldIcon className="h-5 w-5" />,
    title: "Quality First",
    copy: "We source only the finest equipment from trusted global manufacturers, built for durability and performance.",
  },
  {
    icon: <BoltIcon className="h-5 w-5" />,
    title: "Fair, Flexible Pricing",
    copy: "Competitive pricing and flexible payment options make premium equipment accessible to everyone.",
  },
  {
    icon: <TargetIcon className="h-5 w-5" />,
    title: "Expert Support",
    copy: "Our team provides personalised guidance from selection through installation and beyond.",
  },
  {
    icon: <TruckIcon className="h-5 w-5" />,
    title: "Quick, Secure Delivery",
    copy: "Fast, reliable delivery across Zimbabwe, with professional installation available.",
  },
];

const TIMELINE = [
  { year: "Founded", text: "HEMPAC Sport is established with a vision to revolutionise fitness equipment access in Zimbabwe." },
  { year: "Showroom", text: "Opened our flagship showroom in Harare, showcasing premium equipment from global brands." },
  { year: "Online", text: "Launched our e-commerce platform, making equipment accessible nationwide during the pandemic." },
  { year: "Commercial", text: "Expanded into commercial gym equipment, partnering with fitness centres across the country." },
  { year: "1,000+", text: "Reached the milestone of serving over 1,000 satisfied customers with quality fitness solutions." },
  { year: "Regional", text: "Extended our services to neighbouring countries, becoming a regional fitness equipment leader." },
];

const TEAM = [
  { name: "Michael Chikwanha", role: "Founder & CEO", bio: "With over 15 years in the fitness industry, Michael founded HEMPAC Sport to make quality equipment accessible to all Zimbabweans." },
  { name: "Sarah Mutasa", role: "Operations Manager", bio: "Sarah ensures smooth operations and customer satisfaction. Her logistics expertise has streamlined delivery across Zimbabwe." },
  { name: "David Moyo", role: "Equipment Specialist", bio: "David's technical expertise helps customers choose the right equipment, with installation support and maintenance guidance." },
  { name: "Grace Nyambi", role: "Customer Relations Manager", bio: "Grace leads our customer service team, ensuring every customer receives personalised attention and expert advice." },
];

const TESTIMONIALS = [
  { quote: "HEMPAC Sport transformed our gym with top-quality equipment. Their professional service and ongoing support have been exceptional.", name: "James Mukamuri", role: "Gym Owner" },
  { quote: "The treadmill I bought has been perfect for my home workouts. Great quality, fair price, and excellent customer service.", name: "Lisa Chigumira", role: "Home Fitness Enthusiast" },
  { quote: "I recommend HEMPAC Sport to all my clients. Their equipment is reliable, and their team really understands fitness needs.", name: "Robert Ndoro", role: "Personal Trainer" },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Equipping Zimbabwe to"
        accent="train harder."
        subtitle="HEMPAC Sport was established with a vision to revolutionise fitness equipment access in Zimbabwe — from home setups to full commercial gyms."
      />

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative aspect-[21/9] overflow-hidden rounded-3xl bg-ink">
          <Image
            src={img(PHOTOS.gymInterior, 2000, 860)}
            alt="HEMPAC Sport showroom floor"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { n: "15+", l: "Years in fitness" },
            { n: "1,000+", l: "Customers served" },
            { n: "60+", l: "Products in range" },
            { n: "2-Yr", l: "Warranty on gear" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <p className="text-4xl font-semibold tracking-display text-flame sm:text-5xl">
                {s.n}
              </p>
              <p className="mt-2 text-sm text-ink/60">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-display sm:text-5xl">
            What we <span className="text-flame">stand for.</span>
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-blaze">
                  {v.icon}
                </span>
                <h3 className="mt-4 text-[15px] font-semibold">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">{v.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-display sm:text-5xl">
          Our <span className="text-flame">journey.</span>
        </h2>
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={(i % 3) * 80}>
              <div className="border-t-2 border-ember/30 pt-5">
                <p className="text-lg font-semibold text-flame">{t.year}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-display sm:text-5xl">
            The team behind <span className="text-flame">HEMPAC.</span>
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <div className="h-full rounded-3xl bg-white p-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-flame text-lg font-bold text-white">
                    {initials(m.name)}
                  </span>
                  <p className="mt-4 font-semibold">{m.name}</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-ember">
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-display sm:text-5xl">
          Trusted across <span className="text-flame">Zimbabwe.</span>
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="h-full rounded-3xl border border-line p-8">
                <blockquote className="text-[15px] leading-relaxed text-ink/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-flame px-6 py-16 text-center text-white">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-display sm:text-4xl">
            Ready to build your setup?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <PillLink href="/shop" variant="light">
              Explore Equipment
            </PillLink>
            <PillLink href="/contact" variant="dark">
              Talk to Our Team
            </PillLink>
          </div>
        </div>
      </section>
    </>
  );
}
