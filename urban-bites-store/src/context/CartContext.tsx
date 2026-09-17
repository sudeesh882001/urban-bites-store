import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getPriceForWeight, type CartItem } from "../types";
import { products } from "../mocks/products";

interface CartContextValue {
  items: CartItem[];
  addToCart: (productId: string, weight?: string, quantity?: number) => void;
  updateQuantity: (productId: string, weight: string, quantity: number) => void;
  removeFromCart: (productId: string, weight: string) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  delivery: number;
  total: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "urban-bites-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (productId: string, weight = "100g", quantity = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.productId === productId && item.weight === weight);
      if (existing) {
        return current.map((item) =>
          item.productId === productId && item.weight === weight
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...current, { productId, weight, quantity }];
    });
  };

  const updateQuantity = (productId: string, weight: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, weight);
      return;
    }
    setItems((current) =>
      current.map((item) =>
        item.productId === productId && item.weight === weight ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: string, weight: string) => {
    setItems((current) => current.filter((item) => !(item.productId === productId && item.weight === weight)));
  };

  const clearCart = () => setItems([]);

  const subtotal = useMemo(
    () =>
      items.reduce((sum, item) => {
        const product = products.find((p) => p.id === item.productId);
        if (!product) return sum;
        const unitPrice = getPriceForWeight(product.price, item.weight);
        return sum + unitPrice * item.quantity;
      }, 0),
    [items]
  );

  const delivery = subtotal === 0 || subtotal >= 500 ? 0 : 49;
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        itemCount,
        subtotal,
        delivery,
        total: subtotal + delivery,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}