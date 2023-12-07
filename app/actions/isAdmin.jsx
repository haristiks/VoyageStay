import { getServerSession } from "next-auth/next";

import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function isAdmin() {
  try {
    const session = await getSession();
    if (session?.user?.role == "user") {
      return null;
    }
    const admin = session?.user;
    const id = admin._id;
    const { _id, ...remains } = admin;
    return { id, ...remains };
  } catch (error) {
    return error;
  }
}
