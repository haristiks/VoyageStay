import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import PropertiesClient from "./PropertiesClient";
import { getPropertyListings } from "../actions/getPropertyListings";

async function PropertiesPage() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const AllListing = await getPropertyListings();
  const myListings = AllListing?.filter(
    (listing) => listing.id == currentUser?.id
  );
  if (myListings.length == 0) {
    return (
      <EmptyState
        title="No Properties Found"
        subtitle="Looks like you have no Property listings"
      />
    );
  }

  return <PropertiesClient listings={myListings} currentUser={currentUser} />;
}

export default PropertiesPage;
