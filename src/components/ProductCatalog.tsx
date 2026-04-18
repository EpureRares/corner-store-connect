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
            Prețurile sunt orientative și pot varia ușor. Pentru disponibilitate exactă
            și comenzi, te rugăm să ne contactezi.
          </p>
        </div>

        <div className="mt-14 space-y-16">
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

              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {cat.products.map((p) => (
                  <li
                    key={p.name}
                    className="group flex items-center justify-between gap-4 rounded-2xl bg-gradient-card p-4 shadow-card transition-smooth hover:-translate-y-0.5 hover:shadow-soft"
                  >
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.unit}</p>
                    </div>
                    <div className="shrink-0 rounded-xl bg-primary px-3 py-1.5 text-sm font-bold text-primary-foreground">
                      {p.price.toFixed(2)} <span className="text-xs font-medium opacity-80">lei</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
