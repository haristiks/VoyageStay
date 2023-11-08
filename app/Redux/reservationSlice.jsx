"use client";
import { createSlice } from "@reduxjs/toolkit";

import { FetchReservations} from "./AxiosCalls";


const slice = createSlice({
    name: "Reservations",
    initialState: {
      FetchReserationStat: "",
      Reservations: [],
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(FetchReservations.pending, (state) => {
          state.FetchReserationStat = "loading";
        })
        .addCase(FetchReservations.fulfilled, (state, action) => {
          state.FetchReserationStat = "succeeded";
          state.Reservations = action.payload;
        })
        .addCase(FetchReservations.rejected, (state) => {
          state.FetchReserationStat = "failed";
        });
    },
  });

  export default slice.reducer;