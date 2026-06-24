import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
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
import { INQUIRY_TYPES, INVESTOR_EMAIL } from "@/lib/constants";
import SectionHeading from "@/components/common/SectionHeading";
import OrbitBackground from "@/components/common/OrbitBackground";
import NewsletterForm from "@/components/common/NewsletterForm";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialInquiry = searchParams.get("inquiry") || "general";

  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry_type: initialInquiry,
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setForm((f) => ({ ...f, inquiry_type: searchParams.get("inquiry") || f.inquiry_type }));
  }, [searchParams]);

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
            <a href={`mailto:${INVESTOR_EMAIL}`} className="text-[hsl(var(--kotz-gold))] hover:underline" data-testid="contact-direct-email">{INVESTOR_EMAIL}</a>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-[hsl(var(--kotz-ink))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            <Card className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-border bg-[hsl(var(--kotz-ink-2))]">
              <form onSubmit={onSubmit} className="space-y-5" data-testid="contact-form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/65">Name</Label>
                    <Input id="name" required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className="mt-1.5 h-11 rounded-xl bg-[hsl(var(--kotz-ink))] border-border" data-testid="contact-form-name-input" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/65">Email</Label>
                    <Input id="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" className="mt-1.5 h-11 rounded-xl bg-[hsl(var(--kotz-ink))] border-border" data-testid="contact-form-email-input" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/65">Inquiry type</Label>
                    <Select value={form.inquiry_type} onValueChange={(v) => update("inquiry_type", v)}>
                      <SelectTrigger className="mt-1.5 h-11 rounded-xl bg-[hsl(var(--kotz-ink))] border-border" data-testid="contact-form-inquiry-select">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[hsl(var(--kotz-ink-2))] border-border">
                        {INQUIRY_TYPES.map((t) => (
                          <SelectItem key={t.value} value={t.value} data-testid={`contact-inquiry-option-${t.value}`}>{t.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/65">Subject (optional)</Label>
                    <Input id="subject" value={form.subject} onChange={(e) => update("subject", e.target.value)} placeholder="Short summary" className="mt-1.5 h-11 rounded-xl bg-[hsl(var(--kotz-ink))] border-border" data-testid="contact-form-subject-input" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/65">Message</Label>
                  <Textarea id="message" required rows={6} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us a little about your idea or question..." className="mt-1.5 rounded-xl bg-[hsl(var(--kotz-ink))] border-border" data-testid="contact-form-message-textarea" />
                </div>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <p className="text-xs text-foreground/55">We typically respond within 2–3 business days.</p>
                  <Button type="submit" size="lg" disabled={loading} className="rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold" data-testid="contact-form-submit-button">
                    <Send className="h-4 w-4" />
                    {loading ? "Sending..." : "Send message"}
                  </Button>
                </div>
              </form>
            </Card>

            <div className="lg:col-span-5 space-y-5">
              <Card className="p-6 rounded-2xl border border-[hsl(var(--kotz-gold))]/30 bg-[hsl(var(--kotz-ink-2))] relative overflow-hidden">
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,hsla(43,92%,56%,0.3),transparent_60%)]" />
                <div className="relative">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[hsl(var(--kotz-gold))]">
                    <Sparkles className="h-3.5 w-3.5" /> Direct line
                  </div>
                  <h3 className="mt-2 font-display text-2xl tracking-wider text-foreground">INVESTORS & LICENSING</h3>
                  <p className="mt-1 text-sm text-foreground/65">
                    Reach the creator directly for serious inquiries:
                  </p>
                  <Button asChild className="mt-4 w-full rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold" data-testid="contact-investor-mail-btn">
                    <a href={`mailto:${INVESTOR_EMAIL}?subject=Kotzinons%20Licensing%20%2F%20Investment`}>
                      <Mail className="h-4 w-4" /> {INVESTOR_EMAIL}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="mt-2 w-full rounded-xl border-border bg-transparent text-foreground hover:bg-foreground/5">
                    <Link to="/invest">View opportunities</Link>
                  </Button>
                </div>
              </Card>

              <Card className="p-6 rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))]">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[hsl(var(--kotz-gold))]">
                  <Sparkles className="h-3.5 w-3.5" /> Newsletter
                </div>
                <h3 className="mt-2 font-display text-2xl tracking-wider text-foreground">JOIN THE KOTZINONS FAM</h3>
                <p className="mt-1 text-sm text-foreground/65">Be the first to see new animations, characters, and toy drops.</p>
                <div className="mt-4">
                  <NewsletterForm />
                </div>
              </Card>

              <Card className="p-6 rounded-2xl border border-border bg-[hsl(var(--kotz-ink-2))]">
                <h3 className="font-display text-2xl tracking-wider text-foreground">OTHER WAYS TO REACH US</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href="https://www.youtube.com/shorts/diZbJpeyo6o" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-foreground hover:text-[hsl(var(--kotz-gold))]" data-testid="contact-link-youtube">
                      <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[hsl(var(--kotz-red))]/15 text-[hsl(var(--kotz-red))] border border-[hsl(var(--kotz-red))]/30">
                        <Youtube className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-semibold">YouTube</span>
                        <span className="block text-foreground/55 text-xs">Watch our latest short</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <Link to="/team" className="inline-flex items-center gap-3 text-foreground hover:text-[hsl(var(--kotz-gold))]" data-testid="contact-link-team">
                      <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[hsl(var(--kotz-blue))]/15 text-[hsl(var(--kotz-blue))] border border-[hsl(var(--kotz-blue))]/30">
                        <Mail className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-semibold">Meet the team</span>
                        <span className="block text-foreground/55 text-xs">See who's behind the project</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/characters" className="inline-flex items-center gap-3 text-foreground hover:text-[hsl(var(--kotz-gold))]" data-testid="contact-link-characters">
                      <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[hsl(var(--kotz-gold))]/15 text-[hsl(var(--kotz-gold))] border border-[hsl(var(--kotz-gold))]/40">
                        <Globe className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-semibold">Explore the universe</span>
                        <span className="block text-foreground/55 text-xs">Open the character roster</span>
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
