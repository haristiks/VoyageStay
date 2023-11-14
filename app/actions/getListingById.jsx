import axios from "@/lib/axios";
import { NextResponse } from "next/server";

export async function getListingById(listingId) {
  try {
    const respo = await axios.get(`/api/data/listings/${listingId}`);
    return respo.data.data;
  } catch (error) {
    NextResponse.error(error);
  }
}
