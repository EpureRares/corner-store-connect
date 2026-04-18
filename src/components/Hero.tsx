import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-store.jpg";
import { store } from "@/data/catalog";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="container relative mx-auto px-6 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground shadow-card">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Deschis astăzi · {store.hours[0].time}
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              {store.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl">
              {store.tagline}. Vezi gama completă de produse și prețurile actualizate, apoi
              comandă rapid prin telefon sau email — îți pregătim totul cu grijă.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full shadow-soft">
                <a href={`tel:${store.phone.replace(/\s/g, "")}`}>
                  <Phone className="mr-2 h-4 w-4" /> Sună pentru comandă
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="#produse">Vezi produsele</a>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 text-sm sm:max-w-md">
              <InfoChip icon={<Phone className="h-4 w-4" />} label={store.phone} />
              <InfoChip icon={<Mail className="h-4 w-4" />} label={store.email} />
              <InfoChip icon={<MapPin className="h-4 w-4" />} label={store.address} />
              <InfoChip icon={<Clock className="h-4 w-4" />} label="Zilnic 07–22" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-accent/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft animate-float">
              <img
                src={heroImage}
                alt="Interior cald al magazinului ELER cu rafturi pline de produse"
                width={1600}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoChip = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 rounded-xl border border-border bg-card/70 px-3 py-2 text-foreground/80 backdrop-blur">
    <span className="text-primary">{icon}</span>
    <span className="truncate">{label}</span>
  </div>
);
