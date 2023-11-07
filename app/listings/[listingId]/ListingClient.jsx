"use client";

import Container from "@/app/components/Container";
import { categories } from "@/app/components/navabr/Categories";
import { useMemo } from "react";
import ListingHead from "@/app/components/listings/ListingHead";

function ListingClient({ listing, currentUser, reservations }) {
  const category = useMemo(() => {
    return categories.find((item) => item.label == listing.category);
  }, [listing]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing._id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </Container>
  );
}

export default ListingClient;
