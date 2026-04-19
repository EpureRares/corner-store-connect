import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCatalog } from "@/components/ProductCatalog";
import { HowToOrder } from "@/components/HowToOrder";
import { Footer } from "@/components/Footer";
import { GdprNotice } from "@/components/GdprNotice";
import { store, categories } from "@/data/catalog";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GroceryStore",
    name: store.name,
    telephone: store.phone,
    email: store.email,
    address: store.address,
    openingHours: store.hours.map((h) => `${h.day} ${h.time}`),
    makesOffer: categories.flatMap((c) =>
      c.products.flatMap((p) =>
        p.variants.map((v) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Product", name: `${p.name} — ${v.brand}`, category: c.name },
          price: v.price,
          priceCurrency: "RON",
        }))
      )
    ),
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Hero />
        <ProductCatalog />
        <HowToOrder />
      </main>
      <Footer />
      <GdprNotice />
    </div>
  );
};

export default Index;
