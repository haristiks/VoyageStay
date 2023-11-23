import isAdmin from "@/app/actions/isAdmin";
import axios from "@/lib/axios";

async function getReservations() {
  try {
    const admin = await isAdmin();
    const respo = await axios.get(`/api/admin/reservations`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${admin.accessToken}`,
        },
      });
    return respo.data.data;
  } catch (error) {
    throw new Error(error);
  }
}

export default getReservations;