import { node } from "prop-types";
import React from "react";
export const CartContext = React.createContext();

export function useCart() {
  return React.useContext(CartContext);
}

const reduce = (cart, action) => {
  switch (action.type) {
    case "add":
      return [];
    case "remove":
      const { id } = action.payload;
      return cart.filter(({ id: tshirtId }) => tshirtId !== id);
    case "purchase":
      return [];
    default:
      return [...cart];
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = React.useReducer(reduce, [
    { id: 1, price: 12.34, name: "Tshirt 1", quantity: 1, imageUrl: "1.jpg" },
    { id: 2, price: 12.34, name: "Tshirt 2", quantity: 2, imageUrl: "2.jpg" },
  ]);

  const purchaseCart = () => dispatch({ type: "purchase" });

  const removeFromCart = (id) => () =>
    dispatch({ type: "remove", payload: { id } });

  const isCartEmpty = cart.length === 0;
  const cartItemsQuantity = cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  return (
    <CartContext.Provider
      value={[
        { cart, isCartEmpty, cartItemsQuantity },
        { purchaseCart, removeFromCart },
      ]}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: node,
};
