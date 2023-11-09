"use client";
import { createSlice } from "@reduxjs/toolkit";

import { FetchUsers } from "./AxiosCalls";

const slice = createSlice({
  name: "Users",
  initialState: {
    FetchUserStat: "",
    Users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchUsers.pending, (state) => {
        state.FetchUserStat = "loading";
      })
      .addCase(FetchUsers.fulfilled, (state, action) => {
        state.FetchUserStat = "succeeded";
        state.Users = action.payload;
      })
      .addCase(FetchUsers.rejected, (state) => {
        state.FetchUserStat = "failed";
      });
  },
});

export default slice.reducer;
