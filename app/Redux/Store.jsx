"use client";
const { configureStore } = require("@reduxjs/toolkit");
import reduce from "./slice";
import reservations from "./reservationSlice";
import users from "./userSlice";

const stores = configureStore({
  reducer: {
    Axios: reduce,
    Bookings: reservations,
    Users: users,
  },
  devTools: true,
});

export const store = stores;
