export type Category = "Dry Fruits" | "Chocolate" | "Seeds";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  originalPrice: number;
  weight: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  bestseller: boolean;
  tags: string[];
}

export interface CartItem {
  productId: string;
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