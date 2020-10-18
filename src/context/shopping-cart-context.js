import { createContext } from "react";

const ShoppingCartContext = createContext({
  items: [{ id: 0, name: "", image: "", price: 0.0, quantity: 0 }],
  totalItems: 0,
  dispatch: () => {},
});

export const context = ShoppingCartContext;
export const Provider = ShoppingCartContext.Provider;
