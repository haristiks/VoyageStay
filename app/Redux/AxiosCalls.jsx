import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
// import getCurrentUser from "../actions/getCurrentUser";

// const currentUser = getCurrentUser();

export const FetchListings = createAsyncThunk(
  "redux/fetchListings",
  async () => {
    const respo = await axios.get("/api/properties/listings");
    return respo.data.data;
  }
);
