import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const STORAGE_KEY = "eler-gdpr-consent";

export const GdprNotice = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Notificare cookie-uri"
      className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-w-md"
    >
      <div className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] sm:p-5">
        <div className="flex items-start gap-3">
          <div className="flex-1 text-sm text-foreground/85">
            <p className="mb-1 font-display text-base font-semibold text-foreground">
              🍪 Folosim cookie-uri
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Acest site folosește cookie-uri esențiale pentru funcționarea corectă a paginii.
              Continuând navigarea, ești de acord cu utilizarea lor.
            </p>
          </div>
          <button
            onClick={accept}
            aria-label="Închide"
            className="rounded-lg p-1 text-muted-foreground transition-smooth hover:bg-secondary hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-3 flex justify-end">
          <Button size="sm" className="rounded-full" onClick={accept}>
            Am înțeles
          </Button>
        </div>
      </div>
    </div>
  );
};
