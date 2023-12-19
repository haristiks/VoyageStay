import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import axios from "@/lib/axios";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }

    const resp = await axios.get("/api/data/users");
    const currentUser = resp.data.data.find(
      (user) => user.email == session?.user?.email
    );

    if (!currentUser) {
      return "no current user";
    }

    const id = currentUser?._id;
    const { _id, listings, favoriteIds, reservations, ...remains } =
      currentUser;

    return { id, ...remains, accessToken: session?.user?.accessToken };
  } catch (error) {
    return error;
  }
}
