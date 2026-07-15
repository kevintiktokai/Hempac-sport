export type Category =
  | "racquet"
  | "footwear"
  | "training"
  | "combat"
  | "team"
  | "accessories";

export type Level = "beginner" | "intermediate" | "pro";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  compareAtPrice?: number;
  level: Level;
  rating: number;
  reviewCount: number;
  badge?: "New" | "Best Seller" | "Sale" | "Pro Choice";
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  colors?: string[];
  sizes?: string[];
  stock: number;
  sports: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
  size?: string;
  color?: string;
}

export interface OrderPayload {
  items: { productId: string; quantity: number; size?: string; color?: string }[];
  customer: {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}
