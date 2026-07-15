import { img, PHOTOS } from "./images";
import type { Category, Level, Product } from "./types";

export const CATEGORIES: {
  id: Category;
  name: string;
  tagline: string;
  image: string;
}[] = [
  {
    id: "racquet",
    name: "Racquet & Paddle",
    tagline: "Precision-strung for every surface",
    image: img(PHOTOS.racketSky, 900, 1100),
  },
  {
    id: "footwear",
    name: "Footwear",
    tagline: "Engineered for speed and grip",
    image: img(PHOTOS.shoeHighTop, 900, 1100),
  },
  {
    id: "training",
    name: "Fitness & Training",
    tagline: "Build strength that shows up on game day",
    image: img(PHOTOS.dumbbellRack, 900, 1100),
  },
  {
    id: "combat",
    name: "Combat Sports",
    tagline: "Power, precision, protection",
    image: img(PHOTOS.boxerBag, 900, 1100),
  },
  {
    id: "team",
    name: "Team Sports",
    tagline: "Match-grade balls and gear",
    image: img(PHOTOS.hoop, 900, 1100),
  },
  {
    id: "accessories",
    name: "Accessories",
    tagline: "The details that keep you going",
    image: img(PHOTOS.bottle, 900, 1100),
  },
];

export const LEVELS: { id: Level; name: string }[] = [
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "pro", name: "Professional" },
];

const p = (
  data: Omit<Product, "gallery"> & { gallery?: string[] }
): Product => ({
  gallery: data.gallery ?? [data.image],
  ...data,
});

export const PRODUCTS: Product[] = [
  p({
    id: "aerox-tennis-racket",
    slug: "aerox-pro-tennis-racket",
    name: "AeroX Pro Tennis Racket",
    category: "racquet",
    price: 249.99,
    level: "pro",
    rating: 4.9,
    reviewCount: 312,
    badge: "Best Seller",
    image: img(PHOTOS.racketSky, 900, 900),
    gallery: [
      img(PHOTOS.racketSky, 1200, 1200),
      img(PHOTOS.racketFlatlay, 1200, 1200),
      img(PHOTOS.tennisAction, 1200, 1200),
    ],
    shortDescription: "Tour-level control with explosive spin potential.",
    description:
      "The AeroX Pro is our flagship tour frame, developed with feedback from touring professionals. A braided graphite construction dampens vibration while the aerodynamic beam accelerates through contact, giving you effortless racket-head speed and heavy, diving spin.",
    features: [
      "Braided graphite + basalt layup for a plush, connected feel",
      "Aero beam geometry for faster swings",
      "16x19 open string pattern for maximum spin",
      "Factory-strung with performance polyester",
    ],
    specs: [
      { label: "Head size", value: "100 in²" },
      { label: "Weight (unstrung)", value: "305 g" },
      { label: "Balance", value: "315 mm" },
      { label: "String pattern", value: "16x19" },
    ],
    colors: ["Volt Yellow", "Stealth Black"],
    sizes: ["Grip 2", "Grip 3", "Grip 4"],
    stock: 24,
    sports: ["tennis"],
  }),
  p({
    id: "volt-match-racket",
    slug: "volt-match-tennis-racket",
    name: "Volt Match Tennis Racket",
    category: "racquet",
    price: 129.99,
    compareAtPrice: 159.99,
    level: "beginner",
    rating: 4.6,
    reviewCount: 187,
    badge: "Sale",
    image: img(PHOTOS.racketFlatlay, 900, 900),
    shortDescription: "Forgiving, lightweight frame to build your game on.",
    description:
      "The Volt Match makes tennis feel easy. An oversized sweet spot and lightweight frame give developing players confidence on every swing, while the dampened graphite composite keeps the feel crisp and arm-friendly.",
    features: [
      "Oversized 105 in² head for a huge sweet spot",
      "Lightweight 275 g frame, easy to swing all day",
      "Vibration-dampening composite protects your arm",
      "Pre-strung and ready to play",
    ],
    specs: [
      { label: "Head size", value: "105 in²" },
      { label: "Weight (unstrung)", value: "275 g" },
      { label: "Balance", value: "330 mm" },
      { label: "String pattern", value: "16x18" },
    ],
    sizes: ["Grip 1", "Grip 2", "Grip 3"],
    stock: 41,
    sports: ["tennis"],
  }),
  p({
    id: "strike-pro-paddle",
    slug: "strike-pro-paddle",
    name: "Strike Pro Paddle",
    category: "racquet",
    price: 189.99,
    level: "intermediate",
    rating: 4.8,
    reviewCount: 214,
    badge: "New",
    image: img(PHOTOS.tableTennis, 900, 900),
    shortDescription: "Carbon-face paddle tuned for touch and putaway power.",
    description:
      "The Strike Pro pairs a T700 carbon face with a 16 mm polymer core for the ideal blend of control and pop. Its elongated shape extends reach at the table without sacrificing the stability you need in fast exchanges.",
    features: [
      "T700 raw carbon face for grit and spin",
      "16 mm honeycomb polymer core",
      "Elongated shape for extended reach",
      "Sweat-wicking premium grip",
    ],
    specs: [
      { label: "Face", value: "T700 carbon" },
      { label: "Core", value: "16 mm polymer" },
      { label: "Weight", value: "230 g" },
      { label: "Grip length", value: "140 mm" },
    ],
    stock: 33,
    sports: ["paddle", "table tennis", "pickleball"],
  }),
  p({
    id: "titan-badminton-racket",
    slug: "titan-badminton-racket",
    name: "Titan Badminton Racket",
    category: "racquet",
    price: 159.99,
    level: "intermediate",
    rating: 4.7,
    reviewCount: 156,
    image: img(PHOTOS.badminton, 900, 900),
    shortDescription: "Head-heavy smash machine with a whippy shaft.",
    description:
      "Built for attacking players, the Titan channels every ounce of your swing into the shuttle. The head-heavy balance and high-modulus graphite shaft store and release energy for steeper, faster smashes.",
    features: [
      "Head-heavy balance for powerful smashes",
      "High-modulus graphite shaft with fast recovery",
      "Aero frame reduces drag through the air",
      "Strung to 26 lbs with durable BG65 string",
    ],
    specs: [
      { label: "Weight", value: "88 g (4U)" },
      { label: "Balance", value: "Head-heavy" },
      { label: "Flex", value: "Medium-stiff" },
      { label: "Max tension", value: "30 lbs" },
    ],
    stock: 27,
    sports: ["badminton"],
  }),
  p({
    id: "court-ace-balls",
    slug: "court-ace-tennis-balls",
    name: "Court Ace Tennis Balls (3-Pack)",
    category: "racquet",
    price: 14.99,
    level: "beginner",
    rating: 4.5,
    reviewCount: 421,
    image: img(PHOTOS.tennisBallLine, 900, 900),
    gallery: [
      img(PHOTOS.tennisBallLine, 1200, 1200),
      img(PHOTOS.tennisBallDark, 1200, 1200),
    ],
    shortDescription: "ITF-approved balls with a consistent, lively bounce.",
    description:
      "Court Ace balls are pressurised for a lively, predictable bounce on hard, clay and grass courts. A premium woven felt resists fluffing so every can plays fresh, set after set.",
    features: [
      "ITF approved for tournament play",
      "Premium woven felt for durability",
      "Consistent bounce across all surfaces",
      "Resealable pressurised can",
    ],
    specs: [
      { label: "Quantity", value: "3 balls" },
      { label: "Type", value: "Pressurised" },
      { label: "Surface", value: "All courts" },
      { label: "Approval", value: "ITF" },
    ],
    stock: 180,
    sports: ["tennis"],
  }),
  p({
    id: "velocity-elite-shoes",
    slug: "velocity-elite-running-shoes",
    name: "Velocity Elite Running Shoes",
    category: "footwear",
    price: 179.99,
    level: "intermediate",
    rating: 4.8,
    reviewCount: 534,
    badge: "Best Seller",
    image: img(PHOTOS.shoeRed, 900, 900),
    shortDescription: "Responsive daily trainer that disappears on your foot.",
    description:
      "The Velocity Elite blends a nitrogen-infused midsole with an engineered mesh upper for a ride that feels fast on tempo days and forgiving on recovery runs. A rocker geometry rolls you smoothly through every stride.",
    features: [
      "Nitrogen-infused foam midsole, 38 mm stack",
      "Engineered mesh upper with zonal breathability",
      "Rocker geometry for smooth transitions",
      "High-abrasion rubber outsole",
    ],
    specs: [
      { label: "Weight", value: "241 g (US 9)" },
      { label: "Drop", value: "8 mm" },
      { label: "Stack", value: "38 mm / 30 mm" },
      { label: "Use", value: "Road running" },
    ],
    colors: ["Crimson", "Black/Volt"],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    stock: 62,
    sports: ["running"],
  }),
  p({
    id: "courtflex-trainers",
    slug: "courtflex-trainers",
    name: "CourtFlex Trainers",
    category: "footwear",
    price: 149.99,
    level: "intermediate",
    rating: 4.6,
    reviewCount: 289,
    image: img(PHOTOS.shoeColor, 900, 900),
    shortDescription: "Lateral stability for court sports that move sideways.",
    description:
      "Tennis, badminton, pickleball — any sport that lives on quick lateral cuts. The CourtFlex wraps your midfoot in a supportive chassis while herringbone rubber keeps you glued to the court through aggressive changes of direction.",
    features: [
      "Lateral support chassis for hard cuts",
      "Herringbone outsole for multi-court grip",
      "Reinforced toe cap for drag durability",
      "Cushioned EVA midsole",
    ],
    specs: [
      { label: "Weight", value: "310 g (US 9)" },
      { label: "Drop", value: "10 mm" },
      { label: "Outsole", value: "Herringbone rubber" },
      { label: "Use", value: "Court sports" },
    ],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    stock: 48,
    sports: ["tennis", "badminton", "pickleball"],
  }),
  p({
    id: "street-classic-hightops",
    slug: "street-classic-high-tops",
    name: "Street Classic High-Tops",
    category: "footwear",
    price: 119.99,
    level: "beginner",
    rating: 4.7,
    reviewCount: 402,
    image: img(PHOTOS.shoeHighTop, 900, 900),
    shortDescription: "Iconic court silhouette, rebuilt with modern comfort.",
    description:
      "A timeless high-top profile with a thoroughly modern interior: cushioned insole, padded collar and a grippy cupsole. From pickup games to the street, it moves with you.",
    features: [
      "Durable canvas and leather upper",
      "Padded ankle collar for support",
      "Cushioned OrthoLite insole",
      "Vulcanised grip cupsole",
    ],
    specs: [
      { label: "Upper", value: "Canvas / leather" },
      { label: "Sole", value: "Vulcanised rubber" },
      { label: "Profile", value: "High-top" },
      { label: "Use", value: "Lifestyle / court" },
    ],
    colors: ["Red/Black", "Triple White"],
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    stock: 75,
    sports: ["basketball", "lifestyle"],
  }),
  p({
    id: "featherlite-racer",
    slug: "featherlite-racer",
    name: "Featherlite Racer",
    category: "footwear",
    price: 199.99,
    level: "pro",
    rating: 4.9,
    reviewCount: 178,
    badge: "Pro Choice",
    image: img(PHOTOS.shoeWhite, 900, 900),
    shortDescription: "Featherweight race-day shoe for chasing PRs.",
    description:
      "At just 196 grams, the Featherlite Racer is built for one thing: speed. A full-length carbon plate snaps through toe-off while ultralight foam keeps your legs fresh deep into the final kilometres.",
    features: [
      "Full-length carbon fibre plate",
      "Ultralight PEBA-based foam",
      "One-piece translucent mesh upper",
      "Race-tuned traction pattern",
    ],
    specs: [
      { label: "Weight", value: "196 g (US 9)" },
      { label: "Drop", value: "6 mm" },
      { label: "Plate", value: "Carbon fibre" },
      { label: "Use", value: "Racing" },
    ],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    stock: 19,
    sports: ["running"],
  }),
  p({
    id: "powercore-dumbbells",
    slug: "powercore-hex-dumbbell-set",
    name: "PowerCore Hex Dumbbell Set",
    category: "training",
    price: 299.99,
    level: "intermediate",
    rating: 4.8,
    reviewCount: 246,
    image: img(PHOTOS.dumbbell, 900, 900),
    gallery: [
      img(PHOTOS.dumbbell, 1200, 1200),
      img(PHOTOS.dumbbellRack, 1200, 1200),
      img(PHOTOS.dumbbellCurl, 1200, 1200),
    ],
    shortDescription: "Rubber hex dumbbells that survive any home gym.",
    description:
      "The PowerCore set covers your strength curve with 5, 10 and 15 kg pairs. Rubber hex heads protect your floor and stop the roll, while knurled chrome handles lock your grip on high-rep days.",
    features: [
      "5 / 10 / 15 kg pairs included",
      "Low-odour rubber hex heads",
      "Knurled chrome-plated steel handles",
      "Anti-roll flat-side design",
    ],
    specs: [
      { label: "Pairs", value: "5, 10, 15 kg" },
      { label: "Handle", value: "Knurled chrome" },
      { label: "Head", value: "Rubber hex" },
      { label: "Total weight", value: "60 kg" },
    ],
    stock: 22,
    sports: ["gym", "strength"],
  }),
  p({
    id: "home-athlete-kit",
    slug: "home-athlete-resistance-kit",
    name: "Home Athlete Resistance Kit",
    category: "training",
    price: 59.99,
    compareAtPrice: 79.99,
    level: "beginner",
    rating: 4.5,
    reviewCount: 389,
    badge: "Sale",
    image: img(PHOTOS.resistanceKit, 900, 900),
    shortDescription: "A full-body gym that fits in a drawer.",
    description:
      "Five resistance levels, ankle straps, handles and a door anchor: everything you need to train strength anywhere. Stack bands for up to 68 kg of combined resistance.",
    features: [
      "5 stackable latex bands (4–23 kg each)",
      "Cushioned handles and ankle straps",
      "Door anchor for rows and presses",
      "Carry bag and exercise guide included",
    ],
    specs: [
      { label: "Bands", value: "5 levels" },
      { label: "Max resistance", value: "68 kg stacked" },
      { label: "Material", value: "Natural latex" },
      { label: "Includes", value: "Anchor, straps, bag" },
    ],
    stock: 94,
    sports: ["gym", "home workout"],
  }),
  p({
    id: "olympic-plate-set",
    slug: "olympic-barbell-plate-set",
    name: "Olympic Barbell Plate Set",
    category: "training",
    price: 449.99,
    level: "pro",
    rating: 4.9,
    reviewCount: 132,
    badge: "Pro Choice",
    image: img(PHOTOS.plates, 900, 900),
    gallery: [
      img(PHOTOS.plates, 1200, 1200),
      img(PHOTOS.barbellGym, 1200, 1200),
    ],
    shortDescription: "Calibrated steel plates for serious strength work.",
    description:
      "IPF-spec calibrated plates machined to a ±10 g tolerance. The slim profile loads more weight on the bar, and the lipped edge makes loading and stripping fast between sets.",
    features: [
      "Calibrated to ±10 g tolerance",
      "Slim profile loads up to 500 kg per bar",
      "Lipped edge for easy handling",
      "140 kg total: 2×25, 2×20, 2×15, 2×10 kg",
    ],
    specs: [
      { label: "Total weight", value: "140 kg" },
      { label: "Tolerance", value: "±10 g" },
      { label: "Hole", value: "50 mm Olympic" },
      { label: "Finish", value: "Powder-coated steel" },
    ],
    stock: 11,
    sports: ["gym", "powerlifting"],
  }),
  p({
    id: "flexflow-yoga-mat",
    slug: "flexflow-pro-yoga-mat",
    name: "FlexFlow Pro Yoga Mat",
    category: "training",
    price: 49.99,
    level: "beginner",
    rating: 4.7,
    reviewCount: 512,
    image: img(PHOTOS.yogaMat, 900, 900),
    gallery: [
      img(PHOTOS.yogaMat, 1200, 1200),
      img(PHOTOS.yogaPink, 1200, 1200),
    ],
    shortDescription: "Grippy, cushioned mat for practice and mobility work.",
    description:
      "A 6 mm dual-layer mat with a moisture-wicking top surface that grips harder the more you sweat. Dense support foam protects knees and wrists without wobble in standing poses.",
    features: [
      "6 mm dual-density cushioning",
      "Wet-grip textured top layer",
      "Alignment lines for consistent form",
      "Includes carry strap",
    ],
    specs: [
      { label: "Thickness", value: "6 mm" },
      { label: "Size", value: "183 × 66 cm" },
      { label: "Material", value: "TPE, latex-free" },
      { label: "Weight", value: "1.1 kg" },
    ],
    stock: 130,
    sports: ["yoga", "mobility"],
  }),
  p({
    id: "velocity-speed-rope",
    slug: "velocity-speed-rope",
    name: "Velocity Speed Rope",
    category: "training",
    price: 24.99,
    level: "intermediate",
    rating: 4.6,
    reviewCount: 275,
    image: img(PHOTOS.jumpRope, 900, 900),
    shortDescription: "Ball-bearing speed rope built for double-unders.",
    description:
      "Precision ball bearings and a coated steel cable keep the Velocity spinning fast and true. Adjustable length and knurled aluminium handles make it the last rope you'll buy.",
    features: [
      "Dual ball-bearing swivels",
      "Adjustable 3 m coated steel cable",
      "Knurled aluminium handles",
      "Spare cable included",
    ],
    specs: [
      { label: "Cable", value: "3 m, adjustable" },
      { label: "Handles", value: "Aluminium" },
      { label: "Bearings", value: "Dual ball-bearing" },
      { label: "Weight", value: "140 g" },
    ],
    stock: 210,
    sports: ["boxing", "crossfit", "conditioning"],
  }),
  p({
    id: "battle-rope-15m",
    slug: "battle-rope-15m",
    name: "Battle Rope 15 m",
    category: "training",
    price: 89.99,
    level: "intermediate",
    rating: 4.7,
    reviewCount: 143,
    image: img(PHOTOS.battleRope, 900, 900),
    gallery: [
      img(PHOTOS.battleRope, 1200, 1200),
      img(PHOTOS.battleRopeDark, 1200, 1200),
    ],
    shortDescription: "Brutal full-body conditioning in 15 metres of rope.",
    description:
      "A 38 mm three-strand poly-dacron rope with heat-shrink grips and abrasion guards. Waves, slams and pulls that torch your conditioning without pounding your joints.",
    features: [
      "38 mm three-strand poly-dacron",
      "Heat-shrink ergonomic grips",
      "Abrasion-resistant protective sleeve",
      "Anchor strap included",
    ],
    specs: [
      { label: "Length", value: "15 m" },
      { label: "Diameter", value: "38 mm" },
      { label: "Weight", value: "10 kg" },
      { label: "Material", value: "Poly-dacron" },
    ],
    stock: 36,
    sports: ["crossfit", "conditioning"],
  }),
  p({
    id: "apex-boxing-gloves",
    slug: "apex-boxing-gloves",
    name: "Apex Boxing Gloves",
    category: "combat",
    price: 129.99,
    level: "intermediate",
    rating: 4.8,
    reviewCount: 298,
    badge: "Best Seller",
    image: img(PHOTOS.boxGloves, 900, 900),
    gallery: [
      img(PHOTOS.boxGloves, 1200, 1200),
      img(PHOTOS.boxerBag, 1200, 1200),
    ],
    shortDescription: "Hand-crafted leather gloves for bag and sparring work.",
    description:
      "Full-grain leather, four-layer foam and a locked-in wrist: the Apex protects your hands through heavy bag sessions and controlled sparring alike. Broken in from the first round.",
    features: [
      "Full-grain leather construction",
      "4-layer impact foam core",
      "Extended hook-and-loop wrist closure",
      "Moisture-wicking antimicrobial lining",
    ],
    specs: [
      { label: "Sizes", value: "10 / 12 / 14 / 16 oz" },
      { label: "Shell", value: "Full-grain leather" },
      { label: "Padding", value: "4-layer foam" },
      { label: "Closure", value: "Hook-and-loop" },
    ],
    colors: ["Classic Red", "Matte Black"],
    sizes: ["10 oz", "12 oz", "14 oz", "16 oz"],
    stock: 57,
    sports: ["boxing", "kickboxing"],
  }),
  p({
    id: "shadow-bag-mitts",
    slug: "shadow-bag-mitts",
    name: "Shadow Bag Mitts",
    category: "combat",
    price: 69.99,
    level: "pro",
    rating: 4.7,
    reviewCount: 121,
    image: img(PHOTOS.boxerBag, 900, 900),
    shortDescription: "Minimal-padding mitts for feel and hand speed.",
    description:
      "Preferred by experienced boxers who want honest feedback from the bag. A slim gel-foam layer sharpens technique while the mesh back keeps hands cool through long sessions.",
    features: [
      "Slim gel-foam knuckle padding",
      "Breathable mesh backhand",
      "Secure wrap-around wrist strap",
      "Fits over hand wraps",
    ],
    specs: [
      { label: "Padding", value: "Gel foam" },
      { label: "Shell", value: "Engineered leather" },
      { label: "Back", value: "Mesh" },
      { label: "Use", value: "Bag work" },
    ],
    sizes: ["S/M", "L/XL"],
    stock: 44,
    sports: ["boxing"],
  }),
  p({
    id: "progrip-basketball",
    slug: "pro-grip-basketball",
    name: "Pro Grip Basketball",
    category: "team",
    price: 69.99,
    level: "intermediate",
    rating: 4.8,
    reviewCount: 356,
    image: img(PHOTOS.basketballCourt, 900, 900),
    gallery: [
      img(PHOTOS.basketballCourt, 1200, 1200),
      img(PHOTOS.hoop, 1200, 1200),
    ],
    shortDescription: "Composite leather ball with all-weather grip.",
    description:
      "Deep channels and a moisture-managing composite cover give the Pro Grip a locked-in feel indoors and out. Holds its bounce and its grip long after cheaper balls go slick.",
    features: [
      "Composite leather cover",
      "Deep-channel grip design",
      "Indoor / outdoor rated",
      "Official size and weight",
    ],
    specs: [
      { label: "Size", value: "7 (29.5\")" },
      { label: "Cover", value: "Composite leather" },
      { label: "Use", value: "Indoor / outdoor" },
      { label: "Bladder", value: "Butyl" },
    ],
    stock: 88,
    sports: ["basketball"],
  }),
  p({
    id: "strikeforce-soccer-ball",
    slug: "strikeforce-match-ball",
    name: "StrikeForce Match Ball",
    category: "team",
    price: 79.99,
    level: "intermediate",
    rating: 4.7,
    reviewCount: 231,
    image: img(PHOTOS.soccerGrass, 900, 900),
    gallery: [
      img(PHOTOS.soccerGrass, 1200, 1200),
      img(PHOTOS.soccerCleat, 1200, 1200),
    ],
    shortDescription: "FIFA-quality match ball with true flight.",
    description:
      "A thermally-bonded seamless surface delivers predictable flight and a clean first touch in any weather. Tested to FIFA Quality Pro standards for roundness and rebound.",
    features: [
      "Thermally bonded seamless panels",
      "FIFA Quality Pro certified",
      "Textured PU shell for touch",
      "All-weather performance",
    ],
    specs: [
      { label: "Size", value: "5" },
      { label: "Construction", value: "Thermal bonding" },
      { label: "Shell", value: "Textured PU" },
      { label: "Certification", value: "FIFA Quality Pro" },
    ],
    stock: 66,
    sports: ["soccer", "football"],
  }),
  p({
    id: "hydrocore-bottle",
    slug: "hydrocore-insulated-bottle",
    name: "HydroCore Insulated Bottle 1L",
    category: "accessories",
    price: 34.99,
    level: "beginner",
    rating: 4.9,
    reviewCount: 640,
    badge: "Best Seller",
    image: img(PHOTOS.bottle, 900, 900),
    shortDescription: "24 hours cold. Zero sweat. One litre of go.",
    description:
      "Double-wall vacuum insulation keeps drinks ice-cold through the hottest sessions. The powder-coated shell won't slip in sweaty hands, and the wide mouth fits ice and cleaning brushes.",
    features: [
      "24 h cold / 12 h hot insulation",
      "18/8 stainless steel, BPA-free",
      "Grippy powder-coated finish",
      "Leakproof sport cap included",
    ],
    specs: [
      { label: "Capacity", value: "1 L" },
      { label: "Material", value: "18/8 stainless" },
      { label: "Insulation", value: "Double-wall vacuum" },
      { label: "Weight", value: "480 g" },
    ],
    colors: ["Matte Black", "Storm Grey", "Signal Orange"],
    stock: 240,
    sports: ["all"],
  }),
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getCategory(id: string) {
  return CATEGORIES.find((c) => c.id === id);
}

export function relatedProducts(product: Product, count = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  )
    .concat(PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, count);
}

export const TESTIMONIALS = [
  {
    quote:
      "HEMPAC has the best selection of high-performance rackets. My game has never felt better.",
    name: "Alex Ramirez",
    title: "Professional Tennis Player",
    image: img(PHOTOS.tennisAction, 700, 900),
  },
  {
    quote:
      "The Velocity Elites carried me through a full marathon block. Zero niggles, all speed.",
    name: "Maya Chen",
    title: "Marathon Runner",
    image: img(PHOTOS.runnerRoad, 700, 900),
  },
  {
    quote:
      "From gloves to ropes, everything is genuinely pro-grade. My whole gym orders here now.",
    name: "Dre Okafor",
    title: "Boxing Coach",
    image: img(PHOTOS.boxerBag, 700, 900),
  },
  {
    quote:
      "Fast shipping, flawless gear, and the quiz actually nailed what I needed as a beginner.",
    name: "Sofia Laurent",
    title: "Triathlete",
    image: img(PHOTOS.swimmer, 700, 900),
  },
  {
    quote:
      "The resistance kit turned my living room into a real gym. Quality you can feel in every rep.",
    name: "Jonas Berg",
    title: "Strength Athlete",
    image: img(PHOTOS.crossfitBW, 700, 900),
  },
];
