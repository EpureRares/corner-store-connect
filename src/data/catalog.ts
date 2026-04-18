export type Product = {
  name: string;
  price: number; // RON
  unit: string;
  note?: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  emoji: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    id: "esentiale",
    name: "Esențiale",
    description: "Pâine proaspătă, lactate, ouă și produse de bază pentru cămară.",
    emoji: "🥖",
    products: [
      { name: "Pâine albă feliată", price: 6.5, unit: "500 g" },
      { name: "Lapte 3.5%", price: 7.9, unit: "1 L" },
      { name: "Ouă mărimea M", price: 14.5, unit: "10 buc" },
      { name: "Unt 82%", price: 9.9, unit: "200 g" },
      { name: "Făină albă 000", price: 5.2, unit: "1 kg" },
      { name: "Zahăr tos", price: 5.8, unit: "1 kg" },
      { name: "Ulei floarea soarelui", price: 12.9, unit: "1 L" },
      { name: "Orez bob lung", price: 8.4, unit: "1 kg" },
    ],
  },
  {
    id: "bauturi-gustari",
    name: "Băuturi & Gustări",
    description: "Apă, sucuri răcoritoare, cafea, ciocolată și gustări preferate.",
    emoji: "🥤",
    products: [
      { name: "Apă plată", price: 3.2, unit: "2 L" },
      { name: "Apă minerală", price: 3.9, unit: "1.5 L" },
      { name: "Coca-Cola", price: 8.5, unit: "2 L" },
      { name: "Suc natural portocale", price: 11.9, unit: "1 L" },
      { name: "Cafea măcinată", price: 22.5, unit: "250 g" },
      { name: "Ciocolată cu lapte", price: 6.9, unit: "100 g" },
      { name: "Chips clasic", price: 7.5, unit: "140 g" },
      { name: "Biscuiți cu cacao", price: 4.5, unit: "200 g" },
    ],
  },
  {
    id: "menaj",
    name: "Menaj & Igienă",
    description: "Produse de curățenie și articole de uz personal pentru toată familia.",
    emoji: "🧴",
    products: [
      { name: "Detergent vase", price: 9.9, unit: "500 ml" },
      { name: "Detergent rufe lichid", price: 29.9, unit: "2 L" },
      { name: "Hârtie igienică 10 role", price: 18.5, unit: "10 buc" },
      { name: "Șampon", price: 14.9, unit: "400 ml" },
      { name: "Săpun lichid", price: 7.9, unit: "300 ml" },
      { name: "Pastă de dinți", price: 11.5, unit: "75 ml" },
      { name: "Bureți de bucătărie", price: 5.9, unit: "5 buc" },
      { name: "Saci menajeri", price: 8.9, unit: "20 buc" },
    ],
  },
];

export const store = {
  name: "ELER Magazin Mixt",
  tagline: "Magazinul de cartier de încredere",
  phone: "+40 700 000 000",
  email: "comenzi@eler-magazin.ro",
  address: "Strada Principală, în cartierul tău",
  hours: [
    { day: "Luni – Vineri", time: "07:00 – 22:00" },
    { day: "Sâmbătă", time: "08:00 – 22:00" },
    { day: "Duminică", time: "09:00 – 20:00" },
  ],
};
