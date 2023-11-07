"use client";

import axios from "@/lib/axios";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

import ListingClient from "./ListingClient";
import getListings from "@/app/actions/getListings";

function ListingPage() {
  const AllListings = getListings()
  const { listingId } = useParams();
  const property = AllListings.filter(
    (listing) => listing._id == listingId
  );

  console.log(property[0]);

  const { data: session } = useSession();
  const currentUser = session?.user;

  return <ListingClient listing={property[0]} currentUser={currentUser} />;
}

export default ListingPage;
