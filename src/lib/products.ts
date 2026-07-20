import type { Category, Level, Product } from "./types";
import { img, PHOTOS } from "./images";

// Product catalog imported from the original Hempac-website repository
// (kevinunlocked/Hempac-website — v0.app export). Names, prices, SKUs,
// descriptions, specifications, features, ratings and stock levels are
// carried over verbatim. The original repo shipped image *paths* without
// image files (broken on its live deployment too); the handful of real
// photos it had (ankle guard, gym gloves, quad bike) are used directly from
// Vercel blob storage, and every other product uses a hand-matched,
// verified stock photo as a stand-in until real product photography exists.

export const CATEGORIES: {
  id: Category;
  name: string;
  tagline: string;
  image: string;
}[] = [
  {
    id: "strength",
    name: "Strength Training",
    tagline: "Benches, racks, dumbbells and machines built to load heavy",
    image: img(PHOTOS.squatRack, 900, 1100),
  },
  {
    id: "cardio",
    name: "Cardio Equipment",
    tagline: "Treadmills, bikes, rowers and steppers for every engine",
    image: img(PHOTOS.treadmillsDark, 900, 1100),
  },
  {
    id: "accessories",
    name: "Accessories",
    tagline: "Bars, bands, gloves and the details that finish a gym",
    image: img(PHOTOS.resistanceKit, 900, 1100),
  },
  {
    id: "recovery",
    name: "Recovery Equipment",
    tagline: "Massage, mobility and recovery tools for rest days",
    image: img(PHOTOS.massage, 900, 1100),
  },
  {
    id: "swimming",
    name: "Swimming",
    tagline: "Goggles and training aids for the pool",
    image: img(PHOTOS.poolLanes, 900, 1100),
  },
  {
    id: "storage",
    name: "Storage",
    tagline: "Racks that keep plates, bells and bars in order",
    image: img(PHOTOS.dumbbellRackBW, 900, 1100),
  },
  {
    id: "martial-arts",
    name: "Martial Arts",
    tagline: "Bags, mats and gear for striking sports",
    image: img(PHOTOS.boxerBag, 900, 1100),
  },
];

export const LEVELS: { id: Level; name: string }[] = [
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "pro", name: "Commercial / Pro" },
];

export const PRODUCTS: Product[] = [
  {
    "id": "hp-01",
    "slug": "flat-bench-commercial",
    "name": "Flat bench commercial",
    "sku": "FBC-2024",
    "category": "strength",
    "price": 795,
    "level": "pro",
    "rating": 4.8,
    "reviewCount": 45,
    "badge": "Pro Choice",
    "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Professional-grade flat bench designed for commercial gym use.",
    "description": "Professional-grade flat bench designed for commercial gym use. Built with heavy-duty steel frame and premium vinyl upholstery, this bench can withstand intensive daily use while providing maximum comfort and stability for all your pressing exercises.",
    "features": [
      "Heavy-duty steel construction",
      "Commercial-grade vinyl upholstery",
      "500 lbs weight capacity",
      "Non-slip rubber feet",
      "Ergonomic design",
      "Easy to clean surface",
      "Compact storage design",
      "Professional gym quality"
    ],
    "specs": [
      {
        "label": "Frame Material",
        "value": "Heavy-duty steel"
      },
      {
        "label": "Upholstery",
        "value": "Premium vinyl"
      },
      {
        "label": "Weight Capacity",
        "value": "500 lbs"
      },
      {
        "label": "Dimensions",
        "value": "48\" L x 14\" W x 17\" H"
      },
      {
        "label": "Weight",
        "value": "45 lbs"
      },
      {
        "label": "Warranty",
        "value": "2 years commercial"
      },
      {
        "label": "Assembly",
        "value": "Minimal assembly required"
      },
      {
        "label": "Certification",
        "value": "Commercial grade"
      }
    ],
    "stock": 8,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-02",
    "slug": "mini-wondercore",
    "name": "Wonder core",
    "sku": "MWC-2024",
    "category": "accessories",
    "price": 80,
    "level": "intermediate",
    "rating": 4.1,
    "reviewCount": 67,
    "image": "/products/wonder-core.jpg",
    "gallery": [
      "/products/wonder-core.jpg"
    ],
    "shortDescription": "Compact and versatile core training system that provides multiple exercise options in one portable unit.",
    "description": "Compact and versatile core training system that provides multiple exercise options in one portable unit. Perfect for home workouts and targeting abdominal muscles with various resistance levels.",
    "features": [
      "8 different core exercises",
      "3 resistance levels",
      "Compact foldable design",
      "Comfortable foam padding",
      "Non-slip base",
      "Easy storage",
      "Suitable for all fitness levels",
      "Includes exercise guide"
    ],
    "specs": [
      {
        "label": "Exercise Types",
        "value": "8 different exercises"
      },
      {
        "label": "Resistance Levels",
        "value": "3 adjustable levels"
      },
      {
        "label": "Weight Capacity",
        "value": "250 lbs"
      },
      {
        "label": "Dimensions",
        "value": "24\" L x 12\" W x 8\" H"
      },
      {
        "label": "Weight",
        "value": "8 lbs"
      },
      {
        "label": "Material",
        "value": "Steel frame with foam padding"
      },
      {
        "label": "Warranty",
        "value": "1 year"
      },
      {
        "label": "Portability",
        "value": "Foldable design"
      }
    ],
    "stock": 25,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "2-3 business days"
  },
  {
    "id": "hp-03",
    "slug": "standard-dumbbell-bar",
    "name": "Standard Dumbbell bar",
    "sku": "SDB-2024",
    "category": "accessories",
    "price": 10,
    "level": "beginner",
    "rating": 4.3,
    "reviewCount": 23,
    "image": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Standard dumbbell bar designed for use with standard weight plates.",
    "description": "Standard dumbbell bar designed for use with standard weight plates. Features knurled grip for secure handling and threaded ends with collars for safe plate attachment.",
    "features": [
      "Knurled grip surface",
      "Chrome-plated finish",
      "Standard 1-inch sleeves",
      "Threaded ends with collars",
      "100 lb weight capacity",
      "Durable steel construction",
      "Compatible with standard plates",
      "Secure spin-lock collars"
    ],
    "specs": [
      {
        "label": "Length",
        "value": "14 inches"
      },
      {
        "label": "Grip Diameter",
        "value": "1 inch"
      },
      {
        "label": "Sleeve Diameter",
        "value": "1 inch standard"
      },
      {
        "label": "Material",
        "value": "Chrome-plated steel"
      },
      {
        "label": "Weight Capacity",
        "value": "100 lbs per bar"
      },
      {
        "label": "Weight",
        "value": "3 lbs"
      },
      {
        "label": "Collar Type",
        "value": "Threaded with spin-lock"
      },
      {
        "label": "Finish",
        "value": "Chrome plated"
      }
    ],
    "stock": 50,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-04",
    "slug": "4-station-multi-function",
    "name": "4 station multi function",
    "sku": "4SMF-2024",
    "category": "strength",
    "price": 899,
    "level": "pro",
    "rating": 4.9,
    "reviewCount": 32,
    "badge": "Best Seller",
    "image": "https://images.unsplash.com/photo-1596357395217-80de13130e92?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1596357395217-80de13130e92?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Complete 4-station multi-function home gym system that provides a full-body workout in a compact design.",
    "description": "Complete 4-station multi-function home gym system that provides a full-body workout in a compact design. Features lat pulldown, low row, chest press, and leg extension stations all in one versatile unit.",
    "features": [
      "4 independent workout stations",
      "150 lb weight stack included",
      "Lat pulldown with wide grip bar",
      "Low row with seated position",
      "Chest press station",
      "Leg extension attachment",
      "Smooth pulley system",
      "Space-efficient design"
    ],
    "specs": [
      {
        "label": "Stations",
        "value": "4 workout stations"
      },
      {
        "label": "Weight Stack",
        "value": "150 lbs"
      },
      {
        "label": "Frame Material",
        "value": "Heavy-duty steel"
      },
      {
        "label": "Cable System",
        "value": "Aircraft-grade cables"
      },
      {
        "label": "Dimensions",
        "value": "72\" L x 48\" W x 84\" H"
      },
      {
        "label": "Weight",
        "value": "285 lbs"
      },
      {
        "label": "User Height",
        "value": "5'2\" to 6'4\""
      },
      {
        "label": "Warranty",
        "value": "3 years parts"
      }
    ],
    "stock": 5,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "5-7 business days"
  },
  {
    "id": "hp-05",
    "slug": "lat-pull-down",
    "name": "Lat pull down",
    "sku": "LPD-2024",
    "category": "strength",
    "price": 1300,
    "level": "pro",
    "rating": 4.7,
    "reviewCount": 28,
    "badge": "Pro Choice",
    "image": "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Professional lat pulldown machine designed for serious strength training.",
    "description": "Professional lat pulldown machine designed for serious strength training. Features adjustable thigh pads, multiple grip positions, and smooth cable action for effective back and arm development.",
    "features": [
      "200 lb weight stack",
      "Adjustable thigh support pads",
      "Multiple grip positions",
      "Smooth cable action",
      "Commercial-grade construction",
      "Ergonomic seat design",
      "Non-slip foot platform",
      "Professional gym quality"
    ],
    "specs": [
      {
        "label": "Weight Stack",
        "value": "200 lbs"
      },
      {
        "label": "Frame Material",
        "value": "Commercial steel"
      },
      {
        "label": "Cable System",
        "value": "Aircraft-grade steel cables"
      },
      {
        "label": "Seat Adjustment",
        "value": "7 positions"
      },
      {
        "label": "Thigh Pad",
        "value": "Adjustable"
      },
      {
        "label": "Dimensions",
        "value": "48\" L x 42\" W x 84\" H"
      },
      {
        "label": "Weight",
        "value": "320 lbs"
      },
      {
        "label": "Warranty",
        "value": "2 years commercial"
      }
    ],
    "stock": 0,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "2-3 weeks"
  },
  {
    "id": "hp-06",
    "slug": "yoga-foam-roller",
    "name": "Yoga foam roller",
    "sku": "YFR-2024",
    "category": "recovery",
    "price": 15,
    "level": "beginner",
    "rating": 4.2,
    "reviewCount": 89,
    "image": "/products/yoga-foam-roller.jpg",
    "gallery": [
      "/products/yoga-foam-roller.jpg"
    ],
    "shortDescription": "High-density foam roller designed for muscle recovery and myofascial release.",
    "description": "High-density foam roller designed for muscle recovery and myofascial release. Perfect for post-workout recovery, improving flexibility, and reducing muscle tension.",
    "features": [
      "High-density EVA foam",
      "24-inch length for full body use",
      "Textured surface for deep tissue massage",
      "Lightweight and portable",
      "Improves flexibility and circulation",
      "Reduces muscle soreness",
      "Easy to clean",
      "Durable construction"
    ],
    "specs": [
      {
        "label": "Length",
        "value": "24 inches"
      },
      {
        "label": "Diameter",
        "value": "6 inches"
      },
      {
        "label": "Density",
        "value": "High-density foam"
      },
      {
        "label": "Weight Capacity",
        "value": "300 lbs"
      },
      {
        "label": "Material",
        "value": "EVA foam"
      },
      {
        "label": "Weight",
        "value": "2 lbs"
      },
      {
        "label": "Surface",
        "value": "Textured for deep massage"
      },
      {
        "label": "Color",
        "value": "Multiple colors available"
      }
    ],
    "stock": 0,
    "sports": [
      "recovery",
      "wellness",
      "mobility"
    ],
    "estimatedDelivery": "1-2 weeks"
  },
  {
    "id": "hp-07",
    "slug": "pedometer",
    "name": "Pedometer",
    "sku": "PED-2024",
    "category": "accessories",
    "price": 5,
    "level": "beginner",
    "rating": 4,
    "reviewCount": 156,
    "image": "/products/pedometer.jpg",
    "gallery": [
      "/products/pedometer.jpg"
    ],
    "shortDescription": "Digital pedometer with accurate step counting and distance tracking.",
    "description": "Digital pedometer with accurate step counting and distance tracking. Features large LCD display and secure clip attachment for comfortable all-day wear.",
    "features": [
      "Accurate step counting",
      "Distance tracking",
      "Large LCD display",
      "Secure belt clip",
      "Long battery life",
      "Lightweight design",
      "Easy reset function",
      "Splash resistant"
    ],
    "specs": [
      {
        "label": "Display Type",
        "value": "LCD digital"
      },
      {
        "label": "Step Range",
        "value": "0-99,999 steps"
      },
      {
        "label": "Distance Range",
        "value": "0-999.99 miles/km"
      },
      {
        "label": "Battery Life",
        "value": "12 months"
      },
      {
        "label": "Weight",
        "value": "1.2 oz"
      },
      {
        "label": "Dimensions",
        "value": "2.5\" x 1.5\" x 0.8\""
      },
      {
        "label": "Clip Type",
        "value": "Secure belt clip"
      },
      {
        "label": "Water Resistance",
        "value": "Splash resistant"
      }
    ],
    "stock": 100,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-08",
    "slug": "waist-trainer",
    "name": "Waist trainer",
    "sku": "WT-2024",
    "category": "accessories",
    "price": 15,
    "level": "beginner",
    "rating": 3.8,
    "reviewCount": 234,
    "image": "/products/waist-trainer.jpg",
    "gallery": [
      "/products/waist-trainer.jpg"
    ],
    "shortDescription": "Adjustable waist trainer made from high-quality neoprene material.",
    "description": "Adjustable waist trainer made from high-quality neoprene material. Provides core support during workouts and helps maintain proper posture throughout daily activities.",
    "features": [
      "High-quality neoprene construction",
      "Adjustable velcro closure",
      "Moisture-wicking cotton lining",
      "Core support during exercise",
      "Posture improvement",
      "Multiple size options",
      "Comfortable all-day wear",
      "Easy care maintenance"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Neoprene with cotton lining"
      },
      {
        "label": "Closure Type",
        "value": "Velcro adjustment"
      },
      {
        "label": "Size Range",
        "value": "S, M, L, XL, XXL"
      },
      {
        "label": "Width",
        "value": "9 inches"
      },
      {
        "label": "Color Options",
        "value": "Black, Pink, Blue"
      },
      {
        "label": "Care Instructions",
        "value": "Hand wash cold"
      },
      {
        "label": "Compression Level",
        "value": "Medium support"
      },
      {
        "label": "Breathability",
        "value": "Moisture-wicking lining"
      }
    ],
    "stock": 75,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "2-3 business days"
  },
  {
    "id": "hp-09",
    "slug": "rubber-hex-dumbbell",
    "name": "Rubber hex dumbbell",
    "sku": "RHD-2024",
    "category": "strength",
    "price": 3,
    "level": "beginner",
    "rating": 4.6,
    "reviewCount": 89,
    "image": "/products/rubber-hex-dumbbell.jpg",
    "gallery": [
      "/products/rubber-hex-dumbbell.jpg"
    ],
    "shortDescription": "Professional-grade rubber hex dumbbells with anti-roll design.",
    "description": "Professional-grade rubber hex dumbbells with anti-roll design. Features durable rubber coating to protect floors and reduce noise, with comfortable knurled handles for secure grip.",
    "features": [
      "Hexagonal anti-roll design",
      "Durable rubber coating",
      "Knurled steel handles",
      "Floor and equipment protection",
      "Noise reduction",
      "Commercial-grade construction",
      "Secure grip surface",
      "Wide weight range available"
    ],
    "specs": [
      {
        "label": "Weight Range",
        "value": "5 lbs - 100 lbs"
      },
      {
        "label": "Handle Material",
        "value": "Knurled steel"
      },
      {
        "label": "Coating",
        "value": "High-grade rubber"
      },
      {
        "label": "Head Shape",
        "value": "Hexagonal anti-roll"
      },
      {
        "label": "Handle Diameter",
        "value": "1.25 inches"
      },
      {
        "label": "Length",
        "value": "Varies by weight"
      },
      {
        "label": "Durability",
        "value": "Commercial grade"
      },
      {
        "label": "Floor Protection",
        "value": "Non-marking rubber"
      }
    ],
    "stock": 200,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-10",
    "slug": "weight-vest",
    "name": "Weight vest",
    "sku": "WV-2024",
    "category": "accessories",
    "price": 38,
    "level": "intermediate",
    "rating": 4.4,
    "reviewCount": 67,
    "image": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Adjustable weight vest designed for strength training and cardio workouts.",
    "description": "Adjustable weight vest designed for strength training and cardio workouts. Features removable weight pockets and padded shoulders for comfortable extended wear during various exercises.",
    "features": [
      "Adjustable weight from 10-50 lbs",
      "Removable weight pockets",
      "Padded shoulder straps",
      "Breathable mesh panels",
      "Secure strap system",
      "Reflective safety trim",
      "Machine washable design",
      "Versatile exercise applications"
    ],
    "specs": [
      {
        "label": "Weight Range",
        "value": "10-50 lbs adjustable"
      },
      {
        "label": "Material",
        "value": "Durable nylon with mesh"
      },
      {
        "label": "Weight Pockets",
        "value": "Removable iron weights"
      },
      {
        "label": "Shoulder Padding",
        "value": "Extra thick foam"
      },
      {
        "label": "Closure System",
        "value": "Adjustable straps"
      },
      {
        "label": "Size Range",
        "value": "One size fits most"
      },
      {
        "label": "Color",
        "value": "Black with reflective trim"
      },
      {
        "label": "Care",
        "value": "Machine washable (remove weights)"
      }
    ],
    "stock": 45,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "2-3 business days"
  },
  {
    "id": "hp-11",
    "slug": "curve-sit-up-bench",
    "name": "Curve sit up bench",
    "sku": "CSB-2024",
    "category": "strength",
    "price": 95,
    "level": "intermediate",
    "rating": 4.3,
    "reviewCount": 43,
    "image": "https://images.unsplash.com/photo-1591258370814-01609b341790?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1591258370814-01609b341790?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Ergonomically curved sit-up bench designed to maximize abdominal muscle engagement.",
    "description": "Ergonomically curved sit-up bench designed to maximize abdominal muscle engagement. Features thick padding and stable base for comfortable and effective core workouts.",
    "features": [
      "Ergonomic curved design",
      "Heavy-duty steel frame",
      "High-density foam padding",
      "Durable vinyl upholstery",
      "300 lb weight capacity",
      "Non-slip rubber feet",
      "Compact storage design",
      "Enhanced ab muscle targeting"
    ],
    "specs": [
      {
        "label": "Frame Material",
        "value": "Heavy-duty steel"
      },
      {
        "label": "Padding",
        "value": "High-density foam"
      },
      {
        "label": "Upholstery",
        "value": "Durable vinyl"
      },
      {
        "label": "Weight Capacity",
        "value": "300 lbs"
      },
      {
        "label": "Dimensions",
        "value": "48\" L x 14\" W x 16\" H"
      },
      {
        "label": "Weight",
        "value": "25 lbs"
      },
      {
        "label": "Curve Angle",
        "value": "Ergonomic 15-degree curve"
      },
      {
        "label": "Assembly",
        "value": "Minimal assembly required"
      }
    ],
    "stock": 20,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-12",
    "slug": "resistance-band-with-handles",
    "name": "Resistance band with handles",
    "sku": "RBH-2024",
    "category": "accessories",
    "price": 10,
    "level": "beginner",
    "rating": 4.2,
    "reviewCount": 178,
    "image": "/products/resistance-band-handles.jpg",
    "gallery": [
      "/products/resistance-band-handles.jpg"
    ],
    "shortDescription": "High-quality resistance bands with comfortable foam handles.",
    "description": "High-quality resistance bands with comfortable foam handles. Perfect for strength training, rehabilitation, and full-body workouts. Includes multiple resistance levels for progressive training.",
    "features": [
      "Three resistance levels included",
      "Comfortable foam handles",
      "Natural latex construction",
      "Door anchor attachment",
      "Portable mesh carrying case",
      "Full-body workout capability",
      "Suitable for all fitness levels",
      "Compact and lightweight"
    ],
    "specs": [
      {
        "label": "Resistance Levels",
        "value": "Light, Medium, Heavy"
      },
      {
        "label": "Handle Material",
        "value": "Foam grip"
      },
      {
        "label": "Band Material",
        "value": "Natural latex"
      },
      {
        "label": "Length",
        "value": "48 inches"
      },
      {
        "label": "Handle Length",
        "value": "5 inches"
      },
      {
        "label": "Weight",
        "value": "1.5 lbs total"
      },
      {
        "label": "Included",
        "value": "3 bands + handles + door anchor"
      },
      {
        "label": "Carrying Case",
        "value": "Mesh storage bag"
      }
    ],
    "stock": 150,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-13",
    "slug": "waist-pouch",
    "name": "Waist pouch",
    "sku": "WP-2024",
    "category": "accessories",
    "price": 5,
    "level": "beginner",
    "rating": 3.9,
    "reviewCount": 92,
    "image": "/products/waist-pouch.jpg",
    "gallery": [
      "/products/waist-pouch.jpg"
    ],
    "shortDescription": "Lightweight waist pouch perfect for carrying essentials during workouts and outdoor activities.",
    "description": "Lightweight waist pouch perfect for carrying essentials during workouts and outdoor activities. Features multiple compartments and adjustable strap for secure, comfortable fit.",
    "features": [
      "Water-resistant construction",
      "Two zippered compartments",
      "Adjustable waist strap",
      "Lightweight design",
      "Phone-friendly size",
      "Reflective safety strips",
      "Bounce-free fit",
      "Multiple color options"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Water-resistant nylon"
      },
      {
        "label": "Compartments",
        "value": "2 zippered pockets"
      },
      {
        "label": "Strap Length",
        "value": "28-48 inches adjustable"
      },
      {
        "label": "Dimensions",
        "value": "8\" x 4\" x 2\""
      },
      {
        "label": "Weight",
        "value": "3 oz"
      },
      {
        "label": "Phone Compatibility",
        "value": "Fits phones up to 6.5\""
      },
      {
        "label": "Water Resistance",
        "value": "IPX4 rated"
      },
      {
        "label": "Color Options",
        "value": "Black, Gray, Blue"
      }
    ],
    "stock": 60,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "2-3 weeks"
  },
  {
    "id": "hp-14",
    "slug": "hyper-extension",
    "name": "Hyper Extension",
    "sku": "HE-2024",
    "category": "strength",
    "price": 370,
    "level": "intermediate",
    "rating": 4.6,
    "reviewCount": 34,
    "image": "/products/hyper-extension.jpg",
    "gallery": [
      "/products/hyper-extension.jpg"
    ],
    "shortDescription": "Professional hyper extension bench designed for lower back strengthening and core stability exercises.",
    "description": "Professional hyper extension bench designed for lower back strengthening and core stability exercises. Features adjustable pads and heavy-duty construction for safe, effective workouts.",
    "features": [
      "Heavy-duty steel construction",
      "Adjustable height pads",
      "350 lb weight capacity",
      "High-density foam padding",
      "Commercial-grade vinyl",
      "Non-slip foot platform",
      "Stable base design",
      "Professional gym quality"
    ],
    "specs": [
      {
        "label": "Frame Material",
        "value": "Heavy-duty steel"
      },
      {
        "label": "Pad Adjustment",
        "value": "7 height positions"
      },
      {
        "label": "Weight Capacity",
        "value": "350 lbs"
      },
      {
        "label": "Dimensions",
        "value": "52\" L x 24\" W x 36\" H"
      },
      {
        "label": "Weight",
        "value": "65 lbs"
      },
      {
        "label": "Padding",
        "value": "High-density foam"
      },
      {
        "label": "Upholstery",
        "value": "Commercial vinyl"
      },
      {
        "label": "Assembly",
        "value": "Required (tools included)"
      }
    ],
    "stock": 12,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "5-7 business days"
  },
  {
    "id": "hp-15",
    "slug": "mini-stepper",
    "name": "Mini Stepper",
    "sku": "MS-2024",
    "category": "cardio",
    "price": 115,
    "level": "intermediate",
    "rating": 4.1,
    "reviewCount": 87,
    "image": "/products/mini-stepper.jpg",
    "gallery": [
      "/products/mini-stepper.jpg"
    ],
    "shortDescription": "Compact mini stepper with resistance bands for upper and lower body workouts.",
    "description": "Compact mini stepper with resistance bands for upper and lower body workouts. Perfect for home cardio exercise with adjustable step height and digital display.",
    "features": [
      "Adjustable step height",
      "LCD digital display",
      "Resistance bands included",
      "Non-slip pedal surface",
      "Compact storage design",
      "Upper and lower body workout",
      "Quiet operation",
      "Easy assembly"
    ],
    "specs": [
      {
        "label": "Step Height",
        "value": "4-6 inches adjustable"
      },
      {
        "label": "Weight Capacity",
        "value": "220 lbs"
      },
      {
        "label": "Dimensions",
        "value": "16\" L x 12\" W x 10\" H"
      },
      {
        "label": "Weight",
        "value": "18 lbs"
      },
      {
        "label": "Display",
        "value": "LCD step counter"
      },
      {
        "label": "Resistance Bands",
        "value": "Included"
      },
      {
        "label": "Pedal Surface",
        "value": "Non-slip textured"
      },
      {
        "label": "Storage",
        "value": "Compact design"
      }
    ],
    "stock": 20,
    "sports": [
      "cardio",
      "conditioning",
      "running"
    ],
    "estimatedDelivery": "2-3 weeks"
  },
  {
    "id": "hp-16",
    "slug": "neoprene-dumbbells-per-kg",
    "name": "Neoprene dumbbells per kg",
    "sku": "ND-2024",
    "category": "strength",
    "price": 3,
    "level": "beginner",
    "rating": 4.4,
    "reviewCount": 156,
    "image": "/products/neoprene-dumbbells.jpg",
    "gallery": [
      "/products/neoprene-dumbbells.jpg"
    ],
    "shortDescription": "Comfortable neoprene-coated dumbbells available in various weights.",
    "description": "Comfortable neoprene-coated dumbbells available in various weights. Features soft, non-slip coating that's easy on hands and floors, perfect for home fitness routines.",
    "features": [
      "Soft neoprene coating",
      "Color-coded by weight",
      "Comfortable ergonomic grip",
      "Floor-friendly design",
      "Hexagonal anti-roll shape",
      "Easy to clean surface",
      "Wide weight range available",
      "Home gym friendly"
    ],
    "specs": [
      {
        "label": "Weight Range",
        "value": "1-10 kg per dumbbell"
      },
      {
        "label": "Coating",
        "value": "Neoprene rubber"
      },
      {
        "label": "Core Material",
        "value": "Cast iron"
      },
      {
        "label": "Handle",
        "value": "Ergonomic grip"
      },
      {
        "label": "Color Coding",
        "value": "Weight-specific colors"
      },
      {
        "label": "Shape",
        "value": "Hexagonal ends"
      },
      {
        "label": "Surface",
        "value": "Non-slip texture"
      },
      {
        "label": "Care",
        "value": "Wipe clean with damp cloth"
      }
    ],
    "stock": 300,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-17",
    "slug": "single-station",
    "name": "Single station",
    "sku": "SS-2024",
    "category": "strength",
    "price": 399,
    "level": "intermediate",
    "rating": 4.5,
    "reviewCount": 29,
    "image": "/products/single-station.jpg",
    "gallery": [
      "/products/single-station.jpg"
    ],
    "shortDescription": "Versatile single station home gym system offering multiple exercise options in a compact design.",
    "description": "Versatile single station home gym system offering multiple exercise options in a compact design. Features smooth pulley system and adjustable weight stack for full-body workouts.",
    "features": [
      "100 lb weight stack included",
      "15+ exercise variations",
      "Smooth pulley system",
      "Heavy-duty steel frame",
      "Compact footprint design",
      "Adjustable cable height",
      "Multiple grip attachments",
      "Space-efficient solution"
    ],
    "specs": [
      {
        "label": "Weight Stack",
        "value": "100 lbs"
      },
      {
        "label": "Exercise Options",
        "value": "15+ exercises"
      },
      {
        "label": "Frame Material",
        "value": "Heavy-duty steel"
      },
      {
        "label": "Cable System",
        "value": "Aircraft-grade cables"
      },
      {
        "label": "Dimensions",
        "value": "48\" L x 36\" W x 78\" H"
      },
      {
        "label": "Weight",
        "value": "180 lbs"
      },
      {
        "label": "User Height",
        "value": "5'0\" to 6'6\""
      },
      {
        "label": "Warranty",
        "value": "2 years parts"
      }
    ],
    "stock": 8,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "5-7 business days"
  },
  {
    "id": "hp-18",
    "slug": "ankle-guard",
    "name": "Ankle guard",
    "sku": "AG-2024",
    "category": "accessories",
    "price": 7,
    "level": "beginner",
    "rating": 4,
    "reviewCount": 124,
    "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ankle-guard-main-kjtRUO57SPQtpWJjRROfgdhZSBJJBV.jpg",
    "gallery": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ankle-guard-main-kjtRUO57SPQtpWJjRROfgdhZSBJJBV.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ankle-guard-front-sQdiLxRkBCQ5oj6S7BUvOFaaYBMIay.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ankle-guard-detail-ZtexK0ovTw4pAzoAaXWOp0Ov22hKlH.jpg"
    ],
    "shortDescription": "Supportive ankle guard designed for injury prevention and recovery.",
    "description": "Supportive ankle guard designed for injury prevention and recovery. Features adjustable straps and breathable material for comfortable wear during sports and exercise activities.",
    "features": [
      "Medium compression support",
      "Adjustable velcro straps",
      "Breathable mesh panels",
      "3mm neoprene construction",
      "Injury prevention design",
      "Comfortable all-day wear",
      "Multiple size options",
      "Easy care maintenance"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Neoprene with mesh panels"
      },
      {
        "label": "Closure",
        "value": "Velcro adjustable straps"
      },
      {
        "label": "Size Range",
        "value": "S, M, L, XL"
      },
      {
        "label": "Support Level",
        "value": "Medium compression"
      },
      {
        "label": "Thickness",
        "value": "3mm neoprene"
      },
      {
        "label": "Color",
        "value": "Black with blue accents"
      },
      {
        "label": "Care",
        "value": "Hand wash cold"
      },
      {
        "label": "Fit",
        "value": "Left or right ankle"
      }
    ],
    "stock": 80,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-19",
    "slug": "utility-bench",
    "name": "Utility bench",
    "sku": "UB-2024",
    "category": "strength",
    "price": 299,
    "level": "intermediate",
    "rating": 4.7,
    "reviewCount": 52,
    "image": "/products/utility-bench.jpg",
    "gallery": [
      "/products/utility-bench.jpg"
    ],
    "shortDescription": "Versatile utility bench with multiple angle adjustments for comprehensive strength training.",
    "description": "Versatile utility bench with multiple angle adjustments for comprehensive strength training. Features heavy-duty construction and thick padding for comfort during various exercises.",
    "features": [
      "7 back angle positions",
      "3 seat adjustments",
      "600 lb weight capacity",
      "Heavy-duty steel frame",
      "High-density foam padding",
      "Commercial-grade vinyl",
      "Stable base design",
      "Versatile exercise options"
    ],
    "specs": [
      {
        "label": "Adjustments",
        "value": "7 back positions"
      },
      {
        "label": "Seat Adjustment",
        "value": "3 positions"
      },
      {
        "label": "Weight Capacity",
        "value": "600 lbs"
      },
      {
        "label": "Frame Material",
        "value": "Heavy-duty steel"
      },
      {
        "label": "Padding",
        "value": "High-density foam"
      },
      {
        "label": "Dimensions",
        "value": "50\" L x 24\" W x 18\" H"
      },
      {
        "label": "Weight",
        "value": "55 lbs"
      },
      {
        "label": "Upholstery",
        "value": "Commercial vinyl"
      }
    ],
    "stock": 15,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-20",
    "slug": "kettle-bell-rack",
    "name": "Kettle bell rack",
    "sku": "KBR-2024",
    "category": "storage",
    "price": 300,
    "level": "intermediate",
    "rating": 4.8,
    "reviewCount": 23,
    "image": "/products/kettlebell-rack.jpg",
    "gallery": [
      "/products/kettlebell-rack.jpg"
    ],
    "shortDescription": "Heavy-duty kettlebell storage rack designed to organize and display your kettlebell collection.",
    "description": "Heavy-duty kettlebell storage rack designed to organize and display your kettlebell collection. Features two-tier design with durable steel construction and powder-coated finish for gym and home use.",
    "features": [
      "Two-tier storage design",
      "Holds 8-10 kettlebells",
      "Heavy-duty steel construction",
      "400 lb total capacity",
      "Powder-coated finish",
      "Space-efficient organization",
      "Easy access design",
      "Professional gym quality"
    ],
    "specs": [
      {
        "label": "Capacity",
        "value": "8-10 kettlebells"
      },
      {
        "label": "Tiers",
        "value": "2 levels"
      },
      {
        "label": "Frame Material",
        "value": "Heavy-duty steel with powder coating"
      },
      {
        "label": "Weight Capacity",
        "value": "400 lbs total"
      },
      {
        "label": "Dimensions",
        "value": "48\" L x 24\" W x 36\" H"
      },
      {
        "label": "Weight",
        "value": "45 lbs"
      },
      {
        "label": "Finish",
        "value": "Powder-coated black"
      },
      {
        "label": "Assembly",
        "value": "Required (hardware included)"
      }
    ],
    "stock": 10,
    "sports": [
      "gym",
      "home gym",
      "organization"
    ],
    "estimatedDelivery": "5-7 business days"
  },
  {
    "id": "hp-21",
    "slug": "door-gym",
    "name": "Door gym",
    "sku": "DG-2024",
    "category": "accessories",
    "price": 20,
    "level": "beginner",
    "rating": 4.2,
    "reviewCount": 189,
    "image": "/products/door-gym.jpg",
    "gallery": [
      "/products/door-gym.jpg"
    ],
    "shortDescription": "Multi-grip door gym pull-up bar that requires no screws or permanent installation.",
    "description": "Multi-grip door gym pull-up bar that requires no screws or permanent installation. Features comfortable foam padding and multiple grip positions for various upper body exercises.",
    "features": [
      "No-screw installation",
      "6 grip positions available",
      "300 lb weight capacity",
      "Fits standard door frames",
      "Comfortable foam padding",
      "Heavy-duty steel construction",
      "Portable and removable",
      "Multiple exercise options"
    ],
    "specs": [
      {
        "label": "Installation",
        "value": "No screws required"
      },
      {
        "label": "Weight Capacity",
        "value": "300 lbs"
      },
      {
        "label": "Grip Positions",
        "value": "6 different grips"
      },
      {
        "label": "Door Frame",
        "value": "Fits 24-32 inch frames"
      },
      {
        "label": "Material",
        "value": "Heavy-duty steel"
      },
      {
        "label": "Padding",
        "value": "Foam grip covers"
      },
      {
        "label": "Width",
        "value": "36 inches"
      },
      {
        "label": "Assembly",
        "value": "Tool-free setup"
      }
    ],
    "stock": 60,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "2-3 business days"
  },
  {
    "id": "hp-22",
    "slug": "calf-raise-machine",
    "name": "Calf raise machine",
    "sku": "CRM-2024",
    "category": "strength",
    "price": 299,
    "level": "intermediate",
    "rating": 4.6,
    "reviewCount": 31,
    "image": "/products/calf-raise-machine.jpg",
    "gallery": [
      "/products/calf-raise-machine.jpg"
    ],
    "shortDescription": "Professional seated calf raise machine with weight stack system for isolated calf muscle development.",
    "description": "Professional seated calf raise machine with weight stack system for isolated calf muscle development. Features padded seat, adjustable knee pads, and foot platform for optimal positioning and comfort during workouts.",
    "features": [
      "Isolated calf muscle targeting",
      "Adjustable knee pads",
      "Weight stack system",
      "400 lb weight capacity",
      "Heavy-duty steel frame",
      "Non-slip foot platform",
      "Stable base design",
      "Professional gym quality"
    ],
    "specs": [
      {
        "label": "Weight Stack",
        "value": "200 lbs"
      },
      {
        "label": "Weight Capacity",
        "value": "400 lbs"
      },
      {
        "label": "Seat Adjustment",
        "value": "Multi-position"
      },
      {
        "label": "Knee Pads",
        "value": "Adjustable height"
      },
      {
        "label": "Platform Size",
        "value": "14\" x 10\""
      },
      {
        "label": "Frame Material",
        "value": "Heavy-duty steel"
      },
      {
        "label": "Dimensions",
        "value": "48\" L x 24\" W x 48\" H"
      },
      {
        "label": "Weight",
        "value": "185 lbs"
      }
    ],
    "stock": 6,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "5-7 business days"
  },
  {
    "id": "hp-23",
    "slug": "gym-gloves",
    "name": "Gym gloves",
    "sku": "GG-2024",
    "category": "accessories",
    "price": 10,
    "level": "beginner",
    "rating": 4.2,
    "reviewCount": 267,
    "image": "/products/gym-gloves.jpg",
    "gallery": [
      "/products/gym-gloves.jpg"
    ],
    "shortDescription": "Professional fingerless gym gloves designed for weightlifting and strength training.",
    "description": "Professional fingerless gym gloves designed for weightlifting and strength training. Features gel palm padding, breathable mesh backing, and adjustable wrist support for enhanced grip and hand protection during intense workouts.",
    "features": [
      "Gel palm padding for comfort",
      "Breathable mesh backing",
      "Fingerless design for dexterity",
      "Adjustable wrist support",
      "Non-slip palm grip",
      "Easy-off finger tabs",
      "Durable construction",
      "Professional gym quality"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Synthetic leather palm with gel padding"
      },
      {
        "label": "Backing",
        "value": "Breathable mesh fabric"
      },
      {
        "label": "Design",
        "value": "Fingerless for enhanced grip"
      },
      {
        "label": "Wrist Support",
        "value": "Adjustable velcro strap"
      },
      {
        "label": "Size Range",
        "value": "XS, S, M, L, XL"
      },
      {
        "label": "Closure",
        "value": "Secure velcro wrist closure"
      },
      {
        "label": "Color",
        "value": "Black with accent details"
      },
      {
        "label": "Care",
        "value": "Hand wash recommended"
      }
    ],
    "stock": 0,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "1-2 days"
  },
  {
    "id": "hp-24",
    "slug": "5-litre-oxygen-concentrator",
    "name": "5 litre oxygen concentrator",
    "sku": "OC5L-2024",
    "category": "recovery",
    "price": 450,
    "level": "intermediate",
    "rating": 4.9,
    "reviewCount": 12,
    "badge": "New",
    "image": "/products/oxygen-concentrator.jpg",
    "gallery": [
      "/products/oxygen-concentrator.jpg"
    ],
    "shortDescription": "Medical-grade 5-liter oxygen concentrator for recovery and wellness applications.",
    "description": "Medical-grade 5-liter oxygen concentrator for recovery and wellness applications. Features quiet operation, digital display, and continuous oxygen delivery for enhanced recovery protocols.",
    "features": [
      "5 L/min oxygen flow rate",
      "93% oxygen purity",
      "Quiet operation under 45dB",
      "Digital LED display",
      "Continuous operation capability",
      "Medical-grade components",
      "Easy-to-use controls",
      "Comprehensive warranty"
    ],
    "specs": [
      {
        "label": "Oxygen Flow",
        "value": "1-5 liters per minute"
      },
      {
        "label": "Purity",
        "value": "93% ± 3% oxygen"
      },
      {
        "label": "Power",
        "value": "AC 110V/220V"
      },
      {
        "label": "Noise Level",
        "value": "< 45 dB"
      },
      {
        "label": "Display",
        "value": "LED digital panel"
      },
      {
        "label": "Dimensions",
        "value": "24\" L x 13\" W x 26\" H"
      },
      {
        "label": "Weight",
        "value": "38 lbs"
      },
      {
        "label": "Warranty",
        "value": "2 years parts and labor"
      }
    ],
    "stock": 4,
    "sports": [
      "recovery",
      "wellness",
      "mobility"
    ],
    "estimatedDelivery": "7-10 business days"
  },
  {
    "id": "hp-25",
    "slug": "metal-kettlebells-per-kg",
    "name": "Metal kettlebells per kg",
    "sku": "MK-2024",
    "category": "strength",
    "price": 4,
    "level": "beginner",
    "rating": 4.7,
    "reviewCount": 143,
    "image": "/products/metal-kettlebells.jpg",
    "gallery": [
      "/products/metal-kettlebells.jpg"
    ],
    "shortDescription": "Professional cast iron kettlebells with wide handles for comfortable grip.",
    "description": "Professional cast iron kettlebells with wide handles for comfortable grip. Features smooth finish and flat bottom design for stability during exercises and storage.",
    "features": [
      "Cast iron construction",
      "Wide comfortable handle",
      "Flat bottom stability",
      "Smooth painted finish",
      "Clear weight markings",
      "Professional gym quality",
      "Durable long-lasting",
      "Wide weight range available"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Cast iron"
      },
      {
        "label": "Weight Range",
        "value": "4-32 kg available"
      },
      {
        "label": "Handle Width",
        "value": "33mm diameter"
      },
      {
        "label": "Base",
        "value": "Flat bottom design"
      },
      {
        "label": "Finish",
        "value": "Smooth painted surface"
      },
      {
        "label": "Color",
        "value": "Black with weight markings"
      },
      {
        "label": "Handle",
        "value": "Wide grip design"
      },
      {
        "label": "Durability",
        "value": "Commercial grade"
      }
    ],
    "stock": 250,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "2-3 business days"
  },
  {
    "id": "hp-26",
    "slug": "resistance-band-set",
    "name": "Fabric Resistance Band Set of 3",
    "sku": "RBS-2024",
    "category": "accessories",
    "price": 10,
    "level": "beginner",
    "rating": 4.3,
    "reviewCount": 198,
    "image": "/products/fabric-resistance-band.jpg",
    "gallery": [
      "/products/fabric-resistance-band.jpg"
    ],
    "shortDescription": "Set of three fabric loop resistance bands in light, medium and heavy.",
    "description": "Premium fabric resistance band set with 4 loop bands in different resistance levels. Perfect for glute activation, leg workouts, and full-body strength training with comfortable fabric construction.",
    "features": [
      "4 resistance levels in different colors",
      "Fabric construction for comfort",
      "Non-slip interior grip",
      "Perfect for glute activation",
      "Ideal for leg and hip exercises",
      "Compact and portable design",
      "Durable latex core construction",
      "Suitable for all fitness levels"
    ],
    "specs": [
      {
        "label": "Bands Included",
        "value": "4 fabric loop bands"
      },
      {
        "label": "Resistance Levels",
        "value": "Light, Medium, Heavy, Extra Heavy"
      },
      {
        "label": "Colors",
        "value": "Pink, Purple, Mint Green, Light Blue"
      },
      {
        "label": "Material",
        "value": "High-quality fabric with latex core"
      },
      {
        "label": "Band Type",
        "value": "Loop/Mini bands"
      },
      {
        "label": "Dimensions",
        "value": "12\" circumference when flat"
      },
      {
        "label": "Width",
        "value": "3 inches"
      },
      {
        "label": "Thickness",
        "value": "0.35mm latex core"
      }
    ],
    "stock": 0,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-27",
    "slug": "adjustable-sit-up-bench",
    "name": "Adjustable sit up bench",
    "sku": "ASB-2024",
    "category": "strength",
    "price": 90,
    "level": "intermediate",
    "rating": 4.4,
    "reviewCount": 76,
    "image": "/products/adjustable-situp-bench.jpg",
    "gallery": [
      "/products/adjustable-situp-bench.jpg"
    ],
    "shortDescription": "Professional adjustable sit-up bench with multiple angle settings for varied abdominal workouts.",
    "description": "Professional adjustable sit-up bench with multiple angle settings for varied abdominal workouts. Features padded leg rollers and sturdy steel frame construction for safe, effective core training.",
    "features": [
      "5 angle adjustment positions",
      "300 lb weight capacity",
      "Heavy-duty steel frame",
      "High-density foam padding",
      "Padded leg roller system",
      "Foldable for storage",
      "Non-slip rubber feet",
      "Easy angle adjustment"
    ],
    "specs": [
      {
        "label": "Angle Positions",
        "value": "5 adjustable settings"
      },
      {
        "label": "Weight Capacity",
        "value": "300 lbs"
      },
      {
        "label": "Frame Material",
        "value": "Heavy-duty steel"
      },
      {
        "label": "Padding",
        "value": "High-density foam"
      },
      {
        "label": "Dimensions",
        "value": "48\" L x 14\" W x 32\" H"
      },
      {
        "label": "Weight",
        "value": "35 lbs"
      },
      {
        "label": "Leg Rollers",
        "value": "Padded and adjustable"
      },
      {
        "label": "Assembly",
        "value": "Required (tools included)"
      }
    ],
    "stock": 18,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-28",
    "slug": "leg-press",
    "name": "Leg press",
    "sku": "LP-2024",
    "category": "strength",
    "price": 2987,
    "level": "pro",
    "rating": 4.9,
    "reviewCount": 18,
    "badge": "Best Seller",
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1596357395217-80de13130e92?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Commercial-grade leg press machine with 45-degree angle design.",
    "description": "Commercial-grade leg press machine with 45-degree angle design. Features heavy-duty construction, smooth linear bearings, and large weight plate capacity for serious leg training.",
    "features": [
      "45-degree angle design",
      "1000 lb plate capacity",
      "Commercial steel construction",
      "Smooth linear bearings",
      "Diamond plate footplate",
      "Safety lock-out system",
      "Adjustable back pad",
      "Professional gym quality"
    ],
    "specs": [
      {
        "label": "Angle",
        "value": "45-degree leg press"
      },
      {
        "label": "Weight Capacity",
        "value": "1000 lbs plate loading"
      },
      {
        "label": "Frame Material",
        "value": "Commercial steel"
      },
      {
        "label": "Bearings",
        "value": "Linear ball bearings"
      },
      {
        "label": "Footplate",
        "value": "Diamond plate steel"
      },
      {
        "label": "Dimensions",
        "value": "84\" L x 48\" W x 60\" H"
      },
      {
        "label": "Weight",
        "value": "450 lbs"
      },
      {
        "label": "Warranty",
        "value": "5 years commercial"
      }
    ],
    "stock": 2,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "10-14 business days"
  },
  {
    "id": "hp-29",
    "slug": "power-rack-with-crossover",
    "name": "Power rack with crossover",
    "sku": "PRC-2024",
    "category": "strength",
    "price": 1950,
    "level": "pro",
    "rating": 4.8,
    "reviewCount": 25,
    "badge": "Pro Choice",
    "image": "/products/power-rack.jpg",
    "gallery": [
      "/products/power-rack.jpg"
    ],
    "shortDescription": "Professional-grade power rack with integrated cable crossover system.",
    "description": "Professional-grade power rack with integrated cable crossover system. Features heavy-duty steel construction, dual weight stacks, adjustable safety bars, and multi-grip pull-up station for complete strength training workouts.",
    "features": [
      "Integrated cable crossover",
      "Dual 200 lb weight stacks",
      "Adjustable safety system",
      "Multi-grip pull-up bar",
      "1000 lb weight capacity",
      "Heavy-duty steel frame",
      "Professional grade quality",
      "Complete training solution"
    ],
    "specs": [
      {
        "label": "Frame Material",
        "value": "Heavy-duty steel"
      },
      {
        "label": "Weight Capacity",
        "value": "1000 lbs"
      },
      {
        "label": "Cable System",
        "value": "Dual 200 lb weight stacks"
      },
      {
        "label": "Safety Bars",
        "value": "Adjustable J-hooks and safeties"
      },
      {
        "label": "Pull-up Bar",
        "value": "Multi-grip positions"
      },
      {
        "label": "Dimensions",
        "value": "96\" L x 48\" W x 90\" H"
      },
      {
        "label": "Weight",
        "value": "650 lbs"
      },
      {
        "label": "Warranty",
        "value": "3 years commercial"
      }
    ],
    "stock": 0,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "2-3 weeks"
  },
  {
    "id": "hp-30",
    "slug": "20kg-punching-bag",
    "name": "20kg Punching bag",
    "sku": "PB20-2024",
    "category": "martial-arts",
    "price": 130,
    "level": "intermediate",
    "rating": 4.5,
    "reviewCount": 89,
    "image": "/products/punching-bag.jpg",
    "gallery": [
      "/products/punching-bag.jpg"
    ],
    "shortDescription": "Professional 20kg heavy punching bag made from durable synthetic leather.",
    "description": "Professional 20kg heavy punching bag made from durable synthetic leather. Features reinforced seams, heavy-duty chain attachment, and dense filling for effective boxing and martial arts training.",
    "features": [
      "20kg professional weight",
      "Durable synthetic leather",
      "Reinforced double stitching",
      "Heavy-duty chain attachment",
      "Dense textile filling",
      "Professional training quality",
      "Suitable for all skill levels",
      "Easy hanging installation"
    ],
    "specs": [
      {
        "label": "Weight",
        "value": "20 kg (44 lbs)"
      },
      {
        "label": "Material",
        "value": "Synthetic leather"
      },
      {
        "label": "Filling",
        "value": "Textile and foam mix"
      },
      {
        "label": "Length",
        "value": "100 cm (39 inches)"
      },
      {
        "label": "Diameter",
        "value": "35 cm (14 inches)"
      },
      {
        "label": "Chain",
        "value": "Heavy-duty steel chain"
      },
      {
        "label": "Mounting",
        "value": "Ceiling mount required"
      },
      {
        "label": "Seams",
        "value": "Double-stitched reinforcement"
      }
    ],
    "stock": 25,
    "sports": [
      "boxing",
      "martial arts",
      "combat"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-31",
    "slug": "regular-plate-rack",
    "name": "Regular plate rack",
    "sku": "RPR-2024",
    "category": "storage",
    "price": 275,
    "level": "intermediate",
    "rating": 4.6,
    "reviewCount": 34,
    "image": "/products/regular-plate-rack.jpg",
    "gallery": [
      "/products/regular-plate-rack.jpg"
    ],
    "shortDescription": "Heavy-duty weight plate storage rack designed to organize standard and Olympic plates.",
    "description": "Heavy-duty weight plate storage rack designed to organize standard and Olympic plates. Features multiple storage pegs and stable base construction for gym organization.",
    "features": [
      "500 lb total capacity",
      "6 storage pegs included",
      "Standard and Olympic compatible",
      "Heavy-duty steel frame",
      "Stable base design",
      "Powder-coated finish",
      "Space-efficient organization",
      "Easy access design"
    ],
    "specs": [
      {
        "label": "Plate Capacity",
        "value": "500 lbs total"
      },
      {
        "label": "Peg Count",
        "value": "6 storage pegs"
      },
      {
        "label": "Plate Types",
        "value": "Standard and Olympic"
      },
      {
        "label": "Frame Material",
        "value": "Heavy-duty steel"
      },
      {
        "label": "Dimensions",
        "value": "36\" L x 24\" W x 48\" H"
      },
      {
        "label": "Weight",
        "value": "55 lbs"
      },
      {
        "label": "Finish",
        "value": "Powder-coated black"
      },
      {
        "label": "Assembly",
        "value": "Required (hardware included)"
      }
    ],
    "stock": 12,
    "sports": [
      "gym",
      "home gym",
      "organization"
    ],
    "estimatedDelivery": "5-7 business days"
  },
  {
    "id": "hp-32",
    "slug": "magnetic-bike",
    "name": "Magnetic bike",
    "sku": "MB750-2024",
    "category": "cardio",
    "price": 750,
    "level": "pro",
    "rating": 4.4,
    "reviewCount": 67,
    "badge": "Sale",
    "image": "/products/magnetic-bike-750.jpg",
    "gallery": [
      "/products/magnetic-bike-750.jpg"
    ],
    "shortDescription": "Premium magnetic resistance exercise bike with digital console and multiple workout programs.",
    "description": "Premium magnetic resistance exercise bike with digital console and multiple workout programs. Features quiet operation, adjustable seat, and smooth magnetic resistance system.",
    "features": [
      "16 magnetic resistance levels",
      "LCD console display",
      "12 preset workout programs",
      "Quiet magnetic operation",
      "Adjustable seat and handlebars",
      "Heart rate monitoring",
      "Transport wheels included",
      "Smooth pedaling motion"
    ],
    "specs": [
      {
        "label": "Resistance",
        "value": "16 magnetic levels"
      },
      {
        "label": "Display",
        "value": "LCD console"
      },
      {
        "label": "Programs",
        "value": "12 preset workouts"
      },
      {
        "label": "Weight Capacity",
        "value": "300 lbs"
      },
      {
        "label": "Flywheel",
        "value": "18 lbs magnetic"
      },
      {
        "label": "Dimensions",
        "value": "48\" L x 22\" W x 50\" H"
      },
      {
        "label": "Weight",
        "value": "85 lbs"
      },
      {
        "label": "Power",
        "value": "Battery or AC adapter"
      }
    ],
    "stock": 0,
    "sports": [
      "cardio",
      "conditioning",
      "running"
    ],
    "estimatedDelivery": "3-4 weeks"
  },
  {
    "id": "hp-33",
    "slug": "jump-rope-pvc",
    "name": "Jump rope pvc",
    "sku": "JR-2024",
    "category": "accessories",
    "price": 5,
    "level": "beginner",
    "rating": 4.1,
    "reviewCount": 245,
    "image": "/products/jump-rope.jpg",
    "gallery": [
      "/products/jump-rope.jpg"
    ],
    "shortDescription": "High-quality PVC jump rope with comfortable handles and adjustable length.",
    "description": "High-quality PVC jump rope with comfortable handles and adjustable length. Perfect for cardio workouts, boxing training, and improving coordination and endurance.",
    "features": [
      "Durable PVC cord construction",
      "Comfortable foam handles",
      "Adjustable length design",
      "Lightweight and portable",
      "Smooth rotation action",
      "Multiple color options",
      "Easy length adjustment",
      "Suitable for all fitness levels"
    ],
    "specs": [
      {
        "label": "Cord Material",
        "value": "Durable PVC"
      },
      {
        "label": "Handle Material",
        "value": "Foam grip"
      },
      {
        "label": "Length",
        "value": "9 feet adjustable"
      },
      {
        "label": "Weight",
        "value": "4 oz"
      },
      {
        "label": "Handle Length",
        "value": "6 inches"
      },
      {
        "label": "Cord Thickness",
        "value": "5mm"
      },
      {
        "label": "Color Options",
        "value": "Black, Blue, Red"
      },
      {
        "label": "Adjustment",
        "value": "Easy length customization"
      }
    ],
    "stock": 200,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-34",
    "slug": "aerobic-stepper",
    "name": "Aerobic stepper",
    "sku": "AS-2024",
    "category": "cardio",
    "price": 95,
    "level": "intermediate",
    "rating": 4.3,
    "reviewCount": 78,
    "image": "https://images.unsplash.com/photo-1518310952931-b1de897abd40?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1518310952931-b1de897abd40?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Adjustable aerobic stepper platform designed for cardio and strength training workouts.",
    "description": "Adjustable aerobic stepper platform designed for cardio and strength training workouts. Features non-slip surface, adjustable height settings, and durable construction.",
    "features": [
      "3 adjustable height settings",
      "Non-slip textured surface",
      "250 lb weight capacity",
      "High-impact plastic construction",
      "4 adjustable risers included",
      "Stackable storage design",
      "Versatile exercise platform",
      "Suitable for all fitness levels"
    ],
    "specs": [
      {
        "label": "Platform Size",
        "value": "32\" L x 12\" W"
      },
      {
        "label": "Height Settings",
        "value": "4\", 6\", 8\" adjustable"
      },
      {
        "label": "Weight Capacity",
        "value": "250 lbs"
      },
      {
        "label": "Surface",
        "value": "Non-slip textured top"
      },
      {
        "label": "Material",
        "value": "High-impact plastic"
      },
      {
        "label": "Weight",
        "value": "12 lbs"
      },
      {
        "label": "Risers",
        "value": "4 adjustable risers included"
      },
      {
        "label": "Storage",
        "value": "Stackable design"
      }
    ],
    "stock": 30,
    "sports": [
      "cardio",
      "conditioning",
      "running"
    ],
    "estimatedDelivery": "2-3 business days"
  },
  {
    "id": "hp-35",
    "slug": "ez-olympic-curl",
    "name": "Ez Olympic curl",
    "sku": "EOC-2024",
    "category": "accessories",
    "price": 40,
    "level": "intermediate",
    "rating": 4.5,
    "reviewCount": 56,
    "image": "/products/ez-olympic-curl.jpg",
    "gallery": [
      "/products/ez-olympic-curl.jpg"
    ],
    "shortDescription": "Olympic EZ curl bar designed for comfortable bicep and tricep exercises.",
    "description": "Olympic EZ curl bar designed for comfortable bicep and tricep exercises. Features angled grip design to reduce wrist strain and accommodate Olympic weight plates.",
    "features": [
      "Angled grip design",
      "Reduces wrist strain",
      "Olympic plate compatible",
      "Chrome-plated finish",
      "Medium depth knurling",
      "400 lb weight capacity",
      "25 lb bar weight",
      "Professional gym quality"
    ],
    "specs": [
      {
        "label": "Length",
        "value": "47 inches"
      },
      {
        "label": "Weight",
        "value": "25 lbs"
      },
      {
        "label": "Sleeve Diameter",
        "value": "2 inches Olympic"
      },
      {
        "label": "Grip Diameter",
        "value": "1.25 inches"
      },
      {
        "label": "Material",
        "value": "Chrome-plated steel"
      },
      {
        "label": "Knurling",
        "value": "Medium depth"
      },
      {
        "label": "Weight Capacity",
        "value": "400 lbs"
      },
      {
        "label": "Finish",
        "value": "Chrome plated"
      }
    ],
    "stock": 35,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "2-3 business days"
  },
  {
    "id": "hp-36",
    "slug": "massage-chair-ec380",
    "name": "Massage chair EC380",
    "sku": "MC380-2024",
    "category": "recovery",
    "price": 3480,
    "level": "pro",
    "rating": 4.9,
    "reviewCount": 15,
    "badge": "New",
    "image": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Premium full-body massage chair with zero gravity positioning and advanced massage technology.",
    "description": "Premium full-body massage chair with zero gravity positioning and advanced massage technology. Features multiple massage programs, heat therapy, and customizable settings for ultimate relaxation.",
    "features": [
      "12 automatic massage programs",
      "Zero gravity positioning",
      "Full-body massage coverage",
      "Heat therapy function",
      "Customizable intensity levels",
      "Remote control operation",
      "Premium leather upholstery",
      "Professional massage quality"
    ],
    "specs": [
      {
        "label": "Massage Programs",
        "value": "12 automatic programs"
      },
      {
        "label": "Massage Techniques",
        "value": "Kneading, tapping, rolling, shiatsu"
      },
      {
        "label": "Zero Gravity",
        "value": "3 position settings"
      },
      {
        "label": "Heat Therapy",
        "value": "Back and calf heating"
      },
      {
        "label": "Weight Capacity",
        "value": "300 lbs"
      },
      {
        "label": "Dimensions",
        "value": "63\" L x 32\" W x 45\" H"
      },
      {
        "label": "Weight",
        "value": "220 lbs"
      },
      {
        "label": "Warranty",
        "value": "3 years parts and labor"
      }
    ],
    "stock": 2,
    "sports": [
      "recovery",
      "wellness",
      "mobility"
    ],
    "estimatedDelivery": "14-21 business days"
  },
  {
    "id": "hp-37",
    "slug": "semi-commercial-treadmill",
    "name": "Semi Commercial Treadmill",
    "sku": "SCT-2024",
    "category": "cardio",
    "price": 1250,
    "level": "pro",
    "rating": 4.7,
    "reviewCount": 42,
    "badge": "New",
    "image": "/products/treadmill.jpg",
    "gallery": [
      "/products/treadmill.jpg"
    ],
    "shortDescription": "Semi-commercial treadmill designed for heavy home use and light commercial applications.",
    "description": "Semi-commercial treadmill designed for heavy home use and light commercial applications. Features powerful motor, large running surface, and advanced console with multiple workout programs.",
    "features": [
      "3.0 HP continuous duty motor",
      "Large 20\" x 55\" running surface",
      "0.5-12 mph speed range",
      "0-15% motorized incline",
      "15 preset workout programs",
      "Heart rate monitoring",
      "Folding design with transport wheels",
      "Semi-commercial grade construction"
    ],
    "specs": [
      {
        "label": "Motor",
        "value": "3.0 HP continuous duty"
      },
      {
        "label": "Running Surface",
        "value": "20\" W x 55\" L"
      },
      {
        "label": "Speed Range",
        "value": "0.5-12 mph"
      },
      {
        "label": "Incline",
        "value": "0-15% motorized"
      },
      {
        "label": "Programs",
        "value": "15 preset workouts"
      },
      {
        "label": "Weight Capacity",
        "value": "350 lbs"
      },
      {
        "label": "Dimensions",
        "value": "78\" L x 35\" W x 55\" H"
      },
      {
        "label": "Warranty",
        "value": "2 years parts, 1 year labor"
      }
    ],
    "stock": 4,
    "sports": [
      "cardio",
      "conditioning",
      "running"
    ],
    "estimatedDelivery": "7-10 business days"
  },
  {
    "id": "hp-38",
    "slug": "taekwondo-mats-per-square-meter",
    "name": "Taekwondo mats per square meter",
    "sku": "TM-2024",
    "category": "martial-arts",
    "price": 15,
    "level": "beginner",
    "rating": 4.4,
    "reviewCount": 67,
    "image": "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Professional interlocking taekwondo mats designed for martial arts training.",
    "description": "Professional interlocking taekwondo mats designed for martial arts training. Features shock-absorbing foam construction with textured surface for optimal grip and safety.",
    "features": [
      "1m x 1m interlocking design",
      "20mm shock-absorbing thickness",
      "High-density EVA foam",
      "Textured non-slip surface",
      "Easy interlocking system",
      "Multiple color options",
      "Professional martial arts quality",
      "Easy to clean and maintain"
    ],
    "specs": [
      {
        "label": "Size",
        "value": "1m x 1m per mat"
      },
      {
        "label": "Thickness",
        "value": "20mm"
      },
      {
        "label": "Material",
        "value": "EVA foam"
      },
      {
        "label": "Surface",
        "value": "Textured non-slip"
      },
      {
        "label": "Connection",
        "value": "Interlocking edges"
      },
      {
        "label": "Density",
        "value": "High-density foam"
      },
      {
        "label": "Color Options",
        "value": "Red, Blue, Black"
      },
      {
        "label": "Certification",
        "value": "Martial arts approved"
      }
    ],
    "stock": 100,
    "sports": [
      "boxing",
      "martial arts",
      "combat"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-39",
    "slug": "18m-olympic-barbell",
    "name": "1.8m Olympic Barbell",
    "sku": "OB18-2024",
    "category": "accessories",
    "price": 60,
    "level": "intermediate",
    "rating": 4.6,
    "reviewCount": 78,
    "image": "/products/olympic-barbell.jpg",
    "gallery": [
      "/products/olympic-barbell.jpg"
    ],
    "shortDescription": "Professional 18m Olympic barbell designed for powerlifting and strength training.",
    "description": "Professional 18m Olympic barbell designed for powerlifting and strength training. Features rotating sleeves, aggressive knurling, and high tensile strength steel construction.",
    "features": [
      "Olympic standard dimensions",
      "45 lb regulation weight",
      "Rotating sleeve design",
      "Aggressive knurling pattern",
      "1000 lb weight capacity",
      "High tensile steel construction",
      "Professional powerlifting quality",
      "Smooth rotating action"
    ],
    "specs": [
      {
        "label": "Length",
        "value": "7.2 feet (2.2m)"
      },
      {
        "label": "Weight",
        "value": "45 lbs (20kg)"
      },
      {
        "label": "Sleeve Diameter",
        "value": "2 inches Olympic"
      },
      {
        "label": "Grip Diameter",
        "value": "28mm"
      },
      {
        "label": "Material",
        "value": "High tensile steel"
      },
      {
        "label": "Weight Capacity",
        "value": "1000 lbs"
      },
      {
        "label": "Knurling",
        "value": "Aggressive grip pattern"
      },
      {
        "label": "Sleeves",
        "value": "Rotating with bushings"
      }
    ],
    "stock": 20,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-40",
    "slug": "standard-tricep-bar",
    "name": "Standard tricep bar",
    "sku": "STB-2024",
    "category": "accessories",
    "price": 40,
    "level": "intermediate",
    "rating": 4.3,
    "reviewCount": 45,
    "image": "/products/standard-tricep-bar.jpg",
    "gallery": [
      "/products/standard-tricep-bar.jpg"
    ],
    "shortDescription": "Standard tricep bar with parallel grip design for comfortable tricep and hammer curl exercises.",
    "description": "Standard tricep bar with parallel grip design for comfortable tricep and hammer curl exercises. Features neutral grip positioning to reduce wrist strain during arm workouts.",
    "features": [
      "Parallel grip design",
      "Neutral wrist positioning",
      "Chrome-plated finish",
      "Medium depth knurling",
      "200 lb weight capacity",
      "15 lb bar weight",
      "Standard plate compatible",
      "Comfortable grip spacing"
    ],
    "specs": [
      {
        "label": "Length",
        "value": "34 inches"
      },
      {
        "label": "Weight",
        "value": "15 lbs"
      },
      {
        "label": "Grip Width",
        "value": "6 inches between handles"
      },
      {
        "label": "Sleeve Diameter",
        "value": "1 inch standard"
      },
      {
        "label": "Material",
        "value": "Chrome-plated steel"
      },
      {
        "label": "Weight Capacity",
        "value": "200 lbs"
      },
      {
        "label": "Grip Type",
        "value": "Parallel neutral grip"
      },
      {
        "label": "Knurling",
        "value": "Medium depth"
      }
    ],
    "stock": 25,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "2-3 business days"
  },
  {
    "id": "hp-41",
    "slug": "magnetic-bike-41",
    "name": "Magnetic bike",
    "sku": "MB250-2024",
    "category": "cardio",
    "price": 250,
    "level": "intermediate",
    "rating": 4.2,
    "reviewCount": 89,
    "image": "/products/magnetic-bike.jpg",
    "gallery": [
      "/products/magnetic-bike.jpg"
    ],
    "shortDescription": "Compact magnetic exercise bike perfect for home cardio workouts.",
    "description": "Compact magnetic exercise bike perfect for home cardio workouts. Features quiet magnetic resistance, basic console display, and space-saving design for smaller workout areas.",
    "features": [
      "8 magnetic resistance levels",
      "Quiet operation",
      "Basic LCD display",
      "Compact space-saving design",
      "Adjustable seat height",
      "Transport wheels included",
      "Easy assembly",
      "Affordable home cardio solution"
    ],
    "specs": [
      {
        "label": "Resistance",
        "value": "8 magnetic levels"
      },
      {
        "label": "Display",
        "value": "Basic LCD monitor"
      },
      {
        "label": "Weight Capacity",
        "value": "250 lbs"
      },
      {
        "label": "Flywheel",
        "value": "13 lbs magnetic"
      },
      {
        "label": "Dimensions",
        "value": "40\" L x 20\" W x 45\" H"
      },
      {
        "label": "Weight",
        "value": "55 lbs"
      },
      {
        "label": "Seat",
        "value": "Adjustable height"
      },
      {
        "label": "Transport",
        "value": "Built-in wheels"
      }
    ],
    "stock": 15,
    "sports": [
      "cardio",
      "conditioning",
      "running"
    ],
    "estimatedDelivery": "5-7 business days"
  },
  {
    "id": "hp-42",
    "slug": "resistance-bands",
    "name": "Resistance bands",
    "sku": "RB-2024",
    "category": "accessories",
    "price": 5,
    "level": "beginner",
    "rating": 4,
    "reviewCount": 456,
    "image": "/products/resistance-bands.jpg",
    "gallery": [
      "/products/resistance-bands.jpg"
    ],
    "shortDescription": "Set of loop resistance bands in multiple resistance levels.",
    "description": "Set of loop resistance bands in multiple resistance levels. Made from natural latex for durability and comfort, perfect for strength training, rehabilitation, and mobility exercises.",
    "features": [
      "5 resistance levels included",
      "Natural latex construction",
      "Color-coded by resistance",
      "12-inch loop design",
      "Suitable for all fitness levels",
      "Portable and lightweight",
      "Versatile exercise options",
      "Durable long-lasting material"
    ],
    "specs": [
      {
        "label": "Band Count",
        "value": "5 resistance levels"
      },
      {
        "label": "Material",
        "value": "Natural latex"
      },
      {
        "label": "Resistance Levels",
        "value": "Light, Medium, Heavy, X-Heavy, XX-Heavy"
      },
      {
        "label": "Circumference",
        "value": "12 inches"
      },
      {
        "label": "Width",
        "value": "2 inches"
      },
      {
        "label": "Thickness",
        "value": "Varies by resistance"
      },
      {
        "label": "Color Coding",
        "value": "Different colors per level"
      },
      {
        "label": "Weight",
        "value": "8 oz total set"
      }
    ],
    "stock": 300,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-43",
    "slug": "swimming-goggles",
    "name": "Swimming goggles",
    "sku": "SG-2024",
    "category": "swimming",
    "price": 8,
    "level": "beginner",
    "rating": 4.1,
    "reviewCount": 234,
    "image": "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Professional swimming goggles with anti-fog coating and UV protection.",
    "description": "Professional swimming goggles with anti-fog coating and UV protection. Features comfortable silicone seals, adjustable strap, and clear vision for competitive and recreational swimming.",
    "features": [
      "Anti-fog lens coating",
      "100% UV protection",
      "Comfortable silicone seals",
      "Adjustable strap system",
      "Interchangeable nose bridges",
      "Leak-proof design",
      "Clear underwater vision",
      "Multiple color options"
    ],
    "specs": [
      {
        "label": "Lens Material",
        "value": "Polycarbonate"
      },
      {
        "label": "Coating",
        "value": "Anti-fog treatment"
      },
      {
        "label": "UV Protection",
        "value": "100% UV protection"
      },
      {
        "label": "Seal Material",
        "value": "Soft silicone"
      },
      {
        "label": "Strap",
        "value": "Adjustable silicone"
      },
      {
        "label": "Nose Bridge",
        "value": "Interchangeable sizes"
      },
      {
        "label": "Color Options",
        "value": "Clear, Smoke, Blue"
      },
      {
        "label": "Age Range",
        "value": "Adult unisex"
      }
    ],
    "stock": 120,
    "sports": [
      "swimming",
      "water sports"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-44",
    "slug": "mini-aerobic-stepper",
    "name": "Mini aerobic stepper",
    "sku": "MAS-2024",
    "category": "cardio",
    "price": 65,
    "level": "intermediate",
    "rating": 4.2,
    "reviewCount": 67,
    "image": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Compact mini aerobic stepper designed for home cardio workouts.",
    "description": "Compact mini aerobic stepper designed for home cardio workouts. Features adjustable height, non-slip platform, and lightweight design for convenient exercise anywhere.",
    "features": [
      "2 adjustable height settings",
      "Compact 24\" platform",
      "Non-slip textured surface",
      "200 lb weight capacity",
      "Lightweight 8 lb design",
      "Easy height adjustment",
      "Stackable for storage",
      "Perfect for small spaces"
    ],
    "specs": [
      {
        "label": "Platform Size",
        "value": "24\" L x 10\" W"
      },
      {
        "label": "Height Settings",
        "value": "4\" and 6\" adjustable"
      },
      {
        "label": "Weight Capacity",
        "value": "200 lbs"
      },
      {
        "label": "Material",
        "value": "High-impact plastic"
      },
      {
        "label": "Surface",
        "value": "Non-slip textured"
      },
      {
        "label": "Weight",
        "value": "8 lbs"
      },
      {
        "label": "Risers",
        "value": "2 adjustable risers"
      },
      {
        "label": "Storage",
        "value": "Compact stackable"
      }
    ],
    "stock": 40,
    "sports": [
      "cardio",
      "conditioning",
      "running"
    ],
    "estimatedDelivery": "2-3 business days"
  },
  {
    "id": "hp-45",
    "slug": "air-bike",
    "name": "Air bike",
    "sku": "AB-2024",
    "category": "cardio",
    "price": 799,
    "level": "pro",
    "rating": 4.6,
    "reviewCount": 54,
    "image": "/products/air-bike.jpg",
    "gallery": [
      "/products/air-bike.jpg"
    ],
    "shortDescription": "High-intensity air bike with fan resistance system for full-body cardio workouts.",
    "description": "High-intensity air bike with fan resistance system for full-body cardio workouts. Features moving handlebars, unlimited resistance, and robust construction for intense training sessions.",
    "features": [
      "Unlimited air resistance",
      "Full-body workout capability",
      "26-inch steel fan",
      "Moving handlebars",
      "LCD console display",
      "350 lb weight capacity",
      "Self-generating power",
      "High-intensity training ready"
    ],
    "specs": [
      {
        "label": "Resistance",
        "value": "Unlimited air resistance"
      },
      {
        "label": "Fan Size",
        "value": "26-inch steel fan"
      },
      {
        "label": "Weight Capacity",
        "value": "350 lbs"
      },
      {
        "label": "Display",
        "value": "LCD console"
      },
      {
        "label": "Handlebars",
        "value": "Moving upper body"
      },
      {
        "label": "Dimensions",
        "value": "58\" L x 26\" W x 51\" H"
      },
      {
        "label": "Weight",
        "value": "125 lbs"
      },
      {
        "label": "Warranty",
        "value": "2 years frame, 1 year parts"
      }
    ],
    "stock": 8,
    "sports": [
      "cardio",
      "conditioning",
      "running"
    ],
    "estimatedDelivery": "7-10 business days"
  },
  {
    "id": "hp-46",
    "slug": "crazy-fit",
    "name": "Crazy fit",
    "sku": "CF-2024",
    "category": "cardio",
    "price": 299,
    "level": "intermediate",
    "rating": 4,
    "reviewCount": 78,
    "image": "/products/crazy-fit.jpg",
    "gallery": [
      "/products/crazy-fit.jpg"
    ],
    "shortDescription": "Vibration platform machine designed for low-impact fitness and muscle toning.",
    "description": "Vibration platform machine designed for low-impact fitness and muscle toning. Features multiple vibration programs, adjustable intensity, and compact design for home use.",
    "features": [
      "10 vibration programs",
      "20 adjustable speed levels",
      "300 lb weight capacity",
      "LED control panel",
      "Low-impact exercise",
      "Muscle toning benefits",
      "Compact home design",
      "Remote control included"
    ],
    "specs": [
      {
        "label": "Platform Size",
        "value": "24\" L x 14\" W"
      },
      {
        "label": "Vibration Programs",
        "value": "10 preset programs"
      },
      {
        "label": "Speed Range",
        "value": "1-20 levels"
      },
      {
        "label": "Weight Capacity",
        "value": "300 lbs"
      },
      {
        "label": "Motor",
        "value": "200W vibration motor"
      },
      {
        "label": "Display",
        "value": "LED control panel"
      },
      {
        "label": "Dimensions",
        "value": "26\" L x 16\" W x 6\" H"
      },
      {
        "label": "Weight",
        "value": "35 lbs"
      }
    ],
    "stock": 0,
    "sports": [
      "cardio",
      "conditioning",
      "running"
    ],
    "estimatedDelivery": "5-7 business days"
  },
  {
    "id": "hp-47",
    "slug": "treadmill-a8",
    "name": "Treadmill A8",
    "sku": "TA8-2024",
    "category": "cardio",
    "price": 999,
    "level": "pro",
    "rating": 4.5,
    "reviewCount": 89,
    "badge": "New",
    "image": "/products/treadmill-a8.jpg",
    "gallery": [
      "/products/treadmill-a8.jpg"
    ],
    "shortDescription": "Home treadmill with motorized incline and multiple workout programs.",
    "description": "Home treadmill with motorized incline and multiple workout programs. Features cushioned running deck, heart rate monitoring, and foldable design for space-saving storage.",
    "features": [
      "2.5 HP continuous motor",
      "Motorized incline 0-12%",
      "12 preset workout programs",
      "Cushioned running deck",
      "Heart rate monitoring",
      "Foldable space-saving design",
      "Safety key system",
      "Transport wheels included"
    ],
    "specs": [
      {
        "label": "Motor",
        "value": "2.5 HP continuous"
      },
      {
        "label": "Running Surface",
        "value": "18\" W x 50\" L"
      },
      {
        "label": "Speed Range",
        "value": "0.8-10 mph"
      },
      {
        "label": "Incline",
        "value": "0-12% motorized"
      },
      {
        "label": "Programs",
        "value": "12 preset workouts"
      },
      {
        "label": "Weight Capacity",
        "value": "300 lbs"
      },
      {
        "label": "Dimensions",
        "value": "70\" L x 32\" W x 52\" H"
      },
      {
        "label": "Warranty",
        "value": "2 years motor, 1 year parts"
      }
    ],
    "stock": 6,
    "sports": [
      "cardio",
      "conditioning",
      "running"
    ],
    "estimatedDelivery": "7-10 business days"
  },
  {
    "id": "hp-48",
    "slug": "knee-guard",
    "name": "Knee guard",
    "sku": "KG-2024",
    "category": "accessories",
    "price": 10,
    "level": "beginner",
    "rating": 4.1,
    "reviewCount": 189,
    "image": "/products/knee-guard.jpg",
    "gallery": [
      "/products/knee-guard.jpg"
    ],
    "shortDescription": "Supportive knee guard designed for sports and exercise activities.",
    "description": "Supportive knee guard designed for sports and exercise activities. Features adjustable straps, breathable material, and compression support for knee stability and injury prevention.",
    "features": [
      "Medium compression support",
      "Adjustable velcro straps",
      "Breathable mesh panels",
      "4mm neoprene construction",
      "Injury prevention design",
      "Comfortable all-day wear",
      "Multiple size options",
      "Easy care maintenance"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Neoprene with mesh panels"
      },
      {
        "label": "Support Level",
        "value": "Medium compression"
      },
      {
        "label": "Closure",
        "value": "Adjustable velcro straps"
      },
      {
        "label": "Size Range",
        "value": "S, M, L, XL"
      },
      {
        "label": "Thickness",
        "value": "4mm neoprene"
      },
      {
        "label": "Color",
        "value": "Black with gray accents"
      },
      {
        "label": "Care",
        "value": "Hand wash cold"
      },
      {
        "label": "Fit",
        "value": "Left or right knee"
      }
    ],
    "stock": 150,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-49",
    "slug": "bathroom-scale",
    "name": "Bathroom scale",
    "sku": "BS-2024",
    "category": "accessories",
    "price": 15,
    "level": "beginner",
    "rating": 4.2,
    "reviewCount": 167,
    "image": "/products/bathroom-scale.jpg",
    "gallery": [
      "/products/bathroom-scale.jpg"
    ],
    "shortDescription": "Digital bathroom scale with large LCD display and tempered glass platform.",
    "description": "Digital bathroom scale with large LCD display and tempered glass platform. Features precise weight measurement, auto-calibration, and sleek modern design for any bathroom.",
    "features": [
      "400 lb weight capacity",
      "0.2 lb precision accuracy",
      "Large LCD display",
      "Tempered glass platform",
      "Auto on/off function",
      "Multiple unit options",
      "Step-on activation",
      "Sleek modern design"
    ],
    "specs": [
      {
        "label": "Capacity",
        "value": "400 lbs / 180 kg"
      },
      {
        "label": "Accuracy",
        "value": "0.2 lb / 0.1 kg"
      },
      {
        "label": "Display",
        "value": "Large LCD screen"
      },
      {
        "label": "Platform",
        "value": "Tempered glass"
      },
      {
        "label": "Power",
        "value": "2 AAA batteries"
      },
      {
        "label": "Dimensions",
        "value": "12\" x 12\" x 1\""
      },
      {
        "label": "Auto Features",
        "value": "On/off, calibration"
      },
      {
        "label": "Units",
        "value": "lbs, kg, stone"
      }
    ],
    "stock": 80,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "2-3 business days"
  },
  {
    "id": "hp-50",
    "slug": "yoga-mats",
    "name": "Yoga mats",
    "sku": "YM-2024",
    "category": "accessories",
    "price": 15,
    "level": "beginner",
    "rating": 4.3,
    "reviewCount": 345,
    "image": "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1518310952931-b1de897abd40?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "High-quality yoga mat with non-slip surface and optimal cushioning.",
    "description": "High-quality yoga mat with non-slip surface and optimal cushioning. Features eco-friendly materials, easy-to-clean surface, and portable design for yoga, pilates, and floor exercises.",
    "features": [
      "6mm optimal cushioning",
      "Non-slip textured surface",
      "Eco-friendly TPE material",
      "68\" x 24\" standard size",
      "Lightweight and portable",
      "Multiple color options",
      "Easy to clean surface",
      "Suitable for all yoga styles"
    ],
    "specs": [
      {
        "label": "Size",
        "value": "68\" L x 24\" W"
      },
      {
        "label": "Thickness",
        "value": "6mm"
      },
      {
        "label": "Material",
        "value": "TPE eco-friendly"
      },
      {
        "label": "Surface",
        "value": "Non-slip textured"
      },
      {
        "label": "Weight",
        "value": "2.2 lbs"
      },
      {
        "label": "Color Options",
        "value": "Purple, Blue, Green, Pink"
      },
      {
        "label": "Care",
        "value": "Wipe clean with damp cloth"
      },
      {
        "label": "Carrying",
        "value": "Lightweight and portable"
      }
    ],
    "stock": 200,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-51",
    "slug": "cement-kettle-bell-per-kg",
    "name": "Cement kettle bell per kg",
    "sku": "CKB-2024",
    "category": "strength",
    "price": 3.8,
    "level": "beginner",
    "rating": 4.4,
    "reviewCount": 89,
    "image": "/products/cement-kettlebells.jpg",
    "gallery": [
      "/products/cement-kettlebells.jpg"
    ],
    "shortDescription": "Durable cement kettlebells offering excellent value for strength training.",
    "description": "Durable cement kettlebells offering excellent value for strength training. Features comfortable handle grip and solid concrete construction for effective functional fitness workouts.",
    "features": [
      "High-grade cement construction",
      "Steel reinforced handle",
      "Flat bottom stability",
      "Weather resistant finish",
      "Comfortable grip design",
      "Excellent value pricing",
      "Wide weight range available",
      "Durable long-lasting"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "High-grade cement/concrete"
      },
      {
        "label": "Weight Range",
        "value": "4-32 kg available"
      },
      {
        "label": "Handle",
        "value": "Steel reinforced"
      },
      {
        "label": "Base",
        "value": "Flat bottom design"
      },
      {
        "label": "Finish",
        "value": "Smooth cement surface"
      },
      {
        "label": "Color",
        "value": "Natural gray concrete"
      },
      {
        "label": "Durability",
        "value": "Weather resistant"
      },
      {
        "label": "Handle Diameter",
        "value": "33mm"
      }
    ],
    "stock": 150,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "2-3 business days"
  },
  {
    "id": "hp-52",
    "slug": "quadbikes",
    "name": "Quadbikes",
    "sku": "QB-2024",
    "category": "cardio",
    "price": 599,
    "level": "intermediate",
    "rating": 4.7,
    "reviewCount": 23,
    "badge": "New",
    "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/quadbike-product-8uhPN0kUg2QvcWUKCzzgGxRMm0ljLn.jpg",
    "gallery": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/quadbike-product-8uhPN0kUg2QvcWUKCzzgGxRMm0ljLn.jpg"
    ],
    "shortDescription": "Professional all-terrain vehicle (ATV) designed for outdoor adventures and rugged terrain exploration.",
    "description": "Professional all-terrain vehicle (ATV) designed for outdoor adventures and rugged terrain exploration. Features powerful 4-stroke engine, automatic transmission, and advanced safety features. Perfect for recreational riding, utility work, and off-road adventures. Built with durable construction to handle challenging terrains while providing excellent stability and control.",
    "features": [
      "400cc 4-stroke engine",
      "Automatic CVT transmission",
      "4-wheel drive capability",
      "Independent front suspension",
      "Hydraulic disc brakes",
      "Digital instrument cluster",
      "LED headlights",
      "Cargo rack included"
    ],
    "specs": [
      {
        "label": "Engine",
        "value": "400cc 4-stroke engine"
      },
      {
        "label": "Transmission",
        "value": "Automatic CVT transmission"
      },
      {
        "label": "Weight Capacity",
        "value": "300 lbs"
      },
      {
        "label": "Fuel Tank",
        "value": "3.4 gallons"
      },
      {
        "label": "Tires",
        "value": "25x8-12 front, 25x10-12 rear"
      },
      {
        "label": "Brakes",
        "value": "Hydraulic disc brakes"
      },
      {
        "label": "Suspension",
        "value": "Independent front, swing arm rear"
      },
      {
        "label": "Dimensions",
        "value": "84\" L x 46\" W x 48\" H"
      }
    ],
    "stock": 5,
    "sports": [
      "cardio",
      "conditioning",
      "running"
    ],
    "estimatedDelivery": "10-14 business days"
  },
  {
    "id": "hp-53",
    "slug": "adjustable-dumbbells-per-kg",
    "name": "Adjustable dumbbells per kg",
    "sku": "AD-2024",
    "category": "strength",
    "price": 3,
    "level": "beginner",
    "rating": 4.5,
    "reviewCount": 156,
    "image": "https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Space-saving adjustable dumbbells with quick-change weight system.",
    "description": "Space-saving adjustable dumbbells with quick-change weight system. Features secure locking mechanism and comfortable grip handles for efficient home strength training.",
    "features": [
      "Quick-change dial system",
      "2-24 kg weight range",
      "2 kg increments",
      "Secure locking mechanism",
      "Ergonomic handle design",
      "Space-saving storage",
      "Rubber-coated plates",
      "Efficient home gym solution"
    ],
    "specs": [
      {
        "label": "Weight Range",
        "value": "2-24 kg per dumbbell"
      },
      {
        "label": "Adjustment",
        "value": "Quick-change dial system"
      },
      {
        "label": "Increments",
        "value": "2 kg weight increments"
      },
      {
        "label": "Handle",
        "value": "Ergonomic grip design"
      },
      {
        "label": "Locking",
        "value": "Secure dial mechanism"
      },
      {
        "label": "Space",
        "value": "Compact storage design"
      },
      {
        "label": "Material",
        "value": "Steel plates with rubber coating"
      },
      {
        "label": "Warranty",
        "value": "1 year manufacturer"
      }
    ],
    "stock": 100,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "2-3 business days"
  },
  {
    "id": "hp-54",
    "slug": "elliptical-trainer",
    "name": "Elliptical trainer",
    "sku": "ET-2024",
    "category": "cardio",
    "price": 1500,
    "level": "pro",
    "rating": 4.8,
    "reviewCount": 67,
    "badge": "Pro Choice",
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Premium elliptical trainer with smooth stride motion and advanced console features.",
    "description": "Premium elliptical trainer with smooth stride motion and advanced console features. Provides low-impact full-body cardio workout with multiple resistance levels and programs.",
    "features": [
      "20-inch natural stride length",
      "20 magnetic resistance levels",
      "15 preset workout programs",
      "Full-body low-impact exercise",
      "Advanced LCD console",
      "Heart rate monitoring",
      "350 lb weight capacity",
      "Smooth quiet operation"
    ],
    "specs": [
      {
        "label": "Stride Length",
        "value": "20 inches"
      },
      {
        "label": "Resistance Levels",
        "value": "20 magnetic levels"
      },
      {
        "label": "Programs",
        "value": "15 preset workouts"
      },
      {
        "label": "Weight Capacity",
        "value": "350 lbs"
      },
      {
        "label": "Console",
        "value": "LCD with heart rate"
      },
      {
        "label": "Dimensions",
        "value": "70\" L x 28\" W x 65\" H"
      },
      {
        "label": "Weight",
        "value": "180 lbs"
      },
      {
        "label": "Warranty",
        "value": "3 years frame, 2 years parts"
      }
    ],
    "stock": 3,
    "sports": [
      "cardio",
      "conditioning",
      "running"
    ],
    "estimatedDelivery": "10-14 business days"
  },
  {
    "id": "hp-55",
    "slug": "kettle-bell-rack-55",
    "name": "Kettle Bell rack",
    "sku": "KBR2-2024",
    "category": "storage",
    "price": 348,
    "level": "intermediate",
    "rating": 4.7,
    "reviewCount": 34,
    "image": "https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Premium kettlebell storage rack with enhanced capacity and durability.",
    "description": "Premium kettlebell storage rack with enhanced capacity and durability. Features two-tier design with extended width and heavy-duty steel construction for professional gym organization.",
    "features": [
      "Enhanced 15-20 kettlebell capacity",
      "Multi-tier extended design",
      "Heavy-duty steel construction",
      "600 lb total capacity",
      "Professional grade finish",
      "Organized storage solution",
      "Easy access design",
      "Premium gym quality"
    ],
    "specs": [
      {
        "label": "Capacity",
        "value": "12-15 kettlebells"
      },
      {
        "label": "Tiers",
        "value": "2 levels with extended width"
      },
      {
        "label": "Frame Material",
        "value": "Heavy-duty steel with powder coating"
      },
      {
        "label": "Weight Capacity",
        "value": "500 lbs total"
      },
      {
        "label": "Dimensions",
        "value": "54\" L x 28\" W x 40\" H"
      },
      {
        "label": "Weight",
        "value": "65 lbs"
      },
      {
        "label": "Finish",
        "value": "Powder-coated black"
      },
      {
        "label": "Assembly",
        "value": "Required (hardware included)"
      }
    ],
    "stock": 8,
    "sports": [
      "gym",
      "home gym",
      "organization"
    ],
    "estimatedDelivery": "5-7 business days"
  },
  {
    "id": "hp-56",
    "slug": "exercise-wheel",
    "name": "Exercise wheel",
    "sku": "EW-2024",
    "category": "accessories",
    "price": 10,
    "level": "beginner",
    "rating": 4.2,
    "reviewCount": 234,
    "image": "/products/exercise-wheel.jpg",
    "gallery": [
      "/products/exercise-wheel.jpg"
    ],
    "shortDescription": "Dual-wheel ab roller designed for intense core strengthening exercises.",
    "description": "Dual-wheel ab roller designed for intense core strengthening exercises. Features comfortable grip handles and stable dual-wheel design for effective abdominal and core muscle development.",
    "features": [
      "Dual-wheel stability design",
      "Comfortable foam handles",
      "Intense core workout",
      "250 lb weight capacity",
      "Durable construction",
      "Compact and portable",
      "No assembly required",
      "Effective ab muscle targeting"
    ],
    "specs": [
      {
        "label": "Wheel Design",
        "value": "Dual wheels for stability"
      },
      {
        "label": "Handle Material",
        "value": "Foam grip padding"
      },
      {
        "label": "Wheel Diameter",
        "value": "6 inches each"
      },
      {
        "label": "Weight Capacity",
        "value": "250 lbs"
      },
      {
        "label": "Material",
        "value": "Durable plastic wheels"
      },
      {
        "label": "Handle Length",
        "value": "5 inches"
      },
      {
        "label": "Weight",
        "value": "2 lbs"
      },
      {
        "label": "Assembly",
        "value": "No assembly required"
      }
    ],
    "stock": 180,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-57",
    "slug": "gym-balls",
    "name": "Gym balls",
    "sku": "GB-2024",
    "category": "accessories",
    "price": 10,
    "level": "beginner",
    "rating": 4.1,
    "reviewCount": 189,
    "image": "/products/gym-balls.jpg",
    "gallery": [
      "/products/gym-balls.jpg"
    ],
    "shortDescription": "Anti-burst exercise ball designed for core strengthening, balance training, and rehabilitation exercises.",
    "description": "Anti-burst exercise ball designed for core strengthening, balance training, and rehabilitation exercises. Features textured surface for enhanced grip and multiple size options.",
    "features": [
      "Anti-burst safety design",
      "Multiple size options",
      "Textured non-slip surface",
      "300 lb weight capacity",
      "Hand pump included",
      "Versatile exercise applications",
      "Multiple color choices",
      "Core and balance training"
    ],
    "specs": [
      {
        "label": "Size Options",
        "value": "55cm, 65cm, 75cm"
      },
      {
        "label": "Material",
        "value": "Anti-burst PVC"
      },
      {
        "label": "Weight Capacity",
        "value": "300 lbs"
      },
      {
        "label": "Surface",
        "value": "Textured non-slip"
      },
      {
        "label": "Inflation",
        "value": "Hand pump included"
      },
      {
        "label": "Thickness",
        "value": "2mm anti-burst material"
      },
      {
        "label": "Color Options",
        "value": "Blue, Red, Green, Purple"
      },
      {
        "label": "Warranty",
        "value": "1 year anti-burst guarantee"
      }
    ],
    "stock": 100,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "2-3 business days"
  },
  {
    "id": "hp-58",
    "slug": "rowing-machine",
    "name": "Rowing machine",
    "sku": "RM-2024",
    "category": "cardio",
    "price": 495,
    "level": "intermediate",
    "rating": 4.6,
    "reviewCount": 78,
    "image": "/products/rowing-machine.jpg",
    "gallery": [
      "/products/rowing-machine.jpg"
    ],
    "shortDescription": "Full-body rowing machine with smooth resistance system and comfortable seating.",
    "description": "Full-body rowing machine with smooth resistance system and comfortable seating. Provides excellent cardiovascular workout while targeting multiple muscle groups simultaneously.",
    "features": [
      "Full-body cardio workout",
      "8 magnetic resistance levels",
      "Smooth rowing motion",
      "Comfortable padded seat",
      "LCD monitor display",
      "300 lb weight capacity",
      "Foldable storage design",
      "Low-impact exercise"
    ],
    "specs": [
      {
        "label": "Resistance Type",
        "value": "Magnetic resistance"
      },
      {
        "label": "Resistance Levels",
        "value": "8 adjustable levels"
      },
      {
        "label": "Weight Capacity",
        "value": "300 lbs"
      },
      {
        "label": "Rail Length",
        "value": "48 inches"
      },
      {
        "label": "Seat",
        "value": "Padded ergonomic design"
      },
      {
        "label": "Display",
        "value": "LCD monitor"
      },
      {
        "label": "Dimensions",
        "value": "72\" L x 20\" W x 32\" H"
      },
      {
        "label": "Weight",
        "value": "65 lbs"
      }
    ],
    "stock": 6,
    "sports": [
      "cardio",
      "conditioning",
      "running"
    ],
    "estimatedDelivery": "7-10 business days"
  },
  {
    "id": "hp-59",
    "slug": "swimming-pull-buoy",
    "name": "Swimming pull buoy",
    "sku": "SPB-2024",
    "category": "swimming",
    "price": 6,
    "level": "beginner",
    "rating": 4,
    "reviewCount": 123,
    "image": "/products/swimming-pull-buoy.jpg",
    "gallery": [
      "/products/swimming-pull-buoy.jpg"
    ],
    "shortDescription": "Swimming pull buoy designed to improve upper body strength and technique.",
    "description": "Swimming pull buoy designed to improve upper body strength and technique. Features ergonomic design and buoyant foam construction for effective swim training and stroke development.",
    "features": [
      "Ergonomic figure-8 design",
      "High-density foam construction",
      "Improves upper body strength",
      "Enhances stroke technique",
      "Chlorine resistant material",
      "Lightweight and portable",
      "Multiple color options",
      "Professional training aid"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "High-density foam"
      },
      {
        "label": "Size",
        "value": "Standard adult size"
      },
      {
        "label": "Buoyancy",
        "value": "High flotation"
      },
      {
        "label": "Shape",
        "value": "Ergonomic figure-8 design"
      },
      {
        "label": "Color Options",
        "value": "Blue, Red, Yellow"
      },
      {
        "label": "Weight",
        "value": "4 oz"
      },
      {
        "label": "Durability",
        "value": "Chlorine resistant"
      },
      {
        "label": "Age Range",
        "value": "Adult swimmers"
      }
    ],
    "stock": 150,
    "sports": [
      "swimming",
      "water sports"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-60",
    "slug": "head-bands",
    "name": "Head bands",
    "sku": "HB-2024",
    "category": "accessories",
    "price": 4,
    "level": "beginner",
    "rating": 3.9,
    "reviewCount": 167,
    "image": "/products/head-bands.jpg",
    "gallery": [
      "/products/head-bands.jpg"
    ],
    "shortDescription": "Moisture-wicking fitness headbands designed to keep sweat away from eyes during workouts.",
    "description": "Moisture-wicking fitness headbands designed to keep sweat away from eyes during workouts. Features comfortable elastic design and quick-dry fabric for all exercise activities.",
    "features": [
      "Moisture-wicking fabric",
      "Comfortable elastic fit",
      "Quick-dry technology",
      "Sweat absorption design",
      "Machine washable",
      "Multiple color options",
      "Set of 3 included",
      "One size fits most"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Moisture-wicking polyester"
      },
      {
        "label": "Size",
        "value": "One size fits most"
      },
      {
        "label": "Width",
        "value": "2 inches"
      },
      {
        "label": "Stretch",
        "value": "Elastic comfortable fit"
      },
      {
        "label": "Care",
        "value": "Machine washable"
      },
      {
        "label": "Color Options",
        "value": "Black, White, Gray, Blue, Pink"
      },
      {
        "label": "Pack Size",
        "value": "Set of 3 headbands"
      },
      {
        "label": "Features",
        "value": "Quick-dry technology"
      }
    ],
    "stock": 250,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "1-2 business days"
  },
  {
    "id": "hp-62",
    "slug": "single-station-home-gym",
    "name": "Single station home gym",
    "sku": "SSHG-2024",
    "category": "strength",
    "price": 399,
    "level": "intermediate",
    "rating": 4.4,
    "reviewCount": 45,
    "badge": "New",
    "image": "/products/single-station-home-gym.jpg",
    "gallery": [
      "/products/single-station-home-gym.jpg"
    ],
    "shortDescription": "Compact single station home gym system offering multiple exercise options in space-efficient design.",
    "description": "Compact single station home gym system offering multiple exercise options in space-efficient design. Features weight stack system and versatile attachments for complete home workouts.",
    "features": [
      "100 lb weight stack",
      "12+ exercise variations",
      "Compact space-efficient design",
      "Heavy-duty steel frame",
      "Smooth cable system",
      "Multiple attachment points",
      "Adjustable for different heights",
      "Complete home gym solution"
    ],
    "specs": [
      {
        "label": "Weight Stack",
        "value": "100 lbs included"
      },
      {
        "label": "Exercise Options",
        "value": "12+ different exercises"
      },
      {
        "label": "Frame Material",
        "value": "Heavy-duty steel"
      },
      {
        "label": "Cable System",
        "value": "Smooth pulley operation"
      },
      {
        "label": "Dimensions",
        "value": "50\" L x 40\" W x 80\" H"
      },
      {
        "label": "Weight",
        "value": "200 lbs"
      },
      {
        "label": "User Height",
        "value": "5'2\" to 6'4\""
      },
      {
        "label": "Warranty",
        "value": "2 years parts"
      }
    ],
    "stock": 10,
    "sports": [
      "gym",
      "strength",
      "weightlifting"
    ],
    "estimatedDelivery": "5-7 business days"
  },
  {
    "id": "hp-63",
    "slug": "75-interactive-board",
    "name": "75 Interactive Board",
    "sku": "IB75-2024",
    "category": "accessories",
    "price": 1796,
    "level": "pro",
    "rating": 4.8,
    "reviewCount": 8,
    "image": "/products/interactive-boards.jpg",
    "gallery": [
      "/products/interactive-boards.jpg"
    ],
    "shortDescription": "75-inch interactive display board perfect for fitness studios, training facilities, and educational environments.",
    "description": "75-inch interactive display board perfect for fitness studios, training facilities, and educational environments. Features touch-screen technology and high-resolution display for interactive workouts and presentations.",
    "features": [
      "75-inch 4K Ultra HD display",
      "Multi-touch capacitive technology",
      "Built-in Android operating system",
      "WiFi and Bluetooth connectivity",
      "Multiple HDMI and USB ports",
      "Interactive fitness applications",
      "Wall mountable design",
      "Professional grade quality"
    ],
    "specs": [
      {
        "label": "Screen Size",
        "value": "75 inches"
      },
      {
        "label": "Resolution",
        "value": "4K Ultra HD"
      },
      {
        "label": "Touch Technology",
        "value": "Multi-touch capacitive"
      },
      {
        "label": "Connectivity",
        "value": "HDMI, USB, WiFi, Bluetooth"
      },
      {
        "label": "Operating System",
        "value": "Android"
      },
      {
        "label": "Response Time",
        "value": "< 10ms"
      },
      {
        "label": "Brightness",
        "value": "400 cd/m²"
      },
      {
        "label": "Viewing Angle",
        "value": "178° horizontal/vertical"
      }
    ],
    "stock": 3,
    "sports": [
      "gym",
      "home workout",
      "fitness"
    ],
    "estimatedDelivery": "7-10 business days"
  },
  {
    "id": "hp-64",
    "slug": "squat-machine",
    "name": "Squat Machine",
    "sku": "SQM-2024",
    "category": "strength",
    "price": 90,
    "level": "intermediate",
    "rating": 4.4,
    "reviewCount": 52,
    "image": "/products/squat-machine.jpg",
    "gallery": [
      "/products/squat-machine.jpg"
    ],
    "shortDescription": "Guided squat trainer that builds leg strength while supporting your back and knees.",
    "description": "Compact squat trainer that guides you through deep, controlled squats while supporting your back and knees. A space-saving way to build powerful legs and glutes at home.",
    "features": [
      "Guided squat movement path",
      "Padded back and knee support",
      "Non-slip foot plates",
      "Adjustable resistance",
      "Folds flat for storage"
    ],
    "specs": [
      {
        "label": "Weight capacity",
        "value": "120 kg"
      },
      {
        "label": "Material",
        "value": "Steel"
      },
      {
        "label": "Resistance",
        "value": "Adjustable"
      },
      {
        "label": "Use",
        "value": "Legs & glutes"
      }
    ],
    "stock": 14,
    "sports": [
      "gym",
      "strength",
      "home workout"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-65",
    "slug": "standard-plates",
    "name": "Standard Plates (per kg)",
    "sku": "STP-2024",
    "category": "strength",
    "price": 3,
    "level": "beginner",
    "rating": 4.6,
    "reviewCount": 140,
    "image": "/products/standard-plates.jpg",
    "gallery": [
      "/products/standard-plates.jpg"
    ],
    "shortDescription": "Cast-iron standard weight plates with a 25 mm bore, sold per kilogram.",
    "description": "Cast-iron standard weight plates with a 1-inch (25 mm) bore, sold per kilogram. Accurately weighted and durable, they fit standard bars and dumbbell handles for endless loading options.",
    "features": [
      "Cast-iron construction",
      "25 mm standard bore",
      "Sold per kilogram",
      "Fits standard bars & dumbbells",
      "Durable enamel finish"
    ],
    "specs": [
      {
        "label": "Bore",
        "value": "25 mm standard"
      },
      {
        "label": "Material",
        "value": "Cast iron"
      },
      {
        "label": "Sold by",
        "value": "Per kg"
      },
      {
        "label": "Finish",
        "value": "Enamel"
      }
    ],
    "stock": 300,
    "sports": [
      "gym",
      "strength"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-66",
    "slug": "decline-bench-commercial",
    "name": "Decline Bench Commercial",
    "sku": "DBC-2024",
    "category": "strength",
    "price": 799,
    "level": "pro",
    "rating": 4.7,
    "reviewCount": 38,
    "badge": "Pro Choice",
    "image": "/products/decline-bench.jpg",
    "gallery": [
      "/products/decline-bench.jpg"
    ],
    "shortDescription": "Heavy-duty commercial decline bench with an integrated barbell rack.",
    "description": "Commercial decline bench built from thick-gauge steel with an integrated barbell rack. Engineered for stable, high-load decline pressing in busy gyms and serious home setups.",
    "features": [
      "Commercial thick-gauge steel frame",
      "Integrated barbell rack",
      "High weight capacity",
      "Sweat-resistant upholstery",
      "Wide, stable base"
    ],
    "specs": [
      {
        "label": "Frame",
        "value": "Heavy steel"
      },
      {
        "label": "Capacity",
        "value": "400 kg"
      },
      {
        "label": "Type",
        "value": "Decline"
      },
      {
        "label": "Use",
        "value": "Commercial"
      }
    ],
    "stock": 6,
    "sports": [
      "gym",
      "strength"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-67",
    "slug": "safety-key",
    "name": "Treadmill Safety Key",
    "sku": "TSK-2024",
    "category": "accessories",
    "price": 20,
    "level": "beginner",
    "rating": 4.3,
    "reviewCount": 74,
    "image": "/products/safety-key.jpg",
    "gallery": [
      "/products/safety-key.jpg"
    ],
    "shortDescription": "Universal magnetic treadmill safety key with a coiled cord and clip.",
    "description": "Universal magnetic treadmill safety key with a coiled stretch cord and garment clip. Instantly cuts the belt if you drift too far back — an essential spare or replacement for most treadmills.",
    "features": [
      "Magnetic safety cutoff",
      "Coiled stretch cord",
      "Secure garment clip",
      "Universal fit for most treadmills"
    ],
    "specs": [
      {
        "label": "Type",
        "value": "Magnetic"
      },
      {
        "label": "Fit",
        "value": "Universal"
      },
      {
        "label": "Cord",
        "value": "Coiled"
      }
    ],
    "stock": 120,
    "sports": [
      "cardio"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-68",
    "slug": "calf-raise",
    "name": "Calf Raise",
    "sku": "CFR-2024",
    "category": "strength",
    "price": 290,
    "level": "intermediate",
    "rating": 4.5,
    "reviewCount": 41,
    "image": "/products/calf-raise.jpg",
    "gallery": [
      "/products/calf-raise.jpg"
    ],
    "shortDescription": "Seated calf raise machine that isolates and overloads the calves.",
    "description": "Seated calf raise machine that isolates and overloads the calves through a full range of motion. A padded knee lever and easy plate loading make progressive calf training simple.",
    "features": [
      "Isolates the calf muscles",
      "Padded knee lever",
      "Plate-loaded resistance",
      "Full range of motion",
      "Compact footprint"
    ],
    "specs": [
      {
        "label": "Type",
        "value": "Seated calf raise"
      },
      {
        "label": "Loading",
        "value": "Plate-loaded"
      },
      {
        "label": "Capacity",
        "value": "200 kg"
      },
      {
        "label": "Use",
        "value": "Legs"
      }
    ],
    "stock": 7,
    "sports": [
      "gym",
      "strength"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-69",
    "slug": "8-station-commercial-gym",
    "name": "8 Station Commercial Gym",
    "sku": "8SG-2024",
    "category": "strength",
    "price": 7500,
    "level": "pro",
    "rating": 4.9,
    "reviewCount": 18,
    "badge": "Pro Choice",
    "image": "/products/8-station-gym.jpg",
    "gallery": [
      "/products/8-station-gym.jpg"
    ],
    "shortDescription": "Complete 8-station multi-gym engineered for commercial studios.",
    "description": "A complete 8-station multi-gym engineered for commercial studios. Eight independent stations let a full group train every major muscle group at once, on a durable commercial-grade frame and cable system.",
    "features": [
      "8 independent training stations",
      "Commercial-grade steel frame",
      "High-density weight stacks",
      "Supports multiple simultaneous users",
      "Durable cable and pulley system"
    ],
    "specs": [
      {
        "label": "Stations",
        "value": "8"
      },
      {
        "label": "Frame",
        "value": "Commercial steel"
      },
      {
        "label": "Users",
        "value": "Up to 8"
      },
      {
        "label": "Use",
        "value": "Commercial gym"
      }
    ],
    "stock": 3,
    "sports": [
      "gym",
      "strength"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-70",
    "slug": "chest-expander",
    "name": "Chest Expander",
    "sku": "CXP-2024",
    "category": "accessories",
    "price": 10,
    "level": "beginner",
    "rating": 4.2,
    "reviewCount": 96,
    "image": "/products/chest-expander.jpg",
    "gallery": [
      "/products/chest-expander.jpg"
    ],
    "shortDescription": "Adjustable 5-spring chest expander for chest, shoulder and arm strength.",
    "description": "Adjustable spring chest expander for building chest, shoulder and arm strength. Add or remove the steel springs to set exactly the resistance you want, then train anywhere.",
    "features": [
      "5 removable steel springs",
      "Foam-grip handles",
      "Adjustable resistance",
      "Compact and portable"
    ],
    "specs": [
      {
        "label": "Springs",
        "value": "5 removable"
      },
      {
        "label": "Grips",
        "value": "Foam"
      },
      {
        "label": "Resistance",
        "value": "Adjustable"
      }
    ],
    "stock": 130,
    "sports": [
      "strength",
      "home workout"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-71",
    "slug": "waist-twister",
    "name": "Waist Twister",
    "sku": "WTW-2024",
    "category": "accessories",
    "price": 10,
    "level": "beginner",
    "rating": 4.3,
    "reviewCount": 112,
    "image": "/products/waist-twister.jpg",
    "gallery": [
      "/products/waist-twister.jpg"
    ],
    "shortDescription": "Acupressure waist-twisting disc for a low-impact core workout.",
    "description": "Acupressure waist-twisting disc that works your core and obliques while stimulating pressure points underfoot. A fun, low-impact way to warm up, wind down or trim the waistline.",
    "features": [
      "Twists the core and obliques",
      "Acupressure foot nodes",
      "Non-slip surface",
      "Compact home trainer"
    ],
    "specs": [
      {
        "label": "Type",
        "value": "Twist board"
      },
      {
        "label": "Surface",
        "value": "Acupressure"
      },
      {
        "label": "Use",
        "value": "Core"
      }
    ],
    "stock": 150,
    "sports": [
      "home workout"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-72",
    "slug": "20kg-epoxy-dumbbell",
    "name": "20kg Epoxy Dumbbell Set",
    "sku": "EPD20-2024",
    "category": "strength",
    "price": 80,
    "level": "intermediate",
    "rating": 4.7,
    "reviewCount": 88,
    "badge": "Best Seller",
    "image": "/products/20kg-epoxy-dumbbell.jpg",
    "gallery": [
      "/products/20kg-epoxy-dumbbell.jpg"
    ],
    "shortDescription": "20 kg adjustable epoxy dumbbell set in a moulded carry case.",
    "description": "A 20 kg adjustable epoxy dumbbell set in a moulded carry case. Swap the coated plates and join the handles to form a single barbell — a complete free-weight set that packs away in one box.",
    "features": [
      "20 kg total adjustable weight",
      "Epoxy-coated plates",
      "Handles connect into a barbell",
      "Moulded carry case",
      "Quick-lock collars"
    ],
    "specs": [
      {
        "label": "Total weight",
        "value": "20 kg"
      },
      {
        "label": "Plates",
        "value": "Epoxy-coated"
      },
      {
        "label": "Type",
        "value": "Adjustable"
      },
      {
        "label": "Includes",
        "value": "Case + collars"
      }
    ],
    "stock": 40,
    "sports": [
      "gym",
      "strength"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-73",
    "slug": "15kg-epoxy-dumbbell-set",
    "name": "15kg Epoxy Dumbbell Set",
    "sku": "EPD15-2024",
    "category": "strength",
    "price": 60,
    "level": "intermediate",
    "rating": 4.6,
    "reviewCount": 73,
    "image": "/products/15kg-epoxy-dumbbell.jpg",
    "gallery": [
      "/products/15kg-epoxy-dumbbell.jpg"
    ],
    "shortDescription": "15 kg adjustable epoxy dumbbell set — two 7.5 kg dumbbells in a case.",
    "description": "A 15 kg adjustable epoxy dumbbell set: two 7.5 kg dumbbells with coated plates and secure collars, packed in a moulded case for clean, quiet home training.",
    "features": [
      "2 x 7.5 kg dumbbells",
      "Epoxy-coated plates",
      "Secure locking collars",
      "Connect into a barbell",
      "Moulded carry case"
    ],
    "specs": [
      {
        "label": "Total weight",
        "value": "15 kg"
      },
      {
        "label": "Configuration",
        "value": "2 x 7.5 kg"
      },
      {
        "label": "Plates",
        "value": "Epoxy-coated"
      },
      {
        "label": "Includes",
        "value": "Case"
      }
    ],
    "stock": 50,
    "sports": [
      "gym",
      "strength"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-74",
    "slug": "vertical-bench-commercial",
    "name": "Vertical Bench Commercial",
    "sku": "VBC-2024",
    "category": "strength",
    "price": 1099,
    "level": "pro",
    "rating": 4.6,
    "reviewCount": 22,
    "image": "/products/vertical-bench.jpg",
    "gallery": [
      "/products/vertical-bench.jpg"
    ],
    "shortDescription": "Commercial vertical bench for heavy, guided lower-body work.",
    "description": "Commercial vertical bench with a supportive contoured seat and guided movement path. Built from heavy steel for safe, high-load lower-body training on busy floors.",
    "features": [
      "Commercial steel frame",
      "Supportive contoured seat",
      "Guided movement path",
      "High weight capacity",
      "Stable wide base"
    ],
    "specs": [
      {
        "label": "Frame",
        "value": "Commercial steel"
      },
      {
        "label": "Capacity",
        "value": "300 kg"
      },
      {
        "label": "Type",
        "value": "Vertical bench"
      },
      {
        "label": "Use",
        "value": "Commercial"
      }
    ],
    "stock": 0,
    "sports": [
      "gym",
      "strength"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-75",
    "slug": "kick-boxing-gloves",
    "name": "Kick Boxing Gloves",
    "sku": "KBG-2024",
    "category": "martial-arts",
    "price": 10,
    "level": "beginner",
    "rating": 4.4,
    "reviewCount": 64,
    "image": "/products/kickboxing-gloves.jpg",
    "gallery": [
      "/products/kickboxing-gloves.jpg"
    ],
    "shortDescription": "Durable kickboxing gloves with dense foam and a secure wrist strap.",
    "description": "Durable kickboxing gloves with dense multi-layer foam padding and a secure wrist strap. Ready for bag work, pad drills and light sparring straight out of the box.",
    "features": [
      "Dense multi-layer foam",
      "Secure hook-and-loop wrist",
      "Breathable lining",
      "Durable synthetic shell"
    ],
    "specs": [
      {
        "label": "Padding",
        "value": "Multi-layer foam"
      },
      {
        "label": "Closure",
        "value": "Hook-and-loop"
      },
      {
        "label": "Use",
        "value": "Bag & sparring"
      }
    ],
    "stock": 90,
    "sports": [
      "boxing",
      "martial arts"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-76",
    "slug": "magnetic-bike-915u",
    "name": "Magnetic bike 915U",
    "sku": "MB915U-2024",
    "category": "cardio",
    "price": 899,
    "level": "pro",
    "rating": 4.6,
    "reviewCount": 52,
    "badge": "New",
    "image": "/products/magnetic-bike-915u.jpg",
    "gallery": [
      "/products/magnetic-bike-915u.jpg"
    ],
    "shortDescription": "Premium upright magnetic exercise bike with a smart backlit console.",
    "description": "The 915U upright magnetic bike delivers whisper-quiet magnetic resistance on a stable, commercial-grade frame. A backlit console tracks every metric while multiple resistance levels scale with your fitness.",
    "features": [
      "Whisper-quiet magnetic resistance",
      "Multiple resistance levels",
      "Backlit performance console",
      "Commercial-grade frame",
      "Adjustable seat"
    ],
    "specs": [
      {
        "label": "Resistance",
        "value": "Magnetic, multi-level"
      },
      {
        "label": "Console",
        "value": "Backlit LCD"
      },
      {
        "label": "Model",
        "value": "915U"
      },
      {
        "label": "Use",
        "value": "Indoor cycling"
      }
    ],
    "stock": 12,
    "sports": [
      "cycling",
      "cardio"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-77",
    "slug": "curved-treadmill",
    "name": "Curved Treadmill",
    "sku": "CTM-2024",
    "category": "cardio",
    "price": 1850,
    "level": "pro",
    "rating": 4.8,
    "reviewCount": 24,
    "image": "/products/curved-treadmill.jpg",
    "gallery": [
      "/products/curved-treadmill.jpg"
    ],
    "shortDescription": "Self-powered curved running deck for high-intensity sprint training.",
    "description": "A motorless curved treadmill powered entirely by your stride. The curved slatted deck lets you sprint, push and recover naturally, burning more energy than a motorised belt. Rated for users up to 150 kg.",
    "features": [
      "Self-powered — no motor",
      "Curved slatted running deck",
      "Burns up to 30% more energy",
      "Max user weight 150 kg",
      "Low-maintenance design"
    ],
    "specs": [
      {
        "label": "Type",
        "value": "Curved / self-powered"
      },
      {
        "label": "Max user weight",
        "value": "150 kg"
      },
      {
        "label": "Deck",
        "value": "Slatted"
      },
      {
        "label": "Use",
        "value": "Sprint & HIIT"
      }
    ],
    "stock": 0,
    "sports": [
      "running",
      "cardio",
      "crossfit"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-78",
    "slug": "motor-treadmill-tft",
    "name": "Motor Treadmill with TFT",
    "sku": "MTT-2024",
    "category": "cardio",
    "price": 799,
    "level": "pro",
    "rating": 4.5,
    "reviewCount": 41,
    "image": "/products/motor-treadmill-tft.jpg",
    "gallery": [
      "/products/motor-treadmill-tft.jpg"
    ],
    "shortDescription": "Motorised treadmill with a full-colour TFT touchscreen console.",
    "description": "Motorised treadmill with a vivid TFT touchscreen console for programs, entertainment and live stats. A cushioned deck and strong, quiet motor make daily running comfortable for users up to 120 kg.",
    "features": [
      "TFT touchscreen console",
      "Cushioned running deck",
      "Powerful, quiet motor",
      "Max user weight 120 kg",
      "Folds for storage"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "TFT touchscreen"
      },
      {
        "label": "Max user weight",
        "value": "120 kg"
      },
      {
        "label": "Deck",
        "value": "Cushioned"
      },
      {
        "label": "Type",
        "value": "Motorised"
      }
    ],
    "stock": 6,
    "sports": [
      "running",
      "cardio"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-79",
    "slug": "gas-geyser",
    "name": "Gas Geyser",
    "sku": "GAS-2024",
    "category": "accessories",
    "price": 169,
    "level": "intermediate",
    "rating": 4.4,
    "reviewCount": 63,
    "image": "/products/gas-geyser.jpg",
    "gallery": [
      "/products/gas-geyser.jpg"
    ],
    "shortDescription": "Instant gas water geyser — endless hot water, no electricity needed.",
    "description": "Instant gas water geyser that heats water on demand without electricity — ideal for load-shedding. Available in 16L ($169), 18L ($179) and 20L ($199) capacities to suit any household.",
    "features": [
      "Instant on-demand hot water",
      "Runs on LP or natural gas",
      "No electricity required",
      "Available in 16L / 18L / 20L",
      "Flame-out safety protection"
    ],
    "specs": [
      {
        "label": "Capacity",
        "value": "16L / 18L / 20L"
      },
      {
        "label": "Fuel",
        "value": "Gas (LP / natural)"
      },
      {
        "label": "Ignition",
        "value": "Battery"
      },
      {
        "label": "Use",
        "value": "Domestic hot water"
      }
    ],
    "stock": 30,
    "sports": [
      "home"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-80",
    "slug": "digital-jump-rope",
    "name": "Digital Jump Rope",
    "sku": "DJR-2024",
    "category": "accessories",
    "price": 10,
    "level": "beginner",
    "rating": 4.3,
    "reviewCount": 88,
    "image": "/products/digital-jumprope.jpg",
    "gallery": [
      "/products/digital-jumprope.jpg"
    ],
    "shortDescription": "Digital jump rope with an LCD counter and cordless mode.",
    "description": "Digital jump rope with a built-in LCD counter that tracks jumps, time and calories. Includes a weighted cordless-ball mode for rope-free skipping in tight spaces.",
    "features": [
      "LCD counts jumps, time & calories",
      "Cordless weighted-ball mode",
      "Adjustable steel cable",
      "Non-slip foam handles",
      "Battery included"
    ],
    "specs": [
      {
        "label": "Display",
        "value": "LCD counter"
      },
      {
        "label": "Modes",
        "value": "Corded & cordless"
      },
      {
        "label": "Cable",
        "value": "Adjustable"
      },
      {
        "label": "Use",
        "value": "Cardio & conditioning"
      }
    ],
    "stock": 100,
    "sports": [
      "cardio",
      "conditioning"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-81",
    "slug": "weight-lifting-belt",
    "name": "Weight Lifting Belt",
    "sku": "WLB-2024",
    "category": "accessories",
    "price": 30,
    "level": "intermediate",
    "rating": 4.6,
    "reviewCount": 74,
    "image": "/products/weight-lifting-belt.jpg",
    "gallery": [
      "/products/weight-lifting-belt.jpg"
    ],
    "shortDescription": "Leather weightlifting belt for lower-back support on heavy lifts.",
    "description": "A genuine leather weightlifting belt that braces your core and supports the lower back during heavy squats and deadlifts. A sturdy double-prong buckle locks in your preferred tension.",
    "features": [
      "Genuine leather construction",
      "Wide lumbar support panel",
      "Double-prong steel buckle",
      "Suede lining for grip",
      "Multiple sizes available"
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Leather"
      },
      {
        "label": "Buckle",
        "value": "Double-prong"
      },
      {
        "label": "Back width",
        "value": "10 cm"
      },
      {
        "label": "Use",
        "value": "Powerlifting"
      }
    ],
    "stock": 60,
    "sports": [
      "gym",
      "powerlifting",
      "strength"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-82",
    "slug": "medicine-ball-5kg",
    "name": "Medicine Ball 5kg",
    "sku": "MDB5-2024",
    "category": "strength",
    "price": 58,
    "level": "intermediate",
    "rating": 4.5,
    "reviewCount": 46,
    "image": "/products/medicine-ball.jpg",
    "gallery": [
      "/products/medicine-ball.jpg"
    ],
    "shortDescription": "5 kg rubber medicine ball for slams, throws and core work.",
    "description": "A durable 5 kg rubber medicine ball built for slams, wall throws, twists and functional core training. The textured surface grips well even with sweaty hands.",
    "features": [
      "5 kg weighted ball",
      "Durable rubber shell",
      "Textured non-slip grip",
      "Consistent bounce",
      "Great for functional training"
    ],
    "specs": [
      {
        "label": "Weight",
        "value": "5 kg"
      },
      {
        "label": "Material",
        "value": "Rubber"
      },
      {
        "label": "Surface",
        "value": "Textured"
      },
      {
        "label": "Use",
        "value": "Functional & core"
      }
    ],
    "stock": 40,
    "sports": [
      "crossfit",
      "conditioning",
      "strength"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-83",
    "slug": "barbell-rack",
    "name": "Barbell Rack",
    "sku": "BBR-2024",
    "category": "storage",
    "price": 375,
    "level": "intermediate",
    "rating": 4.6,
    "reviewCount": 33,
    "image": "/products/barbell-rack.jpg",
    "gallery": [
      "/products/barbell-rack.jpg"
    ],
    "shortDescription": "A-frame barbell / squat stand with adjustable catch heights.",
    "description": "A sturdy A-frame barbell rack and squat stand with multiple adjustable catch heights. A compact, stable base for squats, presses and rack pulls without a full power cage.",
    "features": [
      "Adjustable catch heights",
      "Heavy-gauge steel A-frame",
      "Stable wide base",
      "Rubber-protected uprights",
      "Compact footprint"
    ],
    "specs": [
      {
        "label": "Type",
        "value": "Squat / barbell stand"
      },
      {
        "label": "Frame",
        "value": "Heavy steel"
      },
      {
        "label": "Adjustable",
        "value": "Multiple heights"
      },
      {
        "label": "Use",
        "value": "Squats & presses"
      }
    ],
    "stock": 8,
    "sports": [
      "gym",
      "strength"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-84",
    "slug": "vibro-massage-belt",
    "name": "Vibro Massage Belt",
    "sku": "VMB-2024",
    "category": "recovery",
    "price": 30,
    "level": "intermediate",
    "rating": 4.1,
    "reviewCount": 58,
    "image": "/products/vibro-massage-belt.jpg",
    "gallery": [
      "/products/vibro-massage-belt.jpg"
    ],
    "shortDescription": "Vibrating massage belt for waist toning and muscle relaxation.",
    "description": "A vibrating massage belt that wraps the waist, hips or thighs to relax muscles and aid circulation. Multiple speed settings deliver a soothing post-workout massage at home.",
    "features": [
      "Multiple vibration speeds",
      "Adjustable belt fit",
      "Targets waist, hips & thighs",
      "Aids muscle recovery",
      "Simple plug-in operation"
    ],
    "specs": [
      {
        "label": "Type",
        "value": "Vibration massage"
      },
      {
        "label": "Settings",
        "value": "Multi-speed"
      },
      {
        "label": "Fit",
        "value": "Adjustable"
      },
      {
        "label": "Use",
        "value": "Recovery & toning"
      }
    ],
    "stock": 50,
    "sports": [
      "recovery",
      "wellness"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-85",
    "slug": "10-pair-dumbbell-rack",
    "name": "10 Pair Dumbbell Rack",
    "sku": "DR10-2024",
    "category": "storage",
    "price": 495,
    "level": "intermediate",
    "rating": 4.7,
    "reviewCount": 21,
    "image": "/products/dumbbell-rack-10pair.jpg",
    "gallery": [
      "/products/dumbbell-rack-10pair.jpg"
    ],
    "shortDescription": "Two-tier commercial rack that stores up to ten pairs of dumbbells.",
    "description": "A two-tier commercial dumbbell rack that keeps up to ten pairs of dumbbells tidy and within reach. Angled shelves make loading and racking easy, on a heavy, stable frame.",
    "features": [
      "Holds up to 10 pairs",
      "Two angled tiers",
      "Heavy commercial steel",
      "Stable, wide base",
      "Protects floors and dumbbells"
    ],
    "specs": [
      {
        "label": "Capacity",
        "value": "10 pairs"
      },
      {
        "label": "Tiers",
        "value": "2"
      },
      {
        "label": "Frame",
        "value": "Commercial steel"
      },
      {
        "label": "Use",
        "value": "Dumbbell storage"
      }
    ],
    "stock": 0,
    "sports": [
      "gym",
      "home gym",
      "organization"
    ],
    "estimatedDelivery": "3-5 business days"
  },
  {
    "id": "hp-86",
    "slug": "boxing-bandage",
    "name": "Boxing Bandage",
    "sku": "BXB-2024",
    "category": "martial-arts",
    "price": 5,
    "level": "beginner",
    "rating": 4.4,
    "reviewCount": 130,
    "image": "/products/boxing-bandage.jpg",
    "gallery": [
      "/products/boxing-bandage.jpg"
    ],
    "shortDescription": "Elasticated boxing hand wraps to protect wrists and knuckles.",
    "description": "Elasticated boxing hand wraps that protect the wrists and knuckles under gloves. Sold from 5 m lengths with a thumb loop and hook-and-loop closure, in a range of colours.",
    "features": [
      "Protects wrists & knuckles",
      "Stretch cotton blend",
      "Thumb loop & hook-and-loop",
      "From 5 m length",
      "Machine washable"
    ],
    "specs": [
      {
        "label": "Length",
        "value": "From 5 m"
      },
      {
        "label": "Material",
        "value": "Elastic cotton"
      },
      {
        "label": "Closure",
        "value": "Hook-and-loop"
      },
      {
        "label": "Use",
        "value": "Boxing & MMA"
      }
    ],
    "stock": 200,
    "sports": [
      "boxing",
      "martial arts"
    ],
    "estimatedDelivery": "3-5 business days"
  }
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
    .concat(
      PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category)
    )
    .slice(0, count);
}

export const TESTIMONIALS = [
  {
    quote:
      "Kitted out my entire commercial gym through HEMPAC — the racks and benches take a beating every day and hold up.",
    name: "Dre Okafor",
    title: "Gym Owner",
    image: img(PHOTOS.pullups, 700, 900),
  },
  {
    quote:
      "The treadmill and rower turned my garage into a real training space. Delivery and setup were painless.",
    name: "Maya Chen",
    title: "Marathon Runner",
    image: img(PHOTOS.runnerRoad, 700, 900),
  },
  {
    quote:
      "From the punching bag to the mats, everything is genuinely durable. My whole dojo orders here now.",
    name: "Alex Ramirez",
    title: "Martial Arts Coach",
    image: img(PHOTOS.boxerBag, 700, 900),
  },
  {
    quote:
      "Started with resistance bands and a bench, and the gear quiz nailed exactly what I needed as a beginner.",
    name: "Sofia Laurent",
    title: "Triathlete",
    image: img(PHOTOS.swimmer, 700, 900),
  },
  {
    quote:
      "Per-kg pricing on dumbbells and plates made building my home gym affordable. Quality you can feel in every rep.",
    name: "Jonas Berg",
    title: "Strength Athlete",
    image: img(PHOTOS.crossfitBW, 700, 900),
  },
];
