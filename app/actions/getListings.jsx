

import { useDispatch, useSelector } from "react-redux";
import { FetchListings } from "../Redux/AxiosCalls";

export default async function getListings() {
  const Listings = useSelector((state) => state.Axios);
  const dispatch = useDispatch();

    dispatch(FetchListings)


  return Listings;
}
