import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { subscribeNewsletter } from "@/lib/api";
import { cn } from "@/lib/utils";

export default function NewsletterForm({ className, variant = "default" }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await subscribeNewsletter(email);
      toast.success("You're in! Welcome to the Kotzinons newsletter.");
      setEmail("");
    } catch (err) {
      const msg = err?.response?.data?.detail || "Please enter a valid email.";
      toast.error(typeof msg === "string" ? msg : "Subscription failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "flex flex-col sm:flex-row items-stretch gap-2 w-full",
        className
      )}
      data-testid="newsletter-form"
    >
      <Input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        data-testid="newsletter-email-input"
        className={cn(
          "h-12 rounded-xl",
          variant === "dark" && "bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white"
        )}
      />
      <Button
        type="submit"
        disabled={loading}
        size="lg"
        className="h-12 rounded-xl px-6 gap-2"
        data-testid="newsletter-submit-button"
      >
        <Send className="h-4 w-4" />
        {loading ? "Joining..." : "Join"}
      </Button>
    </form>
  );
}
