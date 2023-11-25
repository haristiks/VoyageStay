import isAdmin from "@/app/actions/isAdmin";
import axios from "@/lib/axios";

export async function suspendUser(userId) {
  
  try {
    const Admin = await isAdmin();
    const response = await axios.patch(
      `/api/admin/users/${userId}`,
      {
        adminSuspended: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Admin?.accessToken}`,
        },
      }
    );
    console.log("User suspended successfully:", response.data);
  } catch (error) {
    console.error("Error suspending user:", error);
  }
}
