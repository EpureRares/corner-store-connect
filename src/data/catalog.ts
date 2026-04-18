import bread from "@/assets/products/bread.jpg";
import milk from "@/assets/products/milk.jpg";
import eggs from "@/assets/products/eggs.jpg";
import oil from "@/assets/products/oil.jpg";
import flour from "@/assets/products/flour.jpg";
import water from "@/assets/products/water.jpg";
import cola from "@/assets/products/cola.jpg";
import juice from "@/assets/products/juice.jpg";
import coffee from "@/assets/products/coffee.jpg";
import chocolate from "@/assets/products/chocolate.jpg";
import chips from "@/assets/products/chips.jpg";
import dishSoap from "@/assets/products/dish-soap.jpg";
import laundry from "@/assets/products/laundry.jpg";
import toiletPaper from "@/assets/products/toilet-paper.jpg";
import shampoo from "@/assets/products/shampoo.jpg";
import toothpaste from "@/assets/products/toothpaste.jpg";
import bags from "@/assets/products/bags.jpg";
import containers from "@/assets/products/containers.jpg";
import charcoal from "@/assets/products/charcoal.jpg";
import firelighters from "@/assets/products/firelighters.jpg";
import foil from "@/assets/products/foil.jpg";
import cups from "@/assets/products/cups.jpg";
import rice from "@/assets/products/rice.jpg";
import sugar from "@/assets/products/sugar.jpg";
import butter from "@/assets/products/butter.jpg";
import biscuits from "@/assets/products/biscuits.jpg";
import handsoap from "@/assets/products/handsoap.jpg";
import sponges from "@/assets/products/sponges.jpg";

export type Variant = {
  brand: string;
  unit: string;
  price: number; // RON
  note?: string;
};

export type Product = {
  id: string;
  name: string;
  image: string;
  description?: string;
  variants: Variant[];
  /** Minimum order quantity (only set for items in "Diverse" category that need bulk ordering). */
  minOrderQty?: number;
  minOrderUnit?: string;
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
      {
        id: "paine",
        name: "Pâine feliată",
        image: bread,
        variants: [
          { brand: "Vel Pitar", unit: "500 g", price: 6.5 },
          { brand: "Boromir", unit: "500 g", price: 6.9 },
          { brand: "Dobrogea", unit: "500 g", price: 7.2 },
        ],
      },
      {
        id: "lapte",
        name: "Lapte",
        image: milk,
        variants: [
          { brand: "Zuzu 3.5%", unit: "1 L", price: 7.9 },
          { brand: "LaDorna 3.5%", unit: "1 L", price: 9.5 },
          { brand: "Napolact 1.5%", unit: "1 L", price: 7.5 },
        ],
      },
      {
        id: "oua",
        name: "Ouă",
        image: eggs,
        variants: [
          { brand: "Ouă M, cod 3", unit: "10 buc", price: 14.5 },
          { brand: "Ouă L, cod 2", unit: "10 buc", price: 18.9 },
          { brand: "Ouă bio, cod 0", unit: "6 buc", price: 16.5 },
        ],
      },
      {
        id: "unt",
        name: "Unt",
        image: butter,
        variants: [
          { brand: "Pilos 82%", unit: "200 g", price: 9.9 },
          { brand: "President 82%", unit: "200 g", price: 13.5 },
          { brand: "LaDorna 80%", unit: "200 g", price: 11.9 },
        ],
      },
      {
        id: "faina",
        name: "Făină albă 000",
        image: flour,
        variants: [
          { brand: "Băneasa", unit: "1 kg", price: 5.2 },
          { brand: "Dobrogea", unit: "1 kg", price: 5.5 },
          { brand: "Pambac", unit: "1 kg", price: 5.9 },
        ],
      },
      {
        id: "zahar",
        name: "Zahăr tos",
        image: sugar,
        variants: [
          { brand: "Diamant", unit: "1 kg", price: 5.8 },
          { brand: "Mărgăritar", unit: "1 kg", price: 5.6 },
        ],
      },
      {
        id: "ulei",
        name: "Ulei floarea soarelui",
        image: oil,
        variants: [
          { brand: "Floriol", unit: "1 L", price: 12.9 },
          { brand: "Bunica", unit: "1 L", price: 11.5 },
          { brand: "Untdelemn de la Bunica", unit: "2 L", price: 24.9 },
        ],
      },
      {
        id: "orez",
        name: "Orez bob lung",
        image: rice,
        variants: [
          { brand: "Riso Scotti", unit: "1 kg", price: 9.5 },
          { brand: "Sano Vita", unit: "1 kg", price: 8.4 },
        ],
      },
    ],
  },
  {
    id: "bauturi-gustari",
    name: "Băuturi & Gustări",
    description: "Apă, sucuri răcoritoare, cafea, ciocolată și gustări preferate.",
    emoji: "🥤",
    products: [
      {
        id: "apa",
        name: "Apă plată / minerală",
        image: water,
        variants: [
          { brand: "Borsec minerală", unit: "1.5 L", price: 3.9 },
          { brand: "Dorna plată", unit: "2 L", price: 3.5 },
          { brand: "Aqua Carpatica", unit: "2 L", price: 4.5 },
        ],
      },
      {
        id: "cola",
        name: "Băuturi carbogazoase",
        image: cola,
        variants: [
          { brand: "Coca-Cola", unit: "2 L", price: 8.9 },
          { brand: "Pepsi", unit: "2 L", price: 8.5 },
          { brand: "Fanta Portocale", unit: "2 L", price: 8.5 },
          { brand: "Sprite", unit: "2 L", price: 8.5 },
        ],
      },
      {
        id: "suc",
        name: "Suc natural",
        image: juice,
        variants: [
          { brand: "Tymbark Portocale", unit: "1 L", price: 9.9 },
          { brand: "Cappy Multivitamin", unit: "1 L", price: 11.9 },
          { brand: "Santal Piersici", unit: "1 L", price: 10.5 },
        ],
      },
      {
        id: "cafea",
        name: "Cafea măcinată",
        image: coffee,
        variants: [
          { brand: "Jacobs Krönung", unit: "250 g", price: 22.5 },
          { brand: "Tchibo Family", unit: "250 g", price: 19.9 },
          { brand: "Lavazza Qualità Rossa", unit: "250 g", price: 28.9 },
        ],
      },
      {
        id: "ciocolata",
        name: "Ciocolată",
        image: chocolate,
        variants: [
          { brand: "Milka cu lapte", unit: "100 g", price: 6.9 },
          { brand: "Heidi cu lapte", unit: "100 g", price: 7.5 },
          { brand: "Poiana clasică", unit: "90 g", price: 5.9 },
        ],
      },
      {
        id: "chips",
        name: "Chips",
        image: chips,
        variants: [
          { brand: "Lay's Sare", unit: "140 g", price: 7.5 },
          { brand: "Chio Smântână", unit: "140 g", price: 7.9 },
          { brand: "Pringles Original", unit: "165 g", price: 13.5 },
        ],
      },
      {
        id: "biscuiti",
        name: "Biscuiți",
        image: biscuits,
        variants: [
          { brand: "Eugenia Original", unit: "36 g", price: 1.9 },
          { brand: "Oreo", unit: "154 g", price: 6.5 },
          { brand: "Petit Beurre", unit: "200 g", price: 4.5 },
        ],
      },
    ],
  },
  {
    id: "menaj",
    name: "Menaj & Igienă",
    description: "Detergenți, articole de curățenie și produse de uz personal.",
    emoji: "🧴",
    products: [
      {
        id: "detergent-vase",
        name: "Detergent de vase",
        image: dishSoap,
        variants: [
          { brand: "Fairy Lemon", unit: "650 ml", price: 14.9 },
          { brand: "Pur Balsam", unit: "750 ml", price: 12.5 },
          { brand: "Axion Lămâie", unit: "500 ml", price: 9.9 },
        ],
      },
      {
        id: "detergent-rufe",
        name: "Detergent rufe lichid",
        image: laundry,
        variants: [
          { brand: "Ariel Color", unit: "2 L (40 spălări)", price: 49.9 },
          { brand: "Persil Universal", unit: "2 L (40 spălări)", price: 47.5 },
          { brand: "Dero Ozon+", unit: "2.9 L (58 spălări)", price: 39.9 },
          { brand: "Omo Color", unit: "2 L (40 spălări)", price: 35.9 },
        ],
      },
      {
        id: "hartie-igienica",
        name: "Hârtie igienică",
        image: toiletPaper,
        variants: [
          { brand: "Zewa Deluxe 3 straturi", unit: "10 role", price: 24.9 },
          { brand: "Pufina 2 straturi", unit: "10 role", price: 18.5 },
          { brand: "Foxy Mega", unit: "8 role", price: 21.9 },
        ],
      },
      {
        id: "sampon",
        name: "Șampon",
        image: shampoo,
        variants: [
          { brand: "Head & Shoulders", unit: "400 ml", price: 24.9 },
          { brand: "Pantene Pro-V", unit: "400 ml", price: 22.5 },
          { brand: "Elseve L'Oréal", unit: "400 ml", price: 19.9 },
          { brand: "Nivea Men", unit: "250 ml", price: 14.9 },
        ],
      },
      {
        id: "sapun-lichid",
        name: "Săpun lichid",
        image: handsoap,
        variants: [
          { brand: "Palmolive Naturals", unit: "300 ml", price: 8.9 },
          { brand: "Dove Beauty Cream", unit: "250 ml", price: 11.5 },
          { brand: "Fa Yogurt", unit: "250 ml", price: 7.5 },
        ],
      },
      {
        id: "pasta-dinti",
        name: "Pastă de dinți",
        image: toothpaste,
        variants: [
          { brand: "Colgate Total", unit: "75 ml", price: 11.5 },
          { brand: "Signal Cavity", unit: "75 ml", price: 8.9 },
          { brand: "Sensodyne", unit: "75 ml", price: 16.9 },
        ],
      },
      {
        id: "bureti",
        name: "Bureți de bucătărie",
        image: sponges,
        variants: [
          { brand: "Vileda", unit: "5 buc", price: 8.5 },
          { brand: "Spontex", unit: "4 buc", price: 7.9 },
        ],
      },
    ],
  },
  {
    id: "diverse",
    name: "Diverse",
    description: "Articole pentru gospodărie și grătar — comandate cu cantitate minimă.",
    emoji: "📦",
    products: [
      {
        id: "saci-menajeri",
        name: "Saci menajeri",
        image: bags,
        description: "Saci rezistenți pentru gunoi, în mai multe dimensiuni.",
        minOrderQty: 5,
        minOrderUnit: "pachete",
        variants: [
          { brand: "Saci 35 L", unit: "rolă 20 buc", price: 8.9 },
          { brand: "Saci 60 L", unit: "rolă 15 buc", price: 12.5 },
          { brand: "Saci 120 L (extra rezistenți)", unit: "rolă 10 buc", price: 18.9 },
        ],
      },
      {
        id: "caserole",
        name: "Caserole alimentare",
        image: containers,
        description: "Caserole de unică folosință cu capac, pentru transport mâncare.",
        minOrderQty: 50,
        minOrderUnit: "bucăți",
        variants: [
          { brand: "Caserolă plastic 500 ml", unit: "1 buc", price: 0.9 },
          { brand: "Caserolă plastic 750 ml", unit: "1 buc", price: 1.1 },
          { brand: "Caserolă aluminiu 800 ml", unit: "1 buc", price: 1.5 },
        ],
      },
      {
        id: "carbune",
        name: "Cărbune pentru grătar",
        image: charcoal,
        description: "Cărbune din lemn de fag, pentru un grătar reușit.",
        minOrderQty: 3,
        minOrderUnit: "saci",
        variants: [
          { brand: "Cărbune lemn fag", unit: "sac 3 kg", price: 24.9 },
          { brand: "Cărbune lemn fag", unit: "sac 5 kg", price: 39.9 },
          { brand: "Brichete cărbune", unit: "sac 3 kg", price: 27.5 },
        ],
      },
      {
        id: "aprinzator",
        name: "Aprinzător cuburi",
        image: firelighters,
        description: "Cuburi de aprindere pentru grătar și șemineu.",
        minOrderQty: 2,
        minOrderUnit: "cutii",
        variants: [
          { brand: "Cuburi aprindere", unit: "32 buc", price: 9.9 },
          { brand: "Chibrituri lungi", unit: "1 cutie", price: 4.5 },
        ],
      },
      {
        id: "folie-aluminiu",
        name: "Folie aluminiu / plastic",
        image: foil,
        description: "Folie pentru ambalat și păstrat alimente.",
        minOrderQty: 5,
        minOrderUnit: "role",
        variants: [
          { brand: "Folie aluminiu", unit: "rolă 10 m", price: 8.9 },
          { brand: "Folie alimentară", unit: "rolă 30 m", price: 11.5 },
          { brand: "Folie copt", unit: "rolă 8 m", price: 12.9 },
        ],
      },
      {
        id: "pahare-servetele",
        name: "Pahare & Șervețele",
        image: cups,
        description: "Pahare de unică folosință și șervețele pentru evenimente.",
        minOrderQty: 10,
        minOrderUnit: "pachete",
        variants: [
          { brand: "Pahare carton 200 ml", unit: "set 50 buc", price: 14.9 },
          { brand: "Pahare plastic 200 ml", unit: "set 100 buc", price: 9.9 },
          { brand: "Șervețele albe", unit: "pachet 100 buc", price: 5.9 },
        ],
      },
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
