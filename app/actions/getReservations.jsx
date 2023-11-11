import axios from "@/lib/axios";
import { NextResponse } from "next/server";

export async function getReservations(listingId) {
  try {
    if (listingId) {
      const respo = await axios.get(`/api/data/reservations/${listingId}`);
      return respo.data.data;
    } else {
      const respo = await axios.get("/api/data/reservations");
      return respo.data.data;
    }
  } catch (error) {
    NextResponse.error(error);
  }
}
