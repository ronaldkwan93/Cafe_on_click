import React, { createContext, useState, useEffect } from "react";
import { subscribeToCart } from "../services/CafeServiceProvider";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const unsubscribe = subscribeToCart((items) => {
      setCartItems(items);
    });

    return () => unsubscribe();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
