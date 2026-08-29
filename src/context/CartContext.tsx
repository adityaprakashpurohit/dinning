import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Customizations = {
  portion?: string;
  spice?: string;
  extras?: string[];
};

export type CartItem = {
  id: string;
  name: string;
  quantity: number;
  basePrice: number;
  customizations?: Customizations;
  finalPrice: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, customizations?: Customizations) => void;
  increaseQuantity: (id: string, customizations?: Customizations) => void;
  decreaseQuantity: (id: string, customizations?: Customizations) => void;
  updateQuantity: (id: string, quantity: number, customizations?: Customizations) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const item = window.localStorage.getItem('es_cart');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.warn('Error reading cart from localStorage', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('es_cart', JSON.stringify(cart));
    } catch (error) {
      console.warn('Error saving cart to localStorage', error);
    }
  }, [cart]);

  const matchItem = (itemA: CartItem, id: string, customizations?: Customizations) => {
    if (itemA.id !== id) return false;
    return JSON.stringify(itemA.customizations || {}) === JSON.stringify(customizations || {});
  };

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(i => matchItem(i, item.id, item.customizations));
      if (existing) {
        return prev.map(i => 
          matchItem(i, item.id, item.customizations) 
            ? { ...i, quantity: i.quantity + item.quantity } 
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string, customizations?: Customizations) => {
    setCart((prev) => prev.filter(i => !matchItem(i, id, customizations)));
  };

  const increaseQuantity = (id: string, customizations?: Customizations) => {
    setCart((prev) => prev.map(i => 
      matchItem(i, id, customizations) 
        ? { ...i, quantity: i.quantity + 1 } 
        : i
    ));
  };

  const decreaseQuantity = (id: string, customizations?: Customizations) => {
    setCart((prev) => prev.map(i => {
      if (matchItem(i, id, customizations)) {
        return i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i;
      }
      return i;
    }));
  };

  const updateQuantity = (id: string, quantity: number, customizations?: Customizations) => {
    if (quantity <= 0) return;
    setCart((prev) => prev.map(i => 
      matchItem(i, id, customizations) 
        ? { ...i, quantity } 
        : i
    ));
  };

  const clearCart = () => setCart([]);

  const getCartTotal = () => cart.reduce((total, item) => total + (item.finalPrice * item.quantity), 0);
  const getCartItemCount = () => cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartItemCount,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
