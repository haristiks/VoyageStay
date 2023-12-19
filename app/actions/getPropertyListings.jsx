import axios from "@/lib/axios";
import { NextResponse } from "next/server";

export async function getPropertyListings(query) {
  try {
    if (query == "") {
      const respo = await axios.get(`/api/data/listings`);
      const Listings = respo?.data?.data.map((item) => {
        const id = item._id;
        const { _id, __v, ...remains } = item;
        return { id, ...remains };
      });
      return Listings;
    }

    const respo = await axios.get(`/api/data/listings${query}`);
    const Listings = respo?.data?.data.map((item) => {
      const id = item._id;
      const { _id, ...remains } = item;
      return { id, ...remains };
    });
    return Listings;
  } catch (error) {
    NextResponse.error(error);
  }
}
