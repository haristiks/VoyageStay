import isAdmin from "@/app/actions/isAdmin";
import axios from "@/lib/axios";

export async function unSuspendUser(userId) {
  try {
    const Admin = await isAdmin();
    const response = await axios.patch(
      `/api/admin/users/${userId}`,
      {
        adminSuspended: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Admin.accessToken}`,
        },
      }
    );
    console.log("User Unsuspended successfully:", response.data);
  } catch (error) {
    console.error("Error Unsuspending user:", error);
  }
}
