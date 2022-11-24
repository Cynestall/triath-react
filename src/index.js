import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./reducers/cartReducer";
import productsReducer from "./reducers/productsReducer";
import credentialsReducer from "./reducers/credentialsReducer";
import locationsReducer from "./reducers/locationsReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    credentials: credentialsReducer,
    locations: locationsReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
