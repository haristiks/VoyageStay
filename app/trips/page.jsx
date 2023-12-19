

import getCurrentUser from "../actions/getCurrentUser";
import { getReservations } from "../actions/getReservations";
import EmptyState from "../components/EmptyState";

import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  const Reservations = await getReservations();


  if (!currentUser) {
    return <EmptyState title="Unothorized" subtitle="Please Login" />;
  }

  const myReservations = Reservations.filter(
    (item) => item.userId == currentUser.id
  );

  if (Reservations.length == 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you havent rserved any trips."
      />
    );
  }

  return (
    <TripsClient reservations={myReservations} currentUser={currentUser} />
    
  );
};

export default TripsPage;
