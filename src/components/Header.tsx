import { useState } from "react";
import { Menu, X, ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, store } from "@/data/catalog";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ShoppingBasket className="h-5 w-5" />
          </span>
          <span>{store.name.split(" ")[0]}</span>
          <span className="hidden text-muted-foreground sm:inline">Magazin Mixt</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {categories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="text-foreground/70 transition-smooth hover:text-foreground">
              {c.name}
            </a>
          ))}
          <a href="#comanda" className="text-foreground/70 transition-smooth hover:text-foreground">
            Comandă
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden rounded-full sm:inline-flex">
            <a href={`tel:${store.phone.replace(/\s/g, "")}`}>Sună acum</a>
          </Button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Meniu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-6 py-3 text-sm">
            {categories.map((c) => (
              <a key={c.id} href={`#${c.id}`} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 hover:bg-secondary">
                {c.emoji} {c.name}
              </a>
            ))}
            <a href="#comanda" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 hover:bg-secondary">
              📞 Comandă
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
