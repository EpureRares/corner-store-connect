import { Package } from "lucide-react";
import { categories } from "@/data/catalog";

export const ProductCatalog = () => {
  return (
    <section id="produse" className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Catalogul nostru
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Tot ce ai nevoie, la prețuri corecte
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fiecare produs are mai multe branduri disponibile. Prețurile sunt orientative —
            pentru disponibilitate exactă și comenzi, te rugăm să ne contactezi.
          </p>
        </div>

        <div className="mt-14 space-y-20">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-24">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden>{cat.emoji}</span>
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">{cat.name}</h3>
                  </div>
                  <p className="mt-1 max-w-xl text-sm text-muted-foreground">{cat.description}</p>
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {cat.products.length} produse
                </span>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.products.map((p) => (
                  <article
                    key={p.id}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-gradient-card shadow-card transition-smooth hover:-translate-y-1 hover:shadow-soft"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                      />
                      {p.minOrderQty && (
                        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-card">
                          <Package className="h-3 w-3" />
                          Min. {p.minOrderQty} {p.minOrderUnit}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h4 className="font-display text-lg font-bold leading-tight">{p.name}</h4>
                      {p.description && (
                        <p className="mt-1 text-xs text-muted-foreground">{p.description}</p>
                      )}

                      <ul className="mt-4 space-y-2">
                        {p.variants.map((v) => (
                          <li
                            key={v.brand + v.unit}
                            className="flex items-center justify-between gap-3 rounded-xl border border-border/70 bg-background/60 px-3 py-2"
                          >
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold">{v.brand}</p>
                              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                                {v.unit}
                              </p>
                            </div>
                            <span className="shrink-0 text-sm font-bold text-primary">
                              {v.price.toFixed(2)} <span className="text-[10px] font-medium opacity-70">lei</span>
                            </span>
                          </li>
                        ))}
                      </ul>

                      {p.minOrderQty && (
                        <p className="mt-4 rounded-lg bg-accent/30 px-3 py-2 text-xs text-foreground/80">
                          ℹ️ Acest produs se comandă cu un minim de{" "}
                          <strong>{p.minOrderQty} {p.minOrderUnit}</strong>.
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
