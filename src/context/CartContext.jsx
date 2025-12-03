import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart of logged-in user OR empty
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("current_cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Save cart for logged-in user in their own key
  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem("logged_in_user"));

    if (logged) {
      localStorage.setItem("cart_" + logged.mobile, JSON.stringify(cartItems));

      // also update current_cart for UI persistence
      localStorage.setItem("current_cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // ➕ Add product
const addToCart = (product) => {
  setCartItems((prev) => {
    // Check if same product & same size exists
    const exists = prev.find(
      (item) => item.id === product.id && item.size === product.size
    );

    if (exists) {
      // Increase quantity if same size-product already exists
      return prev.map((item) =>
        item.id === product.id && item.size === product.size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    // Otherwise add as a new cart item
    return [...prev, { ...product, quantity: 1 }];
  });
};


  // ➖ Remove product
  const removeFromCart = (id, size) => {
  setCartItems((prev) =>
    prev.filter((item) => !(item.id === id && item.size === size))
  );
};


  // Count items
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Increase qty
 const increaseQty = (id, size) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id && item.size === size
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};


  // Decrease qty
  const decreaseQty = (id, size) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id && item.size === size
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    )
  );
};


  // Called from logout → clears only current UI cart
  const clearCartOnLogout = () => {
    setCartItems([]);  // UI becomes empty
    localStorage.removeItem("current_cart"); // remove active cart
  };
  const refreshCart = () => {
    const logged = JSON.parse(localStorage.getItem("logged_in_user"));
    if (logged) {
      const saved = localStorage.getItem("cart_" + logged.mobile);
      setCartItems(saved ? JSON.parse(saved) : []);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartCount,
        increaseQty,
        decreaseQty,
        clearCartOnLogout,
      refreshCart      }}
    >
      {children}
    </CartContext.Provider>
  );
};