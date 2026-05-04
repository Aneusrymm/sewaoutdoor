"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { Tent } from "@/lib/data";

export interface CartItem {
  product: Tent;
  quantity: number;
  duration: number; // malam
}

export interface ToastData {
  product: Tent;
  duration: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Tent, quantity: number, duration: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  totalItems: number;
  subtotal: number;
  toast: ToastData | null;
  clearToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [toast, setToast] = useState<ToastData | null>(null);

  const addToCart = useCallback((product: Tent, quantity: number, duration: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + quantity, duration }
            : i
        );
      }
      return [...prev, { product, quantity, duration }];
    });
    setToast({ product, duration });
    setTimeout(() => setToast(null), 3000);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.product.id !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
    );
  }, []);

  const clearToast = useCallback(() => setToast(null), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity * i.duration, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, totalItems, subtotal, toast, clearToast }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
