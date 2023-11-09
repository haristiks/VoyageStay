"use client";

import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

import ListingClient from "./ListingClient";
import getListings from "@/app/actions/getListings";
import { useSelector } from "react-redux";

function ListingPage() {
  const AllListings = getListings();
  const { listingId } = useParams();
  const property = AllListings.filter((listing) => listing._id == listingId);

  const { data: session } = useSession();
  const currentUser = session?.user;

  const Reservations = useSelector((state) => state.Bookings);
  const listingReserved = Reservations.Reservations.filter(
    (item) => item.listingId._id == listingId
  );

  return (
    <ListingClient
      listing={property[0]}
      currentUser={currentUser}
      reservations={listingReserved}
    />
  );
}

export default ListingPage;
