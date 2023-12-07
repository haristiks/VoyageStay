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
      const reservations = respo?.data?.data.map((item) => {
        const id = item._id;
        const { _id, ...remains } = item;
        return { id, ...remains };
      });

      return reservations;
  } catch (error) {
    throw new Error(error);
  }
}

export default getReservations;