import axios from "@/lib/axios";

async function getAllListings() {
  try {
    const respo = await axios.get(`/api/data/listings`);
    return respo.data.data;
  } catch (error) {
    throw new Error(error);
  }
}

export default getAllListings;
