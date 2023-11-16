"use client";

import axios from "@/lib/axios";
import { useCallback } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import useLoginModal from "../hooks/useLoginModal";
import toast from "react-hot-toast";
import useFavorite from "../hooks/useFavorites";

function HeartButton({ listingId, currentUser }) {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  // console.log(hasFavorited);

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
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}

export default HeartButton;
