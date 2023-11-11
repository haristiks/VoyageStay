"use client";

import ListingClient from "./ListingClient";
import { getPropertyListings } from "@/app/actions/getPropertyListings";
import { getReservations } from "@/app/actions/getReservations";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function ListingPage() {
  const [property, setProperty] = useState("");
  const [listingRseserved, setListingReserved] = useState([]);
  const { listingId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const property = await getPropertyListings(listingId);
      setProperty(property);
      const listingRseserved = await getReservations(listingId);
      setListingReserved(listingRseserved);
    }
    fetchData();
  }, []);

  return <ListingClient listing={property} reservations={listingRseserved} />;
}

export default ListingPage;
