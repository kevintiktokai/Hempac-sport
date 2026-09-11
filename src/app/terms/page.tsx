import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  PolicyLayout,
  PolicyList,
  PolicySection,
} from "@/components/support/Prose";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you buy from HEMPAC Sport — orders, pricing, delivery, returns, warranty and use of this website.",
  alternates: { canonical: "/terms" },
};

const UPDATED = "18 February 2024";

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of"
        accent="service."
        subtitle={`The agreement between you and HEMPAC Sport when you use this site or place an order. Last updated ${UPDATED}.`}
      />

      <PolicyLayout>
        <PolicySection title="1. These terms">
          <p>
            By browsing this site or placing an order you accept these terms. If you
            are buying on behalf of a business, you confirm you are authorised to do
            so and the order is a business-to-business sale.
          </p>
        </PolicySection>

        <PolicySection title="2. Orders">
          <p>
            Placing an order is an offer to buy. A contract is formed when we accept
            it — normally when we confirm dispatch. We may decline an order if the
            item is out of stock, if a price or description was published in error,
            or if we cannot deliver to your address.
          </p>
        </PolicySection>

        <PolicySection title="3. Prices and payment">
          <PolicyList
            items={[
              "Prices are shown in US dollars and include applicable taxes unless stated otherwise.",
              "Shipping is calculated at checkout: free over $75, otherwise a $9.99 flat rate. Large-item freight is quoted separately.",
              "Payment is taken by card at checkout, or in cash on delivery where you choose that option.",
              "We may correct an obvious pricing error before dispatch; if we do, we will contact you and you may cancel for a full refund.",
            ]}
          />
        </PolicySection>

        <PolicySection title="4. Delivery">
          <p>
            Delivery timescales are estimates given in good faith, not guarantees.
            Risk in the goods passes to you on delivery. Full detail is on our{" "}
            <Link className="underline hover:text-ink" href="/shipping-returns">
              shipping and returns page
            </Link>
            , which forms part of these terms.
          </p>
        </PolicySection>

        <PolicySection title="5. Returns and cancellation">
          <p>
            You may return unused items in their original packaging within 30 days
            of delivery. Return shipping is paid by you unless the item is faulty,
            damaged in transit or incorrectly supplied. Hygiene items cannot be
            returned once opened. Special-order and made-to-order commercial
            equipment cannot be cancelled once production has begun.
          </p>
        </PolicySection>

        <PolicySection title="6. Warranty">
          <p>
            Our equipment is covered by the warranty set out on our{" "}
            <Link className="underline hover:text-ink" href="/warranty">
              warranty page
            </Link>
            , which also forms part of these terms. Your statutory rights as a
            consumer are in addition to that warranty and are not affected by it.
          </p>
        </PolicySection>

        <PolicySection title="7. Safe use of equipment">
          <p>
            Fitness equipment carries risk. You are responsible for assembling
            equipment correctly, for observing stated weight capacities and for
            training within your ability. Nothing on this site — including our
            articles, buying guides and gear quiz — is medical advice. Consult a
            qualified professional before starting a new training programme,
            particularly if you have an existing condition or are returning from
            injury.
          </p>
        </PolicySection>

        <PolicySection title="8. Site content">
          <p>
            The text, photography, design and code on this site belong to HEMPAC
            Sport or our licensors, and may not be copied or reused commercially
            without permission. Product images may be representative; specifications
            on the product page are the authoritative description.
          </p>
        </PolicySection>

        <PolicySection title="9. Accounts, cart and wishlist">
          <p>
            Your cart and wishlist are stored in your own browser. Clearing your
            browser data or switching device will clear them, and we cannot restore
            them for you. Rewards points are tracked against the email address used
            at checkout.
          </p>
        </PolicySection>

        <PolicySection title="10. Liability">
          <p>
            We do not exclude liability for death or personal injury caused by our
            negligence, for fraud, or for anything else that cannot lawfully be
            excluded. Subject to that, our total liability in connection with an
            order is limited to the amount you paid for it, and we are not liable
            for indirect or consequential loss such as lost profit or lost training
            time.
          </p>
        </PolicySection>

        <PolicySection title="11. Changes and governing law">
          <p>
            We may update these terms; the version published when you place an order
            is the one that applies to it. These terms are governed by the laws of
            Zimbabwe and the courts of Zimbabwe have exclusive jurisdiction.
          </p>
          <p>
            Questions about these terms can be sent to{" "}
            <a className="underline hover:text-ink" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
        </PolicySection>
      </PolicyLayout>
    </>
  );
}
