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
import { Send } from "lucide-react";
import { INQUIRY_TYPES } from "@/lib/constants";

function LabelText({ children }) {
  return (
    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/65">
      {children}
    </span>
  );
}

export default function ContactFormCard({ form, loading, update, submit }) {
  return (
    <Card className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-border bg-[hsl(var(--kotz-ink-2))]">
      <form onSubmit={submit} className="space-y-5" data-testid="contact-form">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name"><LabelText>Name</LabelText></Label>
            <Input
              id="name"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
              className="mt-1.5 h-11 rounded-xl bg-[hsl(var(--kotz-ink))] border-border"
              data-testid="contact-form-name-input"
            />
          </div>
          <div>
            <Label htmlFor="email"><LabelText>Email</LabelText></Label>
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@email.com"
              className="mt-1.5 h-11 rounded-xl bg-[hsl(var(--kotz-ink))] border-border"
              data-testid="contact-form-email-input"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <LabelText>Inquiry type</LabelText>
            <Select value={form.inquiry_type} onValueChange={(v) => update("inquiry_type", v)}>
              <SelectTrigger
                className="mt-1.5 h-11 rounded-xl bg-[hsl(var(--kotz-ink))] border-border"
                data-testid="contact-form-inquiry-select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[hsl(var(--kotz-ink-2))] border-border">
                {INQUIRY_TYPES.map((t) => (
                  <SelectItem key={t.value} value={t.value} data-testid={`contact-inquiry-option-${t.value}`}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="subject"><LabelText>Subject (optional)</LabelText></Label>
            <Input
              id="subject"
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
              placeholder="Short summary"
              className="mt-1.5 h-11 rounded-xl bg-[hsl(var(--kotz-ink))] border-border"
              data-testid="contact-form-subject-input"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="message"><LabelText>Message</LabelText></Label>
          <Textarea
            id="message"
            required
            rows={6}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us a little about your idea or question..."
            className="mt-1.5 rounded-xl bg-[hsl(var(--kotz-ink))] border-border"
            data-testid="contact-form-message-textarea"
          />
        </div>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <p className="text-xs text-foreground/55">We typically respond within 2–3 business days.</p>
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="rounded-xl gap-2 bg-[hsl(var(--kotz-gold))] text-[hsl(var(--kotz-ink))] hover:bg-[hsl(var(--kotz-gold))]/90 font-bold"
            data-testid="contact-form-submit-button"
          >
            <Send className="h-4 w-4" />
            {loading ? "Sending..." : "Send message"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
