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
    return respo.data.data;
  } catch (error) {
    throw new Error(error);
  }
}

export default getAllListings;
