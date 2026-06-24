import { Mail } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import OrbitBackground from "@/components/common/OrbitBackground";
import ContactFormCard from "@/components/contact/ContactFormCard";
import ContactSidebar from "@/components/contact/ContactSidebar";
import { useContactForm } from "@/hooks/useContactForm";
import { INVESTOR_EMAIL } from "@/lib/constants";

function ContactHeader() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--kotz-ink))]">
      <OrbitBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <SectionHeading
          eyebrow="Contact"
          title="LET'S BRING THE KOTZINONS TO YOU."
          subtitle="Partnerships, press, licensing, investment, fan mail — we read every message."
        />
        <div className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/70">
          <Mail className="h-4 w-4 text-[hsl(var(--kotz-gold))]" />
          <span>Or email us directly:</span>
          <a
            href={`mailto:${INVESTOR_EMAIL}`}
            className="text-[hsl(var(--kotz-gold))] hover:underline"
            data-testid="contact-direct-email"
          >
            {INVESTOR_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const { form, loading, update, submit } = useContactForm();

  return (
    <div data-testid="contact-page">
      <ContactHeader />
      <section className="pb-24 bg-[hsl(var(--kotz-ink))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            <ContactFormCard form={form} loading={loading} update={update} submit={submit} />
            <ContactSidebar />
          </div>
        </div>
      </section>
    </div>
  );
}
