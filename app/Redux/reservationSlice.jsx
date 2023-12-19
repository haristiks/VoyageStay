"use client";
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Reservations",
  initialState: {
    reservs: [],
  },
  reducers: {
    getReservations: (state, action) => {
      state.reservs = action.payload;
    },
  },
});

export const { getReservations } = slice.actions;

export default slice.reducer;
