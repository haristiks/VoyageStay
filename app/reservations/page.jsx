import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import { getReservations } from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";

async function RservationPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const allReserVations = await getReservations();
  const reservationOnMylistings = allReserVations.filter(
    (item) => item.listingId.userId == currentUser._id
  );

  if (!reservationOnMylistings) {
    return (
      <EmptyState
        title="No rservatiosn found"
        subtitle="looks like you have no reservations on your properties"
      />
    );
  }

  return (
    <ReservationsClient
      reservations={reservationOnMylistings}
      currentUser={currentUser}
    />
  );
}

export default RservationPage;
