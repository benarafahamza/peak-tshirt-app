import { node } from "prop-types";
import React from "react";
export const CartContext = React.createContext();

export function useCart() {
  return React.useContext(CartContext);
}
/**
 * cartReduce
 *
 * State sous le format
 * { id: 1, price: 12.34, name: "Tshirt 1", quantity: 1, imageUrl: "1.jpg" }
 *
 * @param {*} cart
 * @param {*} action
 * @param {string} action.type
 * @param {Object} action.payload
 * @param {number} action.payload.id
 * @returns
 */
const reduce = (cart, action) => {
  switch (action.type) {
    case "add":
      const { item } = action.payload;
      return [...cart, item];
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
  const [cart, dispatch] = React.useReducer(reduce, []);

  const purchaseCart = () => dispatch({ type: "purchase" });

  const removeFromCart = (id) => () =>
    dispatch({ type: "remove", payload: { id } });

  const addToCart = (item) => () =>
    dispatch({ type: "add", payload: { item } });

  const isCartEmpty = cart.length === 0;
  const cartItemsQuantity = cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  return (
    <CartContext.Provider
      value={[
        { cart, isCartEmpty, cartItemsQuantity },
        { purchaseCart, removeFromCart, addToCart },
      ]}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: node,
};
