import axios from "@/lib/axios";

export default async function getListings() {
  try {
    const listings = await axios.get("/api/properties/listings");
    console.log(listings);
    return listings;
  } catch (error) {
    throw new Error(error);
  }
}

