import { store } from "@/data/catalog";

export const Footer = () => (
  <footer className="border-t border-border bg-background py-10">
    <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row">
      <p>© {new Date().getFullYear()} {store.name}. Toate drepturile rezervate.</p>
      <p>
        <a href={`tel:${store.phone.replace(/\s/g, "")}`} className="hover:text-foreground">{store.phone}</a>
        <span className="mx-2">·</span>
        <a href={`mailto:${store.email}`} className="hover:text-foreground">{store.email}</a>
      </p>
    </div>
  </footer>
);
