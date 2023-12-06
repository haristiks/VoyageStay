"use client";

import axios from "@/lib/axios";
import toast from "react-hot-toast";
import { useCallback, useState } from "react";

import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";
import { useRouter } from "next/navigation";

function PropertiesClient({ listings, currentUser }) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id) => {
      setDeletingId(id);

      axios
        .delete(`/api/users/listings/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.accessToken}`,
          },
        })
        .then(() => {
          toast.success("Property Deleted");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router, currentUser]
  );

  return (
    <Container>
      <Heading
        title="Properties"
        subtitle="List of Properties you have Created."
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            currentUser={currentUser}
            key={listing._id}
            data={listing}
            actionId={listing._id}
            onAction={onCancel}
            disabled={deletingId == listing._id}
            actionLabel="Delete Property"
          />
        ))}
      </div>
    </Container>
  );
}

export default PropertiesClient;
