import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { Toast } from "react-hot-toast";
import useLoginModal from "./useLoginModal";

function useFavorite(listingId, currentUser) {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {}, []);
  return <div>useFavorite</div>;
}

export default useFavorite;
