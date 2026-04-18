import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { store } from "@/data/catalog";

export const HowToOrder = () => {
  const steps = [
    { n: "1", title: "Alege produsele", text: "Răsfoiește catalogul și notează ce dorești." },
    { n: "2", title: "Sună sau scrie-ne", text: "Sună la magazin sau trimite comanda pe email." },
    { n: "3", title: "Ridici sau livrăm", text: "Pregătim comanda — vii la magazin sau o livrăm în cartier." },
  ];

  return (
    <section id="comanda" className="bg-secondary/40 py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Cum comanzi
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Comanzi simple, prin telefon sau email
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Suntem la început de drum cu site-ul. Comenzile online vin în curând —
              până atunci, te servim cu drag prin telefon sau email.
            </p>

            <ol className="mt-8 space-y-4">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-4 rounded-2xl bg-card p-4 shadow-card">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl bg-card p-8 shadow-soft">
            <h3 className="font-display text-2xl font-bold">Contactează-ne</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Suntem aici să te ajutăm la fiecare comandă.
            </p>

            <div className="mt-6 space-y-4">
              <ContactRow icon={<Phone className="h-5 w-5" />} label="Telefon" value={store.phone} href={`tel:${store.phone.replace(/\s/g, "")}`} />
              <ContactRow icon={<Mail className="h-5 w-5" />} label="Email" value={store.email} href={`mailto:${store.email}`} />
              <ContactRow icon={<MapPin className="h-5 w-5" />} label="Adresă" value={store.address} />
              <div className="rounded-2xl border border-border p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <Clock className="h-4 w-4 text-primary" /> Program
                </div>
                <ul className="space-y-1 text-sm">
                  {store.hours.map((h) => (
                    <li key={h.day} className="flex justify-between text-muted-foreground">
                      <span>{h.day}</span>
                      <span className="font-medium text-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-full">
                <a href={`tel:${store.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" /> Sună acum
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={`mailto:${store.email}?subject=Comanda%20noua`}>
                  <Mail className="mr-2 h-4 w-4" /> Trimite email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactRow = ({
  icon, label, value, href,
}: { icon: React.ReactNode; label: string; value: string; href?: string }) => {
  const content = (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-3 transition-smooth hover:bg-secondary">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="truncate font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
};
