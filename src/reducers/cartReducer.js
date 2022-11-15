import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { readCartFromStorage, saveCartToStorage } from "../utils/cartSave";

const savedCart = readCartFromStorage();

const initialValue = savedCart
  ? savedCart
  : {
      tubs: [],
      totalAmount: 0,
    };

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    incrementAmount: (state, action) => {
      console.log(state, action);
    },
    decrementAmount: (state, action) => {},
    addToCart: (state, action) => {
      const tubId = action.payload.id;
      const price = action.payload.price;
      const amount = action.payload.amount;
      const flavour = action.payload.flavour;

      const idsOfTubs = state.tubs.map((stateTub) => {
        return stateTub.id;
      });

      // if tub does not exist in cart
      if (!idsOfTubs.includes(tubId)) {
        state.tubs = [
          ...state.tubs,
          {
            id: tubId,
            flavour,
            price,
            amount,
          },
        ];
        state.totalAmount += price * amount;
      } else {
        // find correct tub
        state.tubs.map((stateTub) => {
          if (stateTub.id === tubId) {
            stateTub.amount += amount;
            state.totalAmount += price * amount;
          }
        });
      }
    },
    removeFromCart: (state, action) => {
      console.log("i have been niggered");
    },
  },
});

export const { incrementAmount, decrementAmount, addToCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
