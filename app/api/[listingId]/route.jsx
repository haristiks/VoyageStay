import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import axios from "@/lib/axios";

export async function POST(request, { params }) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;
  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];
  favoriteIds.push(listingId);
  //..........................
  const user = await axios.post(
    `/api/${currentUser._doc._id}/addToFavorites`,
    favoriteIds,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.accessToken}`,
      },
    }
  );

  return NextResponse.json(user);
}

//...........................................................

export async function DELETE(request, { params }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];

  favoriteIds = favoriteIds.filter((id) => id !== listingId);

  const user = await axios.post(
    `/api/${currentUser._doc._id}/addToFavorites`,
    favoriteIds,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.accessToken}`,
      },
    }
  );

  return NextResponse.json(user);
}
