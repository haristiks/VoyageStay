import axios from "@/lib/axios";
import { NextResponse } from "next/server";

export async function getReservations(listingId) {
  try {
    if (listingId) {
      const respo = await axios.get(`/api/data/reservations/${listingId}`);
      const reservations = respo?.data?.data.map((item) => {
        const id = item._id;
        const { _id, ...remains } = item;
        return { id, ...remains };
      });
      return reservations;
    } else {
      const respo = await axios.get("/api/data/reservations");
      const reservations = respo?.data?.data.map((item) => {
        const id = item._id;
        const { _id, ...remains } = item;
        return { id, ...remains };
      });
      return reservations;
    }
  } catch (error) {
    NextResponse.error(error);
  }
}
