import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  omniva: {},
  itella: {},
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState: initialValue,
  reducers: {
    addItella: (state, action) => {
      if (Object.keys(state.itella).length === 0) {
        state.itella = action.payload;
      }
    },
    addOmniva: (state, action) => {
      if (Object.keys(state.omniva).length === 0) {
        state.omniva = action.payload;
      }
    },
  },
});

export const { addItella, addOmniva } = locationsSlice.actions;

export default locationsSlice.reducer;
