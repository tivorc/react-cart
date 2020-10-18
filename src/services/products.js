import productsJson from "../data/products.json";

export const getProductsByCategory = (category = "") => {
  return productsJson.filter(
    (p) => p.category_id === category || category === ""
  );
};

export const matchWithCart = (products, cartItems) => {
  return products.map((p) => {
    const cartItem = cartItems.find((ci) => ci.id === p.id);
    return {
      ...p,
      quantity: cartItem?.quantity || 0,
    };
  });
};
