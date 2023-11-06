"use client";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import { useDispatch, useSelector } from "react-redux";
import { FetchListings } from "../app/Redux/AxiosCalls";
import { useEffect } from "react";

import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";
import { useSession } from "next-auth/react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default function Home() {
  const Listings = useSelector((state) => state.Axios);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchListings());
  }, []);

  const { data: session } = useSession();

  const currentUser = getCurrentUser();
  console.log(session);

  console.log(Listings.Listings.data);

  if (Listings.Listings.length == 0) {
    return (
      <Container>
        <EmptyState showReset />
      </Container>
    );
  }

  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {Listings.Listings.data.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}
