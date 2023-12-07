import axios from "@/lib/axios";
import { NextResponse } from "next/server";

export async function getListingById(listingId) {
  try {
    const respo = await axios.get(`/api/data/listings/${listingId}`);
    const listing = respo?.data?.data;
    const id = listing?._id;
    const { _id, ...remains } = listing;
    return { id, ...remains };
  } catch (error) {
    NextResponse.error(error);
  }
}
