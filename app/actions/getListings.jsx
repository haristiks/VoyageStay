import { useDispatch, useSelector } from "react-redux";
import { FetchListings } from "../Redux/AxiosCalls";
import { useEffect } from "react";

export default function getListings() {
  const Listings = useSelector((state) => state.Axios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchListings);
  }, []);

  return Listings.Listings;
}
