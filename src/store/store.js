import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";

// Configure the store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

console.log("Store initialized:", store.getState()); // Debugging output

export default store;
