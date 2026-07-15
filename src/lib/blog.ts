import { img, PHOTOS } from "./images";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "essential-home-gym-equipment-for-beginners",
    title: "10 Essential Home Gym Equipment Pieces for Beginners",
    category: "Equipment Reviews",
    author: "Sarah Mutasa",
    date: "2024-02-18",
    readTime: "6 min read",
    excerpt:
      "Building a home gym from scratch? These ten versatile pieces cover strength, cardio and recovery without needing a spare warehouse — or a fortune.",
    image: img(PHOTOS.dumbbellRack, 1200, 800),
    featured: true,
  },
  {
    slug: "hiit-vs-steady-state-cardio",
    title: "HIIT vs Steady-State Cardio: Which Burns More Fat?",
    category: "Training Tips",
    author: "David Moyo",
    date: "2024-02-04",
    readTime: "5 min read",
    excerpt:
      "The eternal cardio debate, settled with the science. We break down when short intense intervals win and when a long steady effort is the smarter call.",
    image: img(PHOTOS.treadmillsDark, 1200, 800),
  },
  {
    slug: "2024-fitness-equipment-trends",
    title: "2024 Fitness Equipment Trends: What's Hot This Year",
    category: "Sports Trends",
    author: "Michael Chikwanha",
    date: "2024-01-22",
    readTime: "7 min read",
    excerpt:
      "From compact smart cardio to functional rigs, here's what's driving the fitness equipment world this year — and what's actually worth your money.",
    image: img(PHOTOS.gymInterior, 1200, 800),
  },
  {
    slug: "couch-to-5k-james-transformation",
    title: "From Couch to 5K: James's Incredible Transformation",
    category: "Success Stories",
    author: "Grace Nyambi",
    date: "2024-01-10",
    readTime: "4 min read",
    excerpt:
      "How one HEMPAC customer went from zero running to a full 5K in twelve weeks, using nothing but a treadmill, a plan, and stubborn consistency.",
    image: img(PHOTOS.runnerRoad, 1200, 800),
  },
  {
    slug: "treadmill-buying-guide",
    title: "Treadmill Buying Guide: Features That Actually Matter",
    category: "Equipment Reviews",
    author: "David Moyo",
    date: "2023-12-15",
    readTime: "8 min read",
    excerpt:
      "Motor power, deck size, cushioning, incline — which specs deserve your budget and which are just marketing. A no-nonsense guide before you buy.",
    image: img(PHOTOS.treadmillsDark, 1200, 800),
  },
  {
    slug: "strength-training-mistakes",
    title: "5 Strength Training Mistakes That Sabotage Your Progress",
    category: "Training Tips",
    author: "Sarah Mutasa",
    date: "2023-12-02",
    readTime: "5 min read",
    excerpt:
      "Training hard but not seeing results? These five common lifting mistakes quietly stall progress — and each one is simple to fix.",
    image: img(PHOTOS.squatRack, 1200, 800),
  },
];

export const BLOG_CATEGORIES = [
  "All",
  "Equipment Reviews",
  "Training Tips",
  "Sports Trends",
  "Success Stories",
];
