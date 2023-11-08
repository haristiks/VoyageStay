"use client";
const { configureStore } = require("@reduxjs/toolkit");
import reduce from "./slice";
import reservations from "./reservationSlice";

const stores = configureStore({
  reducer: {
    Axios: reduce,
    Bookings: reservations,
  },
  devTools: true,
});

export const store = stores;
