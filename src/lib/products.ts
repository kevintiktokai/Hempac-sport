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
    "name": "Mini wondercore",
    "sku": "MWC-2024",
    "category": "accessories",
    "price": 80,
    "level": "intermediate",
    "rating": 4.1,
    "reviewCount": 67,
    "image": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=900&fit=crop&q=80&auto=format"
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
    "price": 2.5,
    "level": "beginner",
    "rating": 4.6,
    "reviewCount": 89,
    "image": "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1483721310020-03333e577078?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=900&h=900&fit=crop&q=80&auto=format"
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
    "stock": 0,
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
    "image": "https://images.unsplash.com/photo-1591258370814-01609b341790?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1591258370814-01609b341790?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&h=900&fit=crop&q=80&auto=format"
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
    "price": 75,
    "level": "intermediate",
    "rating": 4.1,
    "reviewCount": 87,
    "image": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=900&h=900&fit=crop&q=80&auto=format"
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
    "stock": 0,
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
    "price": 2.5,
    "level": "beginner",
    "rating": 4.4,
    "reviewCount": 156,
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1596357395217-80de13130e92?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1596357395217-80de13130e92?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1596357395217-80de13130e92?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gym%20gloves-nLwpVOQpxUrv0SKvpnAOdB93M8xLFh.jpeg",
    "gallery": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gym%20gloves-nLwpVOQpxUrv0SKvpnAOdB93M8xLFh.jpeg"
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
    "stock": 25,
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
    "image": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?w=900&h=900&fit=crop&q=80&auto=format"
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
    "name": "Resistance band set",
    "sku": "RBS-2024",
    "category": "accessories",
    "price": 20,
    "level": "beginner",
    "rating": 4.3,
    "reviewCount": 198,
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&h=900&fit=crop&q=80&auto=format"
    ],
    "shortDescription": "Premium fabric resistance band set with 4 loop bands in different resistance levels.",
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
    "stock": 90,
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
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1591258370814-01609b341790?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1541600383005-565c949cf777?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1541600383005-565c949cf777?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&h=900&fit=crop&q=80&auto=format"
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
    "stock": 5,
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
    "image": "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1521805103424-d8f8430e8933?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1591741535018-d042766c62eb?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1591741535018-d042766c62eb?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=900&h=900&fit=crop&q=80&auto=format"
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
    "name": "18m olympic barbell",
    "sku": "OB18-2024",
    "category": "accessories",
    "price": 60,
    "level": "intermediate",
    "rating": 4.6,
    "reviewCount": 78,
    "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1521805103424-d8f8430e8933?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1521805103424-d8f8430e8933?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1521805103424-d8f8430e8933?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1591741535018-d042766c62eb?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1591741535018-d042766c62eb?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1591741535018-d042766c62eb?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1591741535018-d042766c62eb?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&h=900&fit=crop&q=80&auto=format"
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
    "stock": 12,
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
    "image": "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1597076545399-91a3ff0e71b3?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1518310952931-b1de897abd40?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1518310952931-b1de897abd40?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1616279969856-759f316a5ac1?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1616279969856-759f316a5ac1?w=900&h=900&fit=crop&q=80&auto=format",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=900&fit=crop&q=80&auto=format"
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
    "image": "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=900&h=900&fit=crop&q=80&auto=format",
    "gallery": [
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=900&h=900&fit=crop&q=80&auto=format"
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
