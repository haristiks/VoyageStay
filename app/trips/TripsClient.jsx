"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import axios from "@/lib/axios";
import toast from "react-hot-toast";

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { useDispatch } from "react-redux";
import {
  FetchListings,
  FetchUsers,
  FetchReservations,
} from "../Redux/AxiosCalls";


function TripsClient({ reservations, currentUser }) {
  const router = useRouter();

  const [deletingId, setDeletingId] = useState("");
  const dispatch = useDispatch();



  const onCancel = useCallback(
    (id) => {
      setDeletingId(id);

      axios
        .delete(`/api/users/${currentUser._id}/reservations/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.accessToken}`,
          },
        })
        .then(() => {
          toast.success("Reservation cancelled");
          dispatch(FetchListings());
          dispatch(FetchReservations());
          dispatch(FetchUsers());
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation._id}
            data={reservation.listingId}
            reservation={reservation}
            actionId={reservation._id}
            onAction={onCancel}
            disabled={deletingId === reservation._id}
            actionLabel="Cancel reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}

export default TripsClient;