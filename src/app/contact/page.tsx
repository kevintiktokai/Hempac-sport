import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with HEMPAC Sport — visit our Harare showroom, message us on WhatsApp, or send an enquiry. We're here to help you gear up.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
