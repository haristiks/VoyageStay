"use client";

import { useSession } from "next-auth/react";
import EmptyState from "../components/EmptyState";
import { useSelector } from "react-redux";
import TripsClient from "./TripsClient";

import { useDispatch } from "react-redux";
import { FetchListings, FetchUsers, FetchReservations } from "../Redux/AxiosCalls";
import { useFirstRender } from "../hooks/useFirstRender";


const TripsPage = () => {
  const { data: session } = useSession();
  const sessionUser = session?.user;
  const ReservState = useSelector((state) => state.Bookings);
  const Alluser = useSelector((state) => state.Users);
  const currentUser = {
    ...Alluser.Users.filter((user) => user._id == sessionUser._id)[0],
    accessToken: sessionUser.accessToken,
  };

  const dispatch = useDispatch();
  useFirstRender(()=>{
    dispatch(FetchListings());
    dispatch(FetchReservations());
    dispatch(FetchUsers());
  })

  if (!currentUser) {
    return <EmptyState title="Unothorized" subtitle="Please Login" />;
  }

  const Reservations = ReservState.Reservations.filter(
    (item) => item.userId == currentUser._id
  );

  if (Reservations.length == 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you havent rserved any trips."
      />
    );
  }

  return <TripsClient reservations={Reservations} currentUser={currentUser} />;
};

export default TripsPage;
