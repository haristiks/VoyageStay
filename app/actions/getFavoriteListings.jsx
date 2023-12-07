import axios from "@/lib/axios";

import getCurrentUser from "./getCurrentUser";

export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return [];
    }

    const favorites = await axios.get(`/api/users/favorites`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.accessToken}`,
      },
    });

    const favoriteList = favorites?.data?.data.map((item) => {
      const id = item._id;
      const { _id, ...remains } = item;
      return { id, ...remains };
    });

    return favoriteList;
  } catch (error) {
    throw new Error(error);
  }
}
