import axios from "@/lib/axios";
import { NextResponse } from "next/server";

export async function getPropertyListings(listingId) {
  try {
    if (listingId) {
      const respo = await axios.get(`/api/data/listings/${listingId}`);
      return respo.data.data;
    } else {
      const respo = await axios.get("/api/data/listings");
      return respo.data.data;
    }
  } catch (error) {
    NextResponse.error(error);
  }
}
