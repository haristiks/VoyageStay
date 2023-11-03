"use client";
import { createSlice } from "@reduxjs/toolkit";

import { FetchListings } from "./AxiosCalls";

const slice = createSlice({
  name: "axios",
  initialState: {
    FetchListingStat: "",
    Listings: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchListings.pending, (state) => {
        state.FetchListingStat = "loading";
      })
      .addCase(FetchListings.fulfilled, (state, action) => {
        state.FetchListingStat = "succeeded";
        state.Listings = action.payload;
      })
      .addCase(FetchListings.rejected, (state) => {
        state.FetchListingStat = "failed";
      });
  },
});

export default slice.reducer;
