import Card from "../../components/Card";
import Section from "../../components/Section";
import CTAButton from "../../components/CTAButton";
import { Phone, Mail, Building, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-[var(--teal)]">Contact Us</h1>
      <p className="mt-4 text-[var(--fg-light)]/70 max-w-3xl">
        Start with a 30‑minute discovery call. Share your context, challenges, and goals.
      </p>

      <Section>
        <div className="grid md:grid-cols-[2fr,1fr] gap-10">

          {/* Contact Form */}
          <Card className="p-8 animate-[fadeInUp_0.4s_ease_forwards]">

            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-4 w-4 text-[var(--teal)]" />
              <span className="text-xs text-[var(--fg-light)]/60">
                We respond within 1–2 business days.
              </span>
            </div>

            <form className="grid gap-6">
              <input
                className="border border-[var(--teal)]/40 bg-[#0F1414] p-3 rounded text-[var(--fg-light)] placeholder:text-[var(--fg-light)]/40"
                placeholder="Name"
              />
              <input
                className="border border-[var(--teal)]/40 bg-[#0F1414] p-3 rounded text-[var(--fg-light)] placeholder:text-[var(--fg-light)]/40"
                placeholder="Email"
              />
              <input
                className="border border-[var(--teal)]/40 bg-[#0F1414] p-3 rounded text-[var(--fg-light)] placeholder:text-[var(--fg-light)]/40"
                placeholder="Organization"
              />
              <textarea
                className="border border-[var(--green)]/40 bg-[#0F1414] p-3 rounded text-[var(--fg-light)] placeholder:text-[var(--fg-light)]/40"
                placeholder="What are you trying to achieve?"
                rows={5}
              />

              <CTAButton href="/contact" variant="primary">
                Request Discovery Call
                <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </form>
          </Card>

          {/* Contact Info */}
          <Card className="p-6 animate-[fadeInUp_0.4s_ease_forwards]">
            <div className="space-y-4 text-sm text-[var(--fg-light)]/75">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--teal)]" />
                <span>Discovery calls via Zoom or Teams.</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-[var(--green)]" />
                <span>Based in Hamilton, ON · Serving remote clients.</span>
              </div>
            </div>
          </Card>

        </div>
      </Section>

    </div>
  );
}
