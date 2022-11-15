import { store } from "..";

export const saveCartToStorage = () => {
  const state = store.getState();
  console.log(state.cart);

  localStorage.setItem("cart", JSON.stringify(state.cart));
};

export const readCartFromStorage = () => {
  return JSON.parse(localStorage.getItem("cart"));
};
