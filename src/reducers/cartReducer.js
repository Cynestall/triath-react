import { createSlice } from "@reduxjs/toolkit";
import { readCartFromStorage } from "../utils/cartSave";

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
    setAmount: (state, action) => {
      const tubId = action.payload.id;
      const amount = action.payload.amount;

      // miras smort do dis
      // what if id does not exist, testing should be done
      const stateTub = state.tubs.find((stateTub) => stateTub.id === tubId);
      stateTub.amount = Number(amount);

      state.totalAmount = 0;
      state.tubs.forEach((stateTub) => {
        state.totalAmount += stateTub.amount * stateTub.price;
      });
      state.totalAmount = Math.floor(state.totalAmount * 100) / 100;
    },
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
            amount: Number(amount),
          },
        ];
        state.totalAmount += price * amount;
      } else {
        // find correct tub
        const stateTub = state.tubs.find((stateTub) => stateTub.id === tubId);
        stateTub.amount += amount;
        state.totalAmount += price * amount;
      }

      state.totalAmount = Math.floor(state.totalAmount * 100) / 100;
    },
    removeFromCart: (state, action) => {
      const arrayWithoutItem = state.tubs.filter(
        (stateTub) => stateTub.id !== action.payload
      );
      state.tubs = arrayWithoutItem;

      state.totalAmount = 0;
      if (state.tubs.length) {
        state.tubs.forEach((stateTub) => {
          state.totalAmount += stateTub.amount * stateTub.price;
        });
      }
      state.totalAmount = Math.floor(state.totalAmount * 100) / 100;
    },
  },
});

export const { setAmount, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
