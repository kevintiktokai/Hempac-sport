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
  title: "Privacy Policy",
  description:
    "What personal information HEMPAC Sport collects, why we collect it, how long we keep it and the choices you have.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "18 February 2024";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy"
        accent="policy."
        subtitle={`How we handle your personal information. Last updated ${UPDATED}.`}
      />

      <PolicyLayout>
        <PolicySection title="Who we are">
          <p>
            HEMPAC Sport sells fitness equipment online and from our showroom in
            Harare, Zimbabwe. When you buy from us or contact us, we act as the
            controller of the personal information you give us. You can reach us at{" "}
            <a className="underline hover:text-ink" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            .
          </p>
        </PolicySection>

        <PolicySection title="What we collect">
          <PolicyList
            items={[
              "Order information — your name, email address, delivery address, phone number and the items you ordered.",
              "Payment information — processed by our payment provider. We receive confirmation of payment and never store your full card number.",
              "Enquiries — the name, email address and message you send through our contact form or by WhatsApp.",
              "Newsletter subscriptions — your email address, if you choose to give it.",
              "Technical information — basic request data such as IP address and browser type, used to keep the site secure and working.",
            ]}
          />
          <p>
            Your cart and wishlist are kept in your own browser&apos;s local storage,
            on your device. They are not sent to us and we cannot read them.
          </p>
        </PolicySection>

        <PolicySection title="Why we use it">
          <PolicyList
            items={[
              "To take payment, deliver your order and handle returns, warranty claims and repairs — this is necessary to perform our contract with you.",
              "To answer the questions you ask us.",
              "To send marketing email, only where you have asked us to, and only until you unsubscribe.",
              "To keep records required by tax and accounting law.",
              "To protect the site against fraud and abuse, which is our legitimate interest.",
            ]}
          />
          <p>
            We do not sell your personal information, and we do not share it with
            third parties for their own marketing.
          </p>
        </PolicySection>

        <PolicySection title="Who we share it with">
          <p>
            We share only what is necessary, and only with organisations that work
            for us: our payment provider, our delivery and freight partners, our
            email provider, and our hosting provider. Each is bound to use the
            information only for the service they provide to us. We will also
            disclose information where the law requires it.
          </p>
        </PolicySection>

        <PolicySection title="How long we keep it">
          <p>
            Order records are kept for as long as tax and accounting law requires.
            Warranty records are kept for the duration of the cover plus one year.
            Contact enquiries are kept for two years. Newsletter subscriptions are
            kept until you unsubscribe.
          </p>
        </PolicySection>

        <PolicySection title="Cookies and similar technology">
          <p>
            The site uses only what it needs to function: the local storage that
            remembers your cart and wishlist on your own device, and the technical
            request data described above. We do not run advertising trackers or
            sell audience data. Clearing your browser storage removes your saved
            cart and wishlist.
          </p>
        </PolicySection>

        <PolicySection title="Your choices">
          <PolicyList
            items={[
              "Ask us for a copy of the personal information we hold about you.",
              "Ask us to correct anything that is wrong.",
              "Ask us to delete information we no longer need to keep.",
              "Unsubscribe from marketing email at any time, using the link in any message or by contacting us.",
              "Object to a use you disagree with — write to us and we will explain or stop.",
            ]}
          />
          <p>
            Email{" "}
            <a className="underline hover:text-ink" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>{" "}
            and we will respond within 30 days.
          </p>
        </PolicySection>

        <PolicySection title="Security">
          <p>
            The site is served over encrypted connections, payment details go
            directly to our processor, and access to order records is limited to
            staff who need it. No system is perfect, so if we ever become aware of a
            breach affecting your information we will tell you and the relevant
            authority promptly.
          </p>
        </PolicySection>

        <PolicySection title="Changes to this policy">
          <p>
            If we change how we handle personal information we will update this page
            and change the date at the top. Material changes affecting existing
            customers will be sent by email. Questions are welcome on our{" "}
            <Link className="underline hover:text-ink" href="/contact">
              contact page
            </Link>
            .
          </p>
        </PolicySection>
      </PolicyLayout>
    </>
  );
}
