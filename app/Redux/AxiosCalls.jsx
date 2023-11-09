import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
// import { useSession } from "next-auth/react";

// const { data: session } = useSession();
// const currentUser = session?.user;

export const FetchListings = createAsyncThunk(
  "redux/fetchListings",
  async () => {
    const respo = await axios.get("/api/data/listings");
    return respo.data.data;
  }
);

export const FetchReservations = createAsyncThunk(
  "redux/fetchReservations",
  async () => {
    const respo = await axios.get("/api/data/reservations");
    return respo.data.data;
  }
);

export const FetchUsers = createAsyncThunk(
  "redux/fetchUsers",
  async () => {
    const respo = await axios.get("/api/data/users");
    return respo.data.data;
  }
);