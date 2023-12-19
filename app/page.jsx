import Container from "./components/Container";
import EmptyState from "./components/EmptyState";

import ListingCard from "./components/listings/ListingCard";
import { getPropertyListings } from "./actions/getPropertyListings";
import getCurrentUser from "./actions/getCurrentUser";

import PaginationControls from "./PaginationControls";
import { list } from "postcss";

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

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";

  // mocked, skipped and limited in the real app
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...

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

  const entries = Listings?.slice(start, end);

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
        {entries?.map((listing) => (
          <ListingCard
            key={JSON.parse(JSON.stringify(listing.id))}
            data={JSON.parse(JSON.stringify(listing))}
            currentUser={JSON.parse(JSON.stringify(currentUser))}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <PaginationControls
          hasNextPage={end < Listings?.length}
          hasPrevPage={start > 0}
        />
      </div>
    </Container>
  );
}
