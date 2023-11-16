import Container from "./components/Container";
import EmptyState from "./components/EmptyState";

import ListingCard from "./components/listings/ListingCard";
import { getPropertyListings } from "./actions/getPropertyListings";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home({ searchParams }) {
  const {
    roomCount,
    guestCount,
    bathroomCount,
    locationValue,
    startDate,
    endDate,
    category,
  } = searchParams;

  let query = "";

  if (category && !roomCount) {
    query = `?category=${category}`;
  } else if (category && roomCount) {
    query = `?bathroomCount=${bathroomCount}&category=${category}&endDate=${endDate}&guestCount=${guestCount}&locationValue=${locationValue}&roomCount=${roomCount}&startDate=${startDate}`;
  } else if (!category && roomCount) {
    query = `?bathroomCount=${bathroomCount}&endDate=${endDate}&guestCount=${guestCount}&locationValue=${locationValue}&roomCount=${roomCount}&startDate=${startDate}`;
  }

  console.log("data", query);

  const Listings = await getPropertyListings(query);

  const currentUser = await getCurrentUser();

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
