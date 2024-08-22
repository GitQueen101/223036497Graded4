import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);

  const updateCartItem = (id, newQuantity) => {
    const updatedCart = cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item);
    setCart(updatedCart);
  };

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
