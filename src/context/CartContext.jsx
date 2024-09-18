import { createContext, useState } from 'react';

export const CartContext = createContext();

// Create a provider component
export function CartProvider({ children }) {
  const [numberOfItems, setNumberOfItems] = useState(0);

  return (
    <CartContext.Provider value={{ numberOfItems, setNumberOfItems }}>
      {children}
    </CartContext.Provider>
  );
}
