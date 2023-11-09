"use client";

import axios from "@/lib/axios";
import { useCallback, useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import useLoginModal from "../hooks/useLoginModal";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";


function HeartButton({ listingId }) {
  const [Favorited, setFavorited] = useState([]);


  
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: session } = useSession();
  const currentUser = session?.user;
  

  const hasFavorited = Favorited.includes(listingId);

  const yesFavorited= currentUser?.favoriteIds.includes(listingId)

  const toggleFavorite = useCallback(
    async (e) => {
      e.stopPropagation();
      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavorited) {
          const Fav = Favorited.filter((id) => id !== listingId);
          setFavorited(Fav);
          request = () =>
            axios.patch(
              `/api/users/${currentUser._id}/favorites`,
              { listingId },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${currentUser.accessToken}`,
                },
              }
            );
        } else {
          setFavorited((value) => [...value, listingId]);
          request = () =>
            axios.post(
              `/api/users/${currentUser._id}/favorites`,
              { listingId },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${currentUser.accessToken}`,
                },
              }
            );
        }

        const response = await request();

        router.refresh();
        toast.success(response.data.message);
      } catch (error) {
        toast.error("Something went wrong!");
      }
    },
    [currentUser, hasFavorited, listingId, loginModal, router]
  );

  return (
    <div
      onClick={toggleFavorite}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hasFavorited || yesFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}

export default HeartButton;
