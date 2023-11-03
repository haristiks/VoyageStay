import { useCallback } from "react";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import axios from "@/lib/axios";

export default async function Home() {
  // const getListings = async () => {
  //   try {
  //     const listings = await axios.get(
  //       "http://localhost:8000/api/properties/listings"
  //     );
  //     console.log(listings);
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  const properties=await axios.get('/api/properties/listings')
  console.log(properties);

  // if (listings.data.length == 0) {
  //   return (
  //     <Container>
  //       <EmptyState showReset />
  //     </Container>
  //   );
  // }

  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        <div>My future listings</div>
      </div>
    </Container>
  );
}
