import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  info: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cityCounty: "",
    zipCode: "",
    address: "",
    courier: "",
    parcelMachine: "",
  },
};

export const credentialsSlice = createSlice({
  name: "credentials",
  initialState: initialValue,
  reducers: {
    updateCredential: (state, action) => {
      switch (action.payload.type) {
        case "firstName":
          state.info.firstName = action.payload.input;
          break;
        case "lastName":
          state.info.lastName = action.payload.input;
          break;
        case "email":
          state.info.email = action.payload.input;
          break;
        case "phoneNumber":
          state.info.phoneNumber = action.payload.input;
          break;
        case "cityCounty":
          state.info.cityCounty = action.payload.input;
          break;
        case "zipCode":
          state.info.zipCode = action.payload.input;
          break;
        case "address":
          state.info.address = action.payload.input;
          break;
        case "courier":
          state.info.courier = action.payload.input;
          break;
        case "parcelMachine":
          state.info.parcelMachine = action.payload.input;
          break;
        default:
          break;
      }
    },
  },
});

export const { updateCredential } = credentialsSlice.actions;

export default credentialsSlice.reducer;
