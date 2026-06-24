import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { submitContact } from "@/lib/api";
import { logger } from "@/lib/logger";

const INITIAL_FORM = {
  name: "",
  email: "",
  inquiry_type: "general",
  subject: "",
  message: "",
};

export function useContactForm() {
  const [searchParams] = useSearchParams();
  const initialInquiry = searchParams.get("inquiry") || "general";
  const [form, setForm] = useState({ ...INITIAL_FORM, inquiry_type: initialInquiry });
  const [loading, setLoading] = useState(false);

  // Apply ?inquiry=... URL param changes after mount.
  useEffect(() => {
    const inquiry = searchParams.get("inquiry");
    if (inquiry) {
      setForm((prev) => ({ ...prev, inquiry_type: inquiry }));
    }
    // `setForm` is React's stable setter — safe to omit from deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const update = useCallback((key, val) => {
    setForm((prev) => ({ ...prev, [key]: val }));
  }, []);

  const validate = useCallback((values) => {
    if (!values.name || !values.email || !values.message) {
      return "Name, email, and message are required.";
    }
    return null;
  }, []);

  const submit = useCallback(
    async (event) => {
      event.preventDefault();
      const errorMsg = validate(form);
      if (errorMsg) {
        toast.error(errorMsg);
        return;
      }
      setLoading(true);
      try {
        await submitContact(form);
        toast.success("Message sent! We'll be in touch soon.");
        setForm({ ...INITIAL_FORM });
      } catch (err) {
        logger.error("Contact form submission failed:", err);
        const detail = err?.response?.data?.detail;
        const msg = typeof detail === "string" ? detail : "Could not send your message. Please try again.";
        toast.error(msg);
      } finally {
        setLoading(false);
      }
    },
    [form, validate]
  );

  return { form, loading, update, submit };
}
