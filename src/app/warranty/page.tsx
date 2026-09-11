import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { PillLink } from "@/components/Pill";
import {
  PolicyLayout,
  PolicyList,
  PolicySection,
} from "@/components/support/Prose";

export const metadata: Metadata = {
  title: "2-Year Warranty",
  description:
    "Every piece of HEMPAC Sport equipment is covered by a 2-year warranty. What's covered, what isn't, and how to make a claim.",
  alternates: { canonical: "/warranty" },
};

const COVERAGE = [
  {
    part: "Frames & welds",
    term: "2 years",
    note: "Structural steel, welds and frame joints on racks, benches and machines.",
  },
  {
    part: "Motors & drives",
    term: "2 years",
    note: "Treadmill motors, drive belts and motor controllers under normal use.",
  },
  {
    part: "Moving parts",
    term: "12 months",
    note: "Bearings, pulleys, cables, rollers and adjustment mechanisms.",
  },
  {
    part: "Upholstery & grips",
    term: "6 months",
    note: "Pads, vinyl, foam grips and other wear surfaces.",
  },
];

export default function WarrantyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support"
        title="Covered for"
        accent="two years."
        subtitle="We specify equipment to survive daily use, and we back it. Here is exactly what the HEMPAC warranty covers and how to claim on it."
      />

      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl overflow-hidden rounded-3xl border border-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-mist">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Component</th>
                <th scope="col" className="px-6 py-4 font-semibold">Cover</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {COVERAGE.map((row) => (
                <tr key={row.part}>
                  <td className="px-6 py-5">
                    <span className="block font-medium">{row.part}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-ink/50">
                      {row.note}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-5 font-semibold text-ember">
                    {row.term}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <PolicyLayout>
        <PolicySection title="What the warranty covers">
          <p>
            The HEMPAC warranty covers defects in materials and workmanship for
            equipment used as intended, in the setting it was sold for. If a covered
            part fails, we repair it, replace the part, or replace the item —
            whichever is appropriate — at no cost to you for parts or labour.
          </p>
          <p>
            Cover starts on the delivery date and is tied to the original purchaser
            and the original delivery address. Keep your order number; it is all we
            need to look up the purchase.
          </p>
        </PolicySection>

        <PolicySection title="What it does not cover">
          <PolicyList
            items={[
              "Normal wear on consumable surfaces — grips, pads, cables and treadmill belts past their stated cover.",
              "Damage from misuse, dropping loaded bars onto frames, or exceeding the rated weight capacity.",
              "Damage from incorrect assembly when installation was not carried out by our team.",
              "Corrosion caused by outdoor storage, damp rooms or chlorinated environments.",
              "Cosmetic marks that do not affect function or safety.",
              "Equipment modified, repaired or fitted with non-original parts by a third party.",
              "Commercial use of equipment sold for home use — commercial-rated gear is labelled as such on every product page.",
            ]}
          />
        </PolicySection>

        <PolicySection title="Commercial installations">
          <p>
            Equipment in the Commercial / Pro tier is warranted for commercial
            duty cycles in gyms, studios, schools and hotels. We also offer annual
            service contracts for commercial sites, which include scheduled
            inspection, cable and bearing replacement, and priority call-out.
          </p>
        </PolicySection>

        <PolicySection title="How to make a claim">
          <PolicyList
            items={[
              "Contact us with your order number, the product name and a description of the fault.",
              "Send photographs or a short video of the problem — this resolves most claims without a site visit.",
              "Our specialist will diagnose the fault and confirm whether it is covered, usually within one working day.",
              "We ship the replacement part, or book a technician for items that need on-site repair.",
              "Most claims are resolved within 5 to 10 working days, depending on part availability.",
            ]}
          />
        </PolicySection>

        <PolicySection title="Care that keeps the cover valid">
          <p>
            Almost every early failure we see is preventable. Keep equipment on a
            level, dry surface. Wipe down upholstery after use — sweat is the single
            biggest enemy of vinyl and steel. Check and tighten bolts every few
            months on anything that moves under load, and lubricate treadmill decks
            according to the manual.
          </p>
          <p>
            Your statutory rights as a consumer are in addition to this warranty and
            are not affected by it.
          </p>
        </PolicySection>
      </PolicyLayout>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-ink px-6 py-14 text-center text-white">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-display sm:text-3xl">
            Something not working right?
          </h2>
          <p className="max-w-md text-sm text-white/60">
            Send us the order number and a photo. Most faults are diagnosed the same
            day.
          </p>
          <PillLink href="/contact" variant="light">
            Start a Claim
          </PillLink>
        </div>
      </section>
    </>
  );
}
