import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  tubs: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialValue,
  reducers: {
    addProduct: (state, action) => {
      const idsOfTubs = state.tubs.map((tub) => {
        return tub.id;
      });
      if (!idsOfTubs.includes(action.payload.id)) {
        state.tubs = [...state.tubs, action.payload];
      }
    },
  },
});

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
