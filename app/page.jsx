import Container from "./components/Container";
import EmptyState from "./components/EmptyState";


import ListingCard from "./components/listings/ListingCard";
import { getPropertyListings } from "./actions/getPropertyListings";
import getCurrentUser from "./actions/getCurrentUser";



export default async function Home() {

  const Listings = await getPropertyListings();

  const currentUser = await getCurrentUser();

  // console.log(Listings.Listings.data);

  if (Listings.length == 0) {
    return (
      <Container>
        <div className="pt-24">
          <EmptyState showReset />
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="pt-24 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {Listings?.map((listing) => (
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
