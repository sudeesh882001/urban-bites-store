export type Category = "Dry Fruits" | "Chocolate" | "Seeds";

export const WEIGHT_OPTIONS = ["100g", "200g", "500g", "1kg", "5kg"] as const;
export type WeightOption = (typeof WEIGHT_OPTIONS)[number];

export const WEIGHT_MULTIPLIERS: Record<WeightOption, number> = {
  "100g": 1,
  "200g": 2,
  "500g": 5,
  "1kg": 10,
  "5kg": 50,
};

export function getPriceForWeight(basePrice: number, weight: string): number {
  const multiplier = WEIGHT_MULTIPLIERS[weight as WeightOption] || 1;
  return Math.round(basePrice * multiplier);
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice: number;
  weight: string;
  image: string;
  description: string;
  bestseller: boolean;
  tags: string[];
}

export interface CartItem {
  productId: string;
  weight: string;
  quantity: number;
}

export interface OrderCustomer {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  notes: string;
}