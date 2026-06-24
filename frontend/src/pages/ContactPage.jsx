import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Send, Youtube, Sparkles, Globe } from "lucide-react";
import { toast } from "sonner";
import { submitContact } from "@/lib/api";
import { INQUIRY_TYPES } from "@/lib/constants";
import SectionHeading from "@/components/common/SectionHeading";
import OrbitBackground from "@/components/common/OrbitBackground";
import NewsletterForm from "@/components/common/NewsletterForm";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry_type: "general",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Name, email, and message are required.");
      return;
    }
    setLoading(true);
    try {
      await submitContact(form);
      toast.success("Message sent! We'll be in touch soon.");
      setForm({ name: "", email: "", inquiry_type: "general", subject: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      const msg = typeof detail === "string" ? detail : "Could not send your message. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="contact-page">
      <section className="relative overflow-hidden bg-background">
        <OrbitBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <SectionHeading
            eyebrow="Contact"
            title="LET'S BRING THE KOTZINONS TO YOU."
            subtitle="Partnerships, press, licensing, fan mail — we read every message. Fill the form or use the channels below."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Form */}
            <Card className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border bg-card">
              <form onSubmit={onSubmit} className="space-y-5" data-testid="contact-form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-xs font-mono uppercase tracking-[0.2em]">Name</Label>
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your name"
                      className="mt-1.5 h-11 rounded-xl"
                      data-testid="contact-form-name-input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs font-mono uppercase tracking-[0.2em]">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@email.com"
                      className="mt-1.5 h-11 rounded-xl"
                      data-testid="contact-form-email-input"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs font-mono uppercase tracking-[0.2em]">Inquiry type</Label>
                    <Select
                      value={form.inquiry_type}
                      onValueChange={(v) => update("inquiry_type", v)}
                    >
                      <SelectTrigger className="mt-1.5 h-11 rounded-xl" data-testid="contact-form-inquiry-select">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {INQUIRY_TYPES.map((t) => (
                          <SelectItem key={t.value} value={t.value} data-testid={`contact-inquiry-option-${t.value}`}>
                            {t.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-xs font-mono uppercase tracking-[0.2em]">Subject (optional)</Label>
                    <Input
                      id="subject"
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      placeholder="Short summary"
                      className="mt-1.5 h-11 rounded-xl"
                      data-testid="contact-form-subject-input"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-xs font-mono uppercase tracking-[0.2em]">Message</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us a little about your idea or question..."
                    className="mt-1.5 rounded-xl"
                    data-testid="contact-form-message-textarea"
                  />
                </div>

                <div className="flex items-center justify-between flex-wrap gap-3">
                  <p className="text-xs text-muted-foreground">
                    We typically respond within 2–3 business days.
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="rounded-xl gap-2"
                    data-testid="contact-form-submit-button"
                  >
                    <Send className="h-4 w-4" />
                    {loading ? "Sending..." : "Send message"}
                  </Button>
                </div>
              </form>
            </Card>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-5">
              <Card className="p-6 rounded-2xl border bg-card">
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5" /> Newsletter
                </div>
                <h3 className="mt-2 font-display text-2xl tracking-wider">JOIN THE KOTZINONS FAM</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Be the first to see new animations, characters, and toy drops.
                </p>
                <div className="mt-4">
                  <NewsletterForm />
                </div>
              </Card>

              <Card className="p-6 rounded-2xl border bg-card">
                <h3 className="font-display text-2xl tracking-wider">OTHER WAYS TO REACH US</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a
                      href="https://www.youtube.com/shorts/diZbJpeyo6o"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-foreground hover:underline"
                      data-testid="contact-link-youtube"
                    >
                      <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[hsl(var(--kotz-red))]/10 text-[hsl(var(--kotz-red))]">
                        <Youtube className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-semibold">YouTube</span>
                        <span className="block text-muted-foreground text-xs">Watch our latest short</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/team"
                      className="inline-flex items-center gap-3 text-foreground hover:underline"
                      data-testid="contact-link-team"
                    >
                      <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[hsl(var(--kotz-blue))]/10 text-[hsl(var(--kotz-blue))]">
                        <Mail className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-semibold">Meet the team</span>
                        <span className="block text-muted-foreground text-xs">See who's behind the project</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/characters"
                      className="inline-flex items-center gap-3 text-foreground hover:underline"
                      data-testid="contact-link-characters"
                    >
                      <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[hsl(var(--kotz-gold))]/15 text-[hsl(var(--kotz-gold))]">
                        <Globe className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-semibold">Explore the universe</span>
                        <span className="block text-muted-foreground text-xs">Open the character roster</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
