import getCurrentUser from "@/app/actions/getCurrentUser";
import ListingClient from "./ListingClient";
import { getListingById } from "@/app/actions/getListingById";
import { getReservations } from "@/app/actions/getReservations";

export async function ListingPage({ params }) {
  const { listingId } = params;

  const property = await getListingById(listingId);

  const listingRseserved = await getReservations(listingId);

  const currentUser = await getCurrentUser();

  return <ListingClient listing={property} reservations={listingRseserved} currentUser={currentUser} />;
}

export default ListingPage;
