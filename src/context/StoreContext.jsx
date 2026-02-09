import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  // ⭐ main cart state
  const [cart, setCart] = useState([]);

  // ⭐ add to cart
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // ⭐ remove
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // ⭐ qty update
  const updateQty = (id, type) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : item.qty - 1,
            }
          : item
      )
    );
  };

  // ⭐ auto count
  const count = cart.reduce((total, item) => total + item.qty, 0);

  const value = {  search,
        setSearch,
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        count, }

  return (
    <StoreContext.Provider
      value={value}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
