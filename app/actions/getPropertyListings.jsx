import axios from "@/lib/axios";
import { NextResponse } from "next/server";

export async function getPropertyListings() {
  try {
    // const {
    //   userId,
    //   roomCount,
    //   guestCount,
    //   bathroomCount,
    //   locationValue,
    //   startDate,
    //   endDate,
    //   category,
    // } = params;

    const respo = await axios.get("/api/data/listings");
    // const response =respo.data.data.map((listing)=>{})
    return respo.data.data;
  } catch (error) {
    NextResponse.error(error);
  }
}
