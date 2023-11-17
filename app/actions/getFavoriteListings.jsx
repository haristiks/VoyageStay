import axios from "@/lib/axios";

import getCurrentUser from "./getCurrentUser";

export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return [];
    }

    const favorites = await axios.get(
      `/api/users/${currentUser._id}/favorites`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.accessToken}`,
        },
      }
    );

    return favorites.data.data;
  } catch (error) {
    throw new Error(error);
  }
}
