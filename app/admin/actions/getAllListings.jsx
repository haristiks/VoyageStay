import isAdmin from "@/app/actions/isAdmin";
import axios from "@/lib/axios";

async function getAllListings() {
  try {
    const Admin = await isAdmin();
    const respo = await axios.get(`/api/admin/properties`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Admin?.accessToken}`,
      },
    });
    const Listings = respo?.data?.data.map((item) => {
      const id = item._id;
      const { _id, ...remains } = item;
      return { id, ...remains };
    });
    return Listings;
  } catch (error) {
    throw new Error(error);
  }
}

export default getAllListings;
