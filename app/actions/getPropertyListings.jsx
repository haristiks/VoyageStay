import axios from "@/lib/axios";
import { NextResponse } from "next/server";

export async function getPropertyListings(query) {
  try {
    if (query == "") {
      const respo = await axios.get(`/api/data/listings`);
      return respo.data.data;
    }

    const respo = await axios.get(`/api/data/listings${query}`);
    return respo.data.data;
  } catch (error) {
    NextResponse.error(error);
  }
}
