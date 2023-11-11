import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchListings,
  FetchReservations,
  FetchUsers,
} from "../app/Redux/AxiosCalls";

import ListingCard from "./components/listings/ListingCard";
import { useSession } from "next-auth/react";
import { getPropertyListings } from "./actions/getPropertyListings";
import getCurrentUser from "./actions/getCurrentUser";



export default async function Home() {
  // const Listings = useSelector((state) => state.Axios);
  const Listings = await getPropertyListings();


  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(FetchListings());
  //   dispatch(FetchReservations());
  //   dispatch(FetchUsers());
  // }, []);

  // const { data: session } = useSession();

  // const currentUser = session?.user;



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
